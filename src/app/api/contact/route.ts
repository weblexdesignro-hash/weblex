import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

// Salvează mesajul în collection-ul "contact-messages" din Payload (vizibil în admin,
// la secțiunea Mesaje) și declanșează automat notificarea prin email (vezi hook-ul
// afterChange din src/collections/ContactMessages.ts + src/lib/email.ts).

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.phone || !body.gdpr) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă." }, { status: 400 });
    }

    const payload = await getPayload({ config });

    await payload.create({
      collection: "contact-messages",
      data: {
        name: body.name,
        company: body.company || "",
        email: body.email,
        phone: body.phone,
        services: (body.services || []).map((label: string) => ({ label })),
        selectedPackage: body.selectedPackage || "",
        message: body.message,
        gdpr: Boolean(body.gdpr),
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Eroare la salvarea mesajului de contact:", err);
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
