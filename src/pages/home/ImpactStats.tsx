import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

interface Stat {
  value: number
  suffix: string
  label: string
}

const STATS_ROW_ONE: Stat[] = [
  { value: 300, suffix: '+', label: 'people supported annually' },
  { value: 2000, suffix: '+', label: 'food hampers distributed' },
  { value: 40, suffix: '+', label: 'community members in weekly food relief' },
  { value: 56, suffix: '+', label: 'participants on annual excursions' },
]

const STATS_ROW_TWO: Stat[] = [
  { value: 15, suffix: '', label: 'young people in the weekly youth group' },
  { value: 9, suffix: '', label: 'individuals supported through casework' },
  { value: 100, suffix: '%', label: 'volunteer-led' },
]

function StatBlock({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-25% 0px' })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => Math.round(v).toLocaleString('en-AU'))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, stat.value, {
      duration: 1.6,
      ease: 'easeOut',
      delay: index * 0.1,
    })
    return () => controls.stop()
  }, [inView, count, stat.value, index])

  return (
    <div ref={ref} className="text-center">
      <div className="font-fraunces text-[clamp(2.75rem,5vw,4.25rem)] font-bold leading-none text-gold-500">
        <motion.span>{display}</motion.span>
        {stat.suffix && (
          <motion.span
            className="inline-block"
            initial={{ scale: 1 }}
            animate={
              inView
                ? { scale: [1, 1, 1.25, 1], transition: { duration: 0.6, delay: index * 0.1 + 1.6, times: [0, 0.85, 0.95, 1] } }
                : undefined
            }
          >
            {stat.suffix}
          </motion.span>
        )}
      </div>
      <svg viewBox="0 0 64 10" aria-hidden="true" className="mx-auto mt-4 h-2.5 w-16 text-gold-500/70">
        <path d="M2 8 Q32 -2 62 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <p className="mx-auto mt-3 max-w-[220px] text-[0.95rem] font-medium leading-[1.5] text-white/80">
        {stat.label}
      </p>
    </div>
  )
}

export default function ImpactStats() {
  return (
    <section id="impact" className="relative overflow-hidden bg-navy-900" aria-label="Our impact">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div
        className="gold-radial-glow pointer-events-none absolute inset-0 motion-safe:animate-pulse"
        style={{ animationDuration: '6s' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <SectionHeading
          dark
          eyebrow="Our Impact 2024–2025"
          title={
            <>
              Small team. <span className="italic text-gold-400">Enormous heart.</span>
            </>
          }
          lead="Every number below is a family, a young person, a future — powered entirely by volunteers."
        />
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS_ROW_ONE.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} index={i} />
          ))}
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS_ROW_TWO.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} index={i + STATS_ROW_ONE.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
