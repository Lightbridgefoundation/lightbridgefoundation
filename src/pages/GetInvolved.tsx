import { useCallback, useEffect, useState } from 'react'
import Hero from '@/pages/get-involved/Hero'
import Pathways from '@/pages/get-involved/Pathways'
import VolunteerSection from '@/pages/get-involved/VolunteerSection'
import DonateSection from '@/pages/get-involved/DonateSection'
import PartnerSection from '@/pages/get-involved/PartnerSection'
import InterestForm from '@/pages/get-involved/InterestForm'
import FinalBand from '@/pages/get-involved/FinalBand'

export type InterestPathway = 'volunteer' | 'donate' | 'partner'

export default function GetInvolved() {
  const [interest, setInterest] = useState<InterestPathway>('volunteer')

  useEffect(() => {
    document.title = 'Get Involved | LightBridge Foundation'
  }, [])

  const goToForm = useCallback((pathway: InterestPathway) => {
    setInterest(pathway)
    requestAnimationFrame(() => {
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])

  return (
    <>
      <Hero />
      <Pathways />
      <VolunteerSection onApply={() => goToForm('volunteer')} />
      <DonateSection />
      <PartnerSection onPartner={() => goToForm('partner')} />
      <InterestForm interest={interest} onInterestChange={setInterest} />
      <FinalBand />
    </>
  )
}
