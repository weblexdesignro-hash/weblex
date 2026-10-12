import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup } from "@/components/RevealOnScroll";
import { getProjects, getPageTexts } from "@/lib/payload-data";
import { ui } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Portfolio — Real website and online store projects",
  description:
    "Over 400 delivered projects: presentation websites, online stores and software applications built by Weblex Design for businesses in Romania and abroad.",
  alternates: { canonical: "/en/portofoliu", languages: { "ro-RO": "/portofoliu", "en-US": "/en/portofoliu" } },
  openGraph: { locale: "en_US" },
};

export const dynamic = "force-dynamic";

export default async function PortofoliuPageEn() {
  const t = ui.en;
  const [projects, texts] = await Promise.all([getProjects("en"), getPageTexts("en")]);

  return (
    <>
      <section className="container-px mx-auto max-w-5xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">{t.portofoliuEyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{texts.portofoliu.heading}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">{texts.portofoliu.subheading}</p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} locale="en" />
          ))}
        </StaggerGroup>
      </section>

      <CTASection locale="en" />
    </>
  );
}
