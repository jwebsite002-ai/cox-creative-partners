'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const slides = [
  {
    src: '/images/building-corporate.png',
    title: 'Corporate Identity in Light',
    caption: 'Signature roofline lighting that redefines a headquarters after dark.',
  },
  {
    src: '/images/immersive-tunnel.png',
    title: 'Immersive Drive-Through',
    caption: 'A seasonal light experience guests travel miles to see.',
  },
  {
    src: '/images/building-hospitality.png',
    title: 'Hospitality Ambience',
    caption: 'Programmable interior environments tuned to mood and moment.',
  },
  {
    src: '/images/building-architectural.png',
    title: 'Architectural Statement',
    caption: 'Permanent facade lighting engineered for every night and season.',
  },
  {
    src: '/images/arrival-entrance.png',
    title: 'Arrival Experience',
    caption: 'First impressions designed to welcome and orient every visitor.',
  },
]

export function GalleryCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const count = slides.length

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  )
  const goTo = useCallback((i: number) => setIndex(i), [])

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => go(1), 5000)
    return () => window.clearInterval(id)
  }, [paused, go])

  return (
    <section className="relative bg-background pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Selected Environments
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
              Where design, technology and light converge
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <CarouselArrow direction="prev" onClick={() => go(-1)} />
            <CarouselArrow direction="next" onClick={() => go(1)} />
          </div>
        </Reveal>

        <Reveal className="group relative overflow-hidden rounded-2xl ring-1 ring-border">
          <div
            className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/7]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected environments"
            tabIndex={0}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') go(-1)
              if (e.key === 'ArrowRight') go(1)
            }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return
              const dx = e.changedTouches[0].clientX - touchStartX.current
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
              touchStartX.current = null
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                aria-hidden={i !== index}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700 ease-out',
                  i === index ? 'opacity-100' : 'opacity-0',
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className={cn(
                    'object-cover transition-transform duration-[6000ms] ease-out',
                    i === index ? 'scale-105' : 'scale-100',
                  )}
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <h3
                    className={cn(
                      'font-display text-xl font-bold uppercase tracking-tight text-white transition-all duration-700 sm:text-2xl',
                      i === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                    )}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 max-w-lg text-sm text-white/75 transition-all delay-100 duration-700 sm:text-base',
                      i === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                    )}
                  >
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* progress dots */}
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 sm:bottom-5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${slide.title}`}
                aria-current={i === index}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
                  i === index ? 'w-8 bg-primary' : 'w-2.5 bg-white/50 hover:bg-white/80',
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
}) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon className="size-5" />
    </button>
  )
}
