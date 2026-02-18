import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav
      className="flex justify-center gap-10 py-6"
      aria-label="Main navigation"
    >
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-sm font-medium text-neutral-900 hover:text-primary focus:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
