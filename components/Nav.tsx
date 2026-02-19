'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="sticky top-0 z-10 flex justify-center gap-10 py-6 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 shadow-sm shadow-neutral-200/50"
      aria-label="Main navigation"
    >
      {links.map(({ href, label }) => {
        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
        return (
          <Link
            key={href}
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
