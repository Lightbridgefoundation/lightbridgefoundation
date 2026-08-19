import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Briefcase, HandCoins, Truck, Users } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface PartnerType {
  Icon: LucideIcon
  title: string
  blurb: string
}

const PARTNER_TYPES: PartnerType[] = [
  {
    Icon: HandCoins,
    title: 'Funding & Grants',
    blurb: 'Philanthropic foundations and businesses funding programs with 100% pass-through.',
  },
  {
    Icon: Truck,
    title: 'Goods & Logistics',
    blurb: 'Food, venues, transport and equipment for relief and events.',
  },
  {
    Icon: Briefcase,
    title: 'Skills & Services',
    blurb: 'Pro bono expertise, training, health, legal, education.',
  },
  {
    Icon: Users,
    title: 'Workplace Volunteering',
    blurb: 'Team volunteering that supports food relief, events and programs.',
  },
]

export default function PartnerSection({ onPartner }: { onPartner: () => void }) {
  return (
    <section id="partner" className="relative scroll-mt-20 bg-white" aria-label="Partner with us">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500"
            >
              Pathway 03 · Partner
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800"
            >
              Stronger communities are{' '}
              <span className="italic text-gold-500">built together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="mt-6 leading-[1.7] text-grey-500"
            >
              We partner with businesses, community organisations, councils,
              schools, service providers and philanthropic foundations. Whether
              it's funding, food, venues, expertise or volunteers, partnership
              multiplies every outcome.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="mt-6 border-l-4 border-gold-500 pl-4 text-[0.95rem] font-medium leading-[1.7] text-navy-800"
            >
              Already building with us: Blacktown City Council · Cumberland
              City Council · African Resource Centre · Foodbank NSW &amp; ACT ·
              OzHarvest.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            >
              <button
                type="button"
                onClick={onPartner}
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
              >
                Start a partnership
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </motion.div>
          </div>

          {/* Partnership type cards */}
          <div className="space-y-5">
            {PARTNER_TYPES.map(({ Icon, title, blurb }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-25% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="group flex items-start gap-5 rounded-2xl bg-gold-100 p-6 transition-colors duration-300 hover:bg-[#F3E6BE]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:translate-x-1">
                  <Icon className="h-6 w-6 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-[1.7] text-navy-800/70">{blurb}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
