import { Metadata } from "next"
import { Shield, TrendingUp, Handshake, Headphones } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Card, Eyebrow, FeatureList } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "About Us | E PERFORMANCE",
  description: "Learn about the team, story and philosophy behind E PERFORMANCE and its focus on safe, reliable ECU remapping solutions.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="A modern file service built around tuning professionals"
          description="E PERFORMANCE was imagined as a premium partner for workshops and resellers that need more than just generic files. We focus on safety, repeatability and practical support."
          breadcrumb="About"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <Reveal>
              <div>
                <Eyebrow>Our Story</Eyebrow>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.2rem)] leading-[1.03] tracking-[-0.03em] mt-3 mb-4">
                  From workshop demand to trusted calibration partner
                </h2>
                <p className="text-[#9ca3af] mb-4">
                  What started as a small specialist tuning workflow evolved into a structured ECU file service supporting garages, tuners and resellers across multiple markets. The goal has always been the same: deliver usable performance, strong communication and dependable quality under real workshop pressure.
                </p>
                <p className="text-[#9ca3af]">
                  We prioritize safe power gains, proper torque handling, realistic calibration targets and responsive follow-up. That means better outcomes for your customers and less friction for your team.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <Card hover={false}>
                <h3 className="text-[1.25rem] font-semibold mb-4">What we stand for</h3>
                <ul className="list-none p-0 space-y-2.5">
                  <li className="flex gap-2.5 text-[#d1d5db]">
                    <Shield size={18} className="text-[#38bdf8] mt-1 shrink-0" />
                    <span>Safety-first tuning philosophy</span>
                  </li>
                  <li className="flex gap-2.5 text-[#d1d5db]">
                    <TrendingUp size={18} className="text-[#38bdf8] mt-1 shrink-0" />
                    <span>Performance based on smart calibration, not hype</span>
                  </li>
                  <li className="flex gap-2.5 text-[#d1d5db]">
                    <Handshake size={18} className="text-[#38bdf8] mt-1 shrink-0" />
                    <span>Long-term partner mindset for workshops and resellers</span>
                  </li>
                  <li className="flex gap-2.5 text-[#d1d5db]">
                    <Headphones size={18} className="text-[#38bdf8] mt-1 shrink-0" />
                    <span>Support that respects your customer deadlines</span>
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
