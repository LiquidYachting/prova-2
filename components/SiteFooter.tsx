// components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 xl:px-10 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold text-slate-900">Liqüid Yachting</div>
          <p className="mt-2 text-slate-600">
            Brokerage & nautical consulting · CAT · ES · EN · FR · DE
          </p>
          <p className="mt-2 text-slate-600">
            info@liquid-yachting.com · +34 626 170 690
          </p>
        </div>

        <nav className="grid gap-2 text-slate-700">
          <Link href="/catalog" className="hover:text-cyan-700">Flota</Link>
          <Link href="/services" className="hover:text-cyan-700">Serveis</Link>
          <Link href="/buy-sell" className="hover:text-cyan-700">Compra/Venda</Link>
          <Link href="/about" className="hover:text-cyan-700">Sobre nosaltres</Link>
          <Link href="/contact" className="hover:text-cyan-700">Contacte</Link>
        </nav>

        <div className="text-slate-500">
          <p>© {new Date().getFullYear()} Liqüid Yachting. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/legal/privacy" className="hover:text-cyan-700">Privacy</Link> ·{" "}
            <Link href="/legal/terms" className="hover:text-cyan-700">Terms</Link> ·{" "}
            <Link href="/legal/imprint" className="hover:text-cyan-700">Imprint</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
