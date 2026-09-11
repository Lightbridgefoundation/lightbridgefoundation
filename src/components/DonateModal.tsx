import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HeartHandshake, X } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'

const AMOUNTS = ['$20', '$50', '$100', '$150']

const MAILTO =
  'mailto:info@lightbridgefoundation.org.au?subject=Donation%20to%20LightBridge%20Foundation'

export default function DonateModal() {
  const { isDonateOpen, closeDonate } = useDonate()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isDonateOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDonate()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isDonateOpen, closeDonate])

  return (
    <AnimatePresence>
      {isDonateOpen && (
        <motion.div
          key="donate-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeDonate}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="donate-modal-title"
            className="relative w-full max-w-[560px] overflow-hidden rounded-[20px] bg-white shadow-card-hover"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold arc header strip */}
            <div className="relative h-20 overflow-hidden bg-navy-900">
              <svg
                viewBox="0 0 560 100"
                className="absolute inset-x-0 bottom-0 h-full w-full"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20 95 Q280 -30 580 95"
                  fill="none"
                  stroke="#E3A63F"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="280" cy="34" r="4" fill="#E3A63F" />
                <circle cx="180" cy="52" r="3" fill="#E3A63F" opacity="0.7" />
                <circle cx="380" cy="52" r="3" fill="#E3A63F" opacity="0.7" />
              </svg>
              <div className="absolute left-6 top-5 flex items-center gap-2 text-gold-400">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                <span className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em]">
                  Donate
                </span>
              </div>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={closeDonate}
              aria-label="Close donation dialog"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="px-8 py-8 sm:px-10">
              <h2
                id="donate-modal-title"
                className="font-fraunces text-3xl font-semibold text-navy-800"
              >
                Your generosity builds{' '}
                <span className="italic text-gold-500">bridges</span>.
              </h2>
              <p className="mt-4 leading-[1.7] text-grey-500">
                Donations fund food relief, youth programs, family support,
                community activities and local partnerships across Western
                Sydney.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {AMOUNTS.map((amount) => (
                  <div
                    key={amount}
                    className="rounded-xl bg-gold-100 px-4 py-3 text-center"
                  >
                    <div className="font-fraunces text-xl font-bold text-navy-800">
                      {amount}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-[0.85rem] font-medium leading-snug text-grey-500">
                One-time or monthly, every amount helps.
              </p>

              <a
                href={MAILTO}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
              >
                Donate Today
              </a>
              <p className="mt-4 text-center text-[0.85rem] font-medium leading-[1.5] text-grey-500">
                LightBridge Foundation is 100% volunteer-run, every dollar goes
                directly to charitable programs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
