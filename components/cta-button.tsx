'use client'

import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md font-display font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50'

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-xs',
  lg: 'px-7 py-3.5 text-sm',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_6px_20px_-8px_var(--primary)] hover:shadow-[0_10px_30px_-8px_var(--primary)] hover:-translate-y-0.5',
  secondary:
    'border border-border bg-card/60 text-foreground backdrop-blur-sm hover:border-primary hover:text-primary hover:-translate-y-0.5',
  ghost:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5',
}

type CtaButtonProps = ComponentProps<'a'> & {
  variant?: Variant
  size?: Size
  withArrow?: boolean
}

export function CtaButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  withArrow = true,
  ...props
}: CtaButtonProps) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {/* sheen sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span className="relative">{children}</span>
      {withArrow && (
        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  )
}
