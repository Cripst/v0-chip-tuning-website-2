"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/upload", label: "File Upload" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(7,11,18,0.72)] border-b border-white/[0.06]">
      <div className="w-[min(calc(100%-2rem),1200px)] mx-auto min-h-[78px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] font-bold tracking-wider">
          <Image 
            src="/logo.svg" 
            alt="E PERFORMANCE logo" 
            width={42} 
            height={42} 
            className="rounded-[14px]"
            priority
          />
          <span className="text-white">E PERFORMANCE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[0.96rem] text-gray-300 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#ef4444] after:to-[#38bdf8] after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100 ${
                pathname === link.href ? "after:scale-x-100" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden bg-transparent border-none text-white text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed top-[78px] right-0 w-[min(320px,100%)] h-[calc(100vh-78px)] bg-[rgba(3,7,14,0.98)] border-l border-white/[0.06] flex flex-col p-6 gap-4 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-gray-300 hover:text-white transition-colors ${
              pathname === link.href ? "text-white" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
