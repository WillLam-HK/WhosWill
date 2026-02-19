import { projects } from '@/data/projects'
import ProjectListWithModal from '@/components/ProjectListWithModal'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Will',
  description: 'Mobile app projects by Will. Swift, Kotlin, React Native, and AI-assisted development.',
}

export default function ProjectsPage() {
  return (
    <ScrollReveal as="div" className="py-10 md:py-14">
      <div className="mb-10 md:mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">Projects</h1>
      </div>
      <ProjectListWithModal projects={projects} />
    </ScrollReveal>
  )
}
