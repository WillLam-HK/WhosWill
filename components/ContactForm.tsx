'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    const body = Object.fromEntries(data.entries())
    try {
      // Replace with your form endpoint (e.g. Formspree, API route)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary min-h-[44px]"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary min-h-[44px]"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full border border-neutral-300 rounded-md px-3 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary min-h-[44px]"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="min-h-[44px] min-w-[120px] px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      {status === 'sent' && (
        <p className="text-sm text-green-600" role="status">
          Thanks — your message was sent.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  )
}
