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
  {
    name: "ECU Remap",
    items: [
      { label: "Stage Eco", price: "40€" },
      { label: "Stage 1", price: "50€" },
      { label: "Stage 2", price: "90€" },
      { label: "Flex Fuel", price: "120€" }
    ],
  },
  {
    name: "Solutions",
    items: [
      { label: "EGR", price: "30€" },
      { label: "DPF", price: "30€" },
      { label: "AdBlue", price: "40€" },
      { label: "Lambda", price: "30€" }
    ],
  },
  {
    name: "Extra Options",
    items: [
      { label: "Hardcut", price: "30€" },
      { label: "Pop & Bang", price: "30€" },
      { label: "Vmax", price: "20€" },
      { label: "Flaps", price: "20€" },
      { label: "Start & Stop", price: "30€" }
    ],
  }
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Requested Price List"
          description="ECU remap, add-on solutions and extra tuning options based on your requested package prices."
          breadcrumb="Pricing"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
            <Reveal>
              <h2 className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-wide mb-8">
                REQUESTED PRICE LIST
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingCategories.map((category, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="h-full">
                    <h3 className="text-[1.7rem] font-bold uppercase tracking-wide">{category.name}</h3>
                    <ul className="mt-5 space-y-2.5 text-[1.15rem] leading-[1.35]">
                      {category.items.map((item) => (
                        <li key={item.label} className="font-semibold">
                          * {item.label} - {item.price}
                        </li>
                      ))}
                    </ul>
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
            <Reveal delay={400}>
              <Card className="mt-7.5 text-center border border-rose-500 bg-[rgba(248,113,113,0.05)]" hover={false}>
                <h3 className="text-[1.25rem] font-semibold mb-2.5">Special package price</h3>
                <p className="text-[#f8d8d8] text-lg font-semibold">
                  Stage 1 + DPF + EGR + AdBlue = Only 100€
                </p>
                <p className="text-[#9ca3af] mt-4">Ask us about this bundled tuning package for workshop clients.</p>
              </Card>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
