import Image from "next/image"
import { Gauge, Upload, Mail, Zap } from "lucide-react"
import { Eyebrow, Button, StatCard } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-78px)] grid items-center py-[72px] pb-10">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-7 items-center">
        <Reveal>
          <div>
            <Eyebrow icon={<Gauge size={16} />}>Premium ECU File Service</Eyebrow>
            
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.7rem,7vw,5.8rem)] leading-[1.03] tracking-[-0.03em] max-w-[12ch] mt-4 mb-4">
              Professional ECU Tuning Files{" "}
              <span className="text-gradient">Fast, Reliable, Powerful</span>
            </h1>
            
            <p className="text-[1.08rem] max-w-[62ch] text-[#d1d5db]">
              High-quality remaps for tuning garages, workshops and automotive professionals. From daily-driver Stage 1 solutions to advanced custom performance files, E PERFORMANCE delivers precision-built calibrations with rapid turnaround.
            </p>
            
            <div className="flex flex-wrap gap-3.5 mt-6">
              <Button href="/upload" variant="primary" icon={<Upload size={18} />}>
                Order File
              </Button>
              <Button href="/contact" variant="secondary" icon={<Mail size={18} />}>
                Contact Us
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-7">
              <StatCard value="10+ Years" label="ECU calibration experience" />
              <StatCard value="25,000+" label="Files delivered worldwide" />
              <StatCard value="24/7" label="Fast support for resellers" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            {/* Glow effects */}
            <span className="absolute w-[220px] h-[220px] rounded-full glow-red opacity-45 left-5 top-2.5" />
            <span className="absolute w-[220px] h-[220px] rounded-full glow-blue opacity-45 right-0 bottom-10" />
            
            {/* Main card */}
            <div className="absolute inset-[40px_0_0_60px] lg:inset-[40px_0_0_60px] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#0a1220] max-lg:inset-[40px_10px_40px_10px]">
              <Image
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
                alt="Performance car in dramatic lighting"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Small card A */}
            <div className="hidden lg:block absolute w-[220px] h-[180px] right-[18px] top-0 rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#0a1220]">
              <Image
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
                alt="Automotive interior performance dashboard"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Small card B */}
            <div className="hidden lg:block absolute w-[220px] h-[180px] left-0 bottom-5 rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#0a1220]">
              <Image
                src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80"
                alt="Car under workshop lights"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute right-10 bottom-8 px-4.5 py-3.5 rounded-[18px] bg-[rgba(2,6,23,0.72)] border border-white/[0.08] backdrop-blur-[14px] flex items-center gap-2.5">
              <Zap size={18} className="text-[#38bdf8]" />
              <span className="text-sm">Stage 1 &bull; Stage 2 &bull; DPF/EGR/AdBlue solutions</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
