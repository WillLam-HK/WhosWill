'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Messages } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

type Props = {
  locale: Locale
  t: Messages
}

const linkKeys = ['home', 'skills', 'projects', 'contact'] as const
const pathByKey: Record<(typeof linkKeys)[number], string> = {
  home: '',
  skills: '/skills',
  projects: '/projects',
  contact: '/contact',
}

export default function Nav({ locale, t }: Props) {
  const pathname = usePathname()

  return (
    <nav
      className="flex justify-center gap-10 py-2"
      aria-label="Main navigation"
    >
      {linkKeys.map((key) => {
        const path = pathByKey[key]
        const href = `/${locale}${path}`.replace(/\/$/, '') || `/${locale}`
        const label = t.nav[key]
        const isActive =
          pathname === href ||
          (path !== '' && pathname.startsWith(`/${locale}${path}`))
        return (
          <Link
            key={key}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center text-sm font-medium rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 ${
              isActive
                ? 'text-primary font-semibold after:scale-x-100'
                : 'text-neutral-900 hover:text-primary'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
