export default function PrivacyPage() {
  return (
    <section className="section container">
      <h1 className="h1 mb-6">Política de privacitat</h1>

      <p><b>Responsable:</b> Liqüid Yachting (en endavant, “Liqüid Yachting”).</p>
      <p><b>Contacte:</b> info@liquid-yachting.com • +34 626 170 690 • liquid-yachting.com</p>
      <p><b>Adreça:</b> Girona (Espanya). <i>Actualitzarem la dada fiscal/mercantil definitiva quan la tinguem.</i></p>

      <h2 className="h2 mt-8 mb-2">1. Àmbit d’aplicació</h2>
      <p>Aquesta política s’aplica al lloc web liquid-yachting.com i als formularis de contacte associats. Complim el Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD).</p>

      <h2 className="h2 mt-8 mb-2">2. Dades que tractem</h2>
      <ul className="list-disc pl-6">
        <li>Dades d’identificació i contacte: nom, email, telèfon.</li>
        <li>Dades comercials vinculades a consultes sobre embarcacions o serveis.</li>
        <li>Dades tècniques mínimes d’ús web (IP truncada, logs, cookies tècniques).</li>
      </ul>

      <h2 className="h2 mt-8 mb-2">3. Finalitats i base jurídica</h2>
      <ul className="list-disc pl-6">
        <li><b>Resposta a sol·licituds</b> (formulari/contacte). Base: <i>consentiment</i> i/o <i>interès legítim</i> de gestionar la teva petició.</li>
        <li><b>Gestió comercial i pressupostos</b>. Base: <i>relació precontractual/contractual</i>.</li>
        <li><b>Seguretat i manteniment del web</b>. Base: <i>interès legítim</i>.</li>
      </ul>

      <h2 className="h2 mt-8 mb-2">4. Destinataris</h2>
      <p>No cedim dades a tercers, excepte obligació legal. Podem usar encarregats de tractament (p. ex. allotjament, CDN, eines anti-spam, Formspree per al formulari) amb contractes RGPD.</p>

      <h2 className="h2 mt-8 mb-2">5. Transferències internacionals</h2>
      <p>Si algun proveïdor està fora de l’EEE, garantim mecanismes adequats (clàusules tipus de la UE, normes corporatives vinculants o decisions d’adequació).</p>

      <h2 className="h2 mt-8 mb-2">6. Conservació</h2>
      <p>Conservem les dades el temps necessari per atendre la consulta i possibles gestions comercials; i, si s’escau, durant els terminis legals aplicables.</p>

      <h2 className="h2 mt-8 mb-2">7. Drets de les persones</h2>
      <p>Pots exercir els teus drets d’accés, rectificació, supressió, oposició, limitació, portabilitat i retirar el consentiment escrivint a <b>info@liquid-yachting.com</b>, indicant l’assumpte “Protecció de dades”. També pots reclamar davant l’AEPD (aepd.es).</p>

      <h2 className="h2 mt-8 mb-2">8. Cookies</h2>
      <p>Fem servir cookies tècniques imprescindibles. Si incorporem analítica/marketing, n’informarem a la nostra <a href="/privacy#cookies" className="underline">política de cookies</a> i habilitarem el panell de consentiment.</p>

      <h2 className="h2 mt-8 mb-2">9. Seguretat</h2>
      <p>Apliquem mesures tècniques i organitzatives adequades (xifrat TLS, control d’accessos, backups) proporcionals al risc.</p>

      <h2 className="h2 mt-8 mb-2">10. Actualitzacions</h2>
      <p>Podem actualitzar aquesta política per adaptar-la a canvis legals o de servei. Data d’última revisió: octubre 2025.</p>
    </section>
  );
}
