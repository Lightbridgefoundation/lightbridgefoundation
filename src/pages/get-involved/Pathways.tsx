import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Building2, Gift, HandHeart } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

interface Pathway {
  Icon: LucideIcon
  title: string
  blurb: string
  bullets: string[]
  cta: string
  target: string
}

const PATHWAYS: Pathway[] = [
  {
    Icon: HandHeart,
    title: 'Volunteer',
    blurb: 'Give your time and talents.',
    bullets: ['Flexible roles', 'No experience needed', 'Make direct impact'],
    cta: 'See roles',
    target: 'volunteer',
  },
  {
    Icon: Gift,
    title: 'Donate',
    blurb: 'Fuel the programs.',
    bullets: ['100% to charitable purpose', 'No admin overheads', 'Every dollar counts'],
    cta: 'See impact',
    target: 'donate',
  },
  {
    Icon: Building2,
    title: 'Partner',
    blurb: 'Multiply the mission.',
    bullets: ['Councils & businesses', 'Schools & services', 'Foundations'],
    cta: 'Explore partnerships',
    target: 'partner',
  },
]

export default function Pathways() {
  return (
    <section className="relative bg-white" aria-label="Three ways to get involved">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <SectionHeading
          eyebrow="Three Ways In"
          title={
            <>
              Choose how you'll{' '}
              <span className="italic text-gold-500">change a life</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PATHWAYS.map(({ Icon, title, blurb, bullets, cta, target }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 56, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-25% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group flex flex-col rounded-[20px] border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-gold-500 hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 transition-colors duration-300 group-hover:bg-gold-500">
                <Icon
                  className="h-6 w-6 text-gold-500 transition-colors duration-300 group-hover:text-navy-900"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                {title}
              </h3>
              <p className="mt-2 leading-[1.7] text-grey-500">{blurb}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2.5 text-[0.92rem] font-medium text-ink"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => scrollToId(target)}
                className="group/btn mt-8 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border-2 border-navy-800 px-7 py-2.5 font-inter text-[0.95rem] font-semibold text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
              >
                {cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
