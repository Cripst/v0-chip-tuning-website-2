import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-7 bg-[rgba(3,7,14,0.58)]">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-5">
          <div>
            <Link href="/" className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] font-bold tracking-wider">
              <Image 
                src="/logo.svg" 
                alt="E PERFORMANCE logo" 
                width={42} 
                height={42} 
                className="rounded-[14px]"
              />
              <span className="text-white">E PERFORMANCE</span>
            </Link>
            <p className="text-[#9ca3af] mt-3.5 max-w-[420px]">
              Precision ECU tuning files for garages, resellers and automotive professionals who want premium support and dependable performance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3.5 text-white">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" className="text-[#9ca3af] hover:text-white transition-colors">Services</Link>
              <Link href="/how-it-works" className="text-[#9ca3af] hover:text-white transition-colors">How It Works</Link>
              <Link href="/pricing" className="text-[#9ca3af] hover:text-white transition-colors">Pricing</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3.5 text-white">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-[#9ca3af] hover:text-white transition-colors">About Us</Link>
              <Link href="/upload" className="text-[#9ca3af] hover:text-white transition-colors">File Upload</Link>
              <Link href="/contact" className="text-[#9ca3af] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3.5 text-white">Follow</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-[42px] h-[42px] grid place-items-center rounded-full bg-white/[0.04] border border-white/[0.06] hover:-translate-y-0.5 transition-transform"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-[42px] h-[42px] grid place-items-center rounded-full bg-white/[0.04] border border-white/[0.06] hover:-translate-y-0.5 transition-transform"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="WhatsApp"
                className="w-[42px] h-[42px] grid place-items-center rounded-full bg-white/[0.04] border border-white/[0.06] hover:-translate-y-0.5 transition-transform"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4.5 border-t border-white/[0.06] flex flex-wrap justify-between gap-3 text-[#9ca3af]">
          <span>&copy; {currentYear} E PERFORMANCE. All rights reserved.</span>
          <span>Tune with Confidence. Deliver with Power.</span>
        </div>
      </div>
    </footer>
  )
}
