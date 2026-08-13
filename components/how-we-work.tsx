import { Ear, Search, PencilRuler, Users, Cog, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Ear, title: 'We Listen', copy: 'We learn about your vision, goals and the experience you want to create.' },
  { icon: Search, title: 'We Identify Opportunities', copy: 'We analyze your environment and discover possibilities.' },
  { icon: PencilRuler, title: 'We Develop Concepts', copy: 'We create thoughtful ideas and strategic solutions.' },
  { icon: Users, title: 'We Connect the Right Partners', copy: 'No single solution fits every environment. We bring together specialized designers, manufacturers, technology providers, fabricators, installers, and other trusted partners based on the unique needs of each project.' },
  { icon: Cog, title: 'We Manage the Details', copy: 'We coordinate every element to ensure quality and efficiency.' },
  { icon: CheckCircle2, title: 'We Bring It to Life', copy: 'We manage the details so you can enjoy the experience.' },
]

export function HowWeWork() {
  return (
<section className="relative bg-background py-20 sm:py-28">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Solutions Built Around You */}
    <Reveal className="mb-20 max-w-4xl sm:mb-24">
      <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary" />
        Our Approach
      </p>

      <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
        Solutions Built Around You
      </h2>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
        We start with the experience, not the product. Every property and
        organization is different. We begin by understanding your goals, your
        environment, and the experience you want to create. Then we identify
        the right ideas, technologies, products, and specialized partners to
        bring that vision to life.
      </p>
    </Reveal>

    {/* How We Work */}
    <Reveal className="max-w-2xl">
      <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary" />
        How We Work
      </p>

      <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl">
        A clear, collaborative process from vision to reality
      </h2>
    </Reveal>

    <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} index={i} className="relative">
          {/* Connector line */}
          {i < steps.length - 1 && (
            <span className="absolute left-6 top-6 hidden h-px w-full bg-gradient-to-r from-border to-transparent xl:block" />
          )}

          <div className="flex items-center gap-3">
            <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-4 ring-background">
              <step.icon className="size-5" strokeWidth={1.75} />
            </span>

            <span className="font-display text-3xl font-bold leading-none text-primary/20">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide">
            {step.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.copy}
          </p>
        </Reveal>
      ))}
    </ol>
  </div>
</section>
  )
}
