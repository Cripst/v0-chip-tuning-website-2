import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Card, IconBox, FeatureList } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export const metadata: Metadata = {
  title: "Services | E PERFORMANCE",
  description: "Explore ECU tuning services including Stage 1, Stage 2, Stage 3, Eco tuning, DSG tuning and custom remaps.",
}

const services = [
  {
    icon: "1",
    title: "Stage 1 Tuning",
    description: "Optimized software for stock vehicles focused on stronger torque, improved throttle response and factory-like drivability.",
    gain: "Typical gain: +20 to +45 HP / +40 to +100 Nm",
    features: [
      "Best for stock hardware",
      "Improved mid-range power",
      "Safe thermal and torque targeting"
    ]
  },
  {
    icon: "2",
    title: "Stage 2 Tuning",
    description: "Calibrations designed for upgraded intakes, intercoolers, downpipes or other bolt-on modifications requiring optimized tables.",
    gain: "Typical gain: +40 to +90 HP / +80 to +160 Nm",
    features: [
      "For modified hardware setups",
      "Sharper boost and fueling control",
      "Stronger acceleration under load"
    ]
  },
  {
    icon: "3",
    title: "Stage 3 Tuning",
    description: "Advanced custom solutions for turbo upgrades, injectors or built engines where platform-specific calibration detail matters most.",
    gain: "Typical gain: depends on setup and hardware package",
    features: [
      "Custom turbo and fueling logic",
      "Detailed revision workflow",
      "For serious performance builds"
    ]
  },
  {
    icon: "leaf",
    title: "Eco Tuning",
    description: "Balanced remaps tailored for fuel efficiency and smoother part-load behavior without compromising daily usability.",
    gain: "Potential result: improved fuel economy in real-world use",
    features: [
      "Optimized low-load efficiency",
      "Smoother drivability",
      "Ideal for fleet and commuting vehicles"
    ]
  },
  {
    icon: "gears",
    title: "DSG / TCU Tuning",
    description: "Transmission tuning for better shift strategy, increased clutch torque limits and faster, more decisive gear changes.",
    gain: "Benefits: shift speed, launch feel, raised torque capacity",
    features: [
      "Optimized shift points",
      "Torque limit adjustments",
      "Improved gearbox behavior"
    ]
  },
  {
    icon: "wrench",
    title: "Custom Tuning",
    description: "Tailored remaps for unique requirements such as launch control, hardcut, pops & bangs, flap control or niche platform requests.",
    gain: "Outcome: custom behavior matched to your setup",
    features: [
      "Flexible development approach",
      "Revision-friendly workflow",
      "Best for specialist workshops"
    ]
  }
]

function getIcon(icon: string) {
  switch (icon) {
    case "1":
      return <span className="font-bold text-xl">1</span>
    case "2":
      return <span className="font-bold text-xl">2</span>
    case "3":
      return <span className="font-bold text-xl">3</span>
    case "leaf":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      )
    case "gears":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    case "wrench":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    default:
      return <span className="font-bold text-xl">{icon}</span>
  }
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="Performance and drivability solutions for modern platforms"
          description="We provide professional ECU file services for workshops and resellers who need predictable delivery times, safe calibrations and flexible custom support."
          breadcrumb="Services"
        />

        <section className="py-[72px]">
          <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 50}>
                <Card className="h-full">
                  <IconBox>{getIcon(service.icon)}</IconBox>
                  <h3 className="text-[1.25rem] font-semibold mb-2.5">{service.title}</h3>
                  <p className="text-[#9ca3af] mb-4">{service.description}</p>
                  <span className="inline-flex mt-4.5 px-3 py-2 rounded-full bg-[rgba(34,197,94,0.12)] text-[#b6f5c7] border border-[rgba(34,197,94,0.18)] text-[0.9rem]">
                    {service.gain}
                  </span>
                  <FeatureList items={service.features.map(text => ({ text }))} />
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
