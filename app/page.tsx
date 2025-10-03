import Link from 'next/link'
import Image from 'next/image'
import boats from '@/data/boats.json'

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">Excellence Beyond Horizons</h1>
            <p className="mt-4 text-lg leading-relaxed">
              Brokeratge i consultoria d’embarcacions de luxe. Servei a mida, xarxa internacional
              i coneixement tècnic profund per acompanyar-te en la compra o venda del teu iot.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/catalog" className="btn btn-primary">Veure flota</Link>
              <Link href="/buy-sell" className="btn btn-outline">Vendre la meva embarcació</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-96">
            <Image src="/hero.jpg" alt="Lluxós RIB al capvespre" fill priority style={{objectFit:'cover'}} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 mb-6">Selecció destacada</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {boats.slice(0,3).map((b) => (
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
        </div>
      </section>
    </>
  )
}
