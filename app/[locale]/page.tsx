import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectListWithModal from '@/components/ProjectListWithModal'
import ScrollReveal from '@/components/ScrollReveal'
import { getProjectsWithTranslations } from '@/lib/projects-i18n'
import { getTranslations, isValidLocale, type Locale } from '@/lib/i18n'

const highlightedCount = 3

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isValidLocale(localeParam)) return null
  const locale = localeParam as Locale
  const t = getTranslations(locale)
  const projects = getProjectsWithTranslations(locale)
  const highlighted = projects.slice(0, highlightedCount)

  return (
    <>
      <Hero tagline={t.hero.tagline} />
      <ScrollReveal as="section" className="pt-14 md:pt-16" aria-labelledby="projects-heading">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.home.work}</span>
            <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mt-1">
              {t.home.featuredProjects}
            </h2>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark min-h-[44px] min-w-[44px] transition-colors duration-200 group"
          >
            {t.common.viewAll}
            <span className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden>→</span>
          </Link>
        </div>
        <ProjectListWithModal projects={highlighted} common={t.common} />
        <p className="mt-8 text-sm text-neutral-500">
          {t.common.moreProjectsSoon}
        </p>
      </ScrollReveal>
    </>
  )
}
