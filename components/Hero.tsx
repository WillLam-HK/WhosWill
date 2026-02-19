'use client'

import { useEffect, useState } from 'react'

const skills = ['Swift', 'Kotlin', 'React Native', 'AI-assisted coding']

type Props = {
  tagline: string
}

export default function Hero({ tagline }: Props) {
  const [mounted, setMounted] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(m.matches)
    const h = () => setReduceMotion(m.matches)
    m.addEventListener('change', h)
    return () => m.removeEventListener('change', h)
  }, [])

  const noMotion = !mounted || reduceMotion

  return (
    <section
      className="relative border-b border-neutral-200/80 pb-16 pt-12 md:pb-20 md:pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-primary-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden />

      <div className="relative">
        <h1
          id="hero-heading"
          className="hero-entrance text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-3 md:mb-4"
          data-mounted={mounted}
          data-no-motion={noMotion}
        >
          <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
            Will Lam
          </span>
        </h1>
        <p
          className="hero-entrance hero-entrance--tagline text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed"
          data-mounted={mounted}
          data-no-motion={noMotion}
        >
          {tagline}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Skills">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="hero-skill inline-flex items-center rounded-full bg-primary-50 text-primary-dark px-4 py-1.5 text-sm font-medium border border-primary-100/80 transition-colors duration-200 hover:bg-primary-100 hover:border-primary-200"
              data-mounted={mounted}
              data-no-motion={noMotion}
              style={{ '--skill-delay': `${0.12 + i * 0.05}s` } as React.CSSProperties}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
