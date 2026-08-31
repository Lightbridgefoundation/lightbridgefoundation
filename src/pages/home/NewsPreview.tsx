import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STORIES = [
  {
    image: '/real-excursion-beach.jpg',
    alt: 'LightBridge community members gathered by the sea at the Port Kembla Beach excursion',
    pill: 'Jan 2025',
    title: 'Port Kembla Beach: community by the sea',
    excerpt:
      'On 4 January 2025, 56 participants joined our excursion to Port Kembla Beach, a day of connection, cohesion and belonging.',
  },
  {
    image: '/real-excursion-city.jpg',
    alt: 'Young LightBridge community members together during a group outing',
    pill: '2025',
    title: 'Youth dancers light up Blacktown Festival',
    excerpt:
      'Our Cultural Youth Dance Group celebrated African heritage on stage, building confidence, pride and leadership.',
  },
  {
    image: '/real-outreach-bags-close.jpg',
    alt: 'Packed food hampers ready for distribution at a LightBridge outreach',
    pill: '2024-25',
    title: '300 hampers and counting',
    excerpt:
      'A volunteer-powered food relief milestone: more than 300 hampers packed and shared with local families.',
  },
]

export default function NewsPreview() {
  return (
    <section className="bg-white" aria-label="News and stories">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
              News & Stories
            </p>
            <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
              Stories from <span className="italic text-gold-500">the bridge</span>
            </h2>
          </div>
          <Link
            to="/news"
            className="group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800"
          >
            All stories
            <ArrowRight className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story, i) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-25% 0px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
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
                  {story.pill}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.25] text-navy-800">
                  {story.title}
                </h3>
                <p className="mt-3 flex-1 leading-[1.7] text-grey-500">{story.excerpt}</p>
                <Link
                  to="/news"
                  className="group/link relative mt-6 inline-flex w-fit items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800"
                >
                  Read story
                  <ArrowRight className="h-4 w-4 text-gold-500 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover/link:w-full" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
