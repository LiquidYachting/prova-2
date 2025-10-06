// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <img
        src="/images/hero_b.jpg"
        alt="Mediterranean yacht"
        className="w-full h-[62vh] md:h-[70vh] object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/40 md:bg-slate-900/35" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 xl:px-10">
          <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
            Excellence Beyond Horizons
          </h1>
          <p className="mt-4 text-white/90 max-w-3xl text-lg">
            Brokeratge i consultoria nàutica premium. Comprem, venem i operem amb timing de capità.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/catalog" className="rounded-xl px-5 py-3 bg-cyan-600 text-white hover:bg-cyan-700">
              Veure embarcacions
            </Link>
            <Link href="/sell" className="rounded-xl px-5 py-3 border border-white/70 text-white hover:bg-white/10">
              Vendre la teva embarcació
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
