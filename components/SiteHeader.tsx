'use client'

import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* LOGO / NOM */}
        <Link href="/" className="text-2xl font-cinzel text-midnight tracking-wide">
          Liqüid Yachting
        </Link>

        {/* MENU PRINCIPAL */}
        <nav className="flex items-center gap-6 text-sm font-inter">
          <Link href="/catalog" className="hover:text-midnight transition-colors">Flota</Link>
          <Link href="/services" className="hover:text-midnight transition-colors">Serveis</Link>
          <Link href="/buy-sell" className="hover:text-midnight transition-colors">Compra/Venda</Link>
          <Link href="/about" className="hover:text-midnight transition-colors">Sobre nosaltres</Link>
          <Link href="/contact" className="hover:text-midnight transition-colors">Contacte</Link>
        </nav>
      </div>
    </header>
  )
}
