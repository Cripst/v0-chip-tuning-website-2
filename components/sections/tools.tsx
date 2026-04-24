import { Eyebrow } from "@/components/ui-elements"
import { Reveal } from "@/components/reveal-animation"

const tools = ["WinOLS", "KESS", "KTAG", "CMD Flash", "Autotuner"]

export function ToolsSection() {
  return (
    <section className="py-[72px]">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
        <Reveal>
          <div className="max-w-[720px] mx-auto mb-12 text-center">
            <Eyebrow>Supported Tools</Eyebrow>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] leading-[1.03] tracking-[-0.03em] mt-4 mb-4">
              Compatible with the platforms tuners use daily
            </h2>
            <p className="text-[#9ca3af]">
              Designed to fit modern tuning workflows and workshop operations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-4.5 py-4.5 text-center rounded-2xl bg-white/[0.03] border border-white/[0.07] text-[#dbeafe] font-bold"
              >
                {tool}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
