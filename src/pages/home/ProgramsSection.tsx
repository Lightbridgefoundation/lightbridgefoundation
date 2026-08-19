import { Link } from 'react-router'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Apple,
  ArrowRight,
  Compass,
  HeartHandshake,
  Music,
  Sparkles,
  Waves,
} from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Program {
  Icon: LucideIcon
  title: string
  summary: string
  anchor: string
}

const PROGRAMS: Program[] = [
  {
    Icon: Apple,
    title: 'Weekly Food Relief',
    summary:
      'Fresh produce, pantry staples and emergency food support with Foodbank NSW & ACT and OzHarvest.',
    anchor: '#food-relief',
  },
  {
    Icon: Sparkles,
    title: 'Youth Empowerment',
    summary:
      'Weekly group for ages 8-24: wellbeing, financial literacy, life skills, mentoring, leadership.',
    anchor: '#youth',
  },
  {
    Icon: HeartHandshake,
    title: 'Casework & Advocacy',
    summary:
      'Safety planning, referrals and service navigation for domestic violence, housing and mental-health challenges.',
    anchor: '#casework',
  },
  {
    Icon: Waves,
    title: 'Community Connections & Excursions',
    summary:
      'Beach trips and family recreation days that break isolation and build belonging.',
    anchor: '#excursions',
  },
  {
    Icon: Music,
    title: 'Cultural Programs',
    summary:
      'Cultural Youth Dance Group celebrating African heritage on stages like Blacktown Festival 2025.',
    anchor: '#cultural',
  },
  {
    Icon: Compass,
    title: 'Support & Referrals',
    summary:
      'Advocacy, specialist referrals, information and community resource navigation.',
    anchor: '#referrals',
  },
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-grey-50" aria-label="Our programs">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Programs that <span className="italic text-gold-500">empower</span>
            </>
          }
          lead="Six community-driven programs, one goal, a connected, thriving Western Sydney where everyone can flourish."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ Icon, title, summary, anchor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-25% 0px' }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              {/* Gold top border reveal */}
              <span
                className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gold-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 transition-all duration-300 group-hover:-rotate-6 group-hover:bg-gold-500">
                <Icon
                  className="h-6 w-6 text-gold-500 transition-colors duration-300 group-hover:text-navy-900"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] text-navy-800">
                {title}
              </h3>
              <p className="mt-3 flex-1 leading-[1.7] text-grey-500">{summary}</p>
              <Link
                to={`/programs${anchor}`}
                className="group/link relative mt-6 inline-flex w-fit items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800"
              >
                Learn more
                <ArrowRight
                  className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover/link:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
