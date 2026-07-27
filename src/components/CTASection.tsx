import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-8">
      <RevealOnScroll>
        <div className="gradient-hero relative overflow-hidden rounded-4xl bg-ink px-8 py-20 text-center text-cream">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-lime/10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              Hai sa construim <br className="hidden sm:block" /> urmatorul tau proiect online.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/70">
              Raspundem in maximum o zi lucratoare cu o oferta personalizata.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-lime px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Cere oferta personalizata
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
