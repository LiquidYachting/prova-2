import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const message = body?.message || body?.text || body?.input || "";
    const lang = body?.lang || "CA";

    // Si no hi ha missatge, respon un text base
    if (!message) {
      return NextResponse.json({
        reply:
          "Gràcies pel teu missatge. Digues-me tipus d’embarcació, eslora i pressupost.",
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("Falta OPENAI_API_KEY");
      return NextResponse.json({
        reply:
          "Error de configuració: no hi ha clau d’API. Contacta amb l’administrador.",
      });
    }

    const payload = {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Ets l’assistent comercial de Liqüid Yachting. Respon amb educació i breu (2-4 frases). Idioma segons l’entrada de l’usuari.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.5,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      "No he rebut resposta. Prova més tard.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Error /api/chat:", error.message);
    return NextResponse.json({
      reply: "Error intern. Torna-ho a intentar més tard.",
    });
  }
}
