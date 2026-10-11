import Link from "next/link";
import Icon from "./Icon";
import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "./RevealOnScroll";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";
import type { LandingPage } from "@/content/landing-pages";
import type { LocalPageContent } from "@/content/local-landing";
import type { City } from "@/content/cities";

// Sablon pentru paginile locale de SEO (ex: /creare-site-web-prezentare/cluj-napoca).
// Partea de sus (Hero, "De ce [serviciu] in [oras]") e unica per oras — vine din
// LocalPageContent (src/content/local-landing.ts). Beneficii/Proces/De ce noi sunt
// preluate din pagina de serviciu "parinte" (aceleasi fapte, indiferent de oras).
// FAQ combina 1-2 intrebari locale cu cateva din FAQ-ul general al serviciului.
export default function LocalLandingTemplate({
  service,
  city,
  content,
  path,
}: {
  service: LandingPage;
  city: City;
  content: LocalPageContent;
  path: string;
}) {
  const combinedFaq = [...content.localFaq, ...service.faq.slice(0, 2)];
  const faqJsonLd = buildFaqJsonLd(combinedFaq);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Acasa", url: "https://weblexdesign.ro" },
    { name: "Servicii", url: "https://weblexdesign.ro/servicii" },
    { name: service.breadcrumbName, url: `https://weblexdesign.ro${service.path}` },
    { name: city.name, url: `https://weblexdesign.ro${path}` },
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

      {/* Hero local */}
      <section className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <nav aria-label="breadcrumb" className="text-xs text-mist">
            <Link href="/" className="hover:text-brand">Acasa</Link>
            <span className="mx-2">/</span>
            <Link href={service.path} className="hover:text-brand">{service.breadcrumbName}</Link>
            <span className="mx-2">/</span>
            <span className="text-ink/70">{city.name}</span>
          </nav>
          <p className="mt-4 text-sm font-medium text-brand">{content.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{content.h1}</h1>
          {content.introParagraphs.map((p, i) => (
            <p key={i} className="mx-auto mt-4 max-w-2xl text-mist">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition hover:bg-brand"
            >
              Cere o oferta pentru {city.name}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* De ce [serviciu] in [oras] — unic per pagina */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{content.localWhyHeading}</h2>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-3">
          {content.localWhyPoints.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-3xl border border-black/5 bg-white/70 p-7 shadow-card">
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Beneficii — reutilizate din pagina de serviciu parinte */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{service.beneficiiHeading}</h2>
          <p className="mt-3 text-mist">{service.beneficiiSubheading}</p>
        </RevealOnScroll>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.beneficii.map((b) => (
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

      {/* Proces de lucru — reutilizat */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{service.procesHeading}</h2>
        </RevealOnScroll>
        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {service.proces.map((step, i) => (
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

      {/* FAQ: local + general */}
      <section className="container-px mx-auto max-w-3xl py-16">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Intrebari frecvente — {service.breadcrumbName.toLowerCase()} in {city.name}
          </h2>
        </RevealOnScroll>
        <div className="mt-10">
          <FAQAccordion items={combinedFaq} />
        </div>
        <p className="mt-6 text-center text-sm text-mist">
          Vezi si pagina generala de{" "}
          <Link href={service.path} className="text-brand hover:underline">
            {service.breadcrumbName.toLowerCase()}
          </Link>
          , sau{" "}
          <Link href="/intrebari-frecvente" className="text-brand hover:underline">
            toate intrebarile frecvente
          </Link>
          .
        </p>
      </section>

      <CTASection />
    </>
  );
}
