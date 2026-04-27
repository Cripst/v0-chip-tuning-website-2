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
    name: "ECU REMAP:",
    items: [
      { label: "Stage Eco", price: "40€" },
      { label: "Stage 1", price: "50€" },
      { label: "Stage 2", price: "90€" },
      { label: "Flex Fuel", price: "120€" }
    ],
  },
  {
    name: "SOLUTIONS:",
    items: [
      { label: "EGR", price: "30€" },
      { label: "DPF", price: "30€" },
      { label: "AdBlue", price: "40€" },
      { label: "Lambda", price: "30€" }
    ],
  },
  {
    name: "EXTRA OPTIONS:",
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingCategories.map((category, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="h-full">
                    <h3 className="text-[1.7rem] font-bold tracking-wide">{category.name}</h3>
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
