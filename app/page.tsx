import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'
import { projects } from '@/data/projects'

const highlightedCount = 3

export default function HomePage() {
  const highlighted = projects.slice(0, highlightedCount)
  return (
    <>
      <Hero />
      <section className="pt-14" aria-labelledby="projects-heading">
        <div className="flex items-center justify-between mb-6">
          <h2 id="projects-heading" className="text-xl font-semibold text-neutral-900">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-primary hover:underline min-h-[44px] min-w-[44px] flex items-center"
          >
            View all
          </Link>
        </div>
        <ProjectList projects={highlighted} />
      </section>
    </>
  )
}
