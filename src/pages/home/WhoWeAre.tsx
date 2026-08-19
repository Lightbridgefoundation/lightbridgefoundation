import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Check, PackageOpen } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const CHECKLIST = [
  '100% volunteer-run — no paid staff',
  'Culturally safe, community-driven programs',
  'Serving 12 communities across Western Sydney',
]

export default function WhoWeAre() {
  return (
    <section className="bg-white" aria-label="Who we are">
      <div className="mx-auto grid w-full max-w-container items-center gap-16 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-[55fr_45fr] lg:px-12">
        {/* Image composition */}
        <motion.div
          initial={{ opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative"
        >
          <div className="relative rounded-[20px] before:absolute before:inset-0 before:translate-x-4 before:translate-y-4 before:rounded-[20px] before:border-2 before:border-gold-500 before:content-['']">
            <img
              src="/who-we-are.jpg"
              alt="Volunteers in navy and gold aprons handing fresh food hampers to smiling families at a community hall"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[20px] object-cover shadow-card"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
            className="absolute -bottom-8 -right-2 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card-hover sm:right-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100">
              <PackageOpen className="h-6 w-6 text-gold-500" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-fraunces text-2xl font-bold text-navy-800">2,000+</span>
              <span className="block text-[0.85rem] font-medium text-grey-500">
                food hampers distributed
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title={
              <>
                A bridge between{' '}
                <span className="italic text-gold-500">hardship and hope</span>
              </>
            }
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-6 space-y-5"
          >
            {[
              'LightBridge Foundation is a 100% volunteer-led charity based in Western Sydney, NSW. We support, uplift and empower families and individuals from culturally and linguistically diverse backgrounds through culturally safe, community-driven programs that promote wellbeing, belonging and social cohesion.',
              'From weekly food relief in Holroyd to youth mentoring in Blacktown and beach excursions that change lives — we connect communities, empower futures and create opportunities.',
            ].map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
                className="leading-[1.7] text-grey-500"
              >
                {paragraph}
              </motion.p>
            ))}
            <ul className="space-y-3 pt-2">
              {CHECKLIST.map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                  className="flex items-start gap-3 font-medium text-ink"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100">
                    <Check className="h-3.5 w-3.5 text-gold-500" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <Link
                to="/about"
                className="inline-flex min-h-11 items-center rounded-xl border-2 border-navy-800 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
              >
                Learn More
              </Link>
              <a
                href="#impact"
                className="group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800 transition-colors hover:text-navy-600"
              >
                Our impact
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
