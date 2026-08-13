'use client'

import Image from 'next/image'
import { CtaButton } from '@/components/cta-button'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/building-corporate.png"
          alt="Modern office building illuminated with architectural accent lighting at dusk"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-navy/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-6 flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            <span className="h-px w-10 bg-primary" />
            Architectural Lighting &amp; Immersive Design
          </p>

          <h1 className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="animate-fade-up block" style={{ animationDelay: '0.1s' }}>
              Creating Experiences.
            </span>
            <span className="animate-fade-up block" style={{ animationDelay: '0.22s' }}>
              Transforming Environments.
            </span>
            <span
              className="animate-fade-up block text-primary"
              style={{ animationDelay: '0.34s' }}
            >
              Bringing Destinations to Life.
            </span>
          </h1>

          <div className="animate-fade-up mt-7 max-w-xl" style={{ animationDelay: '0.46s' }}>
            <span className="mb-6 block h-0.5 w-16 bg-primary" />
            <p className="text-lg leading-relaxed text-white/80 text-pretty">
              We help organizations create memorable environments through creative
              partnerships, innovative solutions, and immersive experiences.
            </p>
          </div>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.58s' }}
          >
            <CtaButton href="#contact" size="lg" variant="primary">
              Schedule an On-Site Consultation
            </CtaButton>
            <CtaButton href="#about" size="lg" variant="ghost" withArrow={false}>
              View Capabilities
            </CtaButton>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white md:flex"
      >
        <span className="font-display text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </a>
    </section>
  )
}
