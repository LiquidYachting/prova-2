import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Cinzel } from 'next/font/google'
import Link from 'next/link'

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
      <body>
        <header className="border-b border-black/5 bg-white">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl text-midnight">Liqüid Yachting</Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/catalog" className="hover:text-midnight">Flota</Link>
              <Link href="/services" className="hover:text-midnight">Serveis</Link>
              <Link href="/buy-sell" className="hover:text-midnight">Compra/Venda</Link>
              <Link href="/about" className="hover:text-midnight">Sobre nosaltres</Link>
              <Link href="/contact" className="btn btn-primary">Contacte</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-black/5">
          <div className="container py-10 text-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p>© 2025 Liqüid Yachting — Excellence Beyond Horizons</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy">Privacitat</Link>
                <Link href="/terms">Termes</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
