import Image from 'next/image'
import { cn } from '@/lib/utils'

export function BrandMark({
  className,
  onLight,
}: {
  className?: string
  /** force light-on-dark text (for use over dark hero/footer) */
  onLight?: boolean
}) {
  return (
    <a
      href="#home"
      className={cn('group flex items-center gap-3', className)}
      aria-label="Cox Creative Partners home"
    >
      <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/ccp-texas-logo.png"
          alt="Cox Creative Partners logo"
          width={44}
          height={44}
          className="size-9 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold uppercase tracking-wide">
          <span className="text-primary">Cox</span>{' '}
          <span className={onLight ? 'text-white' : 'text-foreground'}>Creative</span>
        </span>
        <span
          className={cn(
            'font-display text-[0.7rem] font-medium uppercase tracking-[0.32em]',
            onLight ? 'text-white/60' : 'text-muted-foreground',
          )}
        >
          Partners
        </span>
      </span>
    </a>
  )
}
