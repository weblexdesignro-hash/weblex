import Link from "next/link";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "./RevealOnScroll";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";
import type { LandingPage } from "@/content/landing-pages";
import type { City } from "@/content/cities";

// Sablon comun pentru cele 4 pagini de servicii dedicate (creare site web,
// creare magazin online, software custom, digitalizare). Fiecare pagina isi
// aduce propriul continut din src/content/landing-pages.ts; aici e doar
// structura vizuala (Hero, Beneficii, Proces, De ce noi, FAQ, CTA) + JSON-LD.
//
// `localCities` (optional) adauga o sectiune cu linkuri catre paginile locale
// de SEO (/<slug-serviciu>/<oras>) — doar pentru cele 4 servicii care au si
// variante pe oras. Esentiala pentru ca Google sa descopere acele pagini prin
// linkuri interne, nu doar prin sitemap.
export default function LandingPageTemplate({ page, localCities }: { page: LandingPage; localCities?: City[] }) {
  const faqJsonLd = buildFaqJsonLd(page.faq);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Acasa", url: "https://weblexdesign.ro" },
    { name: "Servicii", url: "https://weblexdesign.ro/servicii" },
    { name: page.breadcrumbName, url: `https://weblexdesign.ro${page.path}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="container-px mx-auto max-w-5xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <nav aria-label="breadcrumb" className="text-xs text-mist">
            <Link href="/" className="hover:text-brand">Acasa</Link>
            <span className="mx-2">/</span>
            <Link href="/servicii" className="hover:text-brand">Servicii</Link>
            <span className="mx-2">/</span>
            <span className="text-ink/70">{page.breadcrumbName}</span>
          </nav>
          <p className="mt-4 text-sm font-medium text-brand">{page.heroEyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{page.h1}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">{page.heroSubheading}</p>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-col items-start gap-2 text-left sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            {page.heroBullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-ink/80">
                <Icon name="check" className="h-4 w-4 shrink-0 text-brand" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-brand"
            >
              {page.ctaButtonLabel}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* Beneficii */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{page.beneficiiHeading}</h2>
          <p className="mt-3 text-mist">{page.beneficiiSubheading}</p>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {page.beneficii.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full rounded-3xl border border-black/5 bg-white/70 p-7 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon name={b.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{b.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Proces de lucru */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{page.procesHeading}</h2>
        </RevealOnScroll>
        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {page.proces.map((step, i) => (
            <RevealOnScroll key={step.title} delay={i * 0.08} className="relative">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="font-display text-3xl font-semibold text-brand/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="hidden h-px flex-1 bg-black/10 md:mt-6 md:block" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-mist">{step.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* De ce noi */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{page.deceNoiHeading}</h2>
          <p className="mt-3 text-mist">{page.deceNoiSubheading}</p>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {page.deceNoi.map((d) => (
            <StaggerItem key={d.title}>
              <div className="h-full rounded-3xl border border-black/5 bg-white/70 p-7 shadow-card">
                <h3 className="font-display text-base font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{d.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Orase deservite — linkuri catre paginile locale, doar daca exista */}
      {localCities && localCities.length > 0 && (
        <section className="container-px mx-auto max-w-5xl py-16">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {page.breadcrumbName} in orasul tau
            </h2>
            <p className="mt-3 text-mist">
              Lucram integral online cu clienti din toata tara — iata cateva orase in care avem cerere constanta.
            </p>
          </RevealOnScroll>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {localCities.map((city) => (
              <Link
                key={city.slug}
                href={`${page.path}/${city.slug}`}
                className="rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink/80 transition hover:border-brand hover:text-brand"
              >
                {page.breadcrumbName} {city.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ specific paginii */}
      <section className="container-px mx-auto max-w-3xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{page.faqHeading}</h2>
        </RevealOnScroll>
        <div className="mt-10">
          <FAQAccordion items={page.faq} />
        </div>
        <p className="mt-6 text-center text-sm text-mist">
          Mai multe intrebari? Vezi <Link href="/intrebari-frecvente" className="text-brand hover:underline">pagina completa de intrebari frecvente</Link>.
        </p>
      </section>

      <CTASection />
    </>
  );
}
