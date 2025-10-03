'use client'
import { useState } from 'react'

const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xqaybned'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section container">
      <h1 className="h1 mb-6">Contacte</h1>
      <form onSubmit={onSubmit} className="card grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Nom i cognoms</label>
          <input name="name" required className="w-full border rounded-xl px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input name="email" type="email" required className="w-full border rounded-xl px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Telèfon</label>
          <input name="phone" className="w-full border rounded-xl px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Assumpte</label>
          <input name="subject" className="w-full border rounded-xl px-4 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Missatge</label>
          <textarea name="message" rows={6} required className="w-full border rounded-xl px-4 py-2"></textarea>
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button className="btn btn-primary" disabled={status==='sending'}>Enviar</button>
          {status==='sent' && <span className="text-green-600">Missatge enviat! Et contactarem aviat.</span>}
          {status==='error' && <span className="text-red-600">Error en l’enviament. Torna-ho a provar.</span>}
        </div>
      </form>
      <p className="mt-4 text-sm opacity-80">També ens pots escriure a info@liquid-yachting.com • +34 626 170 690</p>
    </section>
  )
}
