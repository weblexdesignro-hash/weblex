/**
 * Ajutor pentru generare de conținut cu AI (text + imagini), folosit de butoanele
 * „Generează cu AI” din panoul de administrare. Necesită OPENAI_API_KEY în .env —
 * dacă lipsește, funcțiile aruncă o eroare clară în loc să eșueze silențios.
 */

const OPENAI_URL = "https://api.openai.com/v1";

function getApiKey(): string {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    throw new Error(
      "OPENAI_API_KEY nu este configurată. Adaugă-o în variabilele de mediu (.env) ca să folosești generarea de conținut cu AI."
    );
  }
  return key;
}

export async function generateText(opts: {
  fieldLabel: string;
  context: string; // ex: titlul paginii/serviciului, pentru context
  instructions?: string;
}): Promise<string> {
  const apiKey = getApiKey();

  const prompt = [
    `Ești un copywriter care scrie pentru site-ul unei agenții web din România, cu ton profesionist, clar și convingător, în limba română.`,
    `Scrie textul pentru câmpul: "${opts.fieldLabel}".`,
    `Context / subiect: ${opts.context}`,
    opts.instructions ? `Instrucțiuni suplimentare: ${opts.instructions}` : "",
    `Răspunde DOAR cu textul final, fără explicații, fără ghilimele, fără titlu.`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`${OPENAI_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 400,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Eroare la generarea textului (${res.status}): ${errText}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("AI-ul nu a returnat niciun text.");
  return text;
}

export async function generateImage(opts: { prompt: string }): Promise<Buffer> {
  const apiKey = getApiKey();

  const res = await fetch(`${OPENAI_URL}/images/generations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: opts.prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Eroare la generarea imaginii (${res.status}): ${errText}`);
  }

  const data = (await res.json()) as { data?: { b64_json?: string }[] };
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error("AI-ul nu a returnat nicio imagine.");
  return Buffer.from(b64, "base64");
}
