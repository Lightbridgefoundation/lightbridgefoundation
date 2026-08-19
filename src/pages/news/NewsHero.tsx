import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const HEADLINE_WORDS = ['Stories', 'from']

function MaskedWord({
  word,
  delay,
  gold = false,
}: {
  word: string
  delay: number
  gold?: boolean
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        className={gold ? 'inline-block italic text-gold-400' : 'inline-block'}
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.7, ease: EASE, delay }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function NewsHero() {
  return (
    <section
      className="navy-gradient relative flex min-h-[60dvh] items-center overflow-hidden"
      aria-label="News and Stories"
    >
      {/* Gold glow — fades in first */}
      <motion.div
        className="gold-radial-glow absolute inset-0"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <img
        src="/arc-divider.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-20"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-24 lg:px-12">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 font-inter text-[0.85rem] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            className="text-white/60 transition-colors hover:text-gold-400"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
          <span className="text-white/90" aria-current="page">
            News &amp; Stories
          </span>
        </motion.nav>

        <motion.p
          className="mt-8 font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
        >
          News &amp; Stories
        </motion.p>

        <h1 className="mt-4 font-fraunces text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-white">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={word}>
              <MaskedWord word={word} delay={0.5 + i * 0.05} />{' '}
            </span>
          ))}
          <span className="relative inline-block">
            <MaskedWord word="the" delay={0.5 + 2 * 0.05} gold />{' '}
            <MaskedWord word="bridge" delay={0.5 + 3 * 0.05} gold />
            <svg
              viewBox="0 0 160 14"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-3.5 w-full text-gold-500"
            >
              <motion.path
                d="M6 11 Q80 -4 154 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 1.1 }}
              />
            </svg>
          </span>
        </h1>

        <motion.p
          className="mt-8 max-w-[640px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/80"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 1.0 }}
        >
          Success stories, program updates, volunteer spotlights and youth
          achievements — the living proof of what community can do.
        </motion.p>
      </div>
    </section>
  )
}
