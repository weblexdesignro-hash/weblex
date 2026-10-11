import type { Project } from "@/content/projects";
import { StaggerItem } from "./RevealOnScroll";

export default function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <div className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink/10 to-brand/10">
        <div
          className="h-full w-full bg-cover bg-top transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-brand">{project.category}</p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">{project.title}</h3>
        {project.summary && <p className="mt-2 line-clamp-2 text-sm text-ink/70">{project.summary}</p>}
        {project.liveUrl && (
          <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition group-hover:gap-1.5">
            Vezi site-ul live <span aria-hidden>↗</span>
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
