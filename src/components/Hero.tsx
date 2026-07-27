"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pb-24 pt-40 md:pt-48">
      <div className="container-px mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs font-medium text-mist"
        >
          {site.experienceYears}+ ani experienta · {site.projectsDelivered}+ proiecte livrate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Site-uri web si magazine online
          <br className="hidden sm:block" /> care aduc <span className="text-brand">clienti reali.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-lg text-mist"
        >
          Proiectam si construim prezente online rapide, moderne si optimizate pentru
          conversii — de la primul brief pana la mentenanta continua.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-brand"
          >
            Cere oferta
          </Link>
          <Link
            href="/portofoliu"
            className="rounded-full border border-black/10 bg-white/70 px-7 py-3.5 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
          >
            Vezi portofoliul
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-black/5 pt-10"
        >
          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              <AnimatedCounter value={site.projectsDelivered} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-mist">proiecte finalizate</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              <AnimatedCounter value={site.experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-mist">ani experienta</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              <AnimatedCounter value={100} suffix="%" />
            </p>
            <p className="mt-1 text-xs text-mist">responsive</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
