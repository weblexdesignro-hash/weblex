"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "weblex-cookie-consent"; // "accepted" | "rejected"

// Bara de consimtamant cookie-uri (GDPR). Alegerea e salvata in localStorage,
// ca sa nu mai apara la fiecare vizita dupa ce utilizatorul a decis o data.
// Daca in viitor adaugam Google Analytics / Facebook Pixel, acele scripturi
// trebuie sa verifice `localStorage.getItem("weblex-cookie-consent") === "accepted"`
// inainte sa se incarce (sau sa asculte evenimentul "weblex-cookie-consent-change").
export default function CookieConsentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (!existing) {
        setVisible(true);
        // Impinge butonul flotant de WhatsApp mai sus, ca sa nu se suprapuna cu bara.
        document.documentElement.style.setProperty("--fab-bottom", "6.5rem");
      }
    } catch {
      // localStorage indisponibil (ex. mod privat cu restrictii) — nu blocam pagina.
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      window.dispatchEvent(new CustomEvent("weblex-cookie-consent-change", { detail: value }));
    } catch {
      // ignoram, doar ascundem bara
    }
    document.documentElement.style.setProperty("--fab-bottom", "1.5rem");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-cream/95 backdrop-blur">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-start gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/80">
          Folosim cookie-uri esentiale pentru functionarea site-ului si, optional, cookie-uri de analiza. Poti citi
          detalii in{" "}
          <Link href="/politica-de-cookie" className="text-brand underline hover:no-underline">
            politica de cookie
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
          >
            Doar esentiale
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-brand"
          >
            Accepta toate
          </button>
        </div>
      </div>
    </div>
  );
}
