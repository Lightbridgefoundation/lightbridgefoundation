import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-gold-100" aria-label="Our belief">
      {/* Navy arc silhouette */}
      <svg
        viewBox="0 0 1440 240"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-0 w-full opacity-[0.06]"
        preserveAspectRatio="none"
      >
        <path d="M0 220 Q720 -40 1440 220" fill="none" stroke="#163A5F" strokeWidth="10" />
      </svg>

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(72px,9vw,120px)] lg:px-12">
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 shadow-gold-glow">
            <Quote className="h-6 w-6 text-navy-900" strokeWidth={2} aria-hidden="true" />
          </span>
          <blockquote className="mt-8 font-fraunces text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium italic leading-[1.35] text-navy-800">
            “Never underestimate a single act of kindness because it has the
            power to transform someone’s life.”
          </blockquote>
          <figcaption className="mt-6 font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-navy-800/70">
            The belief behind everything we do
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
