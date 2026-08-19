import { useEffect } from 'react'
import PageHero from '@/pages/about/PageHero'
import StorySection from '@/pages/about/StorySection'
import MissionVision from '@/pages/about/MissionVision'
import ValuesSection from '@/pages/about/ValuesSection'
import Governance from '@/pages/about/Governance'
import ServiceMap from '@/pages/about/ServiceMap'
import { Partners, ClosingCta } from '@/pages/about/PartnersCta'

export default function About() {
  useEffect(() => {
    document.title = 'About Us — LightBridge Foundation'
  }, [])

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={[
          { text: 'We' },
          { text: 'exist' },
          { text: 'so' },
          { text: 'no' },
          { text: 'family' },
          { text: 'walks' },
          { text: 'alone', gold: true },
        ]}
        lead="LightBridge Foundation is a volunteer-led Public Benevolent Institution serving culturally and linguistically diverse communities across Western Sydney, NSW."
        breadcrumb="About Us"
      />
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <Governance />
      <ServiceMap />
      <Partners />
      <ClosingCta />
    </>
  )
}
