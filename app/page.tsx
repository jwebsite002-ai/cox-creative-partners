import { LoadingScreen } from "@/components/loading-screen"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { Experiences } from "@/components/experiences"
import { Markets } from "@/components/markets"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { HowWeWork } from "@/components/how-we-work"
import { ContactLocation } from "@/components/contact-location"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <SiteNav />
      <main>
        <Hero />
        <WhatWeDo />
        <Experiences />
        <Markets />
        <GalleryCarousel />
        <HowWeWork />
        <ContactLocation />
      </main>
      <SiteFooter />
    </>
  )
}
