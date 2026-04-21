import { Metadata } from "next"
import { Upload, Code, Download } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Card, IconBox, FeatureList, Eyebrow, Button } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "How It Works | E PERFORMANCE",
  description: "Learn how the ECU file service workflow works: upload original file, receive expert modifications and download your tuned file.",
}

const steps = [
  {
    number: "1",
    icon: <Upload size={22} />,
    title: "Upload Original File",
    description: "Submit your stock read along with vehicle details, hardware notes and any special requests through the file order form."
  },
  {
    number: "2",
    icon: <Code size={22} />,
    title: "Engineers Prepare the Calibration",
    description: "Our calibrators analyze the ECU file, apply the requested tuning logic and verify the structure before delivery."
  },
  {
    number: "3",
    icon: <Download size={22} />,
    title: "Download Tuned File",
    description: "Receive your modified file, flash it back to the vehicle and continue with any revisions or support questions if needed."
  }
]

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Workflow"
          title="Three simple steps from stock file to tuned delivery"
          description="A streamlined process built for busy workshops and tuning resellers. Fast, transparent and easy to use."
          breadcrumb="How It Works"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
            {/* Steps with connecting line */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Connecting line - hidden on mobile */}
              <div className="hidden md:block absolute top-[84px] left-[16.5%] w-[67%] h-0.5 bg-gradient-to-r from-[rgba(239,68,68,0.25)] to-[rgba(56,189,248,0.4)]" />
              
              {steps.map((step, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="text-center relative z-10">
                    <div className="w-[74px] h-[74px] grid place-items-center mx-auto mb-4.5 rounded-full font-[family-name:var(--font-space-grotesk)] text-[1.3rem] bg-gradient-to-br from-[rgba(239,68,68,0.18)] to-[rgba(56,189,248,0.18)] border border-white/[0.08]">
                      {step.number}
                    </div>
                    <IconBox>{step.icon}</IconBox>
                    <h3 className="text-[1.25rem] font-semibold mb-2.5">{step.title}</h3>
                    <p className="text-[#9ca3af] m-0">{step.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <Reveal>
              <Card hover={false}>
                <h3 className="text-[1.25rem] font-semibold mb-4">Why workshops like this workflow</h3>
                <FeatureList
                  items={[
                    { text: "Clear request structure with vehicle and hardware details" },
                    { text: "Fast communication for urgent customer jobs" },
                    { text: "Practical revisions when a setup requires refinement" },
                    { text: "Consistent delivery experience for resellers" }
                  ]}
                />
              </Card>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <Eyebrow>Practical Process</Eyebrow>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.2rem)] leading-[1.03] tracking-[-0.03em] mt-3 mb-4">
                  Designed to keep your bay moving
                </h2>
                <p className="text-[#9ca3af] mb-5">
                  Whether you are tuning one customer car per day or running a reseller network, the process is focused on speed and clarity. No unnecessary friction. Just a clean submit-review-deliver workflow.
                </p>
                <div className="flex flex-wrap gap-3.5">
                  <Button href="/upload" variant="primary">Start an Order</Button>
                  <Button href="/contact" variant="secondary">Talk to Us</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
