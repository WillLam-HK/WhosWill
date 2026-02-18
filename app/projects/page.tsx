import { projects } from '@/data/projects'
import ProjectList from '@/components/ProjectList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Will',
  description: 'Mobile app projects by Will. Swift, Kotlin, React Native, and AI-assisted development.',
}

export default function ProjectsPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-neutral-900 mb-8">Projects</h1>
      <ProjectList projects={projects} />
    </div>
  )
}
