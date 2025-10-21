import { NextResponse } from "next/server";

export const runtime = "edge";            // ràpid
export const dynamic = "force-dynamic";   // evita cache a prod

// Resposta de seguretat si alguna cosa falla
function fallback(lang = "CA") {
  const m =
    lang.toLowerCase().startsWith("es")
      ? "No he recibido respuesta. ¿Puedes indicarme tipo de embarcación, eslora y presupuesto?"
      : lang.toLowerCase().startsWith("en")
      ? "I didn’t get a response. Please tell me boat type, length and budget."
      : lang.toLowerCase().startsWith("fr")
      ? "Je n’ai pas reçu de réponse. Dites-moi le type de bateau, la longueur et le budget."
      : lang.toLowerCase().startsWith("de")
      ? "Ich habe keine Antwort erhalten. Bitte nenne Bootstyp, Länge und Budget."
      : "No he rebut resposta. Indica’m si us plau tipus d’embarcació, eslora i pressupost.";
  return m;
}

export async function POST(req: Request) {
  try {
    // 1) Llegeix el body tolerant diferents formats del widget
    const body = await req.json().catch(() => ({} as any));
    const lang: string =
      body?.lang ?? body?.language ?? body?.selectedLanguage ?? "CA";

    // accepta o bé `messages` (array) o un sol text: message/text/input/prompt
    let messages: Array<{ role: "system" | "user"; content: string }> =
      Array.isArray(body?.messages) ? body.messages : [];

    if (!messages.length) {
      const text: string =
        body?.message ?? body?.text ?? body?.input ?? body?.prompt ?? "";
      if (!text) {
        return NextResponse.json({ reply: fallback(lang) }, { status: 200 });
      }
      messages = [
        {
          role: "system",
          content:
            "Ets l’assistent comercial de Liqüid Yachting. Respon en 2–4 frases, clar i amable. Idioma segons l'usuari. Demana tipus d'embarcació, eslora, pressupost i si vol prova de mar.",
        },
        { role: "user", content: text },
      ];
    }

    // 2) Comprova la clau
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      console.error("[/api/chat] Falta OPENAI_API_KEY");
      return NextResponse.json({ reply: fallback(lang) }, { status: 200 });
    }

    // 3) Crida a OpenAI (chat.completions) amb model estable
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 18000); // 18s

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.4,
      }),
    }).catch((e) => {
      console.error("[/api/chat] fetch error:", e?.message || e);
      return null;
    });

    clearTimeout(timeout);

    if (!r) {
      return NextResponse.json({ reply: fallback(lang) }, { status: 200 });
    }
    if (!r.ok) {
      const txt = await r.text().catch(() => "");
      console.error("[/api/chat] OpenAI non-ok:", r.status, txt);
      return NextResponse.json({ reply: fallback(lang) }, { status: 200 });
    }

    const data = await r.json().catch(() => ({} as any));
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() || fallback(lang);

    // 4) Torna la resposta al widget
    return NextResponse.json({ reply }, { status: 200 });
  } catch (err: any) {
    console.error("[/api/chat] exception:", err?.message || err);
    return NextResponse.json({ reply: fallback("CA") }, { status: 200 });
  }
}
