"use client"

import Link from "next/link"
import { ReactNode } from "react"

interface EyebrowProps {
  children: ReactNode
  icon?: ReactNode
}

export function Eyebrow({ children, icon }: EyebrowProps) {
  return (
    <span className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.08)] rounded-full text-[#c9effe] text-[0.82rem] tracking-[0.12em] uppercase">
      {icon}
      {children}
    </span>
  )
}

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary"
  icon?: ReactNode
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
  className?: string
}

export function Button({ 
  children, 
  href, 
  variant = "primary", 
  icon,
  type = "button",
  disabled = false,
  onClick,
  className = ""
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 min-h-[52px] px-[22px] rounded-full border border-transparent cursor-pointer transition-all duration-300 font-bold"
  
  const variantStyles = variant === "primary" 
    ? "bg-gradient-to-br from-[#ef4444] to-[#fb7185] text-white shadow-[0_12px_30px_rgba(239,68,68,0.28)] hover:-translate-y-0.5 hover:brightness-105"
    : "bg-white/[0.04] border-white/[0.12] text-white hover:bg-white/[0.08] hover:-translate-y-0.5"

  const combinedStyles = `${baseStyles} ${variantStyles} ${className} ${disabled ? "opacity-75 pointer-events-none" : ""}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon}
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={combinedStyles} disabled={disabled} onClick={onClick}>
      {icon}
      {children}
    </button>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <article className={`bg-[rgba(16,24,40,0.82)] border border-white/[0.08] rounded-[22px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-7 ${hover ? "hover:-translate-y-1.5 transition-transform duration-300" : ""} ${className}`}>
      {children}
    </article>
  )
}

interface IconBoxProps {
  children: ReactNode
}

export function IconBox({ children }: IconBoxProps) {
  return (
    <div className="w-[54px] h-[54px] grid place-items-center rounded-[18px] bg-gradient-to-br from-[rgba(239,68,68,0.14)] to-[rgba(56,189,248,0.14)] border border-white/[0.08] mb-4.5 text-xl">
      {children}
    </div>
  )
}

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  breadcrumb: string
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="w-[min(calc(100%-2rem),1200px)] mx-auto py-[84px] pb-[30px] text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.03em] mb-3.5 mt-4">
        {title}
      </h1>
      <p className="max-w-[820px] mx-auto text-[#d1d5db]">{description}</p>
      <div className="text-[#9ca3af] text-[0.95rem] mt-4.5">
        <Link href="/" className="hover:text-white transition-colors">Home</Link> / {breadcrumb}
      </div>
    </section>
  )
}

interface FeatureListProps {
  items: Array<{
    icon?: ReactNode
    text: string
  }>
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="list-none p-0 mt-4.5 space-y-2.5">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2.5 text-[#d1d5db]">
          <span className="text-[#38bdf8] mt-1">
            {item.icon || (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            )}
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-[rgba(16,24,40,0.82)] border border-white/[0.08] rounded-[22px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-5">
      <strong className="block text-[1.6rem] font-[family-name:var(--font-space-grotesk)]">{value}</strong>
      <span className="text-[#9ca3af] text-[0.92rem]">{label}</span>
    </div>
  )
}
