import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function Partners() {
  return (
    <section className="bg-grey-50" aria-label="Partners and acknowledgements">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] text-center lg:px-12">
        <SectionHeading
          eyebrow="With Gratitude"
          title={
            <>
              We build <span className="italic text-gold-500">together</span>
            </>
          }
          lead="LightBridge Foundation's work is made possible by partners who share our belief in community."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          className="mx-auto mt-14 max-w-[900px]"
        >
          <img
            src="/partner-logos.svg"
            alt="Partners: Blacktown City Council, Cumberland City Council, African Resource Centre, Foodbank NSW & ACT, OzHarvest"
            loading="lazy"
            className="mx-auto w-full opacity-60 transition-opacity duration-300 hover:opacity-100"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-10 max-w-[640px] font-fraunces text-xl italic leading-[1.6] text-navy-800"
        >
          …and the local volunteers, families and community leaders
          who are the true bridge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            to="/get-involved#partner"
            className="inline-flex min-h-11 items-center rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
          >
            Partner With Us
          </Link>
          <Link
            to="/#impact"
            className="group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800 transition-colors hover:text-gold-500"
          >
            See our impact
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export function ClosingCta() {
  const words = ['Become', 'part', 'of']
  return (
    <section className="relative overflow-hidden bg-navy-900" aria-label="Become part of the story">
      <div
        className="gold-radial-glow pointer-events-none absolute inset-0 motion-safe:animate-pulse"
        style={{ animationDuration: '6s' }}
        aria-hidden="true"
      />
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <img
        src="/arc-divider.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-25"
      />
      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(72px,9vw,120px)] text-center lg:px-12">
        <h2 className="mx-auto max-w-[760px] font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white">
          {words.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
              <motion.span
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
                className="inline-block"
              >
                {w}
              </motion.span>
              {' '}
            </span>
          ))}
          <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              initial={{ y: '110%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.7, ease: EASE, delay: words.length * 0.05 }}
              className="relative inline-block italic text-gold-400"
            >
              the story
              <svg
                viewBox="0 0 120 14"
                aria-hidden="true"
                preserveAspectRatio="none"
                className="absolute -bottom-[0.05em] left-0 h-[0.2em] w-full text-gold-500"
              >
                <motion.path
                  d="M4 11 Q60 -4 116 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: '-20% 0px' }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: words.length * 0.05 + 0.4 }}
                />
              </svg>
            </motion.span>
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/get-involved#volunteer"
            className="inline-flex min-h-11 items-center rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
          >
            Become a Volunteer
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-white/80 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
