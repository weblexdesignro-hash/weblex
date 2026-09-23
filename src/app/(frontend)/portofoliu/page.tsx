import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup } from "@/components/RevealOnScroll";
import { getProjects, getPageTexts } from "@/lib/payload-data";

export const metadata: Metadata = {
  title: "Portofoliu",
  description: "Proiecte de site-uri web si magazine online realizate de Weblex Design.",
};

export default async function PortofoliuPage() {
  const [projects, texts] = await Promise.all([getProjects(), getPageTexts()]);

  return (
    <>
      <section className="container-px mx-auto max-w-5xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Portofoliu</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{texts.portofoliu.heading}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-mist">{texts.portofoliu.subheading}</p>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </StaggerGroup>
      </section>

      <CTASection />
    </>
  );
}
