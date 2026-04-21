"use client"

import { useState, useRef } from "react"
import { Send } from "lucide-react"
import { Card, Button } from "@/components/ui-elements"

interface FormData {
  name: string
  email: string
  make: string
  model: string
  engine: string
  year: string
  serviceType: string
  notes: string
}

interface FormErrors {
  name?: string
  email?: string
  make?: string
  model?: string
  engine?: string
  year?: string
  serviceType?: string
  file?: string
}

const serviceOptions = [
  "Stage 1",
  "Stage 2",
  "Stage 3",
  "Eco Tuning",
  "DSG / TCU Tuning",
  "Custom Tuning"
]

export function UploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    make: "",
    model: "",
    engine: "",
    year: "",
    serviceType: "",
    notes: ""
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) newErrors.name = "This field is required."
    if (!formData.email.trim()) {
      newErrors.email = "This field is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    if (!formData.make.trim()) newErrors.make = "This field is required."
    if (!formData.model.trim()) newErrors.model = "This field is required."
    if (!formData.engine.trim()) newErrors.engine = "This field is required."
    if (!formData.year.trim()) newErrors.year = "This field is required."
    if (!formData.serviceType) newErrors.serviceType = "This field is required."
    if (!selectedFile) newErrors.file = "This field is required."
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus("loading")
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus("success")
      setStatusMessage("Your order has been submitted successfully! We will process your file and contact you shortly.")
      setFormData({
        name: "",
        email: "",
        make: "",
        model: "",
        engine: "",
        year: "",
        serviceType: "",
        notes: ""
      })
      setSelectedFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch {
      setStatus("error")
      setStatusMessage("Something went wrong. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    if (errors.file) {
      setErrors(prev => ({ ...prev, file: undefined }))
    }
  }

  const inputClassName = (error?: string) => 
    `w-full px-4 py-[15px] rounded-2xl border bg-white/[0.03] text-white outline-none transition-all duration-200 focus:border-[rgba(56,189,248,0.4)] focus:shadow-[0_0_0_4px_rgba(56,189,248,0.08)] ${
      error ? "border-[rgba(239,68,68,0.55)]" : "border-white/[0.08]"
    }`

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
              className={inputClassName(errors.name)}
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
              className={inputClassName(errors.email)}
            />
            {errors.email && <span className="text-[#fca5a5] text-[0.9rem]">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="make" className="font-semibold">Make</label>
            <input
              id="make"
              name="make"
              type="text"
              value={formData.make}
              onChange={handleChange}
              className={inputClassName(errors.make)}
            />
            {errors.make && <span className="text-[#fca5a5] text-[0.9rem]">{errors.make}</span>}
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="model" className="font-semibold">Model</label>
            <input
              id="model"
              name="model"
              type="text"
              value={formData.model}
              onChange={handleChange}
              className={inputClassName(errors.model)}
            />
            {errors.model && <span className="text-[#fca5a5] text-[0.9rem]">{errors.model}</span>}
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="engine" className="font-semibold">Engine</label>
            <input
              id="engine"
              name="engine"
              type="text"
              value={formData.engine}
              onChange={handleChange}
              className={inputClassName(errors.engine)}
            />
            {errors.engine && <span className="text-[#fca5a5] text-[0.9rem]">{errors.engine}</span>}
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="year" className="font-semibold">Year</label>
            <input
              id="year"
              name="year"
              type="number"
              min="1990"
              max="2030"
              value={formData.year}
              onChange={handleChange}
              className={inputClassName(errors.year)}
            />
            {errors.year && <span className="text-[#fca5a5] text-[0.9rem]">{errors.year}</span>}
          </div>

          <div className="flex flex-col gap-2.5 md:col-span-2">
            <label htmlFor="serviceType" className="font-semibold">Requested Service</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={inputClassName(errors.serviceType)}
            >
              <option value="">Choose a service</option>
              {serviceOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.serviceType && <span className="text-[#fca5a5] text-[0.9rem]">{errors.serviceType}</span>}
          </div>

          <div className="flex flex-col gap-2.5 md:col-span-2">
            <label htmlFor="file" className="font-semibold">Original File</label>
            <input
              ref={fileInputRef}
              id="file"
              name="file"
              type="file"
              accept=".bin,.ori,.zip,.rar,.txt"
              onChange={handleFileChange}
              className={inputClassName(errors.file)}
            />
            {errors.file && <span className="text-[#fca5a5] text-[0.9rem]">{errors.file}</span>}
          </div>

          <div className="flex flex-col gap-2.5 md:col-span-2">
            <label htmlFor="notes" className="font-semibold">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Hardware mods, DPF/EGR requests, preferred drivability profile, etc."
              rows={4}
              className={`${inputClassName()} resize-y min-h-[100px]`}
            />
          </div>
        </div>

        <div className="mt-5">
          <Button 
            type="submit" 
            variant="primary" 
            icon={<Send size={18} />}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Submitting..." : "Submit Order"}
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
