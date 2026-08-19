import { motion } from 'framer-motion'
import { Award, Heart, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Value {
  Icon: LucideIcon
  title: string
  text: string
}

const VALUES: Value[] = [
  { Icon: Heart, title: 'Compassion', text: 'We meet every person with empathy, never judgement.' },
  { Icon: Users, title: 'Community', text: 'We are neighbours helping neighbours — led by locals, for locals.' },
  { Icon: ShieldCheck, title: 'Cultural Safety', text: 'Every culture is respected, celebrated and safe here.' },
  { Icon: TrendingUp, title: 'Empowerment', text: 'We build skills and confidence, not dependency.' },
  { Icon: Award, title: 'Dignity', text: 'Support is offered with respect — every person, every time.' },
]

export default function ValuesSection() {
  return (
    <section className="bg-grey-50" aria-label="Our values">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <SectionHeading
          eyebrow="Our Values"
          title={
            <>
              What guides <span className="italic text-gold-500">every bridge we build</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {VALUES.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, rotateY: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-25% 0px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.09 }}
              className="group flex h-full flex-col items-center rounded-2xl bg-navy-800 p-7 text-center shadow-card transition-colors duration-300 hover:bg-navy-600"
              style={{ transformPerspective: 800 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/40 transition-all duration-300 group-hover:ring-2 group-hover:ring-gold-400">
                <Icon className="h-6 w-6 text-gold-400" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-fraunces text-xl font-semibold leading-[1.25] text-white">
                {title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-[1.6] text-white/80">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
