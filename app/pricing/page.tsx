import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Card, FeatureList, Button } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "Pricing | E PERFORMANCE",
  description: "Simple ECU file service pricing for Stage 1, Stage 2 and custom tuning. Contact us for reseller and bulk pricing.",
}

const pricingPlans = [
  {
    name: "Stage 1",
    price: "€70",
    suffix: "/ file",
    description: "Best for stock vehicles requiring a safe performance increase and smooth drivability.",
    features: [
      "Stock hardware support",
      "Fast turnaround",
      "Basic revision support"
    ],
    href: "/upload",
    cta: "Order Stage 1",
    popular: false
  },
  {
    name: "Stage 2",
    price: "€110",
    suffix: "/ file",
    description: "Ideal for upgraded hardware setups requiring more detailed boost, torque and fueling optimization.",
    features: [
      "Modified hardware support",
      "Refined calibration logic",
      "Priority communication"
    ],
    href: "/upload",
    cta: "Order Stage 2",
    popular: true
  },
  {
    name: "Custom",
    price: "From €150",
    suffix: "",
    description: "For Stage 3, DSG tuning, special functions, built engines and platform-specific custom development.",
    features: [
      "Custom setup review",
      "Advanced revision workflow",
      "Special requests supported"
    ],
    href: "/contact",
    cta: "Request Quote",
    popular: false
  }
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Clear packages for professional tuners"
          description="Use these starter prices for presentation purposes. In production, connect them to your own pricing logic or CRM."
          breadcrumb="Pricing"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card 
                    className={`relative overflow-hidden h-full ${
                      plan.popular ? "border-[rgba(56,189,248,0.35)] -translate-y-1.5" : ""
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute right-4.5 top-4.5 px-3 py-1.5 rounded-full bg-[rgba(56,189,248,0.14)] border border-[rgba(56,189,248,0.25)] text-[#bcecff] text-[0.8rem] font-bold">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-[1.25rem] font-semibold">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mt-2.5 mb-4.5">
                      <strong className="text-[3rem] font-[family-name:var(--font-space-grotesk)]">{plan.price}</strong>
                      {plan.suffix && <span className="text-[#9ca3af]">{plan.suffix}</span>}
                    </div>
                    <p className="text-[#9ca3af]">{plan.description}</p>
                    <FeatureList items={plan.features.map(text => ({ text }))} />
                    <div className="mt-5">
                      <Button href={plan.href} variant="primary" className="w-full">
                        {plan.cta}
                      </Button>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <Card className="mt-7.5 text-center" hover={false}>
                <h3 className="text-[1.25rem] font-semibold mb-2.5">Bulk and reseller pricing available</h3>
                <p className="text-[#9ca3af] mb-5">Contact us for workshop packages, high-volume pricing and white-label reseller collaboration.</p>
                <div className="flex justify-center">
                  <Button href="/contact" variant="secondary">Contact for Reseller Pricing</Button>
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
