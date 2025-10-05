export const dynamic = "force-static";

export default function CaptainsAccessPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="container mx-auto px-6 xl:px-10 py-14">
        <h1 className="text-3xl md:text-5xl font-semibold text-slate-900">
          Captain’s Access — From one bridge to another, we speak your language.
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Built for professional captains and management teams operating under pressure.
          No noise. Just solutions.
        </p>
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 xl:px-10 pb-10">
        <p className="text-slate-700 max-w-3xl">
          You don’t need explanations — you need the right boat on the quay, on time.
          Captain’s Access is our dedicated lane for sourcing tenders and chase boats across the Med,
          coordinating port-side logistics, and handling paperwork so you can focus on the programme.
        </p>
        <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm text-slate-700">
          <li className="rounded-xl border p-3">Single point of contact</li>
          <li className="rounded-xl border p-3">Clear ETAs & realistic options</li>
          <li className="rounded-xl border p-3">Discretion as default</li>
        </ul>
      </section>

      {/* Why it exists */}
      <section className="container mx-auto px-6 xl:px-10 py-10 border-t">
        <h2 className="text-2xl font-semibold text-slate-900">Why Captain’s Access exists</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          Peak season doesn’t wait. A tender down shouldn’t compromise guest plans. Negotiating with ten brokers
          isn’t your job. We work like an extension of your bridge team: fast reads, straight answers, clean execution.
        </p>
      </section>

      {/* Advantages */}
      <section className="container mx-auto px-6 xl:px-10 py-10 border-t">
        <h2 className="text-2xl font-semibold text-slate-900">Key advantages</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700">
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">Priority access</b> to vetted tenders & chase boats (Mediterranean-wide).
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">Timing-first</b>: honest availability, clear handover windows, no surprises.
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">Operational clarity</b>: specs, hours, condition and photos that matter.
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">Lean comms</b>: one thread, one decision-maker, no back-and-forth.
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">Discreet handling</b>: owner privacy and programme confidentiality.
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">Aftercare network</b>: survey, transport, registration, insurance, technical.
          </li>
        </ul>
      </section>

      {/* Scope */}
      <section className="container mx-auto px-6 xl:px-10 py-10 border-t">
        <h2 className="text-2xl font-semibold text-slate-900">What we handle</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          Tenders (jet, diesel, outboard) · Chase boats · RIBs · Dayboats · Short-notice replacements · Seasonal upgrades ·
          Charter support units · Delivery & logistics · Documentation & compliance · Insurance liaison
        </p>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-6 xl:px-10 py-10 border-t">
        <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
        <ol className="mt-4 grid md:grid-cols-3 gap-4">
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">1. Brief</b>
            <p className="text-slate-700 mt-1 text-sm">
              Length/speed range, pax, deck footprint, handover location/date, budget band.
            </p>
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">2. Shortlist</b>
            <p className="text-slate-700 mt-1 text-sm">
              Tight selection with real ETAs and pros/cons. No more than three options unless requested.
            </p>
          </li>
          <li className="rounded-xl border p-4">
            <b className="text-slate-900">3. Secure & Deliver</b>
            <p className="text-slate-700 mt-1 text-sm">
              Lock terms, coordinate survey/transport, handover ready for service.
            </p>
          </li>
        </ol>
        <p className="mt-3 text-slate-500 text-sm">
          Lead times: same-week possible within peak routes; otherwise 7–14 days typical depending on spec and location.
        </p>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 xl:px-10 py-14 border-t">
        <div className="rounded-2xl border p-6 bg-slate-50">
          <h3 className="text-xl font-semibold text-slate-900">Captain’s Access</h3>
          <p className="mt-2 text-slate-700">
            Tell us what you need and when — we’ll respond quickly with a workable plan.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-3 bg-cyan-600 text-white font-semibold hover:bg-cyan-700"
            >
              Captain’s Access
            </a>
            <a
              href="mailto:info@liquid-yachting.com"
              className="inline-flex items-center rounded-xl px-5 py-3 border border-slate-300 hover:bg-slate-50"
            >
              Speak with operations
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            We keep it discreet. Your details are only used to respond to this request.
          </p>
        </div>
      </section>

      {/* About (for captains) */}
      <section className="container mx-auto px-6 xl:px-10 py-12 border-t">
        <h2 className="text-2xl font-semibold text-slate-900">About Liqüid Yachting (for captains)</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          We’re a brokerage and operations partner focused on timing and fit. Ten years in the Med with owners, captains and shipyards
          means we know what’s practical when the schedule is not. If you just need it done — properly and quietly — we’re a good match.
        </p>
        <p className="mt-3 text-slate-600">
          Direct line · info@liquid-yachting.com · +34 626 170 690 · CAT · ES · EN · FR · DE
        </p>
      </section>
    </main>
  );
}
