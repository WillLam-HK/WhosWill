import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Will',
  description: 'Get in touch with Will for mobile app development and freelance work.',
}

const EMAIL = 'hello@example.com' // Replace with your email

export default function ContactPage() {
  return (
    <ScrollReveal as="div" className="py-10 md:py-14" variant="fadeUp">
      <div className="mb-10">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Get in touch</span>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">Contact</h1>
        <p className="text-neutral-600 mt-3 max-w-xl">
          For work inquiries or collaboration, use the form below or email directly.
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 md:p-8 shadow-soft max-w-md">
        <ContactForm />
      </div>
      <p className="mt-6 text-neutral-600 text-sm">
        Or email directly:{' '}
        <a
          href={`mailto:${EMAIL}`}
          className="font-medium text-primary hover:text-primary-dark transition-colors duration-200"
        >
          {EMAIL}
        </a>
      </p>
    </ScrollReveal>
  )
}
