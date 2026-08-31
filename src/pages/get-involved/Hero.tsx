import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

type Word = { text: string; gold?: boolean }
const HEADLINE: Word[] = [
  { text: 'Be' },
  { text: 'the' },
  { text: 'bridge' },
  { text: 'someone', gold: true },
  { text: 'needs', gold: true },
]

function SplitWord({ word }: { word: Word }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      {word.text.split('').map((ch, i) => (
        <span
          key={i}
          data-hero-char
          className={
            'inline-block will-change-transform' +
            (word.gold ? ' italic text-gold-400' : '')
          }
        >
          {ch}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Entrance sequence (mirrors home hero): scrim → eyebrow → H1 chars → lead → buttons
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('[data-hero-scrim]', { opacity: 0, duration: 0.5 })
        .from('[data-hero-eyebrow]', { y: 24, opacity: 0, duration: 0.5 }, 0.2)
        .from(
          '[data-hero-char]',
          { yPercent: 110, duration: 0.7, stagger: 0.02 },
          0.35,
        )
        .fromTo(
          '[data-hero-arc] path',
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 1.2, ease: 'power2.out' },
          0.9,
        )
        .from('[data-hero-lead]', { y: 32, opacity: 0, duration: 0.6 }, 1.0)
        .from(
          '[data-hero-cta]',
          { y: 32, opacity: 0, duration: 0.6, stagger: 0.12 },
          1.1,
        )

      // Photo parallax at 0.6x scroll
      gsap.to('[data-hero-bg]', {
        y: 140,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      // Soft gold pulse radiating from the volunteer group (3s yoyo)
      gsap.to('[data-hero-pulse]', {
        opacity: 0.3,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-900"
      aria-label="Get involved with LightBridge Foundation"
    >
      {/* Background photo + mirrored navy scrim + texture */}
      <div className="absolute inset-0" data-hero-bg>
        <img
          src="/real-outreach-group.jpg"
          alt="LightBridge Foundation volunteers at a community food hamper outreach in Merrylands"
          className="h-[115%] w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div
        data-hero-scrim
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(14,42,71,0.92) 0%, rgba(14,42,71,0.6) 55%, rgba(14,42,71,0.3) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      {/* Pulsing gold glow, bottom-left (mirrored from home hero) */}
      <div
        data-hero-pulse
        className="absolute inset-0 opacity-[0.15]"
        style={{
          background:
            'radial-gradient(ellipse at 20% 85%, rgba(212,160,23,0.55), transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-container px-6 py-24 lg:px-12">
        <div className="max-w-[640px]">
          <p
            data-hero-eyebrow
            className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400"
          >
            Get Involved
          </p>
          <h1 className="mt-6 font-fraunces text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.08] text-white">
            <SplitWord word={HEADLINE[0]} /> <SplitWord word={HEADLINE[1]} />{' '}
            <SplitWord word={HEADLINE[2]} />{' '}
            <span className="relative inline-block">
              <SplitWord word={HEADLINE[3]} /> <SplitWord word={HEADLINE[4]} />
              <svg
                data-hero-arc
                viewBox="0 0 120 14"
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-[0.22em] w-full text-gold-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 11 Q60 -4 116 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                />
              </svg>
            </span>
          </h1>
          <p
            data-hero-lead
            className="mt-8 max-w-[560px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/85"
          >
            LightBridge Foundation is 100% volunteer-run. Everything we do , 
            every hamper, every youth session, every beach day, happens
            because someone like you showed up.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              data-hero-cta
              onClick={() => scrollToId('volunteer')}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
            >
              Become a Volunteer
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              data-hero-cta
              onClick={() => scrollToId('donate')}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-100 active:scale-[0.97]"
            >
              Donate Now
            </button>
            <button
              type="button"
              data-hero-cta
              onClick={() => scrollToId('partner')}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
