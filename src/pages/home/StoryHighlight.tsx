import { useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const QUOTE =
  'A day by the sea, bringing a community closer together.'

function QuotePanel() {
  return (
    <div className="mx-auto max-w-4xl px-6 text-center">
      <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400">
        Story of Hope
      </p>
      <blockquote className="mt-8 font-fraunces text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium italic leading-[1.3] text-white">
        {QUOTE.split(' ').map((word, i) => (
          <span key={i} data-quote-word className="inline-block">
            {word}
            {i < QUOTE.split(' ').length - 1 ? ' ' : ''}
          </span>
        ))}
      </blockquote>
    </div>
  )
}

function ImagePanel() {
  return (
    <div className="mx-auto grid w-full max-w-container items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
      <div
        data-story-image
        className="overflow-hidden rounded-[20px] shadow-card-hover"
      >
        <img
          src="/real-excursion-beach.jpg"
          alt="LightBridge Foundation families and volunteers at the Port Kembla Beach excursion, January 2025"
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <div>
        <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400">
          Story of Hope
        </p>
        <h3 className="mt-4 font-fraunces text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.15] text-white">
          Port Kembla Beach · January 2025
        </h3>
        <p className="mt-6 max-w-[520px] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.7] text-white/80">
          56 participants joined our community excursion to Port Kembla Beach,
          a day of safe recreation that improved wellbeing, reduced stress and
          strengthened connection, cohesion and belonging.
        </p>
      </div>
    </div>
  )
}

function CtaPanel() {
  return (
    <div className="mx-auto max-w-3xl px-6 text-center">
      <h3 className="font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white">
        Hope is built <span className="italic text-gold-400">one day</span> at a
        time.
      </h3>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/news"
          className="group inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/80 px-8 py-3 font-inter text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
        >
          Read more stories
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
        <Link
          to="/get-involved"
          className="inline-flex min-h-11 items-center rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
        >
          Become a Volunteer
        </Link>
      </div>
    </div>
  )
}

export default function StoryHighlight() {
  const rootRef = useRef<HTMLElement>(null)
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useGSAP(
    () => {
      if (reduced) return

      gsap.set('[data-story-panel="image"], [data-story-panel="cta"]', { opacity: 0 })
      gsap.set('[data-quote-word]', { opacity: 0.25 })
      gsap.set('[data-story-image]', { clipPath: 'inset(100% 0 0 0)' })

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
        },
      })

      // Quote words light up in gold, sequentially
      tl.to('[data-quote-word]', { opacity: 1, color: '#E5B93E', stagger: 0.04, duration: 0.25 })
        // Crossfade to the image panel, image reveals from bottom
        .to('[data-story-panel="quote"]', { opacity: 0, y: -40, duration: 0.12 }, 0.32)
        .to('[data-story-panel="image"]', { opacity: 1, duration: 0.12 }, 0.36)
        .to('[data-story-image]', { clipPath: 'inset(0% 0 0 0)', duration: 0.2, ease: 'power1.out' }, 0.38)
        // Crossfade to the CTA panel
        .to('[data-story-panel="image"]', { opacity: 0, y: -40, duration: 0.12 }, 0.66)
        .to('[data-story-panel="cta"]', { opacity: 1, y: 0, duration: 0.14 }, 0.72)
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className={cn(
        'relative overflow-hidden bg-navy-800',
        !reduced && 'flex h-[100dvh] items-center',
      )}
      aria-label="Story highlight: Port Kembla beach excursion"
    >
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      {reduced ? (
        /* Reduced-motion fallback: static stacked panels */
        <div className="relative w-full space-y-24 py-[clamp(80px,10vw,140px)]">
          <QuotePanel />
          <ImagePanel />
          <CtaPanel />
        </div>
      ) : (
        <>
          <div data-story-panel="quote" className="absolute inset-0 flex items-center">
            <QuotePanel />
          </div>
          <div data-story-panel="image" className="absolute inset-0 flex items-center">
            <ImagePanel />
          </div>
          <div data-story-panel="cta" className="absolute inset-0 flex items-center">
            <CtaPanel />
          </div>
        </>
      )}
    </section>
  )
}
