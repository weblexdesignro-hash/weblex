import Image from "next/image";
import type { Project } from "@/content/projects";
import { StaggerItem } from "./RevealOnScroll";
import { ui, type Locale } from "@/content/i18n";

export default function ProjectCard({ project, locale = "ro" }: { project: Project; locale?: Locale }) {
  const t = ui[locale];
  const inner = (
    <div className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink/10 to-brand/10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-brand">{project.category}</p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">{project.title}</h3>
        {project.summary && <p className="mt-2 line-clamp-2 text-sm text-ink/70">{project.summary}</p>}
        {project.liveUrl && (
          <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition group-hover:gap-1.5">
            {t.projectCardLink} <span aria-hidden>↗</span>
          </p>
        )}
      </div>
    </div>
  );

  if (project.liveUrl) {
    return (
      <StaggerItem className="h-full">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
          {inner}
        </a>
      </StaggerItem>
    );
  }

  return <StaggerItem className="h-full">{inner}</StaggerItem>;
}
