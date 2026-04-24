import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'E PERFORMANCE | Professional ECU Tuning Files',
  description: 'Professional ECU tuning files for tuning garages, resellers and automotive experts. Fast delivery, safe calibrations and powerful custom remaps.',
  keywords: 'chip tuning, ECU remapping, tuning files, Stage 1, Stage 2, DPF solutions, EGR solutions, AdBlue solutions, WinOLS file service',
  icons: {
    icon: '/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#070b12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
