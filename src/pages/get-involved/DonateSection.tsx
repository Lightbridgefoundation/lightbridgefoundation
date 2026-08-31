import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Heart } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Frequency = 'one-time' | 'monthly'

const FREQUENCIES: { value: Frequency; label: string }[] = [
  { value: 'one-time', label: 'One-time' },
  { value: 'monthly', label: 'Monthly' },
]

const CHIPS: string[] = ['$20', '$50', '$100', '$150', 'Other']

export default function DonateSection() {
  const { openDonate } = useDonate()
  const [selected, setSelected] = useState('$50')
  const [frequency, setFrequency] = useState<Frequency>('one-time')

  return (
    <section
      id="donate"
      className="relative scroll-mt-20 overflow-hidden bg-navy-900"
      aria-label="Donate to LightBridge Foundation"
    >
      {/* Low-opacity photo layer on the right half, masked by gradient */}
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.15] md:block"
        style={{
          backgroundImage: 'url(/real-outreach-bags-row.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to right, transparent, black 55%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 55%)',
        }}
        aria-hidden="true"
      />
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="gold-radial-glow absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400"
          >
            Pathway 02 · Donate
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white"
          >
            Every dollar crosses the bridge{' '}
            <span className="italic text-gold-400">to a family</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-6 max-w-[640px] leading-[1.7] text-white/85"
          >
            We have no salaries, no honorariums, no admin overheads. Your
            donation helps us extend our faith-driven, grassroots services
            across Holroyd and beyond, funding food relief, vulnerable
            families, youth programs, community activities and local
            partnerships, directly. Choose a one-time gift or become a monthly
            supporter.
          </motion.p>

          {/* Frequency toggle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="mt-10 flex justify-center"
            role="group"
            aria-label="Donation frequency"
          >
            <div className="inline-flex flex-wrap justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 p-1.5">
              {FREQUENCIES.map(({ value, label }) => {
                const active = frequency === value
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFrequency(value)}
                    aria-pressed={active}
                    className={cn(
                      'relative min-h-11 rounded-full px-7 py-2.5 font-inter text-[0.92rem] font-semibold transition-colors duration-300',
                      active ? 'text-navy-900' : 'text-white/70 hover:text-white',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="frequency-indicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="absolute inset-0 rounded-full bg-gold-500"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Impact chips */}
          <div className="mt-10 flex flex-wrap items-stretch justify-center gap-3">
            {CHIPS.map((amount, i) => {
              const isSelected = selected === amount
              return (
                <motion.button
                  key={amount}
                  type="button"
                  onClick={() => setSelected(amount)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 22,
                    delay: 0.3 + i * 0.07,
                  }}
                  whileTap={{ scale: 0.96 }}
                  aria-pressed={isSelected}
                  className={cn(
                    'relative rounded-full border-2 px-7 py-3 transition-colors duration-300',
                    isSelected
                      ? 'border-gold-500 bg-gold-500 text-navy-900'
                      : 'border-gold-500/60 bg-transparent text-white hover:border-gold-400 hover:text-gold-400',
                  )}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="impact-chip-ring"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute -inset-[5px] rounded-full border-2 border-gold-400/70"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-fraunces text-lg font-bold leading-none">{amount}</span>
                </motion.button>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          >
            <button
              type="button"
              onClick={openDonate}
              className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-10 py-4 font-inter text-[1.05rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
            >
              <Heart className="h-5 w-5" aria-hidden="true" />
              {frequency === 'monthly' ? 'Give Monthly' : 'Donate Today'}
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="mx-auto mt-8 flex max-w-[520px] items-start justify-center gap-2.5 text-[0.85rem] font-medium leading-[1.6] text-white/80"
          >
            <Gift className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
            <span>
              Our thank-you: supporters who donate $100 or more, or sign up to a
              monthly contribution, receive a LightBridge thank-you gift.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            className="mt-6 text-[0.85rem] font-medium text-white/70"
          >
            LightBridge Foundation is an ACNC-registered Public Benevolent
            Institution. ABN 89 859 003 724.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
