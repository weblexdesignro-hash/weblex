import { NextResponse } from "next/server";

// In productie, aceasta ruta scrie mesajul in collection-ul "ContactMessages"
// din Payload CMS si trimite o notificare prin email (ex. Resend/Nodemailer).
// Momentan loghezi mesajul - inlocuieste cu integrarea reala inainte de lansare.

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.phone || !body.gdpr) {
      return NextResponse.json({ error: "Campuri obligatorii lipsa." }, { status: 400 });
    }

    // TODO: payload.create({ collection: 'contact-messages', data: body })
    // TODO: trimite email de notificare catre contact@weblexdesign.ro
    console.log("Mesaj nou de contact:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalida." }, { status: 400 });
  }
}
