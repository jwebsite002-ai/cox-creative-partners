import { Users, Lightbulb, ClipboardCheck, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Users,
    title: 'Creative Partnerships',
    copy: 'The right partners. The right solutions — assembled around your goals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    copy: 'Technology, design and manufacturing working together as one.',
  },
  {
    icon: ClipboardCheck,
    title: 'Purposeful Design',
    copy: 'Environments engineered to tell your story with intent.',
  },
  {
    icon: MapPin,
    title: 'Immersive Experiences',
    copy: 'Memorable places that create lasting impact for every visitor.',
  },
]

export function WhatWeDo() {
  return (
    <section id="about" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              What We Do
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
              We help organizations rethink how people experience their spaces
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              From the moment they arrive to the way they interact, gather, explore,
              and remember. We bring together creative ideas, specialized partners, and
              innovative solutions to transform environments and bring destinations to
              life through{' '}
              <span className="font-medium text-primary">immersive experiences.</span>
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal
                key={feature.title}
                index={i}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-24px_var(--primary)]"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
