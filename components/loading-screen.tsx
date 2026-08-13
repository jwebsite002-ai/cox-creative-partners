'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const showFor = prefersReduced ? 300 : 1500

    const fade = window.setTimeout(() => setHidden(true), showFor)
    const remove = window.setTimeout(() => setRemoved(true), showFor + 700)

    return () => {
      window.clearTimeout(fade)
      window.clearTimeout(remove)
    }
  }, [])

  useEffect(() => {
    if (hidden) {
      document.body.style.removeProperty('overflow')
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [hidden])

  if (removed) return null

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy transition-opacity duration-700 ease-out',
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      {/* ambient architectural glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--brand-blue) 55%, transparent) 0%, transparent 65%)',
        }}
      />

      <div className="animate-fade-up relative flex flex-col items-center">
        <div className="relative">
          <span className="animate-glow-pulse absolute inset-0 rounded-full bg-white/70 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-white/40">
            <Image
              src="/images/ccp-texas-logo.png"
              alt="Cox Creative Partners"
              width={120}
              height={120}
              priority
              className="h-24 w-24 object-contain"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              style={{ animation: 'ccp-sheen 1.8s ease-in-out infinite' }}
            />
          </div>
        </div>

        <p className="mt-8 font-display text-lg font-semibold uppercase tracking-[0.35em] text-white">
          <span className="text-primary">Cox</span> Creative Partners
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
          Collaborate. Consult. Create.
        </p>

        <div className="mt-8 h-px w-40 overflow-hidden rounded-full bg-white/15">
          <span
            className="block h-full w-1/2 bg-primary"
            style={{ animation: 'ccp-sheen 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>
    </div>
  )
}
