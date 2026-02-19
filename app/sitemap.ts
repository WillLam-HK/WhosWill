import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://whos-will.vercel.app'

const paths = ['', '/skills', '/projects', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const path of paths) {
      const url = `${baseUrl}/${locale}${path}`.replace(/\/$/, '') || `${baseUrl}/${locale}`
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === '/contact' ? 'yearly' : 'monthly',
        priority: path === '' ? 1 : path === '/contact' ? 0.8 : 0.9,
      })
    }
  }
  return entries
}
