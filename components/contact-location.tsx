'use client'

import { Mail, Phone, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'

const projectTypes = [
  'Architectural Lighting',
  'Immersive / Seasonal Experience',
  'Arrival & Brand Experience',
  'Interior Environment',
  'Not Sure Yet',
]

export function ContactLocation() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('type'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const text = await response.text()

      let data: any = {}

      if (text) {
        try {
          data = JSON.parse(text)
        } catch {
          console.error('Non-JSON response:', text)
        }
      }

      if (!response.ok) {
        throw new Error(
          data.error || `Unable to send your inquiry. (${response.status})`
        )
      }

      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error('Contact form error:', err)

      setError(
        err instanceof Error
          ? err.message
          : 'Unable to send your inquiry. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-3xl">
          <p className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Contact Us
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            HAVE A PROPERTY IN MIND?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            You don’t need to know exactly what you need. That’s where we come in. Let’s walk the property, talk about your goals, identify opportunities, and explore what’s possible together.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Form */}
          <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">
                  Thank you
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your request has been received. A member of the Cox Creative Partners
                  team will reach out to schedule your on-site consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className={inputCls}
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Company" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={inputCls}
                      placeholder="Company name"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputCls}
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputCls}
                      placeholder="(000) 000-0000"
                    />
                  </Field>
                </div>

                <Field label="Project Type" htmlFor="type">
                  <select
                    id="type"
                    name="type"
                    required
                    className={inputCls}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Tell us about your space" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${inputCls} resize-none`}
                    placeholder="What experience do you want to create?"
                  />
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-md bg-primary px-6 py-3.5 font-display text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Schedule an On-Site Consultation'}

                  {!submitting && (
                    <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>

                {error && (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}
              </form>
            )}
          </Reveal>

          {/* Details + Map */}
          <div className="flex flex-col gap-6">
            <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                Get in touch
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value="info@coxcreativepartners.com"
                  href="mailto:info@coxcreativepartners.com"
                />
                <ContactRow
                  icon={Phone}
                  label="Phone"
                  value="945-334-4277"
                  href="tel:9402525526"
                />
                <ContactRow
                  icon={Globe}
                  label="Website"
                  value="coxcreativepartners.com"
                  href="https://coxcreativepartners.com"
                />
                <ContactRow
                  icon={MapPin}
                  label="Location"
                  value="Coppell, Texas — Serving Dallas–Fort Worth & nationwide"
                />
              </ul>
            </Reveal>

            <Reveal className="group relative flex-1 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Cox Creative Partners location — Coppell, Texas"
                src="https://www.google.com/maps?q=Coppell,+Texas&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0 lg:h-full lg:min-h-[16rem]"
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-lg bg-navy/90 px-4 py-3 text-navy-foreground shadow-lg backdrop-blur">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Cox Creative Partners
                </p>
                <p className="mt-1 text-sm font-medium text-white">Coppell, Texas</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="font-display text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/row:bg-primary group-hover/row:text-primary-foreground">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </span>
    </>
  )

  return (
    <li>
      {href ? (
        <a href={href} className="group/row flex items-center gap-4">
          {content}
        </a>
      ) : (
        <div className="group/row flex items-center gap-4">{content}</div>
      )}
    </li>
  )
}
