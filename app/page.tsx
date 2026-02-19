import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectListWithModal from '@/components/ProjectListWithModal'
import { projects } from '@/data/projects'
import ScrollReveal from '@/components/ScrollReveal'

const highlightedCount = 3

export default function HomePage() {
  const highlighted = projects.slice(0, highlightedCount)
  return (
    <>
      <Hero />
      <ScrollReveal as="section" className="pt-14 md:pt-16" aria-labelledby="projects-heading">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Work</span>
            <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-1">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark min-h-[44px] min-w-[44px] transition-colors duration-200 group"
          >
            View all
            <span className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden>→</span>
          </Link>
        </div>
        <ProjectListWithModal projects={highlighted} />
      </ScrollReveal>
    </>
  )
}
