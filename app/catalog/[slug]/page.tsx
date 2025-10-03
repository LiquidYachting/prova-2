import boats from '@/data/boats.json'
import Image from 'next/image'
import Link from 'next/link'

export function generateStaticParams() {
  return boats.map((b: any) => ({ slug: b.slug }))
}

export default function BoatPage({ params }: { params: { slug: string } }) {
  const boat = (boats as any[]).find(b => b.slug === params.slug)
  if (!boat) return <div className="container section">No trobat</div>
  return (
    <section className="section container grid lg:grid-cols-2 gap-10">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
        <Image src={boat.image || '/boat.jpg'} alt={boat.model} fill style={{objectFit:'cover'}} />
      </div>
      <div>
        <h1 className="h1">{boat.brand} {boat.model}</h1>
        <p className="mt-2 text-lg font-medium">{boat.price}</p>
        <ul className="mt-4 space-y-1 text-sm opacity-90">
          <li><b>Eslora:</b> {boat.length} m</li>
          <li><b>Any:</b> {boat.year}</li>
          <li><b>Motors:</b> {boat.engines}</li>
          <li><b>Estat:</b> {boat.status}</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <Link href="/contact" className="btn btn-primary">Sol·licitar informació</Link>
          <a href={`/api/boats/${boat.slug}/pdf`} className="btn btn-outline">Descarregar dossier (demo)</a>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="card">
          <h2 className="h2 mb-4">Descripció</h2>
          <p className="leading-relaxed">{boat.description}</p>
        </div>
      </div>
    </section>
  )
}
