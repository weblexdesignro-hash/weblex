"use client";

import React, { useState } from "react";
import { useField, useFieldPath, useDocumentInfo } from "@payloadcms/ui";

type Props = {
  fieldLabel?: string;
};

export const GenerateTextButton: React.FC<Props> = ({ fieldLabel }) => {
  const path = useFieldPath();
  const { value, setValue } = useField<string>({ path });
  const { title } = useDocumentInfo();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/ai/generate-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          fieldLabel: fieldLabel || path,
          context: (typeof title === "string" && title) || "Weblex Design",
          instructions: typeof value === "string" && value ? `Text existent, de îmbunătățit: "${value}"` : undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `Eroare (${res.status})`);
      setValue(data.text);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "A apărut o eroare.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 6, marginBottom: 4 }}>
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
        }}
      >
        {loading ? "Se generează..." : "✨ Generează cu AI"}
      </button>
      {error && <div style={{ color: "#e66", fontSize: 12, marginTop: 4 }}>{error}</div>}
    </div>
  );
};
