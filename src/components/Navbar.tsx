"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getNav, ui, PATH_RO_TO_EN, PATH_EN_TO_RO, type Locale } from "@/content/i18n";
import Logo from "./Logo";

export default function Navbar({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getNav(locale);
  const t = ui[locale];
  // Calea echivalenta in cealalta limba pentru pagina curenta — daca nu exista
  // inca o varianta tradusa, trimitem pur si simplu spre homepage in limba
  // respectiva (mai bine decat un link stricat).
  const otherLocaleHref =
    locale === "ro" ? PATH_RO_TO_EN[pathname] || "/en" : PATH_EN_TO_RO[pathname] || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Homepage (in ambele limbi: "/" si "/en") are un Hero cu fundal intunecat
  // (glob animat) — cat timp nu s-a facut scroll peste el, navbar-ul foloseste
  // text deschis la culoare, altfel ar fi ilizibil (text inchis pe fundal
  // inchis). Pe restul paginilor (fundal deschis) sau dupa scroll (bara glass
  // alba), ramane ca inainte.
  const isHomepage = pathname === "/" || pathname === "/en";
  const lightMode = isHomepage && !scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-soft border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href={locale === "en" ? "/en" : "/"} aria-label="Weblex Design">
          <Logo textClassName={`font-display text-lg font-semibold tracking-tight ${lightMode ? "text-cream" : "text-ink"}`} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                lightMode ? "text-cream/80 hover:text-lime" : "text-ink/80 hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href={otherLocaleHref}
            className={`text-sm font-medium transition ${
              lightMode ? "text-cream/60 hover:text-lime" : "text-ink/50 hover:text-brand"
            }`}
          >
            {t.switchLangTo}
          </Link>
          <Link
            href="/contact"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              lightMode ? "bg-lime text-ink hover:bg-white" : "bg-ink text-cream hover:bg-brand"
            }`}
          >
            {t.getQuote}
          </Link>
        </div>

        <button
          aria-label={t.openMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 transition ${lightMode ? "bg-cream" : "bg-ink"} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 transition ${lightMode ? "bg-cream" : "bg-ink"} ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 transition ${lightMode ? "bg-cream" : "bg-ink"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            // Animam doar opacity si transform (y) — nu "height". Animarea lui "height"
            // obliga browserul sa recalculeze layout-ul la fiecare cadru (nu poate fi
            // compusa doar din GPU), ceea ce PageSpeed semnaleaza ca "animatie necompusa"
            // si poate incetini randarea pe mobil. La montare/demontare elementul isi ia
            // oricum inaltimea naturala instant (fara sa fie animata), doar aparitia
            // vizuala (opacity + usoara alunecare) e animata.
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden glass md:hidden"
          >
            <div className="container-px mx-auto flex flex-col gap-4 py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-cream"
              >
                {t.getQuote}
              </Link>
              <Link
                href={otherLocaleHref}
                onClick={() => setOpen(false)}
                className="text-center text-sm font-medium text-ink/50"
              >
                {t.switchLangTo}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
