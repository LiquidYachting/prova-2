export default function ServicesPage() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Serveis nàutics</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="h3 mb-2">Consultoria i adquisició</h3>
          <p>Assessorament integral, inspeccions tècniques i prova de mar.</p>
        </div>
        <div className="card">
          <h3 className="h3 mb-2">Assegurances i matriculacions</h3>
          <p>Gestió completa de pòlisses, registres i bandera.</p>
        </div>
        <div className="card">
          <h3 className="h3 mb-2">Manteniment i refit</h3>
          <p>Plans de manteniment, seguiment de drassana, millores a mida.</p>
        </div>
        <div className="card">
          <h3 className="h3 mb-2">Transport i logística</h3>
          <p>Moviment internacional d’embarcacions amb socis de confiança.</p>
        </div>
      </div>
    </section>
  )
}
