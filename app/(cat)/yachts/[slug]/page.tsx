import { notFound } from "next/navigation";
import { loadItemBySlug } from "@/lib/inventory";
import { YachtDetailPro } from "@/components/YachtDetailPro";

export default async function YachtDetailPage({ params }: { params: { slug: string } }) {
  const y = await loadItemBySlug(params.slug);
  if (!y) return notFound();
  return (
    <main className="py-10">
      <YachtDetailPro y={y} />
    </main>
  );
}
