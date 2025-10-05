// lib/inventory.ts
import fs from "node:fs/promises";
import path from "node:path";

export type InvItem = {
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

async function loadFromFS(): Promise<InvItem[]> {
  const filePath = path.join(process.cwd(), "public", "data", "inventory.json");
  const raw = await fs.readFile(filePath, "utf-8");
  const arr = JSON.parse(raw);
  return Array.isArray(arr) ? arr : [];
}

async function loadFromHTTP(): Promise<InvItem[]> {
  const res = await fetch("/data/inventory.json", { cache: "no-store" });
  const arr = await res.json();
  return Array.isArray(arr) ? arr : [];
}

export async function loadInventory(): Promise<InvItem[]> {
  // Server (build / SSR): llegim del disc → funciona a Vercel
  if (typeof window === "undefined") return loadFromFS();
  // Client (navegador): fetch relatiu
  return loadFromHTTP();
}

export async function loadItemBySlug(slug: string): Promise<InvItem | null> {
  const list = await loadInventory();
  return list.find((x) => x.slug === slug) || null;
}
