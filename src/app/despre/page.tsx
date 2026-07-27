import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Weblex Design — echipa din spatele site-urilor si magazinelor online.",
};

export default function DesprePage() {
  return (
    <>
      <section className="container-px mx-auto max-w-4xl pb-16 pt-40 text-center">
        <RevealOnScroll>
          <p className="text-sm font-medium text-brand">Despre noi</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Din {site.since}, construim prezente online care functioneaza cu adevarat
          </h1>
        </RevealOnScroll>
      </section>

      <section className="container-px mx-auto max-w-4xl pb-24">
        <RevealOnScroll className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Weblex Design a fost infiintata in {site.since}, dar echipa din spate are peste{" "}
            {site.experienceYears} ani de experienta in dezvoltare web. De atunci, ne-am axat
            constant pe un singur lucru: sa oferim clientilor nostri calitate si profesionalism,
            nu doar un site „care arata bine”.
          </p>
          <p>
            Am construit site-uri de prezentare pentru afaceri locale, restaurante, pensiuni si
            hoteluri, si magazine online complete — cu plata ramburs, card sau transfer bancar —
            pentru comercianti care vor sa vanda online fara batai de cap tehnice.
          </p>
          <p>
            Pana acum am finalizat peste {site.projectsDelivered} de proiecte, pastrand aceeasi
            echipa alaturi de client de la primul brief pana la lansare — si dupa, prin
            mentenanta continua.
          </p>
        </RevealOnScroll>

        <StaggerGroup className="mt-16 grid grid-cols-3 gap-8 border-t border-black/5 pt-10 text-center">
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">
              <AnimatedCounter value={site.projectsDelivered} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-mist">proiecte finalizate</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">
              <AnimatedCounter value={site.experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-mist">ani experienta</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-display text-4xl font-semibold">{site.since}</p>
            <p className="mt-1 text-sm text-mist">anul infiintarii</p>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <CTASection />
    </>
  );
}
