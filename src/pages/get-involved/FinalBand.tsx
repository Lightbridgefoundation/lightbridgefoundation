import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function FinalBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900" aria-label="Still have questions">
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 120%, rgba(212,160,23,0.22), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <img
        src="/arc-divider.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-0 w-[140%] max-w-none opacity-30"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] text-center lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white"
        >
          Questions first?{' '}
          <span className="italic text-gold-400">We'd love to chat.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-white/80 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
          >
            Contact Us
          </Link>
          <a
            href="mailto:info@lightbridgefoundation.org.au"
            className="group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-white transition-colors hover:text-gold-400"
          >
            Email info@lightbridgefoundation.org.au
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
