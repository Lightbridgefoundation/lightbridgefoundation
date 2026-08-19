import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import { EASE, GhostLink, GoldDonateButton } from '@/pages/programs/shared'

const EXCURSIONS = [
  {
    title: 'Port Kembla Beach — 4 Jan 2025',
    text: '56 CALD participants; many families experienced the beach for the first time; improved wellbeing and reduced stress.',
  },
  {
    title: 'Northern Beaches — 10 Jan 2026',
    text: 'Our second major excursion with 56 participants, strengthening family–volunteer relationships.',
  },
]

/* ---------- Program 4 · Community Connections & Excursions (#excursions, grey-50) ---------- */

export default function Excursions() {
  return (
    <section
      id="excursions"
      className="scroll-mt-[88px] bg-grey-50"
      aria-label="Community Connections and Excursions"
    >
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        {/* Cinematic image with parallax */}
        <div className="relative overflow-hidden rounded-[24px] shadow-card">
          <motion.img
            src="/beach-excursion.jpg"
            alt="CALD families joyfully experiencing an Australian beach together, many for the first time"
            loading="lazy"
            initial={{ scale: 1.15, y: '-4%' }}
            whileInView={{ scale: 1.15, y: '4%' }}
            viewport={{ once: false, margin: '-10% 0px' }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="aspect-[16/7] min-h-[280px] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(14,42,71,0.05) 40%, rgba(14,42,71,0.55) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Overlapping content card */}
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 mx-auto -mt-24 w-full max-w-[640px] rounded-[20px] bg-white p-6 shadow-card-hover sm:p-10"
        >
          <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
            Program 04 · Annual
          </p>
          <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
            Community Connections & Excursions
          </h2>
          <svg viewBox="0 0 120 14" aria-hidden="true" className="mt-4 h-3.5 w-[120px] text-gold-500">
            <motion.path
              d="M4 11 Q60 -4 116 11"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            />
          </svg>
          <p className="mt-5 leading-[1.7] text-grey-500">
            Social isolation melts when communities share joy. Our annual beach
            excursions and family recreation days give CALD families
            experiences many have never had.
          </p>

          <div className="mt-7 space-y-4">
            {EXCURSIONS.map((ex, i) => (
              <motion.div
                key={ex.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.12 }}
                className="flex gap-4 rounded-2xl bg-gold-100 p-5"
              >
                <CalendarDays
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-fraunces text-lg font-semibold leading-snug text-navy-800">
                    {ex.title}
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] leading-[1.6] text-ink/80">{ex.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <GoldDonateButton>Help fund the next excursion</GoldDonateButton>
            <GhostLink to="/news">Read the story</GhostLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
