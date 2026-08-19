import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SUBURBS = [
  'Holroyd',
  'Bankstown',
  'Chester Hill',
  'Guildford',
  'Fairfield',
  'Pendle Hill',
  'Schofield',
  'Blacktown',
  'Mt Druitt',
  "St Mary's",
  'Penrith',
  'Glenmore Park',
]

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-grey-50" aria-label="Our service area">
      <div className="mx-auto w-full max-w-container px-6 py-16 lg:flex lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500"
          >
            Our Communities
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mt-4 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-ink"
          >
            We operate from Holroyd as our major hub, serving families across
            twelve Western Sydney communities:
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {SUBURBS.map((suburb, i) => {
              const isHub = suburb === 'Holroyd'
              return (
                <motion.span
                  key={suburb}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-25% 0px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 320,
                    damping: 22,
                    delay: 0.15 + i * 0.04,
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-gold-500 bg-white px-4 py-2 text-[0.88rem] font-semibold text-navy-800"
                >
                  {isHub && (
                    <motion.span
                      animate={{ opacity: [1, 0.4, 1], scale: [1, 1.25, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      aria-hidden="true"
                    >
                      <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                    </motion.span>
                  )}
                  {suburb}
                  {isHub && (
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-gold-500">
                      · Major Hub
                    </span>
                  )}
                </motion.span>
              )
            })}
          </div>
        </div>
        <motion.img
          src="/arc-divider.svg"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-10 hidden w-[320px] shrink-0 lg:block"
        />
      </div>
    </section>
  )
}
