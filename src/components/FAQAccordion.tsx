"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "@/content/faq";

export default function FAQAccordion({
  items,
  defaultOpenFirst = false,
}: {
  items: FaqItem[];
  defaultOpenFirst?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenFirst ? 0 : null);

  return (
    <div className="divide-y divide-black/5 overflow-hidden rounded-3xl border border-black/5 bg-white/70">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-black/[0.02]"
            >
              <span className="font-display text-base font-semibold text-ink">{item.question}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-3.5 w-3.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  // La fel ca la meniul mobil din Navbar: animam doar opacity + transform,
                  // nu "height" — evitam ca PageSpeed sa semnaleze "animatie necompusa"
                  // (height obliga la recalcul de layout la fiecare cadru).
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink/70">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
