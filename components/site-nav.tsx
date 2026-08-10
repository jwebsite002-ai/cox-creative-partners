'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BrandMark } from '@/components/brand-mark'
import { CtaButton } from '@/components/cta-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Markets', href: '#markets' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <BrandMark onLight={!scrolled} />

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'group relative rounded-md px-3.5 py-2 font-display text-sm font-medium uppercase tracking-wide transition-colors',
                scrolled
                  ? 'text-foreground/80 hover:text-primary'
                  : 'text-white/85 hover:text-white',
              )}
            >
              {link.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <CtaButton
            href="#contact"
            size="md"
            withArrow={false}
            className="hidden xl:inline-flex"
          >
            Schedule an On-Site Consultation
          </CtaButton>
          <CtaButton
            href="#contact"
            size="md"
            withArrow={false}
            className="hidden lg:inline-flex xl:hidden"
          >
            Book a Visit
          </CtaButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-full border transition-colors lg:hidden',
              scrolled || open
                ? 'border-border bg-card/70 text-foreground'
                : 'border-white/25 bg-white/10 text-white',
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden',
          open ? 'max-h-[26rem] border-t opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 font-display text-base font-medium uppercase tracking-wide text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <CtaButton
            href="#contact"
            size="lg"
            withArrow
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Schedule an On-Site Consultation
          </CtaButton>
        </div>
      </div>
    </header>
  )
}
