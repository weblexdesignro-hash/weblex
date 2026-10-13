"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "./AnimatedCounter";
import { ui, contactHref, type Locale } from "@/content/i18n";
import type { NetworkGlobeHandle } from "./NetworkGlobeBackground";

// Apel sigur de repetat (gsap il ignora dupa prima inregistrare) — il facem
// si aici, nu doar in SmoothScrollProvider, ca Hero sa functioneze corect
// chiar daca ar fi folosit vreodata in afara acelui provider.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Incarcat dinamic (fara SSR) si deci intr-un chunk JS separat, descarcat/executat
// DUPA hidratarea initiala a paginii — globul de fundal e doar decorativ (nu
// contine text/continut necesar la primul randare) si desenul lui in canvas nu
// trebuie sa concureze cu JS-ul critic (hidratare, butoane, text) pentru firul
// principal.
const NetworkGlobeBackground = dynamic(() => import("./NetworkGlobeBackground"), { ssr: false });

type HeroProps = {
  heading: string;
  headingHighlight: string;
  subheading: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  experienceYears: number;
  projectsDelivered: number;
  locale?: Locale;
};

// Hero cu fundal animat: un "glob" de puncte conectate (NetworkGlobeBackground),
// desenat 100% in canvas/JS, nu printr-un fisier video — simbolizeaza firmele
// conectate la nivel global cu care lucram, fara sa adauge greutate la
// incarcarea paginii. Vezi NetworkGlobeBackground.tsx pentru detalii.
export default function Hero({
  heading,
  headingHighlight,
  subheading,
  ctaPrimaryLabel,
  ctaSecondaryLabel,
  experienceYears,
  projectsDelivered,
  locale = "ro",
}: HeroProps) {
  const t = ui[locale];
  // Globul animat ruleaza un desen in canvas pe fiecare cadru (requestAnimationFrame),
  // non-stop, cat timp pagina e deschisa — pe un telefon (CPU mult mai slab decat
  // un laptop, plus throttling-ul aplicat de PageSpeed la testare) asta a devenit
  // principalul consumator de timp pe firul principal ("Minimizeaza procesarea
  // firului principal", scorul de viteza pe Mobil a scazut din cauza asta).
  // Pe desktop efectul ramane neschimbat; pe ecrane de telefon (sub 768px) afisam
  // doar glow-ul static de mai jos — vizual tot arata bine, fara costul de canvas.
  const [showGlobe, setShowGlobe] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setShowGlobe(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setShowGlobe(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // ---- "Tunel" la scroll: Hero ramane fixat pe ecran cat timp derulezi primul
  // ecran, iar globul "accelereaza" spre privitor pana se stinge, dand loc
  // sectiunii urmatoare — vezi NetworkGlobeBackground.tsx pentru desenul in
  // canvas. Activ doar pe ecrane >= 768px si doar daca utilizatorul nu a cerut
  // "prefers-reduced-motion": pe mobil si pentru acesti utilizatori, Hero se
  // comporta normal (fara fixare la scroll), exact ca inainte.
  const sectionRef = useRef<HTMLElement | null>(null);
  const textWrapRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<NetworkGlobeHandle | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      if (!section) return;

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + Math.round(window.innerHeight * 0.75),
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          globeRef.current?.setWarp(self.progress);
          const textWrap = textWrapRef.current;
          if (textWrap) {
            const textP = Math.min(self.progress / 0.45, 1);
            gsap.set(textWrap, {
              opacity: 1 - textP,
              y: -textP * 70,
              scale: 1 - textP * 0.1,
              pointerEvents: textP > 0.9 ? "none" : "auto",
            });
          }
        },
      });

      return () => {
        st.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink pb-24 pt-40 md:pt-48">
      {/* Fundal: glob animat + glow radial, in spatele continutului */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 38%, rgba(61,90,254,0.22) 0%, #141414 70%)",
        }}
      />
      {showGlobe && <NetworkGlobeBackground ref={globeRef} />}
      {/* Vinieta: intareste contrastul textului peste glob si face tranzitia catre sectiunea urmatoare */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(10,10,13,0.92) 0%, transparent 60%), radial-gradient(ellipse 48% 40% at 50% 40%, rgba(10,10,13,0.5) 0%, transparent 72%), linear-gradient(180deg, rgba(10,10,13,0.5) 0%, transparent 18%, transparent 75%, #141414 100%)",
        }}
      />

      <div ref={textWrapRef} className="container-px relative mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-cream/75 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_1px_rgba(180,244,97,0.8)]" />
          {t.heroBadge(experienceYears, projectsDelivered)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
        >
          {heading}
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-brand/70 via-[#8fa4ff] to-lime bg-clip-text text-transparent">
            {headingHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-lg text-cream/65"
        >
          {subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href={contactHref(locale)}
            className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            {ctaPrimaryLabel}
          </Link>
          <Link
            href={locale === "en" ? "/en/portofoliu" : "/portofoliu"}
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur-sm transition hover:border-white/40"
          >
            {ctaSecondaryLabel}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10"
        >
          <div>
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              <AnimatedCounter value={projectsDelivered} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-cream/50">{t.statProjects}</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              <AnimatedCounter value={experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-cream/50">{t.statExperience}</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              <AnimatedCounter value={100} suffix="%" />
            </p>
            <p className="mt-1 text-xs text-cream/50">{t.statResponsive}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
