'use client'

import { CreativeHero } from '@/components/home/creative-hero'
import { NewsTicker } from '@/components/home/news-ticker'
import { WhyKumakale } from '@/components/home/why-kumakale'
import { CampusExperience } from '@/components/home/campus-experience'
import { CtaStrip } from '@/components/home/cta-strip'
import { Academics } from '@/components/home/academics'
import { BentoFeatures } from '@/components/home/bento-features'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <CreativeHero />
      <NewsTicker />
      <WhyKumakale />
      <BentoFeatures />
      <CampusExperience />
      <Academics />
      <CtaStrip />
    </div>
  )
}
