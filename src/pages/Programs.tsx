import { useEffect } from 'react'
import { useLocation } from 'react-router'
import PageHero from '@/pages/about/PageHero'
import { FoodRelief, Casework, Referrals } from '@/pages/programs/StandardBlocks'
import { Youth, Cultural } from '@/pages/programs/DarkBlocks'
import Excursions from '@/pages/programs/Excursions'
import JourneyBand from '@/pages/programs/JourneyBand'
import FinalCta from '@/pages/programs/FinalCta'

const QUICK_NAV = [
  { label: 'Food Relief', hash: '#food-relief' },
  { label: 'Youth', hash: '#youth' },
  { label: 'Casework', hash: '#casework' },
  { label: 'Excursions', hash: '#excursions' },
  { label: 'Cultural', hash: '#cultural' },
  { label: 'Referrals', hash: '#referrals' },
]

export default function Programs() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'Our Programs — LightBridge Foundation'
  }, [])

  // Smooth-scroll to anchored program blocks (80px offset via scroll-mt)
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (!el) return
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [hash])

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title={[
          { text: 'Six' },
          { text: 'programs.' },
          { text: 'One' },
          { text: 'promise:' },
          { text: 'no one left behind', gold: true },
        ]}
        lead="From weekly food relief to cultural dance stages, every LightBridge program is free, culturally safe, and run entirely by volunteers — culturally led grassroots services delivered primarily by African immigrants and refugees from our own community."
        breadcrumb="Our Programs"
      >
        <ul className="mt-9 flex flex-wrap items-center justify-center gap-3" aria-label="Jump to a program">
          {QUICK_NAV.map((item) => (
            <li key={item.hash}>
              <a
                href={item.hash}
                className="inline-flex min-h-11 items-center rounded-full border border-gold-500/70 px-5 py-2 font-inter text-[0.88rem] font-semibold text-gold-400 transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-gold-500 hover:text-navy-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <FoodRelief />
      <Youth />
      <Casework />
      <Excursions />
      <Cultural />
      <Referrals />
      <JourneyBand />
      <FinalCta />
    </>
  )
}
