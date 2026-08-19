import { motion } from 'framer-motion'
import { Church, HandHeart, HeartHandshake, Sparkles } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const ROOTS = [
  { Icon: Sparkles, label: 'Faith' },
  { Icon: HandHeart, label: 'Love' },
  { Icon: HeartHandshake, label: 'Care & Compassion' },
]

export default function FaithHeritage() {
  return (
    <section className="bg-white" aria-label="Our faith heritage">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Icon medallion */}
        <motion.div
          initial={{ opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-[20px] bg-gradient-to-br from-navy-600 to-navy-800 p-10 shadow-card sm:p-14 before:absolute before:inset-0 before:translate-x-4 before:translate-y-4 before:rounded-[20px] before:border-2 before:border-gold-500/60 before:content-['']">
            <div className="texture-dots pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.05]" aria-hidden="true" />
            <div className="relative flex flex-col items-center text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/40">
                <Church className="h-10 w-10 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.3] text-white">
                Favourite Child Church
              </p>
              <p className="mt-2 text-[0.9rem] font-medium text-white/70">
                formerly Mustard Seed Chapel International
              </p>
              <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Our roots">
                {ROOTS.map(({ Icon, label }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-2 rounded-full border border-gold-500/60 px-4 py-2 text-[0.85rem] font-semibold text-gold-400"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
              Our Faith Heritage
            </p>
            <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
              Rooted in faith,{' '}
              <span className="italic text-gold-500">grown in community</span>
            </h2>
          </motion.div>

          <div className="mt-8 space-y-5">
            {[
              'LightBridge Foundation collaborates closely with Favourite Child Church — formerly Mustard Seed Chapel International — and its various community church branches across Western Sydney.',
              'Our work is deeply rooted in faith, and in the values of love, care and compassion that our church family has lived out for years. It is this faith that calls us to serve, and this community that shows us how.',
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.1 }}
                className="leading-[1.7] text-grey-500"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
