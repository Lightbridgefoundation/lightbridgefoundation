import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionHeading from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const MILESTONES = [
  {
    date: 'Weekly, every week',
    text: '40+ community members supported through weekly food relief.',
  },
  {
    date: '2024–25',
    text: '2,000+ food hampers distributed across Western Sydney.',
  },
  {
    date: '4 January 2025',
    text: 'Port Kembla Beach excursion — 56 CALD participants, many seeing the ocean for the first time.',
  },
  {
    date: '2025',
    text: 'Cultural Youth Dance Group performs at Blacktown Festival.',
  },
  {
    date: '2024–25',
    text: '9 individuals supported through domestic violence, housing and mental-health casework.',
  },
  {
    date: '10 January 2026',
    text: 'Northern Beaches excursion — the tradition continues with 56 participants.',
  },
  {
    date: 'Today',
    text: '300+ people supported annually, 100% volunteer-powered — and just getting started.',
  },
]

export default function Timeline() {
  const rootRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Gold center line draws top → bottom with scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-tl-list]',
            start: 'top 70%',
            end: 'bottom 55%',
            scrub: true,
          },
        },
      )

      const items = gsap.utils.toArray<HTMLElement>('[data-tl-item]')

      // Node pops as the line reaches it
      items.forEach((item) => {
        gsap.from(item.querySelector('[data-tl-dot]'), {
          scale: 0,
          duration: 0.5,
          ease: 'back.out(2.5)',
          scrollTrigger: { trigger: item, start: 'top 68%' },
        })
      })

      // Cards slide in from their side (desktop alternates; mobile slides right)
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px)', () => {
        items.forEach((item) => {
          const fromLeft = item.dataset.side === 'left'
          gsap.from(item.querySelector('[data-tl-card]'), {
            x: fromLeft ? -48 : 48,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 72%' },
          })
        })
      })
      mm.add('(max-width: 1023px)', () => {
        items.forEach((item) => {
          gsap.from(item.querySelector('[data-tl-card]'), {
            x: -48,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 75%' },
          })
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-navy-900"
      aria-label="Milestones timeline"
    >
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="gold-radial-glow absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <SectionHeading
          eyebrow="Our Journey"
          dark
          title={
            <>
              Milestones along{' '}
              <span className="italic text-gold-400">the bridge</span>
            </>
          }
        />

        <div data-tl-list className="relative mt-20">
          {/* Gold line (mobile: left, desktop: center) */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-[2px] origin-top bg-gold-500 lg:left-[calc(50%-1px)]"
            aria-hidden="true"
          />

          <ol className="space-y-12 lg:space-y-16">
            {MILESTONES.map((milestone, i) => {
              const left = i % 2 === 0
              return (
                <li
                  key={`${milestone.date}-${i}`}
                  data-tl-item
                  data-side={left ? 'left' : 'right'}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-24"
                >
                  {/* Node dot on the line */}
                  <span
                    data-tl-dot
                    className="absolute left-[17px] top-7 h-3.5 w-3.5 rounded-full bg-gold-500 ring-4 ring-gold-500/25 lg:left-[calc(50%-7px)]"
                    aria-hidden="true"
                  />
                  <div
                    data-tl-card
                    className={cn(
                      'ml-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:ml-0',
                      left
                        ? 'lg:col-start-1 lg:text-right'
                        : 'lg:col-start-2 lg:text-left',
                    )}
                  >
                    <span className="font-fraunces text-xl font-semibold text-gold-400">
                      {milestone.date}
                    </span>
                    <p className="mt-2 leading-[1.7] text-white/80">
                      {milestone.text}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
