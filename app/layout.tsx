import './globals.css'
import type { Metadata } from 'next'
import { Inter_Tight, Instrument_Serif } from 'next/font/google'

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans' })
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'FMW Digital — Digital Product Studio',
  description:
    'FMW Digital is a digital product studio. We help teams discover, design and build the right products, then ship them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
