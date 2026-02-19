import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Container from '@/components/Container'

export const metadata: Metadata = {
  title: 'Will — Mobile App Developer',
  description:
    'Portfolio of Will. iOS, Android, and cross-platform mobile development with Swift, Kotlin, and React Native.',
  openGraph: {
    title: 'Will — Mobile App Developer',
    description:
      'Portfolio of Will. iOS, Android, and cross-platform mobile development with Swift, Kotlin, and React Native.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://whoswill.dev'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Will',
        jobTitle: 'Mobile App Developer',
        description: 'iOS, Android, and cross-platform mobile development with Swift, Kotlin, and React Native.',
        url: siteUrl,
        knowsAbout: ['Swift', 'Kotlin', 'React Native', 'AI-assisted coding'],
      },
      {
        '@type': 'WebSite',
        name: 'Will — Mobile App Developer',
        description: 'Portfolio of Will. iOS, Android, and cross-platform mobile development.',
        url: siteUrl,
        publisher: { '@type': 'Person', name: 'Will' },
      },
    ],
  }

  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-gradient-to-b from-neutral-50 via-white to-neutral-50/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="sr-only">
          Skip to main content
        </a>
        <header>
          <Container>
            <Nav />
          </Container>
        </header>
        <main id="main">
          <Container>{children}</Container>
        </main>
        <footer className="mt-20 py-12 border-t border-neutral-200/80 bg-neutral-50/50">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-neutral-600">
                © {new Date().getFullYear()} Will · Mobile app developer
              </p>
              <nav aria-label="Footer">
                <a href="mailto:hello@example.com" className="text-sm text-primary hover:text-primary-dark transition-colors duration-200 font-medium">
                  Get in touch
                </a>
              </nav>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  )
}
