import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FACTS = [
  {
    title: 'A registered charity',
    body: 'LightBridge Foundation is registered with the Australian Charities and Not-for-profits Commission (ACNC) as a Public Benevolent Institution. ABN 89 859 003 724.',
  },
  {
    title: 'Board oversight',
    body: 'Our board met twice during the 2024–2025 reporting period, covering compliance, financial oversight, program planning and risk management.',
  },
  {
    title: 'Volunteer working group',
    body: 'A dedicated volunteer working group coordinates food relief, youth activities, cultural programs and community events.',
  },
  {
    title: 'Insured & certified',
    body: 'Insurance is maintained through BizCover, and our Foodbank re-induction was completed in the reporting period.',
  },
  {
    title: 'Every dollar to purpose',
    body: 'We are entirely volunteer-run — no salaries, honorariums or admin overheads. Funds are used exclusively for charitable purposes.',
  },
  {
    title: 'Annual report',
    body: 'Our 2024–2025 Annual Report is available on request — email info@lightbridgefoundation.org.au.',
  },
]

export default function Governance() {
  return (
    <section className="bg-white" aria-label="Governance and accountability">
      <div className="mx-auto grid w-full max-w-container gap-14 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-[2fr_3fr] lg:gap-20 lg:px-12">
        {/* Sticky heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
            Governance
          </p>
          <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
            Run by volunteers.{' '}
            <span className="italic text-gold-500">Held to account.</span>
          </h2>
          <svg viewBox="0 0 120 14" aria-hidden="true" className="mt-4 h-3.5 w-[120px] text-gold-500">
            <motion.path
              d="M4 11 Q60 -4 116 11"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            />
          </svg>
          <p className="mt-5 max-w-[420px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-grey-500">
            Every dollar and every decision goes to our charitable purpose —
            here's how we stay accountable.
          </p>
        </motion.div>

        {/* Accordion of governance facts */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <Accordion type="single" collapsible defaultValue="fact-0" className="w-full">
            {FACTS.map((fact, i) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.1 }}
              >
                <AccordionItem
                  value={`fact-${i}`}
                  className="border-b border-navy-100 border-l-[3px] border-l-transparent px-5 transition-colors duration-300 data-[state=open]:border-l-gold-500 data-[state=open]:bg-gold-100/40"
                >
                  <AccordionTrigger className="py-5 font-fraunces text-lg font-semibold text-navy-800 hover:no-underline [&>svg]:text-gold-500">
                    {fact.title}
                  </AccordionTrigger>
                  <AccordionContent className="leading-[1.7] text-grey-500">
                    {fact.body}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
