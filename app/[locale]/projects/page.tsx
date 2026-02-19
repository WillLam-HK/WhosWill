import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ProjectListWithModal from '@/components/ProjectListWithModal'
import { getProjectsWithTranslations } from '@/lib/projects-i18n'
import { getTranslations, isValidLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Projects — Will Lam',
    description: 'Mobile app projects by Will Lam. Swift, Kotlin, React Native, and AI-assisted development.',
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isValidLocale(localeParam)) return null
  const locale = localeParam as Locale
  const t = getTranslations(locale)
  const projects = getProjectsWithTranslations(locale)

  return (
    <ScrollReveal as="div" className="py-10 md:py-14">
      <div className="mb-10 md:mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.projects.portfolio}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">{t.projects.title}</h1>
        <p className="mt-2 text-neutral-600">{t.common.moreProjectsLater}</p>
      </div>
      <ProjectListWithModal projects={projects} common={t.common} />
    </ScrollReveal>
  )
}
