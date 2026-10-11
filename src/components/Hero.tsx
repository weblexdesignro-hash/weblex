"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

// Incarcat dinamic (fara SSR) si deci intr-un chunk JS separat, descarcat/executat
// DUPA hidratarea initiala a paginii — globul de fundal e doar decorativ (nu
// contine text/continut necesar la primul randare) si desenul lui in canvas nu
// trebuie sa concureze cu JS-ul critic (hidratare, butoane, text) pentru firul
// principal. Reduce "JavaScript nefolosit la incarcare" si activitatile lungi
// pe firul principal semnalate de PageSpeed pe mobil.
const NetworkGlobeBackground = dynamic(() => import("./NetworkGlobeBackground"), { ssr: false });

type HeroProps = {
  heading: string;
  headingHighlight: string;
  subheading: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  experienceYears: number;
  projectsDelivered: number;
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
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-40 md:pt-48">
      {/* Fundal: glob animat + glow radial, in spatele continutului */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 38%, rgba(61,90,254,0.22) 0%, #141414 70%)",
        }}
      />
      <NetworkGlobeBackground />
      {/* Vinieta: intareste contrastul textului peste glob si face tranzitia catre sectiunea urmatoare */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(10,10,13,0.92) 0%, transparent 60%), radial-gradient(ellipse 48% 40% at 50% 40%, rgba(10,10,13,0.5) 0%, transparent 72%), linear-gradient(180deg, rgba(10,10,13,0.5) 0%, transparent 18%, transparent 75%, #141414 100%)",
        }}
      />

      <div className="container-px relative mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-cream/75 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_1px_rgba(180,244,97,0.8)]" />
          {experienceYears}+ ani experienta · {projectsDelivered}+ proiecte livrate
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
            href="/contact"
            className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            {ctaPrimaryLabel}
          </Link>
          <Link
            href="/portofoliu"
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
            <p className="mt-1 text-xs text-cream/50">proiecte finalizate</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              <AnimatedCounter value={experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-cream/50">ani experienta</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
              <AnimatedCounter value={100} suffix="%" />
            </p>
            <p className="mt-1 text-xs text-cream/50">responsive</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
