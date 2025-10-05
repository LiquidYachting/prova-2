"use client";
import Link from "next/link";
import { useState } from "react";

export function PriceEUR({ value }: { value: number | null | undefined }) {
  if (value == null) return <span>POA</span>;
  return (
    <span>
      {new Intl.NumberFormat("ca-ES", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }).format(value)}
    </span>
  );
}

export function ImageCarousel({ hero, gallery = [] }: { hero?: string; gallery?: string[] }) {
  const imgs = [hero, ...gallery].filter(Boolean) as string[];
  const [i, setI] = useState(0);
  if (!imgs.length) return <div className="aspect-[16/10] rounded-2xl bg-slate-100" />;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="flex w-full" style={{ transform: `translateX(-${i * 100}%)`, transition: "transform .3s" }}>
          {imgs.map((src, idx) => (
            <div key={idx} className="min-w-full aspect-[16/10] bg-slate-100">
              <img src={src} alt={`photo ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <button
        aria-label="Previous"
        onClick={() => setI((v) => Math.max(v - 1, 0))}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 border"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => setI((v) => Math.min(v + 1, imgs.length - 1))}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 border"
      >
        ›
      </button>
    </div>
  );
}

export function YachtDetailPro({ y }: { y: any }) {
  const wa = `https://wa.me/34626170690?text=${encodeURIComponent(`Hola, m’interessa ${y.title}.`)}`;
  return (
    <article className="bg-white">
      <div className="container mx-auto px-6 xl:px-10 py-4">
        <Link href="/yachts" className="text-sm text-slate-600 hover:text-cyan-700">
          ← Tornar a Embarcacions
        </Link>
      </div>

      <section className="container mx-auto px-6 xl:px-10">
        <ImageCarousel hero={y.hero} gallery={y.gallery} />
      </section>

      <section className="container mx-auto px-6 xl:px-10 py-6 flex flex-wrap items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mr-auto">{y.title}</h1>
        <div className="text-xl font-semibold text-slate-900">
          <PriceEUR value={y.price_eur} />
        </div>
        <a
          href={wa}
          target="_blank"
          className="inline-flex items-center rounded-xl px-4 py-2 bg-cyan-600 text-white text-sm font-semibold hover:bg-cyan-700"
        >
          WhatsApp
        </a>
        <Link
          href={`/yachts/${y.slug}/spec`}
          className="inline-flex items-center rounded-xl px-4 py-2 border border-slate-300 text-sm hover:bg-slate-50"
        >
          Descarregar fitxa PDF
        </Link>
      </section>

      <section className="container mx-auto px-6 xl:px-10 pb-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="text-slate-700 whitespace-pre-line">
            {y.description || "Sense descripció."}
          </div>
        </div>
        <aside>
          <h2 className="text-lg font-semibold text-slate-900">Especificacions</h2>
          <dl className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
            {[
              ["Any", y.year],
              ["Eslora (m)", y.length_m],
              ["Mànega (m)", y.beam_m],
              ["Calat (m)", y.draft_m],
              ["Motors", y.engines],
              ["Hores", y.hours],
              ["Dipòsit (L)", y.fuel_l],
              ["Creuer (kn)", y.cruise_kn],
              ["Màx (kn)", y.max_kn],
              ["Cabines", y.cabins],
              ["Ubicació", y.location],
              ["Estat", y.status],
            ]
              .filter(([, v]) => v != null && v !== "")
              .map(([k, v]) => (
                <div key={String(k)} className="contents">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="text-slate-900">{String(v)}</dd>
                </div>
              ))}
          </dl>
        </aside>
      </section>
    </article>
  );
}
