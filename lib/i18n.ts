export const locales = ['en', 'zh-Hant', 'zh-Hans'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-Hant': '繁體中文',
  'zh-Hans': '简体中文',
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

import en from '@/messages/en.json'
import zhHant from '@/messages/zh-Hant.json'
import zhHans from '@/messages/zh-Hans.json'

const messages = { en, 'zh-Hant': zhHant, 'zh-Hans': zhHans } as const

export type Messages = typeof en

export function getTranslations(locale: Locale): Messages {
  return messages[locale] ?? messages.en
}

export function getHtmlLang(locale: Locale): string {
  if (locale === 'zh-Hant') return 'zh-Hant'
  if (locale === 'zh-Hans') return 'zh-Hans'
  return 'en'
}
