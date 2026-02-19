import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { getHtmlLang, isValidLocale, type Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Will Lam — Mobile App Developer',
  description:
    'Portfolio of Will Lam. iOS, Android, and cross-platform mobile development with Swift, Kotlin, and React Native.',
  openGraph: {
    title: 'Will Lam — Mobile App Developer',
    description:
      'Portfolio of Will Lam. iOS, Android, and cross-platform mobile development with Swift, Kotlin, and React Native.',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const localeHeader = headersList.get('x-next-locale') || 'en'
  const locale: Locale = isValidLocale(localeHeader) ? localeHeader : 'en'
  const lang = getHtmlLang(locale)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://whos-will.vercel.app'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Will Lam',
        jobTitle: 'Mobile App Developer',
        description: 'iOS, Android, and cross-platform mobile development with Swift, Kotlin, and React Native.',
        url: siteUrl,
        knowsAbout: ['Swift', 'Kotlin', 'React Native', 'AI-assisted coding'],
      },
      {
        '@type': 'WebSite',
        name: 'Will Lam — Mobile App Developer',
        description: 'Portfolio of Will Lam. iOS, Android, and cross-platform mobile development.',
        url: siteUrl,
        publisher: { '@type': 'Person', name: 'Will Lam' },
      },
    ],
  }

  return (
    <html lang={lang}>
      <body className="min-h-screen antialiased bg-gradient-to-b from-neutral-50 via-white to-neutral-50/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
