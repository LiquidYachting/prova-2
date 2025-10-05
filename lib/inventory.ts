// lib/inventory.ts
type InvItem = {
  id: string;
  slug: string;
  title: string;
  brand?: string;
  model?: string;
  year?: number;
  length_m?: number;
  beam_m?: number;
  draft_m?: number;
  engines?: string;
  hours?: number;
  fuel_l?: number;
  cruise_kn?: number;
  max_kn?: number;
  cabins?: number;
  location?: string;
  price_eur?: number | null;
  status?: "available" | "under_offer" | "sold" | "eta";
  etaDate?: string;
  hero?: string;
  gallery?: string[];
  description?: string;
  type?: string;
};

function baseUrl() {
  // Server: Vercel exposa VERCEL_URL (sense protocol)
  if (typeof window === "undefined") {
    const v = process.env.VERCEL_URL;
    return v ? `https://${v}` : "http://localhost:3000";
  }
  // Client: rutes relatives
  return "";
}

export async function loadInventory(): Promise<InvItem[]> {
  const res = await fetch(`${baseUrl()}/data/inventory.json`, { cache: "no-store" });
  if (!res.ok) throw new Error("No puc carregar /data/inventory.json");
  const json = await res.json();
  return Array.isArray(json) ? json : [];
}

export async function loadItemBySlug(slug: string): Promise<InvItem | null> {
  const list = await loadInventory();
  return list.find((x) => x.slug === slug) || null;
}
