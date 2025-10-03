import boats from '@/data/boats.json'
import Link from 'next/link'
import Image from 'next/image'

export default function CatalogPage() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Flota / Catàleg</h1>
      <p className="mb-6">Cerca i filtra per marca, eslora, any i més (versió inicial).</p>
      <div className="grid md:grid-cols-3 gap-6">
        {boats.map((b) => (
          <div key={b.slug} className="card">
            <div className="relative h-44 w-full overflow-hidden rounded-xl mb-4">
              <Image src={b.image || '/boat.jpg'} alt={b.model} fill style={{objectFit:'cover'}} />
            </div>
            <h3 className="h3">{b.brand} {b.model}</h3>
            <p className="mt-2 text-sm opacity-80">{b.length}m • {b.year} • {b.engines}</p>
            <p className="mt-2 font-medium">{b.price}</p>
            <Link href={`/catalog/${b.slug}`} className="btn btn-primary mt-4">Veure fitxa</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
