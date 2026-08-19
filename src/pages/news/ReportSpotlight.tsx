import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, PenLine } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const REPORT_MAILTO =
  'mailto:info@lightbridgefoundation.org.au?subject=Annual%20Report%20Request'

export default function ReportSpotlight() {
  return (
    <section className="bg-white" aria-label="Annual report and story sharing">
      <div className="mx-auto grid w-full max-w-container gap-8 px-6 py-[clamp(80px,10vw,140px)] md:grid-cols-2 lg:px-12">
        {/* Annual Report card */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col rounded-2xl bg-navy-800 p-10 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100">
            <FileText className="h-6 w-6 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] text-white">
            2024–2025 Annual Report
          </h3>
          <p className="mt-3 flex-1 leading-[1.7] text-white/75">
            Our full annual report — programs, governance, financials and
            impact — is available on request.
          </p>
          <a
            href={REPORT_MAILTO}
            className="mt-8 inline-flex w-fit min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
          >
            Request the report
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Share your story card */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col rounded-2xl bg-gold-100 p-10 text-navy-800 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800">
            <PenLine className="h-6 w-6 text-gold-400" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] text-navy-800">
            Have a LightBridge story?
          </h3>
          <p className="mt-3 flex-1 leading-[1.7] text-navy-800/75">
            Volunteer, family, partner or friend — if our community has touched
            your life, we&apos;d love to hear from you.
          </p>
          <Link
            to="/contact"
            className="group relative mt-8 inline-flex w-fit min-h-11 items-center gap-1.5 py-2 font-inter text-[0.95rem] font-semibold text-navy-800"
          >
            Get in touch
            <ArrowRight
              className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
            <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
