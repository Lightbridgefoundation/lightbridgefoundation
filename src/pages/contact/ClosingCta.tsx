import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function ClosingCta() {
  const { openDonate } = useDonate()

  return (
    <section className="relative overflow-hidden bg-navy-900" aria-label="Get started now">
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      {/* Breathing gold glow */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 120%, rgba(212,160,23,0.24), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] text-center lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white"
        >
          Prefer to just{' '}
          <span className="italic text-gold-400">dive in?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-6 max-w-[560px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/85"
        >
          Skip the inbox — become a volunteer or make a donation right now.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/get-involved#volunteer"
            onClick={() => {
              window.setTimeout(() => {
                document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })
              }, 150)
            }}
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
          >
            Become a Volunteer
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <button
            type="button"
            onClick={openDonate}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-100 active:scale-[0.97]"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Donate Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
