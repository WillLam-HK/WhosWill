import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Nav from '@/components/Nav'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getTranslations, isValidLocale, type Locale } from '@/lib/i18n'

const EMAIL = 'wunyinwilliam@icloud.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/willlamwunyin/'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isValidLocale(localeParam)) notFound()

  const locale = localeParam as Locale
  const t = getTranslations(locale)

  return (
    <>
      <a href="#main" className="sr-only">
        {t.common.skipToContent}
      </a>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 shadow-sm shadow-neutral-200/50">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <Nav locale={locale} t={t} />
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </Container>
      </header>
      <main id="main">
        <Container>{children}</Container>
      </main>
      <footer className="mt-20 py-12 border-t border-neutral-200/80 bg-neutral-50/50">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} Will Lam · {t.footer.copyright}
            </p>
            <nav aria-label="Footer" className="flex flex-wrap items-center gap-6">
              <a href={`mailto:${EMAIL}`} className="text-sm text-primary hover:text-primary-dark transition-colors duration-200 font-medium">
                {t.footer.getInTouch}
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary-dark transition-colors duration-200 font-medium">
                LinkedIn
              </a>
            </nav>
          </div>
        </Container>
      </footer>
    </>
  )
}
