import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message, lang } = await req.json();

  const replies: Record<string, string> = {
    CA: "Gràcies! Hem rebut el teu missatge i et contactarem en breu. Si vols reservar una prova de mar, indica dia i franja.",
    ES: "¡Gracias! Hemos recibido tu mensaje y te contactaremos en breve. Si quieres reservar prueba de mar, indica día y franja.",
    EN: "Thanks! We’ve received your message and will get back shortly. To book a sea trial, share day and time window.",
    FR: "Merci ! Nous avons bien reçu votre message et vous recontacterons sous peu. Pour un essai en mer, indiquez jour et créneau.",
    DE: "Danke! Wir haben Ihre Nachricht erhalten und melden uns bald. Für eine Probefahrt geben Sie Tag und Zeitfenster an.",
  };

  await new Promise((r) => setTimeout(r, 400));
  return NextResponse.json({ reply: replies[lang] || replies.EN, echo: message });
}
