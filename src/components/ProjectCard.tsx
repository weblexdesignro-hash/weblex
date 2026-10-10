import type { Project } from "@/content/projects";
import { StaggerItem } from "./RevealOnScroll";

export default function ProjectCard({ project }: { project: Project }) {
  const content = (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <div
        className="h-full w-full scale-100 bg-gradient-to-br from-ink/10 to-brand/10 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-xs font-medium uppercase tracking-wide text-lime">{project.category}</p>
        <p className="mt-1 font-display text-lg font-semibold text-white">{project.title}</p>
        <p className="mt-1 text-xs text-white/70">{project.summary}</p>
        {project.liveUrl && (
          <p className="mt-2 text-xs font-medium text-lime underline-offset-2 group-hover:underline">
            Vezi site-ul live ↗
          </p>
        )}
      </div>
    </div>
  );

  if (project.liveUrl) {
    return (
      <StaggerItem className="group relative overflow-hidden rounded-3xl bg-ink/5">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      </StaggerItem>
    );
  }

  return <StaggerItem className="group relative overflow-hidden rounded-3xl bg-ink/5">{content}</StaggerItem>;
}
