import { loadInventory } from "@/lib/inventory";
import Link from "next/link";

export const dynamic = "force-static";

export default async function YachtsListingPage() {
  const yachts = await loadInventory();

  return (
    <main className="container mx-auto px-6 xl:px-10 py-20">
      <h1 className="text-4xl font-semibold text-slate-900 mb-8">
        Embarcacions disponibles
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {yachts.map((yacht) => (
          <Link
            key={yacht.id}
            href={`/yachts/${yacht.slug}`}
            className="block rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition overflow-hidden"
          >
            <div className="aspect-[16/9] bg-slate-100">
              <img
                src={yacht.hero}
                alt={yacht.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900">
                {yacht.title}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {yacht.year} · {yacht.length_m} m · {yacht.location}
              </p>

              <div className="mt-3 text-cyan-700 font-semibold">
                {yacht.price_eur
                  ? new Intl.NumberFormat("ca-ES", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(yacht.price_eur)
                  : "Preu a consultar"}
              </div>

              <div className="mt-2 text-xs text-slate-500 uppercase tracking-wide">
                {yacht.status === "available" && "Disponible"}
                {yacht.status === "under_offer" && "En negociació"}
                {yacht.status === "sold" && "VENUT"}
                {yacht.status === "eta" && `Arribada prevista: ${yacht.etaDate}`}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
