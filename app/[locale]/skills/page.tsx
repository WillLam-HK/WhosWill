import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import {
  skillCategories,
  languages,
  stats,
} from '@/data/skills'
import { getTranslations, isValidLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  return {
    title: 'Skills — Will Lam',
    description: 'Skills and experience of Will Lam: mobile development (React Native, Swift, Kotlin), AI & computer vision, web and backend.',
  }
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-neutral-800">{name}</span>
        <span className="text-neutral-500 tabular-nums">{level}%</span>
      </div>
      <div className="h-2.5 bg-neutral-100 rounded-full overflow-hidden" role="presentation">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out min-w-[0.5rem]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isValidLocale(localeParam)) return null
  const locale = localeParam as Locale
  const t = getTranslations(locale)
  const experience = t.skills.experience
  const categoriesMap = t.skills.categories as Record<string, string>
  const languageNames = (t.skills as { languageNames?: Record<string, string> }).languageNames ?? {}
  const proficiencyMap = t.skills.languageProficiency as Record<string, string>

  return (
    <ScrollReveal as="div" className="py-10 md:py-14" variant="fadeUp">
      <div className="mb-10 md:mb-12">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.skills.profile}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
          {t.skills.title}
        </h1>
        <p className="text-neutral-600 mt-2 max-w-xl">
          {t.skills.intro}
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">{t.skills.overview}</h2>
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-soft">
          <p className="text-3xl font-bold text-primary">{stats.yearsExperience}+</p>
          <p className="text-sm text-neutral-600 mt-0.5">{t.skills.yearsExperience}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-soft">
          <p className="text-3xl font-bold text-primary">{skillCategories.reduce((acc, c) => acc + c.items.length, 0)}</p>
          <p className="text-sm text-neutral-600 mt-0.5">{t.skills.technicalSkills}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-soft sm:col-span-2 lg:col-span-1">
          <p className="text-lg font-bold text-neutral-900">HKU</p>
          <p className="text-sm text-neutral-600 mt-0.5">{t.skills.education}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="sr-only">{t.skills.overview}</h2>
        {skillCategories.map((category) => (
          <div
            key={category.key}
            className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">{categoriesMap[category.key] ?? category.title}</h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <SkillBar key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-xl font-semibold text-neutral-900 mb-4">
          {t.skills.experienceTitle}
        </h2>
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-soft">
          <ul className="space-y-4">
            {experience.map((job, i) => (
              <li key={`${job.company}-${i}`} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-neutral-900">{job.role}</p>
                  <p className="text-sm text-neutral-600">{job.company}</p>
                </div>
                <div className="text-sm text-neutral-500 shrink-0">
                  <span>{job.period}</span>
                  {job.duration && <span className="ml-2">· {job.duration}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="text-xl font-semibold text-neutral-900 mb-4">
          {t.skills.languagesTitle}
        </h2>
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-soft">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div key={lang.nameKey} className="flex flex-col">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium text-neutral-900">{languageNames[lang.nameKey] ?? lang.name}</span>
                  <span className="text-xs text-neutral-500">{proficiencyMap[lang.proficiencyKey] ?? lang.proficiency}</span>
                </div>
                <div className="h-2 bg-neutral-100 rounded-full mt-2 overflow-hidden" role="presentation">
                  <div
                    className="h-full bg-primary/80 rounded-full"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="mt-8 text-sm text-neutral-500">
        {t.skills.profileSource}{' '}
        <a
          href="https://www.linkedin.com/in/willlamwunyin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {t.skills.linkedInProfile}
        </a>
      </p>
    </ScrollReveal>
  )
}
