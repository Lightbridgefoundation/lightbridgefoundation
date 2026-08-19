import { useEffect } from 'react'
import ContactHero from '@/pages/contact/ContactHero'
import ContactSplit from '@/pages/contact/ContactSplit'
import ServiceArea from '@/pages/contact/ServiceArea'
import FaqSection from '@/pages/contact/FaqSection'
import ClosingCta from '@/pages/contact/ClosingCta'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | LightBridge Foundation'
  }, [])

  return (
    <>
      <ContactHero />
      <ContactSplit />
      <ServiceArea />
      <FaqSection />
      <ClosingCta />
    </>
  )
}
