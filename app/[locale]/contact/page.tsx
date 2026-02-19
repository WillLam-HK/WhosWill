import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import { getTranslations, isValidLocale, type Locale } from '@/lib/i18n'

const EMAIL = 'wunyinwilliam@icloud.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/willlamwunyin/'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  return {
    title: 'Contact — Will Lam',
    description: 'Get in touch with Will Lam for mobile app development and freelance work.',
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  if (!isValidLocale(localeParam)) return null
  const locale = localeParam as Locale
  const t = getTranslations(locale)

  return (
    <ScrollReveal as="div" className="py-10 md:py-14" variant="fadeUp">
      <div className="mb-10">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.contact.getInTouch}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">{t.contact.title}</h1>
        <p className="text-neutral-600 mt-3 max-w-xl">
          {t.contact.intro}
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 md:p-8 shadow-soft max-w-md">
        <ContactForm form={t.contact.form} />
      </div>
      <p className="mt-6 text-neutral-600 text-sm space-y-2">
        <span className="block">
          {t.contact.orEmail}{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-primary hover:text-primary-dark transition-colors duration-200"
          >
            {EMAIL}
          </a>
        </span>
        <span className="block">
          {t.contact.connectLinkedIn}{' '}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:text-primary-dark transition-colors duration-200"
          >
            LinkedIn
          </a>
        </span>
      </p>
    </ScrollReveal>
  )
}
