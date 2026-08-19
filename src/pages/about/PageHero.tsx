import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export interface HeroChunk {
  text: string
  gold?: boolean
}

interface PageHeroProps {
  eyebrow: string
  /** Title chunks — gold chunks render italic gold-400 with an arc underline. */
  title: HeroChunk[]
  lead: string
  breadcrumb: string
  /** Optional row rendered under the lead (e.g. quick-nav chips). */
  children?: ReactNode
}

/**
 * Compact navy page hero (60vh) shared by About / Programs:
 * radial gold glow, dot texture, drifting arc, word-masked H1 reveal.
 */
export default function PageHero({ eyebrow, title, lead, breadcrumb, children }: PageHeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end start'],
  })
  // Light-drift parallax — glow drifts at ~0.3x scroll speed
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const arcY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[60vh] items-center overflow-hidden bg-navy-900"
      aria-label={breadcrumb}
    >
      {/* Radial gold glow, bottom-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          y: glowY,
          background:
            'radial-gradient(ellipse at 80% 85%, rgba(212,160,23,0.22), transparent 60%)',
        }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <motion.img
        src="/arc-divider.svg"
        alt=""
        aria-hidden="true"
        style={{ y: arcY }}
        className="pointer-events-none absolute bottom-[-6%] left-0 w-[130%] max-w-none opacity-30"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-24 text-center lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
          className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400"
        >
          {eyebrow}
        </motion.p>

        <h1 className="mx-auto mt-6 max-w-[900px] font-fraunces text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-white">
          {title.map((chunk, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden pb-[0.1em] align-bottom"
            >
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.35 + i * 0.05 }}
                className={
                  chunk.gold
                    ? 'relative inline-block italic text-gold-400'
                    : 'inline-block'
                }
              >
                {chunk.text}
                {chunk.gold && (
                  <svg
                    viewBox="0 0 120 14"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                    className="absolute -bottom-[0.08em] left-0 h-[0.2em] w-full text-gold-500"
                  >
                    <motion.path
                      d="M4 11 Q60 -4 116 11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.35 + i * 0.05 + 0.4 }}
                    />
                  </svg>
                )}
              </motion.span>
              {i < title.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 + title.length * 0.05 + 0.3 }}
          className="mx-auto mt-7 max-w-[620px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/85"
        >
          {lead}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.35 + title.length * 0.05 + 0.45 }}
          >
            {children}
          </motion.div>
        )}

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 + title.length * 0.05 + 0.55 }}
          aria-label="Breadcrumb"
          className="mt-10 flex items-center justify-center gap-1.5 text-[0.85rem] font-medium text-white/60"
        >
          <Link to="/" className="transition-colors hover:text-gold-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span aria-current="page" className="text-white/80">
            {breadcrumb}
          </span>
        </motion.nav>
      </div>
    </section>
  )
}
