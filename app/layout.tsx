import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cinzel } from 'next/font/google'
import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'Liqüid Yachting – YACHT SALES & CONSULTANCY',
  description: 'Excellence Beyond Horizons',
  metadataBase: new URL('https://liquid-yachting.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={`${inter.variable} ${cinzel.variable}`}>
      <body className={`${inter.variable} ${cinzel.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
