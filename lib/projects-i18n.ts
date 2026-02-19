import type { Project } from '@/data/projects'
import { projects as dataProjects } from '@/data/projects'
import { getTranslations, type Locale } from '@/lib/i18n'

const projectIdToKey: Record<string, string> = {
  '1': 'smartrehab',
  '2': 'airGuitar',
}

/**
 * Returns projects with title, description, features, and awards from the current locale's messages.
 * Falls back to data values when a translation is missing.
 */
export function getProjectsWithTranslations(locale: Locale): Project[] {
  const t = getTranslations(locale)
  const data = t.projectsData as {
    smartrehab?: { title: string; description: string; features?: string[]; awards?: string[] }
    airGuitar?: { title: string; description: string; features?: string[]; awards?: string[] }
  }

  return dataProjects.map((p) => {
    const key = projectIdToKey[p.id]
    const translated = key ? data[key as keyof typeof data] : undefined
    if (!translated) return p
    return {
      ...p,
      title: translated.title ?? p.title,
      description: translated.description ?? p.description,
      features: translated.features?.length ? translated.features : p.features,
      awards: translated.awards?.length ? translated.awards : p.awards,
    }
  })
}
