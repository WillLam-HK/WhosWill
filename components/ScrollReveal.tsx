'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Variant = 'fadeUp' | 'fadeIn' | 'scale' | 'fadeUpScale'

const variantClass: Record<Variant, string> = {
  fadeUp: 'scroll-reveal--fadeUp',
  fadeIn: 'scroll-reveal--fadeIn',
  scale: 'scroll-reveal--scale',
  fadeUpScale: 'scroll-reveal--fadeUpScale',
}

type Props = {
  children: ReactNode
  as?: 'div' | 'section' | 'article'
  className?: string
  variant?: Variant
  delay?: number
  duration?: number
  [key: string]: unknown
}

export default function ScrollReveal({
  children,
  as: Component = 'div',
  className = '',
  variant = 'fadeUp',
  delay = 0,
  duration = 500,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)
    const handler = () => setReduceMotion(media.matches)
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`scroll-reveal ${variantClass[variant]} ${className}`.trim()}
      data-visible={visible}
      data-reduce-motion={reduceMotion}
      style={
        {
          '--reveal-duration': `${duration}ms`,
          '--reveal-delay': `${delay}ms`,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  )
}
