import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const marketList = [
  'Corporate Headquarters',
  'Commercial Real Estate',
  'Retail',
  'Restaurants',
  'Hospitality',
  'Healthcare',
  'Churches',
  'Entertainment Venues',
  'Universities',
  'Museums',
  'Visitor Centers',
  'Parks & Recreation',
]

const tiles = [
  { label: 'Corporate', src: '/images/building-corporate.png' },
  { label: 'Hospitality', src: '/images/building-hospitality.png' },
  { label: 'Immersive', src: '/images/immersive-tunnel.png' },
  { label: 'Architectural', src: '/images/building-architectural.png' },
]

export function Markets() {
  return (
    <section id="markets" className="relative bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Markets We Serve
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
            Trusted across industries that value first impressions
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-14">
          <Reveal>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {marketList.map((market) => (
                <li
                  key={market}
                  className="flex items-center gap-3 border-b border-border pb-3 text-sm font-medium text-foreground/90"
                >
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  {market}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {tiles.map((tile, i) => (
              <Reveal
                key={tile.label}
                index={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border"
              >
                <Image
                  src={tile.src}
                  alt={`${tile.label} environment by Cox Creative Partners`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 28vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base">
                    {tile.label}
                  </span>
                  <span className="h-0.5 w-6 bg-primary transition-all duration-300 group-hover:w-10" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
