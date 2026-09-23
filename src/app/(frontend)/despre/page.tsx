import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { getPageTexts } from "@/lib/payload-data";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Weblex Design — echipa din spatele site-urilor si magazinelor online.",
};

export default async function DesprePage() {
  const texts = await getPageTexts();
  const { despre, stats } = texts;

  return (
    <>
      <section className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Despre noi</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{despre.heading}</h1>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-4xl pb-24">
        <RevealOnScroll className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>{despre.paragraph1}</p>
          <p>{despre.paragraph2}</p>
          <p>{despre.paragraph3}</p>
        </RevealOnScroll>

        <StaggerGroup className="mt-16 grid grid-cols-3 gap-8 border-t border-black/5 pt-10 text-center">
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">
              <AnimatedCounter value={stats.projectsDelivered} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-mist">proiecte finalizate</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">
              <AnimatedCounter value={stats.experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-mist">ani experienta</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">{stats.since}</p>
            <p className="mt-1 text-sm text-mist">anul infiintarii</p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <CTASection />
    </>
  );
}
