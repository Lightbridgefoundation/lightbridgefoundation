import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const PARAGRAPHS = [
  'LightBridge Foundation — formerly known as Favourite Child Care Inc — is a non-profit organisation made up primarily of African immigrants and refugees. We grew from a simple truth: in Western Sydney\u2019s richly diverse neighbourhoods, too many newly arrived families, women escaping violence, and young people were falling through the gaps — unseen by systems that weren\u2019t built with them in mind.',
  'So our community built the bridge itself. For Community, By Community: our volunteers — locals, parents, students, community leaders — deliver culturally led grassroots services tailored to the unique needs of our people. Weekly food relief. A youth group. Casework for families in crisis. Beach days for children who had never seen the ocean. Cultural stages where young dancers reclaim their heritage with pride.',
  'Today, as LightBridge Foundation, we carry that same grassroots heart under a new name and a renewed promise: bridging hope, building community, empowering futures.',
]

const FACT_CHIPS = [
  'ACNC Registered',
  'Public Benevolent Institution',
  'ABN 89 859 003 724',
  'INC 2400448',
  '24-27 Crescent St, Holroyd NSW 2142',
  '100% Volunteer-Led',
]

export default function StorySection() {
  return (
    <section className="bg-white" aria-label="Our story">
      <div className="mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
              Our Story
            </p>
            <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
              From a neighbourhood's need to{' '}
              <span className="italic text-gold-500">a bridge of hope</span>
            </h2>
          </motion.div>

          <div className="mt-8 space-y-5">
            {PARAGRAPHS.map((text, i) => (
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

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="mt-8 border-l-4 border-gold-500 pl-5 font-fraunces text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold italic leading-[1.4] text-navy-800"
          >
            “For Community, By Community.”
          </motion.p>

          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Organisation facts">
            {FACT_CHIPS.map((chip, i) => (
              <motion.li
                key={chip}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 + i * 0.07 }}
                className="rounded-full bg-gold-100 px-4 py-2 text-[0.85rem] font-semibold text-navy-800"
              >
                {chip}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Framed image */}
        <motion.div
          initial={{ opacity: 0, x: 64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative"
        >
          <div className="relative rounded-[20px] before:absolute before:inset-0 before:-translate-x-4 before:translate-y-4 before:rounded-[20px] before:border-2 before:border-gold-500/60 before:content-['']">
            <div className="relative overflow-hidden rounded-[20px] shadow-card">
              <img
                src="/who-we-are.jpg"
                alt="Volunteers handing fresh fruit and vegetable hampers to smiling families at a community hall"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] ease-out hover:scale-105"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.35 }}
            className="absolute -bottom-6 -left-4 rounded-2xl bg-navy-800 px-6 py-4 shadow-card-hover sm:-left-8"
          >
            <p className="font-fraunces text-lg font-semibold text-gold-400">
              100% volunteer-run
            </p>
            <p className="text-[0.85rem] font-medium text-white/75">since day one</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
