"use client";

import { useState } from "react";
import SignaturePad from "./SignaturePad";

type Status = "idle" | "loading" | "success" | "error";

export default function ContractSignForm({ token, clientName }: { token: string; clientName: string }) {
  const [signature, setSignature] = useState<string | null>(null);
  const [typedName, setTypedName] = useState(clientName || "");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");
    if (!signature) {
      setError("Te rugăm să semnezi în căsuța de mai sus înainte de a trimite.");
      return;
    }
    if (!typedName.trim()) {
      setError("Te rugăm să scrii numele complet.");
      return;
    }
    if (!agree) {
      setError("Bifează confirmarea de mai jos pentru a putea trimite semnătura.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`/api/contract/${token}/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ signature, typedName }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setTimeout(() => window.location.reload(), 1200);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-center font-display text-lg font-semibold text-brand">Contract semnat cu succes ✓</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">Semnătura ta</label>
        <SignaturePad onChange={setSignature} />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ink" htmlFor="typedName">
          Nume complet (tastat)
        </label>
        <input
          id="typedName"
          value={typedName}
          onChange={(e) => setTypedName(e.target.value)}
          className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-brand"
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-mist">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 accent-brand" />
        Confirm că am citit contractul de mai sus și sunt de acord cu termenii lui. Semnătura electronică de mai
        sus, împreună cu numele tastat, data și adresa IP, au valoare de acceptare a acestui document.
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition hover:bg-brand disabled:opacity-60"
      >
        {status === "loading" ? "Se trimite..." : "Semnează și trimite"}
      </button>
      {status === "error" && <p className="text-sm text-red-500">A apărut o eroare. Încearcă din nou.</p>}
    </div>
  );
}
