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
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header>
          <Container>
            <Nav />
          </Container>
        </header>
        <main>
          <Container>{children}</Container>
        </main>
        <footer className="mt-16 py-8 border-t border-neutral-200">
          <Container>
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} Will. Mobile app developer.
            </p>
          </Container>
        </footer>
      </body>
    </html>
  )
}
