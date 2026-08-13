import Image from 'next/image'
import { DoorOpen, Building2, Star, Users, TreePine } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const experiences = [
  {
    icon: DoorOpen,
    title: 'Arrival Experiences',
    copy: 'Entrances, first impressions and destination identity.',
  },
  {
    icon: Building2,
    title: 'Nighttime Experiences',
    copy: 'Architectural and permanent exterior lighting.',
  },
  {
    icon: Star,
    title: 'Brand Experiences',
    copy: "Environments that communicate an organization's story.",
  },
  {
    icon: Users,
    title: 'Customer & Guest',
    copy: 'Memorable spaces designed around engagement.',
  },
  {
    icon: TreePine,
    title: 'Seasonal & Immersive',
    copy: 'Holiday environments, temporary installations and drive-through experiences.',
  },
]

export function Experiences() {
  return (
    <section id="approach" className="relative overflow-hidden bg-navy text-navy-foreground">
      {/* ambient accents */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--brand-blue) 60%, transparent), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Experiences We Create
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
            Every touchpoint, thoughtfully designed to be remembered.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.title}
                index={i}
                className="group relative border-l border-white/10 pl-5 transition-colors duration-300 hover:border-primary"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-white/5 text-primary ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <exp.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide text-white">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{exp.copy}</p>
              </Reveal>
            ))}
          </div>

          {/* Elite Series */}
          <Reveal className="relative overflow-hidden rounded-2xl ring-1 ring-white/15">
            <Image
              src="/images/building-architectural.png"
              alt="Contemporary building facade transformed with dramatic linear architectural lighting"
              width={900}
              height={1100}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-[26rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Elite Series
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-white">
                Architectural Lighting
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                Permanent architectural lighting designed to transform the look, feel,
                and identity of your property. Programmable. Durable. Purposeful. Built
                for every night, every season, every occasion.
              </p>
              <CtaButton
                href="#markets"
                variant="ghost"
                size="md"
                className="mt-6"
              >
                Explore the Elite Series
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
