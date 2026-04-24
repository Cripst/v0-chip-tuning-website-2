"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Card, Button } from "@/components/ui-elements"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "This field is required."
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "This field is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "This field is required."
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "This field is required."
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || "Failed to send message.")
      }

      setStatus("success")
      setStatusMessage("Thank you! Your message has been sent successfully. We will get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("error")
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <Card hover={false}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
          <div className="flex flex-col gap-2.5">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-[15px] rounded-2xl border bg-white/[0.03] text-white outline-none transition-all duration-200 focus:border-[rgba(56,189,248,0.4)] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.08)] ${
                errors.name ? "border-[rgba(239,68,68,0.55)]" : "border-white/[0.08]"
              }`}
            />
            {errors.name && <span className="text-[#fca5a5] text-[0.9rem]">{errors.name}</span>}
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-[15px] rounded-2xl border bg-white/[0.03] text-white outline-none transition-all duration-200 focus:border-[rgba(56,189,248,0.4)] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.08)] ${
                errors.email ? "border-[rgba(239,68,68,0.55)]" : "border-white/[0.08]"
              }`}
            />
            {errors.email && <span className="text-[#fca5a5] text-[0.9rem]">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2.5 md:col-span-2">
            <label htmlFor="subject" className="font-semibold">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-[15px] rounded-2xl border bg-white/[0.03] text-white outline-none transition-all duration-200 focus:border-[rgba(56,189,248,0.4)] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.08)] ${
                errors.subject ? "border-[rgba(239,68,68,0.55)]" : "border-white/[0.08]"
              }`}
            />
            {errors.subject && <span className="text-[#fca5a5] text-[0.9rem]">{errors.subject}</span>}
          </div>

          <div className="flex flex-col gap-2.5 md:col-span-2">
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-[15px] rounded-2xl border bg-white/[0.03] text-white outline-none transition-all duration-200 resize-y min-h-[140px] focus:border-[rgba(56,189,248,0.4)] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.08)] ${
                errors.message ? "border-[rgba(239,68,68,0.55)]" : "border-white/[0.08]"
              }`}
            />
            {errors.message && <span className="text-[#fca5a5] text-[0.9rem]">{errors.message}</span>}
          </div>
        </div>

        <div className="mt-5">
          <Button 
            type="submit" 
            variant="primary" 
            icon={<Send size={18} />}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {status === "success" && (
          <div className="mt-4.5 p-3.5 rounded-2xl bg-[rgba(34,197,94,0.12)] text-[#bbf7d0] border border-[rgba(34,197,94,0.22)]">
            {statusMessage}
          </div>
        )}

        {status === "error" && (
          <div className="mt-4.5 p-3.5 rounded-2xl bg-[rgba(239,68,68,0.12)] text-[#fecaca] border border-[rgba(239,68,68,0.24)]">
            {statusMessage}
          </div>
        )}
      </form>
    </Card>
  )
}
