import type { Endpoint } from "payload";
import { generateText, generateImage } from "./ai";

/**
 * Endpoint-uri folosite de butoanele „Generează cu AI” din admin. Necesită un
 * utilizator autentificat (admin) — nu sunt publice.
 */
export const aiEndpoints: Endpoint[] = [
  {
    path: "/ai/generate-text",
    method: "post",
    handler: async (req) => {
      if (!req.user) {
        return Response.json({ error: "Neautorizat." }, { status: 401 });
      }
      try {
        const body = (await req.json?.()) as {
          fieldLabel?: string;
          context?: string;
          instructions?: string;
        } | undefined;
        const text = await generateText({
          fieldLabel: body?.fieldLabel || "text",
          context: body?.context || "Weblex Design",
          instructions: body?.instructions,
        });
        return Response.json({ text });
      } catch (err) {
        const message = err instanceof Error ? err.message : "Eroare necunoscută.";
        return Response.json({ error: message }, { status: 500 });
      }
    },
  },
  {
    path: "/ai/generate-image",
    method: "post",
    handler: async (req) => {
      if (!req.user) {
        return Response.json({ error: "Neautorizat." }, { status: 401 });
      }
      try {
        const body = (await req.json?.()) as { prompt?: string } | undefined;
        const prompt = body?.prompt || "Imagine ilustrativă pentru un site de prezentare, stil modern";
        const imageBuffer = await generateImage({ prompt });

        const payload = req.payload;
        const media = await payload.create({
          collection: "media",
          data: { alt: prompt.slice(0, 120) },
          file: {
            data: imageBuffer,
            mimetype: "image/png",
            name: `ai-${Date.now()}.png`,
            size: imageBuffer.length,
          },
        });

        return Response.json({ mediaId: media.id });
      } catch (err) {
        const message = err instanceof Error ? err.message : "Eroare necunoscută.";
        return Response.json({ error: message }, { status: 500 });
      }
    },
  },
];
