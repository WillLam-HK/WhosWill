'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localeNames, type Locale } from '@/lib/i18n'

const locales: Locale[] = ['en', 'zh-Hant', 'zh-Hans']

type Props = {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname()

  // pathname is like /en/projects or /zh-Hant/skills; replace first segment with target locale
  const segments = pathname.split('/').filter(Boolean)
  const basePath = segments.length > 1 ? `/${segments.slice(1).join('/')}` : ''

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {locales.map((locale) => {
        const href = `/${locale}${basePath}`.replace(/\/$/, '') || `/${locale}`
        const isActive = currentLocale === locale
        return (
          <Link
            key={locale}
            href={href}
            className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-2 py-1.5 text-sm font-medium rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 ${
              isActive
                ? 'text-primary font-semibold bg-primary-50'
                : 'text-neutral-600 hover:text-primary hover:bg-neutral-100'
            }`}
            aria-current={isActive ? 'true' : undefined}
          >
            {localeNames[locale]}
          </Link>
        )
      })}
    </div>
  )
}
