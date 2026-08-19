import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  CalendarHeart,
  ClipboardList,
  GraduationCap,
  Languages,
  Megaphone,
  ShieldCheck,
  ShoppingBasket,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Role {
  Icon: LucideIcon
  title: string
  commitment: string
  blurb: string
}

const ROLES: Role[] = [
  {
    Icon: ShoppingBasket,
    title: 'Food Relief Support',
    commitment: 'Weekly · Holroyd',
    blurb: 'Sort, pack and distribute fresh food hampers to local families.',
  },
  {
    Icon: GraduationCap,
    title: 'Youth Mentoring',
    commitment: 'Weekly · Blacktown area',
    blurb: 'Guide young people (8–24) through life skills, study and confidence.',
  },
  {
    Icon: CalendarHeart,
    title: 'Event Assistance',
    commitment: 'Seasonal',
    blurb: 'Help run excursions, festival performances and family fun days.',
  },
  {
    Icon: ClipboardList,
    title: 'Administration',
    commitment: 'Remote flexible',
    blurb: 'Support coordination, records, grant applications and communications.',
  },
  {
    Icon: Megaphone,
    title: 'Community Outreach',
    commitment: 'Flexible',
    blurb: 'Connect with families, schools and services across our 12 suburbs.',
  },
  {
    Icon: Languages,
    title: 'Cultural & Language Support',
    commitment: 'Flexible',
    blurb: 'Use your language skills to help newly arrived families feel at home.',
  },
]

export default function VolunteerSection({ onApply }: { onApply: () => void }) {
  return (
    <section id="volunteer" className="relative scroll-mt-20 bg-grey-50" aria-label="Volunteer with us">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Sticky intro block */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="self-start lg:sticky lg:top-28"
          >
            <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
              Pathway 01 · Volunteer
            </p>
            <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
              Give time.{' '}
              <span className="italic text-gold-500">Gain community.</span>
            </h2>
            <svg
              viewBox="0 0 120 14"
              aria-hidden="true"
              className="mt-4 h-3.5 w-[120px] text-gold-500"
            >
              <motion.path
                d="M4 11 Q60 -4 116 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              />
            </svg>
            <p className="mt-5 max-w-[420px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-grey-500">
              From packing hampers to mentoring teens, there's a role for every
              schedule and skill set.
            </p>
            <p className="mt-4 max-w-[420px] text-[0.95rem] font-medium leading-[1.7] text-navy-800">
              Our team is primarily made up of African immigrants and refugees —
              when you volunteer, you join a culturally led community effort,
              for community and by community.
            </p>
            <button
              type="button"
              onClick={onApply}
              className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
            >
              Apply to volunteer
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </motion.div>

          {/* Role card grid */}
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {ROLES.map(({ Icon, title, commitment, blurb }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.08 }}
                  className="group rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100">
                      <Icon className="h-6 w-6 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-15% 0px' }}
                      transition={{
                        duration: 0.4,
                        ease: EASE,
                        delay: (i % 2) * 0.08 + Math.floor(i / 2) * 0.08 + 0.15,
                      }}
                      className="rounded-full bg-grey-50 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-navy-800 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-900"
                    >
                      {commitment}
                    </motion.span>
                  </div>
                  <h3 className="mt-5 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                    {title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.7] text-grey-500">{blurb}</p>
                </motion.article>
              ))}
            </div>

            {/* Reassurance strip */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-8 flex items-start gap-4 rounded-2xl bg-gold-100 p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <ShieldCheck className="h-5 w-5 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="text-[0.95rem] font-medium leading-[1.7] text-navy-800">
                No experience? No problem. Every volunteer is inducted,
                supported and covered by our insurance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
