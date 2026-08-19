import { Link } from 'react-router'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Building2, Gift, HandHeart } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { useDonate } from '@/context/DonateContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Pathway {
  Icon: LucideIcon
  title: string
  blurb: string
  cta: string
  to?: string
  gold?: boolean
  opensDonate?: boolean
}

const PATHWAYS: Pathway[] = [
  {
    Icon: HandHeart,
    title: 'Volunteer',
    blurb: 'Food relief, youth mentoring, events, admin, outreach.',
    cta: 'Become a Volunteer',
    to: '/get-involved#volunteer',
  },
  {
    Icon: Gift,
    title: 'Donate',
    blurb: 'Fund food relief, youth programs and family support.',
    cta: 'Donate Now',
    gold: true,
    opensDonate: true,
  },
  {
    Icon: Building2,
    title: 'Partner',
    blurb: 'Businesses, councils, schools, service providers.',
    cta: 'Partner With Us',
    to: '/get-involved#partner',
  },
]

export default function GetInvolvedBand() {
  const { openDonate } = useDonate()

  return (
    <section className="relative overflow-hidden bg-gold-100" aria-label="Get involved">
      {/* Navy arc silhouette */}
      <svg
        viewBox="0 0 1440 240"
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 w-full opacity-[0.08]"
        preserveAspectRatio="none"
      >
        <path d="M0 220 Q720 -40 1440 220" fill="none" stroke="#163A5F" strokeWidth="10" />
      </svg>

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <SectionHeading
          eyebrow="Get Involved"
          title={
            <>
              Your time. Your heart.{' '}
              <span className="italic text-gold-500">Their future.</span>
            </>
          }
          lead="Whether you give an hour, a dollar, or a partnership, you help bridge hope across Western Sydney."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PATHWAYS.map(({ Icon, title, blurb, cta, to, opensDonate }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 56, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-100">
                <Icon className="h-7 w-7 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
                <span
                  className="absolute inset-0 rounded-full border-2 border-gold-500 opacity-0 transition-all duration-500 group-hover:scale-[1.15] group-hover:opacity-60"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                {title}
              </h3>
              <p className="mt-3 flex-1 leading-[1.7] text-grey-500">{blurb}</p>
              {opensDonate ? (
                <button
                  type="button"
                  onClick={openDonate}
                  className="mt-8 inline-flex min-h-11 items-center rounded-full bg-gold-500 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
                >
                  {cta}
                </button>
              ) : (
                <Link
                  to={to ?? '/get-involved'}
                  className="mt-8 inline-flex min-h-11 items-center rounded-xl border-2 border-navy-800 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
                >
                  {cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
