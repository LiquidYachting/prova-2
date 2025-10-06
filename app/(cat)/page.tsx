// app/(cat)/page.tsx
import Link from "next/link";
import Hero from "@/components/Hero";

const sold = [
  { slug: "pershing-62-2017", title: "Pershing 62", year: 2017, length: "19,4 m", img: "/images/sold/pershing62.jpg" },
  { slug: "sunseeker-manhattan-55-2020", title: "Sunseeker Manhattan 55", year: 2020, length: "17,2 m", img: "/images/sold/manhattan55.jpg" },
  { slug: "wally-why200-2022", title: "Wally WHY200", year: 2022, length: "27 m", img: "/images/sold/why200.jpg" },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO amb overlay i CTA */}
      <Hero />

      {/* Secció “Recentment venuts” */}
      <section className="container mx-auto px-6 xl:px-10 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Recentment venuts</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sold.map((y) => (
            <article key={y.slug} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <div className="aspect-[16/10] bg-slate-100">
                <img
                  src={y.img}
                  alt={`${y.title} ${y.year}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{y.title}</h3>
                <p className="text-slate-600 text-sm">{y.year} · {y.length}</p>
                <div className="mt-4">
                  <Link
                    href={`/yachts/${y.slug}`}
                    className="inline-block rounded-lg px-3 py-2 bg-slate-900 text-white hover:bg-slate-800 text-sm"
                  >
                    Veure fitxa
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Franja CTA curta */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 xl:px-10 py-10 flex flex-col md:flex-row items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Necessites vendre o trobar un tender amb timing de capità?</h3>
            <p className="text-slate-600">Parlem avui. Tracte directe, respostes ràpides.</p>
          </div>
          <div className="md:ml-auto flex gap-3">
            <Link href="/catalog" className="rounded-xl px-4 py-2 bg-cyan-600 text-white hover:bg-cyan-700 text-sm">
              Veure embarcacions
            </Link>
            <Link href="/sell" className="rounded-xl px-4 py-2 border border-slate-300 hover:bg-white text-sm">
              Vendre la teva embarcació
            </Link>
            <Link href="/contact" className="rounded-xl px-4 py-2 border border-slate-900 text-slate-900 hover:bg-slate-100 text-sm">
              Contacte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
