import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { message, lang } = await req.json();

    const system = `Ets un assistent comercial de Liqüid Yachting. Respon curt (2-4 frases), clar i amable.
Idiomes: CA/ES/EN/FR/DE segons "lang". Demana tipus d'embarcació, eslora, pressupost i si vol prova de mar.`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system },
          { role: "user", content: `lang=${lang ?? "CA"}; message=${message}` },
        ],
        temperature: 0.4,
      }),
    });

    if (!r.ok) {
      const txt = await r.text();
      return NextResponse.json({ error: txt }, { status: 500 });
    }

    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Ok.";
    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "server error" }, { status: 500 });
  }
}
