import { Gauge, FilterX, Flame } from "lucide-react"
import { Eyebrow, Card, IconBox } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

const benefits = [
  {
    icon: <Gauge size={22} />,
    title: "Stage 1 / 2 / 3 Tuning",
    description: "Performance files for stock, bolt-on and advanced hardware setups with smooth power delivery and optimized torque curves."
  },
  {
    icon: <FilterX size={22} />,
    title: "DPF / EGR / AdBlue Solutions",
    description: "Specialized export solutions handled carefully with professional file preparation and structured request validation."
  },
  {
    icon: <Flame size={22} />,
    title: "Pops & Bangs / Hardcut",
    description: "Custom driving experience options for supported setups, tuned for character while preserving clean control strategies."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-[72px]">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
        <Reveal>
          <div className="max-w-[720px] mx-auto mb-12 text-center">
            <Eyebrow>Core Benefits</Eyebrow>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.03] tracking-[-0.03em] mt-4 mb-4">
              Built for tuners who need speed, precision and consistency
            </h2>
            <p className="text-[#9ca3af]">
              Every file is reviewed by experienced calibrators and designed to balance performance, safety and drivability.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 100}>
              <Card>
                <IconBox>{benefit.icon}</IconBox>
                <h3 className="text-[1.25rem] font-semibold mb-2.5">{benefit.title}</h3>
                <p className="text-[#9ca3af] m-0">{benefit.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
