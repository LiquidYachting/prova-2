'use client';
import { useState } from 'react';

const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_SELL || 'https://formspree.io/f/xqaybned';

export default function SellPage() {
  const [st, setSt] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSt('sending');
    const data = new FormData(e.currentTarget);
    try {
      const r = await fetch(FORMSPREE, { method: 'POST', body: data, headers: { Accept: 'application/json' }});
      setSt(r.ok ? 'sent' : 'error');
    } catch { setSt('error'); }
  }

  return (
    <main className="container mx-auto px-6 xl:px-10 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Vendre la teva embarcació</h1>
      <p className="mt-2 text-slate-600">Valoració ràpida, discreció total. CAT · ES · EN · FR · DE</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Nom i cognoms</span>
          <input name="name" required className="rounded-xl border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Email</span>
          <input name="email" type="email" required className="rounded-xl border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Telèfon</span>
          <input name="phone" className="rounded-xl border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Model / any / estat</span>
          <input name="boat" required className="rounded-xl border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Ubicació actual</span>
          <input name="location" className="rounded-xl border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Comentaris</span>
          <textarea name="message" rows={5} required className="rounded-xl border px-3 py-2" />
        </label>

        <button disabled={st==='sending'} className="rounded-xl px-5 py-3 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 disabled:opacity-50">
          {st==='sending' ? 'Enviant…' : 'Enviar valoració'}
        </button>

        {st==='sent' && <p className="text-green-700 font-medium">Gràcies! Et contactarem molt aviat.</p>}
        {st==='error' && <p className="text-red-700 font-medium">Error d’enviament. Torna-ho a provar.</p>}
      </form>
    </main>
  );
}
