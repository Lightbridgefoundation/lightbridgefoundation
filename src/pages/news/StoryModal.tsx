import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'
import type { Story } from '@/pages/news/stories'

interface StoryModalProps {
  story: Story | null
  onClose: () => void
}

/**
 * Shared story modal (design §2a): full-screen navy backdrop, centered
 * scrollable article card with hero image, expanded copy, quote block and
 * closing CTA row. Closes via X / backdrop / Escape; focus-trapped.
 */
export default function StoryModal({ story, onClose }: StoryModalProps) {
  const { openDonate } = useDonate()
  const closeRef = useRef<HTMLButtonElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!story) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && cardRef.current) {
        const focusable = cardRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [story, onClose])

  return (
    <AnimatePresence>
      {story && (
        <motion.div
          key="story-backdrop"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-900/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-modal-title"
            data-lenis-prevent
            className="relative max-h-[85vh] w-full max-w-[720px] overflow-y-auto rounded-[20px] bg-white shadow-card-hover"
            initial={{ scale: 0.94, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={story.image}
                alt={story.alt}
                className="aspect-video w-full object-cover"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close story"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/60 text-white backdrop-blur-sm transition-colors hover:bg-navy-900"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-8 py-8 sm:px-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold-100 px-3.5 py-1.5 font-inter text-[0.72rem] font-bold uppercase tracking-[0.14em] text-navy-800">
                  {story.meta}
                </span>
                <span className="font-inter text-[0.85rem] font-medium text-grey-500">
                  {story.date}
                </span>
              </div>

              <h2
                id="story-modal-title"
                className="mt-5 font-fraunces text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] text-navy-800"
              >
                {story.title}
              </h2>

              <div className="mt-6 space-y-5">
                {story.paragraphs.map((paragraph, i) => (
                  <p key={i} className="leading-[1.7] text-grey-500">
                    {paragraph}
                  </p>
                ))}
              </div>

              <blockquote className="mt-8 border-l-4 border-gold-500 pl-6">
                <p className="font-fraunces text-[clamp(1.15rem,2vw,1.4rem)] font-medium italic leading-[1.45] text-navy-800">
                  <span className="mr-1 font-fraunces text-3xl leading-none text-gold-500" aria-hidden="true">
                    “
                    </span>
                  {story.quote.text}
                </p>
                <footer className="mt-3 font-inter text-[0.85rem] font-medium text-grey-500">
                  — {story.quote.attribution}
                </footer>
              </blockquote>

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-navy-100 pt-8">
                <button
                  type="button"
                  onClick={() => {
                    onClose()
                    openDonate()
                  }}
                  className="inline-flex min-h-11 items-center rounded-full bg-gold-500 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
                >
                  Donate Now
                </button>
                <Link
                  to="/get-involved"
                  onClick={onClose}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy-800 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
                >
                  Get Involved
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
