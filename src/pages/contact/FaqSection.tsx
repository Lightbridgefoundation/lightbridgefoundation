import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FAQS = [
  {
    q: 'How do I get food relief support?',
    a: 'Reach out via the form above or email us, our volunteers will connect you with our weekly food relief in Holroyd and, where needed, refer you to additional services.',
  },
  {
    q: 'Is your support confidential?',
    a: "Yes. Casework and advocacy, including domestic-violence support, is confidential, culturally safe and judgement-free. If you're in immediate danger, call 000.",
  },
  {
    q: 'Do I need experience to volunteer?',
    a: "No. Our volunteers are supported and covered by our insurance. There's a role for every schedule, from weekly food relief and youth mentoring to administration and community outreach.",
  },
  {
    q: 'Where does my donation go?',
    a: 'We have no salaries, honorariums or admin overheads. Donations fund food relief, vulnerable families, youth programs, community activities and local partnerships, exclusively charitable purposes.',
  },
  {
    q: 'Is LightBridge Foundation a registered charity?',
    a: 'Yes, registered with the ACNC as a Public Benevolent Institution, ABN 89 859 003 724. Our 2024-2025 Annual Report is available on request.',
  },
  {
    q: 'Can my business or council partner with you?',
    a: "Absolutely, we already partner with Blacktown City Council, Cumberland City Council, African Resource Centre, Foodbank NSW & ACT and OzHarvest. Choose 'Partnership' in the form and tell us your idea.",
  },
]

export default function FaqSection() {
  return (
    <section className="relative bg-white" aria-label="Frequently asked questions">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <div className="mx-auto max-w-[760px]">
          <SectionHeading
            eyebrow="Common Questions"
            title={
              <>
                Before you <span className="italic text-gold-500">ask</span>
              </>
            }
          />

          <Accordion type="single" collapsible className="mt-14 space-y-4">
            {FAQS.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-25% 0px' }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="rounded-xl border border-navy-100 px-6 transition-colors duration-300 data-[state=open]:border-l-4 data-[state=open]:border-l-gold-500"
                >
                  <AccordionTrigger className="py-5 font-inter text-[1rem] font-semibold text-navy-800 hover:no-underline [&[data-state=open]>svg]:text-gold-500 [&>svg]:text-gold-500">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-[1.7] text-grey-500">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
