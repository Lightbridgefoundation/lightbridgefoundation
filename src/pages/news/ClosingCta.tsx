import { memo } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const WORDS: { text: string; gold?: boolean }[] = [
  { text: 'The' },
  { text: 'next' },
  { text: 'story' },
  { text: 'could' },
  { text: 'include' },
  { text: 'you', gold: true },
]

/** Isolated breathing glow so the loop never re-renders the section. */
const BreathingGlow = memo(function BreathingGlow() {
  return (
    <motion.div
      className="gold-radial-glow absolute inset-0"
      aria-hidden="true"
      animate={{ opacity: [0.55, 1, 0.55] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
})

export default function ClosingCta() {
  const { openDonate } = useDonate()

  return (
    <section
      className="navy-gradient relative overflow-hidden"
      aria-label="Get involved"
    >
      <BreathingGlow />
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <img
        src="/arc-divider.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-25"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] text-center lg:px-12">
        <h2 className="font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white">
          {WORDS.map((word, i) => (
            <span key={word.text} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={
                  word.gold ? 'inline-block italic text-gold-400' : 'inline-block'
                }
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
              >
                {word.text}
                {i < WORDS.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
        >
          <Link
            to="/get-involved#volunteer"
            className="inline-flex min-h-11 items-center rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
          >
            Become a Volunteer
          </Link>
          <button
            type="button"
            onClick={openDonate}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-8 py-3.5 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-100 active:scale-[0.97]"
          >
            <Heart className="h-4 w-4 text-gold-500" aria-hidden="true" />
            Donate Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
