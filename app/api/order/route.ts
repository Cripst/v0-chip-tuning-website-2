import { NextResponse } from "next/server"
import { getMailConfig, resend } from "@/lib/resend"

export const runtime = "nodejs"

const MAX_FILE_SIZE = 15 * 1024 * 1024

export async function POST(req: Request) {
  const config = getMailConfig()

  if (!config || !resend) {
    return NextResponse.json(
      { error: "Mail service is not configured." },
      { status: 500 }
    )
  }

  try {
    const formData = await req.formData()

    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const make = String(formData.get("make") || "").trim()
    const model = String(formData.get("model") || "").trim()
    const engine = String(formData.get("engine") || "").trim()
    const year = String(formData.get("year") || "").trim()
    const serviceType = String(formData.get("serviceType") || "").trim()
    const notes = String(formData.get("notes") || "").trim()
    const file = formData.get("file") as File | null

    if (!name || !email || !make || !model || !engine || !year || !serviceType || !file) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File is too large. Maximum size is 15MB." },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const content = Buffer.from(bytes).toString("base64")

    const { error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      replyTo: email,
      subject: `[Order] ${make} ${model} - ${serviceType}`,
      html: `
        <h2>New Tuning Order</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Vehicle:</strong> ${make} ${model}</p>
        <p><strong>Engine:</strong> ${engine}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Notes:</strong> ${notes ? notes.replace(/\n/g, "<br/>") : "-"}</p>
        <p><strong>Attached file:</strong> ${file.name}</p>
      `,
      text: `New Tuning Order\n\nName: ${name}\nEmail: ${email}\nVehicle: ${make} ${model}\nEngine: ${engine}\nYear: ${year}\nService: ${serviceType}\nNotes: ${notes || "-"}\nFile: ${file.name}`,
      attachments: [
        {
          filename: file.name,
          content
        }
      ]
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to process order." }, { status: 500 })
  }
}
