'use client';
import { useState } from 'react';

const FORMSPREE =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  'https://formspree.io/f/xqaybned';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="container mx-auto px-6 xl:px-10 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Contacte</h1>
      <p className="mt-2 text-slate-600">Responem molt ràpid (CAT · ES · EN · FR · DE).</p>

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
          <span className="text-sm text-slate-600">Telèfon (opcional)</span>
          <input name="phone" className="rounded-xl border px-3 py-2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-slate-600">Missatge</span>
          <textarea name="message" rows={5} required className="rounded-xl border px-3 py-2" />
        </label>

        <button
          type="submit"
          disabled={status==='sending'}
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 disabled:opacity-50"
        >
          {status==='sending' ? 'Enviant…' : 'Enviar'}
        </button>

        {status==='sent' && <p className="text-green-700 font-medium">Gràcies! Hem rebut el teu missatge.</p>}
        {status==='error' && <p className="text-red-700 font-medium">Hi ha hagut un error. Torna-ho a provar.</p>}
      </form>
    </main>
  );
}
