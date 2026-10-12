"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/content/i18n";

// <html lang="..."> e setat initial de layout.tsx (din header-ul x-locale pus
// de middleware.ts), dar layout.tsx nu se re-executa la o navigare client-side
// intre "/" si "/en" (acelasi layout) — vezi comentariul de la
// localeFromPathname() din @/content/i18n. Componenta asta corecteaza atributul
// direct in DOM, reactiv la fiecare schimbare de pathname.
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = localeFromPathname(pathname);
  }, [pathname]);

  return null;
}
