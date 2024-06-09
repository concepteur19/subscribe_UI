import React from 'react'
import { HeroSection } from './views/components/layout/heroSection'
import { SponsorSection } from './views/components/layout/sponsor'
import { DashboardPresentationSection } from './views/components/layout/DashboardPresentationSection'
import { FeatureSection } from './views/components/layout/featureSection'
import { Testimonial } from './views/components/layout/testimonial'
import { TrySubScribeSection } from './views/components/layout/trySubScribe'
import { FaqSection } from './views/components/layout/faqSection'

function LandingPage() {
  return (
    <div className=' text-white-2 font-redRose'>
      <HeroSection/>
      <SponsorSection/>
      <DashboardPresentationSection/>
      <FeatureSection/>
      <FaqSection/>
      <Testimonial/>
      <TrySubScribeSection/>
    </div>
  )
}

export default LandingPage