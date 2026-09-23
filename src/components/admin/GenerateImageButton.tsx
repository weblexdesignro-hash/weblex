"use client";

import React, { useState } from "react";
import { useField, useFieldPath, useDocumentInfo } from "@payloadcms/ui";

type Props = {
  promptHint?: string;
};

export const GenerateImageButton: React.FC<Props> = ({ promptHint }) => {
  const path = useFieldPath();
  const { setValue } = useField<string>({ path });
  const { title } = useDocumentInfo();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ai/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          prompt:
            prompt ||
            `${promptHint || "Imagine ilustrativă pentru un site de prezentare"}, context: ${
              (typeof title === "string" && title) || "Weblex Design"
            }, stil modern, curat, fotografic sau ilustrație vectorială premium`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `Eroare (${res.status})`);
      setValue(data.mediaId);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "A apărut o eroare.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 6, marginBottom: 4, display: "flex", flexDirection: "column", gap: 6, maxWidth: 420 }}>
      <input
        type="text"
        placeholder="Descrie imaginea dorită (opțional)..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          fontSize: 13,
          padding: "5px 8px",
          borderRadius: 4,
          border: "1px solid var(--theme-elevation-150, #444)",
          background: "transparent",
          color: "var(--theme-text, #fff)",
        }}
      />
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        style={{
          fontSize: 13,
          padding: "5px 12px",
          borderRadius: 4,
          border: "1px solid var(--theme-elevation-150, #444)",
          background: loading ? "var(--theme-elevation-100, #222)" : "var(--theme-elevation-150, #2f2f45)",
          color: "var(--theme-text, #fff)",
          cursor: loading ? "wait" : "pointer",
          alignSelf: "flex-start",
        }}
      >
        {loading ? "Se generează imaginea (poate dura ~20s)..." : "✨ Generează imagine cu AI"}
      </button>
      {error && <div style={{ color: "#e66", fontSize: 12 }}>{error}</div>}
    </div>
  );
};
