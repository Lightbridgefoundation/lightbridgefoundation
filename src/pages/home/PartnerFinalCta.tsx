import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const CTA_WORDS = [
  { text: 'Bridge', gold: true },
  { text: 'hope.', gold: true },
  { text: 'Build', gold: false },
  { text: 'community.', gold: false },
]

export default function PartnerFinalCta() {
  const { openDonate } = useDonate()

  return (
    <>
      {/* Partner strip */}
      <section className="bg-grey-50" aria-label="Our partners">
        <div className="mx-auto w-full max-w-container px-6 py-16 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-grey-500"
          >
            With thanks to our partners
          </motion.p>
          {/* Static row on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-10 hidden justify-center md:flex"
          >
            <img
              src="/partner-logos.svg"
              alt="Blacktown City Council, Cumberland City Council, African Resource Centre, Foodbank NSW & ACT, OzHarvest"
              loading="lazy"
              className="w-full max-w-4xl opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            />
          </motion.div>
          {/* Marquee on mobile */}
          <div className="mt-10 overflow-hidden md:hidden" aria-hidden="true">
            <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <img
                  key={copy}
                  src="/partner-logos.svg"
                  alt=""
                  loading="lazy"
                  className="w-[520px] max-w-none opacity-60 grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-navy-900" aria-label="Final call to action">
        <div
          className="gold-radial-glow pointer-events-none absolute inset-0 motion-safe:animate-pulse"
          style={{ animationDuration: '3s' }}
          aria-hidden="true"
        />
        <img
          src="/arc-divider.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-full opacity-30"
        />
        <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] text-center lg:px-12">
          <h2 className="mx-auto max-w-3xl font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white">
            {CTA_WORDS.map((word, i) => (
              <span key={word.text} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className={
                    'inline-block will-change-transform' +
                    (word.gold ? ' italic text-gold-400' : '')
                  }
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-20% 0px' }}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                >
                  {word.text}
                </motion.span>
                {i < CTA_WORDS.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="mx-auto mt-6 max-w-xl text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/80"
          >
            Join LightBridge Foundation today, as a donor, volunteer or
            partner.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={openDonate}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Donate Now
            </button>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-white/80 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
