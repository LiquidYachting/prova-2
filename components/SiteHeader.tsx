// components/SiteHeader.tsx
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-6 xl:px-10 h-16 flex items-center gap-6">
        <Link href="/" className="font-semibold tracking-wide text-slate-900">
          Liqüid Yachting
        </Link>
        <nav className="ml-auto flex items-center gap-5 text-sm text-slate-700">
          <Link href="/yachts" className="hover:text-cyan-700">Yachts</Link>
          <Link href="/captains" className="hover:text-cyan-700">Captain’s Access</Link>
          <Link href="/sell" className="hover:text-cyan-700">Sell</Link>
          <Link href="/contact" className="rounded-xl px-3 py-1.5 bg-cyan-600 text-white hover:bg-cyan-700">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
