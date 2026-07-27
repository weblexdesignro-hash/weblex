"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import type { Testimonial } from "@/content/testimonials";

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + items.length) % items.length);
  };

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="flex justify-center gap-1 text-lime">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4 fill-current" />
        ))}
      </div>

      <div className="relative mt-6 min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-display text-xl leading-relaxed text-ink/85 sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-ink">{current.name}</p>
            <p className="text-xs text-mist">{current.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          aria-label="Testimonial anterior"
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:border-brand hover:text-brand"
        >
          <Icon name="arrow" className="h-4 w-4 rotate-180" />
        </button>
        <button
          aria-label="Testimonial urmator"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:border-brand hover:text-brand"
        >
          <Icon name="arrow" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
