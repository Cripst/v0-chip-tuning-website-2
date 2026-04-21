"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Eyebrow, Card } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

const testimonials = [
  {
    quote: "Fast turnaround, smooth torque delivery and no surprises. E PERFORMANCE became our main file supplier after just a few jobs.",
    author: "Alex M. — Performance Garage Owner"
  },
  {
    quote: "Their Stage 2 and DSG files are clean, refined and easy to trust on customer cars. Communication is excellent.",
    author: "Daniel R. — Tuning Reseller"
  },
  {
    quote: "Professional support and quick revisions when needed. Great for workshops that want reliable results at scale.",
    author: "Marco S. — ECU Specialist"
  }
]

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <Reveal>
          <div>
            <Eyebrow>Client Feedback</Eyebrow>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.4rem)] leading-[1.03] tracking-[-0.03em] mt-3 mb-4">
              What professional tuners say
            </h2>
            <p className="text-[#9ca3af]">
              A strong file service is not just about power gains. It is about consistency, response time and technical confidence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Card hover={false} className="relative">
            <div className="min-h-[180px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <p className="text-[1.08rem] text-[#e5e7eb] mb-5">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="text-[#9ca3af] text-[0.95rem]">
                    {testimonial.author}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2.5 mt-5.5">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-white/[0.1] bg-white/[0.03] text-white cursor-pointer hover:bg-white/[0.06] transition-colors flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-white/[0.1] bg-white/[0.03] text-white cursor-pointer hover:bg-white/[0.06] transition-colors flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
