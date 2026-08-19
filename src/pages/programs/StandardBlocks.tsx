import { motion } from 'framer-motion'
import {
  CheckList,
  EASE,
  FramedImage,
  GhostDonateButton,
  MiniStat,
  NavyOutlineLink,
  GoldLink,
  ProgramHeading,
} from '@/pages/programs/shared'

/* ---------- Program 1 · Weekly Food Relief (#food-relief, white) ---------- */

export function FoodRelief() {
  return (
    <section id="food-relief" className="scroll-mt-[88px] bg-white" aria-label="Weekly Food Relief">
      <div className="mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        <FramedImage
          src="/food-relief.jpg"
          alt="Volunteers' hands arranging packed food hampers of fresh produce and pantry staples"
          badge="40+ supported weekly"
        />
        <div>
          <ProgramHeading eyebrow="Program 01 · Weekly" title="Weekly Food Relief" />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 leading-[1.7] text-grey-500"
          >
            Every week, our volunteers distribute fresh fruit and vegetables,
            pantry staples and emergency food support to families doing it
            tough — alongside community referrals and practical family
            assistance.
          </motion.p>
          <CheckList
            items={[
              'Fresh fruit & vegetables and pantry staples',
              'Emergency food support when crisis hits',
              'Community referrals & family assistance',
              'Powered by partnerships with Foodbank NSW & ACT and OzHarvest',
            ]}
          />
          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-navy-100 pt-7">
            <MiniStat value={2000} suffix="+" label="hampers distributed" index={0} />
            <MiniStat value={40} suffix="+" label="supported weekly" index={1} />
            <MiniStat value={52} label="weeks a year" index={2} />
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <NavyOutlineLink to="/contact?topic=support">Get Support</NavyOutlineLink>
            <GhostDonateButton>Donate to food relief</GhostDonateButton>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Program 3 · Casework & Advocacy (#casework, white) ---------- */

export function Casework() {
  return (
    <section id="casework" className="scroll-mt-[88px] bg-white" aria-label="Casework and Advocacy">
      <div className="mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        <FramedImage
          src="/casework-support.jpg"
          alt="A support worker and a woman in warm conversation over tea at a community centre table"
          badge="9 individuals supported in 2024–25"
        />
        <div>
          <ProgramHeading eyebrow="Program 03 · Confidential" title="Casework & Advocacy" />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 leading-[1.7] text-grey-500"
          >
            When life gets hard — domestic violence, housing instability,
            mental-health challenges — our trained volunteers walk beside
            people with one-on-one support, safety planning, referrals and
            help navigating services. Dignity and confidentiality always come
            first.
          </motion.p>
          <CheckList
            items={[
              'Safety planning for women experiencing domestic violence',
              'Support through housing instability',
              'Service navigation & specialist referrals',
              'Culturally safe, judgement-free',
            ]}
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="relative mt-8 overflow-hidden rounded-r-2xl bg-gold-100 p-6 pl-8"
          >
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute inset-y-0 left-0 w-1 origin-top bg-gold-500"
              aria-hidden="true"
            />
            <p className="font-fraunces text-xl italic leading-[1.6] text-navy-800">
              “Support is offered with respect — every person, every time.”
            </p>
          </motion.blockquote>
          <div className="mt-9">
            <GoldLink to="/contact?topic=support">Get confidential support</GoldLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Program 6 · Community Support & Referrals (#referrals, white) ---------- */

export function Referrals() {
  return (
    <section
      id="referrals"
      className="scroll-mt-[88px] bg-white"
      aria-label="Community Support and Referrals"
    >
      <div className="mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        <FramedImage
          src="/community-event.jpg"
          alt="A multicultural community family fun day in a Western Sydney park with stalls, families and shared food"
          badge="Every referral followed through"
        />
        <div>
          <ProgramHeading eyebrow="Program 06 · Always On" title="Community Support & Referrals" />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 leading-[1.7] text-grey-500"
          >
            Not sure where to turn? Start with us. We provide advocacy,
            information and guidance, referrals to specialist services,
            community resource navigation and support planning — so no one
            navigates hard times alone.
          </motion.p>
          <CheckList
            items={[
              'Advocacy services',
              'Referrals to specialist support',
              'Information & guidance',
              'Community resource navigation',
              'Support planning',
            ]}
          />
          <div className="mt-9">
            <NavyOutlineLink to="/contact?topic=support">Ask for guidance</NavyOutlineLink>
          </div>
        </div>
      </div>
    </section>
  )
}
