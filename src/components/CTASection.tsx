import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import { ui, contactHref, type Locale } from "@/content/i18n";

export default function CTASection({ locale = "ro" }: { locale?: Locale }) {
  const t = ui[locale];
  return (
    <section className="container-px mx-auto max-w-7xl py-8">
      <RevealOnScroll>
        <div className="gradient-hero relative overflow-hidden rounded-4xl bg-ink px-8 py-20 text-center text-cream">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-lime/10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              {t.ctaHeadingLine1} <br className="hidden sm:block" /> {t.ctaHeadingLine2}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/70">{t.ctaText}</p>
            <Link
              href={contactHref(locale)}
              className="mt-8 inline-block rounded-full bg-lime px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
