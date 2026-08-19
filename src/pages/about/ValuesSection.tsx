import { motion } from 'framer-motion'
import { Award, BadgeCheck, Handshake, Heart, ShieldCheck, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Value {
  Icon: LucideIcon
  title: string
  text: string
}

const VALUES: Value[] = [
  { Icon: Heart, title: 'Faith & Compassion', text: 'Rooted in faith, we meet every person with love, care and empathy — never judgement.' },
  { Icon: TrendingUp, title: 'Community Empowerment', text: 'For Community, By Community — we build skills and confidence, not dependency.' },
  { Icon: ShieldCheck, title: 'Inclusivity & Cultural Consciousness', text: 'Every culture is respected, celebrated and safe here.' },
  { Icon: Award, title: 'Dignity', text: 'Support is offered with respect — every person, every time.' },
  { Icon: BadgeCheck, title: 'Integrity & Accountability', text: 'Every dollar and every decision goes to our charitable purpose — openly and honestly.' },
  { Icon: Handshake, title: 'Collaboration & Partnership', text: 'We work hand in hand with churches, councils and community partners to go further together.' },
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
