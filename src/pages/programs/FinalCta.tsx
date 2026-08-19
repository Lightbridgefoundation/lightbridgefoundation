import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'
import { EASE } from '@/pages/programs/shared'

export default function FinalCta() {
  const { openDonate } = useDonate()

  return (
    <section className="bg-gold-100" aria-label="Ready to help">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] text-center lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-navy-600"
        >
          Ready to Help?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-4 max-w-[760px] font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800"
        >
          Every program runs on{' '}
          <span className="italic text-gold-500">people like you</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-5 max-w-[640px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-ink/75"
        >
          Volunteer, donate or partner, and keep all six bridges standing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/get-involved#volunteer"
            className="inline-flex min-h-11 items-center rounded-full bg-navy-800 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-600 hover:shadow-card-hover active:scale-[0.97]"
          >
            Become a Volunteer
          </Link>
          <button
            type="button"
            onClick={openDonate}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            Donate Now
          </button>
          <Link
            to="/get-involved#partner"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-navy-800 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
