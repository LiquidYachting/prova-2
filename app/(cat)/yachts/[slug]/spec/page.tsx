"use client";
import { useEffect, useState } from "react";

export default function SpecPage({ params }: { params: { slug: string } }) {
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/data/inventory.json", { cache: "no-store" });
      const list = await res.json();
      setItem(list.find((x: any) => x.slug === params.slug));
      setTimeout(() => window.print(), 400);
    })();
  }, [params.slug]);

  if (!item) return <div className="p-8 text-slate-500">Generant fitxa…</div>;

  return (
    <div className="p-8 print:p-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">{item.title}</h1>
        <p className="text-slate-600">
          {item.brand} {item.model} · {item.year} · {item.length_m} m
        </p>
        {item.hero && (
          <img src={item.hero} alt={item.title} className="mt-4 w-full rounded-lg border" />
        )}
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {Object.entries({
            "Eslora (m)": item.length_m,
            "Mànega (m)": item.beam_m,
            "Calat (m)": item.draft_m,
            Motors: item.engines,
            Hores: item.hours,
            "Creuer (kn)": item.cruise_kn,
            "Màx (kn)": item.max_kn,
            Cabines: item.cabins,
            Ubicació: item.location,
          })
            .filter(([, v]) => v != null && v !== "")
            .map(([k, v]) => (
              <div key={k} className="flex justify-between border-b py-1">
                <span className="text-slate-500">{k}</span>
                <span className="font-medium">{String(v)}</span>
              </div>
            ))}
        </div>
        {item.description && (
          <p className="mt-4 whitespace-pre-line text-slate-700">{item.description}</p>
        )}
        <div className="mt-6 text-xs text-slate-500">
          Liqüid Yachting · info@liquid-yachting.com · +34 626 170 690 · www.liquid-yachting.com
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 14mm;
          }
          header,
          footer,
          nav,
          .no-print {
            display: none !important;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          body {
            background: #fff;
          }
        }
      `}</style>
    </div>
  );
}
