import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/content/services";
import { StaggerItem } from "./RevealOnScroll";
import { ui, type Locale } from "@/content/i18n";

export default function ServiceCard({ service, locale = "ro" }: { service: Service; locale?: Locale }) {
  const t = ui[locale];
  // Pagina dedicata (landingHref) nu are inca varianta in engleza — nu trimitem
  // un vizitator care citeste in engleza spre o pagina scrisa integral in romana.
  // O aratam din nou aici cand pagina respectiva primeste si ea traducerea.
  const showLandingLink = locale === "ro" && service.landingHref;
  return (
    <StaggerItem>
      <div
        id={service.id}
        className="group h-full rounded-3xl border border-black/5 bg-white/70 p-8 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-soft"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm text-mist">{service.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{service.description}</p>
        {showLandingLink && (
          <Link
            href={service.landingHref!}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition group-hover:gap-1.5"
          >
            {t.serviceCardLink} <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </StaggerItem>
  );
}
