import { ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-content px-6 md:px-8">
      {children}
    </div>
  )
}
