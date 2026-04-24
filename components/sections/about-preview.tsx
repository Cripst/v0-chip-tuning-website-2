import Image from "next/image"
import { Eyebrow, Card, FeatureList } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <Reveal>
          <div>
            <Eyebrow>About E PERFORMANCE</Eyebrow>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.4rem)] leading-[1.03] tracking-[-0.03em] mt-3 mb-4">
              A trusted file partner for performance-focused workshops
            </h2>
            <p className="text-[#9ca3af]">
              E PERFORMANCE is a premium ECU remapping file service built for tuning garages, resellers and automotive professionals who need dependable turnaround and serious technical quality. We combine dyno-backed calibration logic, safe limit management and practical support to help your business scale.
            </p>
            <FeatureList
              items={[
                { text: "Fast turnaround for urgent workshop jobs" },
                { text: "Support for petrol, diesel, turbo and DSG platforms" },
                { text: "Focus on safe AFR, boost, torque and thermal management" }
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Card hover={false}>
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Modern sports car front view"
              width={1200}
              height={600}
              className="rounded-[18px] mb-4.5 w-full h-auto"
            />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <strong className="block text-[1.3rem]">98%</strong>
                <span className="text-[#9ca3af]">repeat reseller rate</span>
              </div>
              <div>
                <strong className="block text-[1.3rem]">5-30 min</strong>
                <span className="text-[#9ca3af]">average delivery</span>
              </div>
              <div>
                <strong className="block text-[1.3rem]">Global</strong>
                <span className="text-[#9ca3af]">partner network</span>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
