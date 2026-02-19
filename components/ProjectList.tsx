'use client'

import type { Project } from '@/data/projects'
import ProjectCard from './ProjectCard'
import ScrollReveal from './ScrollReveal'

const STAGGER_MS = 80

type Props = {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

export default function ProjectList({ projects, onProjectClick }: Props) {
  if (projects.length === 0) {
    return (
      <p className="text-neutral-600 py-8">Projects coming soon.</p>
    )
  }
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {projects.map((project, index) => (
        <ScrollReveal
          key={project.id}
          delay={index * STAGGER_MS}
          variant="fadeUp"
          duration={450}
        >
          <ProjectCard
            project={project}
            onViewDetails={onProjectClick}
          />
        </ScrollReveal>
      ))}
    </div>
  )
}
