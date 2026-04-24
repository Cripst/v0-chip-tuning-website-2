import { NextResponse } from "next/server"
import { getMailConfig, resend } from "@/lib/resend"

export const runtime = "nodejs"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export async function POST(req: Request) {
  const config = getMailConfig()

  if (!config || !resend) {
    return NextResponse.json(
      { error: "Mail service is not configured." },
      { status: 500 }
    )
  }

  let body: ContactPayload

  try {
    body = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const subject = body.subject?.trim()
  const message = body.message?.trim()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  try {
    const { error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
      text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }
}
