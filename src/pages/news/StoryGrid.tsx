import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FILTERS, STORIES } from '@/pages/news/stories'
import type { Story, StoryCategory } from '@/pages/news/stories'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type FilterKey = StoryCategory | 'all'

interface StoryGridProps {
  onOpen: (story: Story) => void
}

export default function StoryGrid({ onOpen }: StoryGridProps) {
  const [active, setActive] = useState<FilterKey>('all')
  const visible =
    active === 'all' ? STORIES : STORIES.filter((s) => s.category === active)

  return (
    <section id="all-stories" className="bg-grey-50" aria-label="All stories">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        {/* Heading row + filters */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
              All Stories
            </p>
            <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
              Every story is <span className="italic text-gold-500">a step across</span>
            </h2>
          </motion.div>

          <div
            role="group"
            aria-label="Filter stories by category"
            className="flex flex-wrap gap-1 rounded-full border border-navy-100 bg-white p-1 shadow-card"
          >
            {FILTERS.map((filter) => {
              const isActive = active === filter.key
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActive(filter.key)}
                  aria-pressed={isActive}
                  className={cn(
                    'relative min-h-11 rounded-full px-5 font-inter text-[0.88rem] font-semibold transition-colors duration-300',
                    isActive ? 'text-navy-800' : 'text-grey-500 hover:text-navy-800',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="story-filter-indicator"
                      className="absolute inset-0 rounded-full bg-gold-100 ring-1 ring-gold-500/40"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
                    )}
                    {filter.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((story, i) => (
              <motion.article
                key={story.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: EASE,
                    delay: Math.min(i, 6) * 0.08,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  transition: { duration: 0.2 },
                }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-navy-900 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.12]"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-100 px-3.5 py-1.5 font-inter text-[0.72rem] font-bold uppercase tracking-[0.14em] text-navy-800">
                    {story.meta}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] text-navy-800">
                    {story.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-[1.7] text-grey-500">
                    {story.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => onOpen(story)}
                    aria-label={`Read story: ${story.title}`}
                    className="group/link relative mt-6 inline-flex w-fit min-h-11 items-center gap-1.5 py-2 font-inter text-[0.95rem] font-semibold text-navy-800"
                  >
                    Read story
                    <ArrowRight
                      className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover/link:w-full" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
