import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Card, Button } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "Pricing | E PERFORMANCE",
  description: "Requested price list for ECU remap, tuning solutions and extra options.",
}

const pricingCategories = [
  { name: "Stage Eco", category: "ECU Remap", price: "40€", description: "Economy-focused calibration with balanced drivability.", features: ["Daily-use friendly setup", "Smooth power delivery", "Reliable stock-hardware tune"] },
  { name: "Stage 1", category: "ECU Remap", price: "50€", description: "Safe performance gains for stock vehicles.", features: ["Stock hardware support", "Fast turnaround", "Revision support"] },
  { name: "Stage 2", category: "ECU Remap", price: "90€", description: "Higher performance calibration for modified setups.", features: ["Upgraded hardware support", "Refined boost and torque mapping", "Priority communication"] },
  { name: "Flex Fuel", category: "ECU Remap", price: "120€", description: "Flexible calibration for mixed fuel usage.", features: ["E85/flex strategy support", "Safe switching behavior", "Optimized fueling logic"] },
  { name: "EGR", category: "Solutions", price: "30€", description: "EGR system-off calibration solution.", features: ["Diagnostic-safe handling", "Clean integration", "Stable operation mapping"] },
  { name: "DPF", category: "Solutions", price: "30€", description: "DPF-off solution for supported applications.", features: ["Regeneration logic handling", "Fault strategy calibration", "Reliable file delivery"] },
  { name: "AdBlue", category: "Solutions", price: "40€", description: "AdBlue/SCR delete solution.", features: ["Warning management", "System-off configuration", "Consistent calibration quality"] },
  { name: "Lambda", category: "Solutions", price: "30€", description: "Lambda-related adjustment and control solution.", features: ["Clean map implementation", "Stable AFR strategy", "Workshop-ready delivery"] },
  { name: "Hardcut", category: "Extra Options", price: "30€", description: "Hardcut limiter setup option.", features: ["Configurable behavior", "Stable execution", "Integrated with base file"] },
  { name: "Pop & Bang", category: "Extra Options", price: "30€", description: "Pops and bangs exhaust behavior option.", features: ["Customizable intensity", "Driveability-aware setup", "Safe map integration"] },
  { name: "Vmax", category: "Extra Options", price: "20€", description: "Top-speed limiter modification option.", features: ["Limiter adjustment", "Clean calibration delivery", "Reliable implementation"] },
  { name: "Flaps", category: "Extra Options", price: "20€", description: "Exhaust flap behavior option.", features: ["Flap control adjustment", "OEM-style integration", "Consistent operation"] },
  { name: "Start & Stop", category: "Extra Options", price: "30€", description: "Start/stop system option adjustment.", features: ["Refined startup behavior", "Comfort-focused logic", "Workshop-ready configuration"] },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Requested Price List"
          description="Requested prices for ECU remap, solutions and extra options."
          breadcrumb="Pricing"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
            <Reveal>
              <h2 className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-wide mb-8">
                REQUESTED PRICE LIST
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingCategories.map((item, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="h-full">
                    <div className="inline-flex px-3 py-1 rounded-full border border-[rgba(56,189,248,0.25)] bg-[rgba(56,189,248,0.12)] text-[0.78rem] uppercase tracking-wide text-[#bcecff] font-semibold mb-4">
                      {item.category}
                    </div>
                    <h3 className="text-[1.6rem] font-bold tracking-wide">{item.name}</h3>
                    <div className="flex items-baseline gap-2 mt-2.5 mb-4.5">
                      <strong className="text-[2.3rem] leading-none font-[family-name:var(--font-space-grotesk)]">{item.price}</strong>
                      <span className="text-[#9ca3af]">/ file</span>
                    </div>
                    <p className="text-[#9ca3af] leading-relaxed">{item.description}</p>
                    <ul className="mt-5 space-y-2.5 text-[1.02rem]">
                      {item.features.map((feature) => (
                        <li key={feature} className="font-medium text-[#dbe8f8]">
                          * {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <Card className="mt-7.5 text-center border border-rose-500 bg-[rgba(248,113,113,0.05)]" hover={false}>
                <h3 className="text-[1.6rem] font-bold mb-2.5 uppercase tracking-wide">SPECIAL PACKAGE PRICE:</h3>
                <p className="text-[#f8d8d8] text-[clamp(1.5rem,3.2vw,2.1rem)] font-bold leading-tight">
                  Stage 1 + DPF + EGR + AdBlue = Only 100€
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="secondary">Contact Us</Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
