import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cox Creative Partners | Immersive Environments & Architectural Lighting',
  description:
    'Cox Creative Partners helps organizations create memorable environments through creative partnerships, innovative solutions, and immersive experiences. Architectural lighting and environmental design serving Dallas–Fort Worth and clients nationwide.',
  keywords: [
    'architectural lighting',
    'immersive experiences',
    'environmental design',
    'creative consulting',
    'Cox Creative Partners',
    'Coppell Texas',
    'Dallas Fort Worth',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Cox Creative Partners',
    description:
      'Creating experiences. Transforming environments. Delivering immersive experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1626' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
