'use client'

import { useState } from 'react'

type FieldErrors = { name?: string; email?: string; message?: string }

type FormMessages = {
  name: string
  email: string
  message: string
  send: string
  sending: string
  success: string
  error: string
  errors: {
    nameRequired: string
    nameMin: string
    emailRequired: string
    emailInvalid: string
    messageRequired: string
    messageMin: string
  }
}

type Props = {
  form: FormMessages
}

function validateName(value: string, errors: FormMessages['errors']): string | undefined {
  const t = value.trim()
  if (!t) return errors.nameRequired
  if (t.length < 2) return errors.nameMin
  return undefined
}

function validateEmail(value: string, errors: FormMessages['errors']): string | undefined {
  const t = value.trim()
  if (!t) return errors.emailRequired
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(t)) return errors.emailInvalid
  return undefined
}

function validateMessage(value: string, errors: FormMessages['errors']): string | undefined {
  const t = value.trim()
  if (!t) return errors.messageRequired
  if (t.length < 10) return errors.messageMin
  return undefined
}

export default function ContactForm({ form }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const err = form.errors

  function validateFields(formEl: HTMLFormElement): boolean {
    const name = (formEl.elements.namedItem('name') as HTMLInputElement)?.value ?? ''
    const email = (formEl.elements.namedItem('email') as HTMLInputElement)?.value ?? ''
    const message = (formEl.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? ''
    const next: FieldErrors = {}
    const e1 = validateName(name, err)
    if (e1) next.name = e1
    const e2 = validateEmail(email, err)
    if (e2) next.email = e2
    const e3 = validateMessage(message, err)
    if (e3) next.message = e3
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name: field, value } = e.target
    let msg: string | undefined
    if (field === 'name') msg = validateName(value, err)
    else if (field === 'email') msg = validateEmail(value, err)
    else if (field === 'message') msg = validateMessage(value, err)
    else return
    setErrors((prev) => (msg ? { ...prev, [field]: msg } : { ...prev, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!validateFields(form)) return
    setStatus('sending')
    const data = new FormData(form)
    const body = Object.fromEntries(data.entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('sent')
        setErrors({})
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase = 'w-full border rounded-xl px-4 py-3 text-neutral-900 min-h-[48px] shadow-soft focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200'
  const inputError = 'border-red-500 focus:border-red-500 focus:ring-red-500/20'

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-md" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-1.5">
          {form.name} <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          onBlur={handleBlur}
          className={`${inputBase} ${errors.name ? inputError : 'border-neutral-200'}`}
          autoComplete="name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-1.5">
          {form.email} <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          onBlur={handleBlur}
          className={`${inputBase} ${errors.email ? inputError : 'border-neutral-200'}`}
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-1.5">
          {form.message} <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          onBlur={handleBlur}
          className={`${inputBase} resize-y min-h-[120px] ${errors.message ? inputError : 'border-neutral-200'}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="min-h-[48px] min-w-[140px] px-6 py-3 bg-primary text-white font-medium rounded-xl shadow-button hover:bg-primary-dark hover:shadow-buttonHover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 transition-all duration-200 active:scale-[0.98]"
      >
        {status === 'sending' ? form.sending : form.send}
      </button>
      {status === 'sent' && (
        <p className="text-sm text-green-600" role="status" aria-live="polite">
          {form.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert" aria-live="assertive">
          {form.error}
        </p>
      )}
    </form>
  )
}
