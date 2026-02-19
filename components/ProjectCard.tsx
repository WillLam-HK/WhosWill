'use client'

import type { Project } from '@/data/projects'
import type { Messages } from '@/lib/i18n'

type Props = {
  project: Project
  onViewDetails?: (project: Project) => void
  common: Messages['common']
}

export default function ProjectCard({ project, onViewDetails, common }: Props) {
  const thumbnail = project.images?.[0]
  const awardTeaser = project.awards?.[0]
  const featureTeaser = project.features?.[0]

  return (
    <article
      className="group relative rounded-2xl border border-neutral-200/90 bg-white overflow-hidden shadow-soft transition-all duration-300 ease-out hover:shadow-cardHover hover:-translate-y-1 hover:border-primary-100"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Accent line on hover */}
      <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors duration-300 z-10" aria-hidden />

      {thumbnail && (
        <div className="relative w-full aspect-video bg-neutral-100 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="p-6 md:p-8 pl-6">
        <h2 id={`project-${project.id}-title`} className="text-xl md:text-2xl font-semibold text-neutral-900 mb-2 tracking-tight">
          {project.title}
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        {(awardTeaser || featureTeaser) && (
          <ul className="mb-4 space-y-1 text-sm text-neutral-500">
            {awardTeaser && (
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 shrink-0" aria-hidden>🏆</span>
                <span className="line-clamp-2">{awardTeaser}</span>
              </li>
            )}
            {featureTeaser && !awardTeaser && (
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5 shrink-0" aria-hidden>✓</span>
                <span className="line-clamp-2">{featureTeaser}</span>
              </li>
            )}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-lg border border-neutral-200/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {onViewDetails && (
            <button
              type="button"
              onClick={() => onViewDetails(project)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium shadow-button hover:bg-primary-dark hover:shadow-buttonHover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 active:scale-[0.98]"
            >
              {common.viewDetails}
            </button>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary-dark min-h-[44px] min-w-[44px] inline-flex items-center transition-colors duration-200"
            >
              {common.github}
            </a>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary-dark min-h-[44px] min-w-[44px] inline-flex items-center transition-colors duration-200"
            >
              {common.video}
            </a>
          )}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary-dark min-h-[44px] min-w-[44px] inline-flex items-center transition-colors duration-200"
            >
              {common.link}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
