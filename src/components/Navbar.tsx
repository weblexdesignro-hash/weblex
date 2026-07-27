"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-soft border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-brand"
          >
            Cere oferta
          </Link>
        </div>

        <button
          aria-label="Deschide meniul"
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                Cere oferta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
