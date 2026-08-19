import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import type { Story } from '@/pages/news/stories'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface FeaturedStoryProps {
  story: Story
  onOpen: (story: Story) => void
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function FeaturedStory({ story, onOpen }: FeaturedStoryProps) {
  const scrollToGrid = () => {
    document.getElementById('all-stories')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white" aria-label="Featured story">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-12 lg:px-12">
        {/* Image with gold offset frame + clip reveal */}
        <div className="relative lg:col-span-7">
          <div
            className="absolute -bottom-4 -right-4 h-full w-full rounded-[20px] border-2 border-gold-500"
            aria-hidden="true"
          />
          <motion.div
            className="relative overflow-hidden rounded-[20px] shadow-card-hover"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <img
              src={story.image}
              alt={story.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content card */}
        <motion.div
          className="lg:col-span-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20% 0px' }}
        >
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold-100 px-3.5 py-1.5 font-inter text-[0.72rem] font-bold uppercase tracking-[0.14em] text-navy-800">
              Community Excursions
            </span>
            <span className="font-inter text-[0.85rem] font-medium text-grey-500">
              January 2025
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-5 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800"
          >
            {story.title}
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-6 leading-[1.7] text-grey-500">
            {story.excerpt}
          </motion.p>

          {story.quote && (
            <motion.blockquote variants={itemVariants} className="mt-8 flex gap-4">
              <motion.span
                className="font-fraunces text-6xl leading-[0.8] text-gold-500"
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.5 }}
              >
                “
              </motion.span>
              <div>
                <p className="font-fraunces text-[clamp(1.15rem,2vw,1.4rem)] font-medium italic leading-[1.45] text-navy-800">
                  {story.quote.text}
                </p>
                <footer className="mt-3 font-inter text-[0.85rem] font-medium text-grey-500">
                 , {story.quote.attribution}
                </footer>
              </div>
            </motion.blockquote>
          )}

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => onOpen(story)}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy-800 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
            >
              Read the full story
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              onClick={scrollToGrid}
              className="group/link relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800"
            >
              More stories below
              <ArrowDown
                className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover/link:translate-y-1"
                aria-hidden="true"
              />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover/link:w-full" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
