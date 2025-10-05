// app/page.tsx
import Link from "next/link";
import { loadInventory } from "@/lib/inventory";

function Price({ v }: { v: number | null | undefined }) {
  if (v == null) return <span>POA</span>;
  return (
    <span>
      {new Intl.NumberFormat("ca-ES", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }).format(v)}
    </span>
  );
}

function YachtCard({ y }: { y: any }) {
  return (
    <Link
      href={`/yachts/${y.slug}`}
      className="block rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition overflow-hidden"
    >
      <div className="aspect-[16/9] bg-slate-100">
        <img src={y.hero} alt={y.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{y.title}</h3>
        <p className="text-slate-600 text-sm mt-1">
          {y.year} · {y.length_m} m · {y.location}
        </p>
        <div className="mt-2 text-cyan-700 font-semibold">
          <Price v={y.price_eur} />
        </div>
        <div className="mt-1 text-xs text-slate-500 uppercase tracking-wide">
          {y.status === "available" && "Disponible"}
          {y.status === "under_offer" && "En negociació"}
          {y.status === "sold" && "VENUT"}
          {y.status === "eta" && `Arribada prevista: ${y.etaDate}`}
        </div>
      </div>
    </Link>
  );
}

export default async function Home() {
  const all = await loadInventory();
  const featured = all.slice(0, 3);
  const sold = all.filter((x) => x.status === "sold").slice(0, 6);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end bg-[url('/images/hero_b.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="relative container mx-auto px-6 xl:px-10 py-16 text-white">
          <h1 className="text-3xl md:text-6xl font-semibold max-w-3xl">Excellence Beyond Horizons</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-white/90">
            Brokeratge i consultoria nàutica premium. Comprem, venem i operem amb timing de capità.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/yachts" className="inline-flex items-center rounded-xl px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
              Veure embarcacions
            </Link>
            <Link href="/sell" className="inline-flex items-center rounded-xl px-5 py-3 border border-white/70 hover:bg-white/10">
              Vendre la teva embarcació
            </Link>
          </div>
        </div>
      </section>

      {/* RECENTMENT VENUTS */}
      <section className="py-10">
        <div className="container mx-auto px-6 xl:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Recentment venuts</h2>
          <div className="mt-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
            <div className="min-w-[1100px] grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-4">
              {sold.map((y) => (
                <div key={y.id} className="opacity-80">
                  <YachtCard y={{ ...y, status: "sold" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPITANS */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 xl:px-10 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Capitans professionals ⚡</h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Reemplaçaments de tenders/chase boats, logística a port i respostes &lt; 2h.
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                href="/captains#urgent"
                className="inline-flex items-center rounded-xl px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
              >
                Suport urgent
              </Link>
              <Link href="/captains" className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 hover:bg-slate-50">
                Més info
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[url('/images/captains_card.jpg')] bg-cover bg-center border border-slate-200" />
          </div>
        </div>
      </section>

      {/* DESTACATS */}
      <section className="py-12">
        <div className="container mx-auto px-6 xl:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Selecció destacada</h2>
        </div>
        <div className="container mx-auto px-6 xl:px-10 mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((y) => (
            <YachtCard key={y.id} y={y} />
          ))}
        </div>
        <div className="container mx-auto px-6 xl:px-10 mt-6">
          <Link href="/yachts" className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 hover:bg-slate-50">
            Veure totes
          </Link>
        </div>
      </section>

      {/* VENDRE */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-6 xl:px-10 grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Maximitza el valor en la venda</h2>
            <p className="mt-3 text-white/80 max-w-2xl">
              Valoració basada en dades i xarxa internacional per reduir terminis.
            </p>
            <Link
              href="/sell#valuation"
              className="mt-5 inline-flex items-center rounded-xl px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
            >
              Iniciar valoració
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[url('/images/sell_card.jpg')] bg-cover bg-center border border-white/10" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <div className="container mx-auto px-6 xl:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Parlem avui?</h2>
          <p className="mt-3 text-slate-600">Atenció multilingüe · CAT · ES · EN · FR · DE</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-xl px-5 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
          >
            Contacte
          </Link>
        </div>
      </section>
    </main>
  );
}

// SEO – hreflang per Home
export async function generateMetadata() {
  const base = "https://www.liquid-yachting.com";
  return {
    title: "Liqüid Yachting – Excellence Beyond Horizons",
    description:
      "Brokeratge i consultoria nàutica premium. Comprem, venem i operem amb timing de capità.",
    alternates: {
      canonical: `${base}/`,
      languages: {
        "x-default": `${base}/`,
        ca: `${base}/`,
        es: `${base}/es`,
        en: `${base}/en`,
        fr: `${base}/fr`,
        de: `${base}/de`,
      },
    },
  } as any;
}
