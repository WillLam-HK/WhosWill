import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isValidLocale, type Locale } from './lib/i18n'

const locales: Locale[] = ['en', 'zh-Hant', 'zh-Hans']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const segments = pathname.split('/').filter(Boolean)

  // Redirect / to /en
  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  const maybeLocale = segments[0]
  if (isValidLocale(maybeLocale)) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-next-locale', maybeLocale)
    return NextResponse.next({
      request: { headers: requestHeaders },
    })
  }

  // If first segment is not a locale, treat as legacy path and redirect to /en/...
  if (!locales.includes(maybeLocale as Locale)) {
    const newPath = `/en${pathname.startsWith('/') ? pathname : `/${pathname}`}`
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
}
