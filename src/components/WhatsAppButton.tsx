"use client";

import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ui, type Locale, localeFromPathname } from "@/content/i18n";

// Buton flotant de WhatsApp, vizibil pe toate paginile (adaugat in layout.tsx).
// Foloseste acelasi numar de telefon afisat deja in header/footer/contact.
const whatsappDigits = site.phone.replace(/[^\d]/g, ""); // "+40 745 931 326" -> "40745931326"

function buildHref(locale: Locale) {
  const message =
    locale === "en" ? "Hello! I'd like a quote for a new project." : "Buna! As vrea o oferta pentru un proiect nou.";
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}

// Nu mai primeste `locale` ca prop din layout.tsx — vezi comentariul de la
// localeFromPathname() din @/content/i18n.
export default function WhatsAppButton() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = ui[locale];
  return (
    <a
      href={buildHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappLabel}
      // bottom e un CSS var (vezi globals.css) ca sa poata fi impinsa in sus de
      // CookieConsentBar cat timp bara de cookie-uri e vizibila, fara suprapunere.
      style={{ bottom: "var(--fab-bottom, 1.5rem)" }}
      className="group fixed right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-[transform,box-shadow,bottom] duration-300 hover:scale-105 hover:shadow-lg"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.27-1.38a9.9 9.9 0 004.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.1h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.2 8.2 0 01-1.26-4.4c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 012.42 5.83c0 4.55-3.7 8.26-8.25 8.26zm4.52-6.19c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" />
      </svg>
    </a>
  );
}
