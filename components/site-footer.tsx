import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Globe } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/ccp-logo-full.png"
              alt="Cox Creative Partners"
              width={220}
              height={150}
              className="h-auto w-40 rounded-md bg-white/95 p-3"
            />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-secondary-foreground/70">
              We help organizations create memorable environments through creative partnerships, innovative solutions,
              and immersive experiences.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-secondary-foreground/50">Explore</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-secondary-foreground/50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@coxcreativepartners.com"
                  className="flex items-center gap-3 text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  info@coxcreativepartners.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9402525526"
                  className="flex items-center gap-3 text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  940-252-5526
                </a>
              </li>
              <li>
                <a
                  href="https://coxcreativepartners.com"
                  className="flex items-center gap-3 text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  <Globe className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  coxcreativepartners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Cox Creative Partners. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary-foreground/50">
            Collaborate. Consult. Create.
          </p>
        </div>
      </div>
    </footer>
  )
}
