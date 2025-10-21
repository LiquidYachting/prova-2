'use client'
import Link from 'next/link'
import type { Route } from "next";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6 xl:px-10 h-16 flex items-center justify-between">
        {/* Logo / Nom */}
        <Link href={"/" as Route} className="text-xl font-semibold tracking-wide text-slate-900">
          Liqüid Yachting
        </Link>

        {/* Navegació */}
        <nav className="flex items-center gap-6 text-sm text-slate-700">
          <Link href={"/catalog" as Route} className="hover:text-cyan-700">Flota</Link>
          <Link href={"/services" as Route} className="hover:text-cyan-700">Serveis</Link>
          <Link href={"/buy-sell" as Route} className="hover:text-cyan-700">Compra/Venda</Link>
          <Link href={"/about" as Route} className="hover:text-cyan-700">Sobre nosaltres</Link>
<Link
  href={"/contact" as Route}
  className="rounded-xl px-3 py-1.5 bg-cyan-600 text-white hover:bg-cyan-700 transition"
>
  Contacte
</Link>

        </nav>
      </div>
    </header>
  )
}
