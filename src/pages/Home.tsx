import Hero from '@/pages/home/Hero'
import WhoWeAre from '@/pages/home/WhoWeAre'
import ImpactStats from '@/pages/home/ImpactStats'
import ProgramsSection from '@/pages/home/ProgramsSection'
import StoryHighlight from '@/pages/home/StoryHighlight'
import GetInvolvedBand from '@/pages/home/GetInvolvedBand'
import NewsPreview from '@/pages/home/NewsPreview'
import PartnerFinalCta from '@/pages/home/PartnerFinalCta'

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ImpactStats />
      <ProgramsSection />
      <StoryHighlight />
      <GetInvolvedBand />
      <NewsPreview />
      <PartnerFinalCta />
    </>
  )
}
