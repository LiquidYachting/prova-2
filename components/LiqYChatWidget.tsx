"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Languages, Calendar, Phone, Mail, Ship } from "lucide-react";

const BRAND = {
  primary: "#00B3C6",
  dark: "#0A0F14",
  light: "#F6F7F9",
};

const FLAG = { CA: "CA", ES: "ES", EN: "EN", FR: "FR", DE: "DE" } as const;

const greetings: Record<string, string> = {
  EN: "Welcome aboard! How can we help?",
  ES: "¡Bienvenido a bordo! ¿Cómo podemos ayudarte?",
  CA: "Benvingut a bord! En què et podem ajudar?",
  FR: "Bienvenue à bord ! Comment pouvons-nous vous aider ?",
  DE: "Willkommen an Bord! Womit können wir helfen?",
};

function quickActions(lang: string) {
  const dict: Record<string, any> = {
    EN: { trial: "Book a sea trial", sell: "Ven la teva embarcació", contact: "Talk to an advisor" },
    ES: { trial: "Reservar prueba de mar", sell: "Ven la teva embarcació", contact: "Hablar con un asesor" },
    CA: { trial: "Reservar prova de mar a Palamós", sell: "Ven la teva embarcació", contact: "Parlar amb un assessor" },
    FR: { trial: "Réserver un essai en mer", sell: "Ven la teva embarcació", contact: "Parler à un conseiller" },
    DE: { trial: "Probefahrt buchen", sell: "Ven la teva embarcació", contact: "Mit Berater sprechen" },
  };
  const d = dict[lang] || dict.EN;
  return [
    { id: "trial", label: d.trial, icon: Calendar },
    { id: "sell", label: d.sell, icon: Ship },
    { id: "contact", label: d.contact, icon: Phone },
  ];
}

function Bubble({ role, children }: { role: "bot" | "user"; children: any }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          isUser ? "text-white" : "bg-white/80 backdrop-blur border border-black/5 text-slate-900"
        }`}
        style={isUser ? { backgroundColor: BRAND.primary } : {}}
      >
        {children}
      </div>
    </div>
  );
}

function BrandWordmark() {
  return (
    <div className="flex items-baseline gap-2">
      <span className="tracking-wide text-xl font-serif">
        <span className="pr-1">Liq</span>
        <span style={{ color: BRAND.primary }}>ü</span>
        id
      </span>
      <span className="uppercase text-[11px] tracking-[0.28em] text-slate-500">Yachting</span>
    </div>
  );
}

export default function LiqYChatWidget() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<string>(FLAG.CA);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; content: string }[]>([
    {
      role: "bot",
      content:
        "Benvingut a bord! Sóc el teu assistent de Liqüid Yachting. Puc ajudar-te a reservar una prova de mar, valorar la venda de la teva embarcació o resoldre dubtes sobre models i serveis.",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const qa = useMemo(() => quickActions(lang), [lang]);

  function appendUserAndBot(userText: string, botText: string) {
    setMessages((m) => [...m, { role: "user", content: userText }, { role: "bot", content: botText }]);
  }

  function handleQuick(id: string) {
    if (id === "trial") {
      appendUserAndBot(
        lang === FLAG.CA
          ? "Vull reservar una prova de mar a Palamós"
          : lang === FLAG.ES
          ? "Quiero reservar una prueba de mar en Palamós"
          : lang === FLAG.FR
          ? "Je souhaite réserver un essai en mer à Palamós"
          : lang === FLAG.DE
          ? "Ich möchte eine Probefahrt in Palamós buchen"
          : "I want to book a sea trial in Palamós",
        lang === FLAG.CA
          ? "Perfecte. Indica’ns el teu nom, telèfon i disponibilitat (dates i franges horàries). El nostre equip et confirmarà l’hora i detalls."
          : lang === FLAG.ES
          ? "Perfecto. Indícanos tu nombre, teléfono y disponibilidad (fechas y franjas). Nuestro equipo confirmará la hora y los detalles."
          : lang === FLAG.FR
          ? "Parfait. Indiquez votre nom, téléphone et disponibilités (dates et créneaux). Notre équipe confirmera l’horaire et les détails."
          : lang === FLAG.DE
          ? "Perfekt. Bitte teilen Sie Ihren Namen, Telefonnummer und Verfügbarkeiten (Daten und Zeitfenster) mit. Unser Team bestätigt Termin und Details."
          : "Perfect. Please share your name, phone and availability (dates and time windows). Our team will confirm the slot and details."
      );
    }
    if (id === "sell") {
      appendUserAndBot(
        lang === FLAG.CA
          ? "M’interessa 'Ven la teva embarcació'"
          : lang === FLAG.ES
          ? "Me interesa 'Ven la teva embarcació'"
          : lang === FLAG.FR
          ? "Je suis intéressé par 'Ven la teva embarcació'"
          : lang === FLAG.DE
          ? "Ich interessiere mich für 'Ven la teva embarcació'"
          : "I'm interested in 'Ven la teva embarcació'",
        lang === FLAG.CA
          ? "Genial. Comparteix el model, any, hores, estat de manteniment i fotos. Et respondrem amb una estimació i següents passos."
          : lang === FLAG.ES
          ? "Genial. Comparte el modelo, año, horas, mantenimiento y fotos. Te responderemos con una estimación y los siguientes pasos."
          : lang === FLAG.FR
          ? "Parfait. Partagez le modèle, l’année, les heures, l’entretien et des photos. Nous répondrons avec une estimation et les étapes suivantes."
          : lang === FLAG.DE
          ? "Super. Teilen Sie Modell, Baujahr, Stunden, Wartungszustand und Fotos. Wir melden uns mit einer Einschätzung und den nächsten Schritten."
          : "Great. Share model, year, hours, maintenance status and photos. We'll reply with an estimate and next steps."
      );
    }
    if (id === "contact") {
      appendUserAndBot(
        lang === FLAG.CA
          ? "Vull parlar amb un assessor"
          : lang === FLAG.ES
          ? "Quiero hablar con un asesor"
          : lang === FLAG.FR
          ? "Je souhaite parler à un conseiller"
          : lang === FLAG.DE
          ? "Ich möchte mit einem Berater sprechen"
          : "I want to talk to an advisor",
        lang === FLAG.CA
          ? "D’acord. Deixa’ns el teu telèfon o escriu a enric@liquid-yachting.com. També et podem trucar avui mateix si ho prefereixes."
          : lang === FLAG.ES
          ? "De acuerdo. Déjanos tu teléfono o escribe a enric@liquid-yachting.com. También podemos llamarte hoy mismo si lo prefieres."
          : lang === FLAG.FR
          ? "Très bien. Laissez votre téléphone ou écrivez à enric@liquid-yachting.com. Nous pouvons aussi vous appeler aujourd’hui."
          : lang === FLAG.DE
          ? "Alles klar. Hinterlassen Sie Ihre Telefonnummer oder schreiben Sie an enric@liquid-yachting.com. Wir können Sie noch heute anrufen."
          : "Sure. Share your phone or write to enric@liquid-yachting.com. We can call you today as well."
      );
    }
  }

  async function handleSend() {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", content: userText }]);
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, lang }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", content: data.reply }]);
    } catch {
      const fallback =
        lang === FLAG.CA
          ? "Hem rebut el teu missatge. Un assessor t’atendrà tot seguit."
          : lang === FLAG.ES
          ? "Hemos recibido tu mensaje. Un asesor te atenderá en breve."
          : lang === FLAG.FR
          ? "Nous avons reçu votre message. Un conseiller vous répondra sous peu."
          : lang === FLAG.DE
          ? "Wir haben Ihre Nachricht erhalten. Ein Berater meldet sich in Kürze."
          : "We received your message. An advisor will get back to you shortly.";
      setMessages((m) => [...m, { role: "bot", content: fallback }]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group inline-flex items-center gap-3 rounded-full px-4 py-3 shadow-lg bg-white/90 backdrop-blur border border-black/5 hover:shadow-xl"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full opacity-30 blur-md" style={{ background: BRAND.primary }} />
            <MessageCircle className="relative h-5 w-5" />
          </div>
          <span className="hidden md:block text-sm">Chat · Liqüid Yachting</span>
        </button>
      )}

      {open && (
        <div className="w-[92vw] max-w-[380px] h-[70vh] max-h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur">
          <div className="relative flex items-center justify-between px-4 py-3 border-b border-black/5 bg-white/60 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                <span className="text-xl leading-none">L</span>
                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full" style={{ backgroundColor: BRAND.primary }} />
              </div>
              <div>
                <BrandWordmark />
                <div className="text-[11px] text-slate-500">{greetings[lang]}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[11px] text-slate-600">
                <Languages className="h-4 w-4" />
                <select
                  className="bg-transparent outline-none focus:ring-0"
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                >
                  <option value={FLAG.CA}>CA</option>
                  <option value={FLAG.ES}>ES</option>
                  <option value={FLAG.EN}>EN</option>
                  <option value={FLAG.FR}>FR</option>
                  <option value={FLAG.DE}>DE</option>
                </select>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-xl hover:bg-black/5" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col h-[calc(100%-110px)]">
            <div className="px-3 pt-3 grid grid-cols-3 gap-2">
              {qa.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleQuick(id)}
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-black/5 bg-white/70 backdrop-blur px-3 py-3 hover:shadow-md"
                >
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center text-slate-700" style={{ backgroundColor: BRAND.light }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] leading-snug text-center text-slate-700">{label}</span>
                </button>
              ))}
            </div>

            <div ref={listRef} className="mt-2 px-3 pb-3 overflow-y-auto space-y-2">
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role}>
                  {m.content}
                </Bubble>
              ))}
            </div>

            <div className="mt-auto p-3 border-t border-black/5 bg-white/60 backdrop-blur">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={
                    lang === FLAG.CA
                      ? "Escriu el teu missatge..."
                      : lang === FLAG.ES
                      ? "Escribe tu mensaje..."
                      : lang === FLAG.FR
                      ? "Écrivez votre message..."
                      : lang === FLAG.DE
                      ? "Ihre Nachricht..."
                      : "Type your message..."
                  }
                  className="flex-1 rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2"
                  style={{ boxShadow: "inset 0 0 0 9999px rgba(255,255,255,0.6)" }}
                />
                <button
                  onClick={handleSend}
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-white shadow disabled:opacity-60"
                  style={{ backgroundColor: BRAND.primary }}
                >
                  {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  <span>{lang === FLAG.CA ? "Enviar" : lang === FLAG.ES ? "Enviar" : lang === FLAG.FR ? "Envoyer" : lang === FLAG.DE ? "Senden" : "Send"}</span>
                </button>
              </div>
              <div className="mt-2 text-[10px] text-slate-500 flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span>enric@liquid-yachting.com · Costa Brava · Mediterranean Network</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
