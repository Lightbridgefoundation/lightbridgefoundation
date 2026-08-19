import { Link } from 'react-router'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ChevronRight, Clock, Heart, ShieldCheck } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const REASSURANCE: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: 'Confidential & judgement-free' },
  { Icon: Clock, label: 'Volunteer-run replies' },
  { Icon: Heart, label: 'Culturally safe' },
]

export default function ContactHero() {
  return (
    <section
      className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-900"
      aria-label="Contact LightBridge Foundation"
    >
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      {/* Gold glow, center-bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 110%, rgba(212,160,23,0.28), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-20 lg:px-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-inter text-[0.85rem] font-medium text-white/60"
        >
          <Link to="/" className="transition-colors hover:text-gold-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-gold-400" aria-current="page">
            Contact
          </span>
        </motion.nav>

        <div className="mt-8 max-w-[720px]">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="mt-6 font-fraunces text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-white"
          >
            Let's start{' '}
            <span className="relative inline-block italic text-gold-400">
              the conversation
              <svg
                viewBox="0 0 120 14"
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-[0.22em] w-full text-gold-500"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M4 11 Q60 -4 116 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
                />
              </svg>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            className="mt-8 max-w-[600px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/85"
          >
            Whether you need support, want to volunteer, or hope to partner or
            donate — we read every message and reply as soon as our volunteers
            can.
          </motion.p>

          {/* Reassurance pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {REASSURANCE.map(({ Icon, label }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 0.65 + i * 0.08,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[0.85rem] font-medium text-white/70"
              >
                <Icon className="h-4 w-4 text-gold-400" strokeWidth={1.75} aria-hidden="true" />
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
