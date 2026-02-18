import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="border-b border-neutral-200 pb-8 last:border-b-0"
      aria-labelledby={`project-${project.id}-title`}
    >
      <h2 id={`project-${project.id}-title`} className="text-xl font-semibold text-neutral-900 mb-1">
        {project.title}
      </h2>
      <p className="text-neutral-600 text-base leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      {(project.githubUrl || project.youtubeUrl || project.externalUrl) && (
        <div className="mt-3 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center"
            >
              GitHub
            </a>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center"
            >
              Video
            </a>
          )}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center"
            >
              Link
            </a>
          )}
        </div>
      )}
    </article>
  )
}
