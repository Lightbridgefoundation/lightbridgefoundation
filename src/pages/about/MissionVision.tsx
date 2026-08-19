import { motion } from 'framer-motion'
import { Target, Telescope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Panel {
  Icon: LucideIcon
  title: string
  text: string
}

const PANELS: Panel[] = [
  {
    Icon: Target,
    title: 'Our Mission',
    text: 'To support, uplift, and empower families and individuals from culturally and linguistically diverse backgrounds through culturally safe, community-driven programs that promote wellbeing, belonging, and social cohesion.',
  },
  {
    Icon: Telescope,
    title: 'Our Vision',
    text: 'A connected, thriving community where every person is valued, supported, and able to flourish.',
  },
]

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-navy-800" aria-label="Mission and vision">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-container gap-8 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        {PANELS.map(({ Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i === 0 ? -64 : 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-[20px] bg-gradient-to-br from-navy-600 to-navy-800 p-12 shadow-card"
          >
            {/* Gold top arc accent */}
            <svg
              viewBox="0 0 200 20"
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-5 w-full text-gold-500 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 18 Q100 -6 200 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-25% 0px' }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15"
            >
              <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.75} aria-hidden="true" />
            </motion.span>
            <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] text-white">
              {title}
            </h3>
            <p className="mt-4 font-fraunces text-[clamp(1.05rem,1.5vw,1.25rem)] italic leading-[1.65] text-white/85">
              “{text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
