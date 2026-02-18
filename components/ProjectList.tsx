import type { Project } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="text-neutral-600 py-8">Projects coming soon.</p>
    )
  }
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
