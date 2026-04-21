import { FileUp } from "lucide-react"
import { Eyebrow, Button } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export function CTASection() {
  return (
    <section className="py-[72px]">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
        <Reveal>
          <div className="p-[34px] rounded-[28px] bg-gradient-to-br from-[rgba(239,68,68,0.14)] to-[rgba(56,189,248,0.14)] border border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <Eyebrow>Ready to scale your tuning workflow?</Eyebrow>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,4vw,3rem)] leading-[1.03] tracking-[-0.03em] mt-3 mb-4">
                  Upload your file and get a professional calibration prepared for your next customer job.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3.5 lg:justify-end">
                <Button href="/upload" variant="primary" icon={<FileUp size={18} />}>
                  Upload File
                </Button>
                <Button href="/pricing" variant="secondary">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
