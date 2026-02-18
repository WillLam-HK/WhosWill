import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Will',
  description: 'Get in touch with Will for mobile app development and freelance work.',
}

const EMAIL = 'hello@example.com' // Replace with your email

export default function ContactPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">Contact</h1>
      <p className="text-neutral-600 mb-8 max-w-xl">
        For work inquiries or collaboration, use the form below or email directly.
      </p>
      <ContactForm />
      <p className="mt-8 text-neutral-600">
        Or email:{' '}
        <a
          href={`mailto:${EMAIL}`}
          className="text-primary hover:underline min-h-[44px] min-w-[44px] inline-flex items-center"
        >
          {EMAIL}
        </a>
      </p>
    </div>
  )
}
