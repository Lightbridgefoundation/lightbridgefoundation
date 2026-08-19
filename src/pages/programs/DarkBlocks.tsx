import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EASE, GoldLink, MiniStat, ProgramHeading } from '@/pages/programs/shared'

/* ---------- Program 2 · Youth Empowerment (#youth, navy-900, flipped) ---------- */

const YOUTH_PILLS = [
  'Mental wellbeing',
  'Financial literacy',
  'Life skills',
  'Hygiene education',
  'Mentoring',
  'Community leadership',
]

export function Youth() {
  const collageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: collageRef,
    offset: ['start end', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      id="youth"
      className="relative scroll-mt-[88px] overflow-hidden bg-navy-900"
      aria-label="Youth Empowerment and Development"
    >
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        {/* Copy left */}
        <div>
          <ProgramHeading dark eyebrow="Program 02 · Ages 8-24" title="Youth Empowerment & Development" />
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-6 leading-[1.7] text-white/85"
          >
            Fifteen young people meet weekly to grow into confident community
            leaders. Sessions blend mental wellbeing, financial literacy, life
            skills, hygiene education, mentoring and community leadership , 
            all in a safe, culturally proud space. As they grow, capacity
            building continues with employment support and referral services
            that help young people find stability and growth beyond the group.
          </motion.p>

          <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Session topics">
            {YOUTH_PILLS.map((pill, i) => (
              <motion.li
                key={pill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 + i * 0.05 }}
                className="rounded-full border border-gold-500/60 px-4 py-1.5 text-[0.82rem] font-medium text-gold-400"
              >
                {pill}
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-white/15 pt-7">
            <MiniStat dark value={15} label="young people weekly" index={0} />
            <MiniStat dark display="8-24" label="age range" index={1} />
            <MiniStat dark value={100} suffix="%" label="free" index={2} />
          </div>

          <div className="mt-9">
            <GoldLink to="/get-involved#volunteer">Mentor a young person</GoldLink>
          </div>
        </div>

        {/* Collage right */}
        <div ref={collageRef} className="relative">
          <motion.div
            style={{ y: glowY }}
            className="pointer-events-none absolute -inset-10"
            aria-hidden="true"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  'radial-gradient(ellipse at 60% 40%, rgba(212,160,23,0.2), transparent 60%)',
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative overflow-hidden rounded-[20px] shadow-card"
          >
            <img
              src="/real-youth-venue.jpg"
              alt="LightBridge youth group members on an outing together"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="relative -mt-[24px] ml-[-24px] w-[55%] overflow-hidden rounded-[20px] border-4 border-navy-900 shadow-card-hover"
          >
            <img
              src="/real-youth-craft.jpg"
              alt="Young people in a hands-on learning activity at a LightBridge youth session"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Program 5 · Cultural Programs (#cultural, navy-900, flipped) ---------- */

export function Cultural() {
  return (
    <section
      id="cultural"
      className="relative scroll-mt-[88px] overflow-hidden bg-navy-900"
      aria-label="Cultural Programs"
    >
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        {/* Copy left */}
        <div>
          <ProgramHeading dark eyebrow="Program 05 · Heritage" title="Cultural Programs" />
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-6 leading-[1.7] text-white/85"
          >
            Our cultural programs carry African heritage onto Western Sydney's
            biggest stages, cultural dance, acting and singing tailored to
            the community's needs, building confidence, cultural identity and
            leadership in young performers while keeping culture alive across
            generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="relative mt-8 overflow-hidden rounded-2xl bg-navy-600 p-7"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-x-0 top-0 h-1 origin-left bg-gold-500"
              aria-hidden="true"
            />
            <h3 className="font-fraunces text-xl font-semibold text-gold-400">
              Blacktown Festival 2025
            </h3>
            <p className="mt-3 leading-[1.65] text-white/85">
              The group performed to festival crowds, showcasing African
              cultural heritage, strengthening youth confidence and deepening
              ties with Blacktown City Council and multicultural networks.
            </p>
          </motion.div>

          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-white/15 pt-7">
            <MiniStat dark value={1} label="festival stage in 2025" index={0} />
            <MiniStat dark value={15} suffix="+" label="young performers" index={1} />
            <MiniStat dark value={2} label="council partnerships" index={2} />
          </div>

          <div className="mt-9">
            <GoldLink to="/get-involved#partner">Partner on cultural events</GoldLink>
          </div>
        </div>

        {/* Image right with gold glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-8"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(212,160,23,0.25), transparent 65%)',
            }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[20px] shadow-card">
            <img
              src="/cultural-dance.jpg"
              alt="The Cultural Youth Dance Group in vibrant African dress performing on an outdoor festival stage"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] ease-out hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
