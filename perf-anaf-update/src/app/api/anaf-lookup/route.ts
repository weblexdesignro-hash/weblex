import { NextResponse } from "next/server";

// Interogheaza API-ul public si gratuit al ANAF (fara cheie, fara autentificare) pentru a
// prelua automat denumirea si adresa unei firme pe baza CUI-ului introdus in formularul de
// contact. Documentatie: https://static.anaf.ro/static/10/Anaf/Informatii_R/doc_WS_v9.txt
//
// Apelul se face server-side (nu din browser) ca sa evitam probleme de CORS si ca sa putem
// normaliza/valida raspunsul inainte sa-l trimitem catre formular.
const ANAF_URL = "https://webservicesp.anaf.ro/api/PlatitorTvaRest/v9/ws/tva";

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function POST(request: Request) {
  try {
    const { cui } = await request.json();
    const cuiDigits = String(cui || "").replace(/\D/g, "");

    if (!cuiDigits) {
      return NextResponse.json({ error: "CUI invalid." }, { status: 400 });
    }

    const anafRes = await fetch(ANAF_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ cui: Number(cuiDigits), data: todayISO() }]),
      // ANAF poate raspunde mai greu la ore de varf — nu blocam formularul la nesfarsit,
      // dar ii dam destul timp (serviciul lor e notoriu de lent, uneori 5-10 secunde).
      signal: AbortSignal.timeout(15000),
    });

    if (!anafRes.ok) {
      // Logam raspunsul brut in consola serverului (vezi cu `pm2 logs`), ca sa stim exact
      // ce ne raspunde ANAF cand ceva nu merge — mesajul catre utilizator ramane simplu.
      const rawBody = await anafRes.text().catch(() => "");
      console.error(`ANAF a raspuns cu status ${anafRes.status} pentru CUI ${cuiDigits}:`, rawBody.slice(0, 500));
      return NextResponse.json({ error: "Serviciul ANAF nu a raspuns. Completeaza manual." }, { status: 502 });
    }

    const data = await anafRes.json();
    const result = Array.isArray(data?.found) ? data.found[0] : Array.isArray(data) ? data[0] : null;
    const general = result?.date_generale;

    if (!general?.denumire) {
      return NextResponse.json({ error: "Nu am găsit nicio firmă cu acest CUI." }, { status: 404 });
    }

    const adresa =
      general.adresa ||
      [result?.adresa_sediu_social?.sdenumire_Strada, result?.adresa_sediu_social?.sdenumire_Localitate]
        .filter(Boolean)
        .join(", ");

    return NextResponse.json({
      denumire: general.denumire,
      adresa: adresa || "",
      nrRegCom: general.nrRegCom || "",
      stare: general.stare_inregistrare || "",
    });
  } catch (err) {
    const isTimeout = err instanceof Error && err.name === "TimeoutError";
    console.error(
      isTimeout ? "ANAF nu a raspuns in 15 secunde (timeout):" : "Eroare la interogarea ANAF:",
      err,
    );
    return NextResponse.json({ error: "Nu am putut contacta serviciul ANAF. Completeaza manual." }, { status: 500 });
  }
}
