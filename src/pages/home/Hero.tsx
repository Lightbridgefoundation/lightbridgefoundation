import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, Heart } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Word = { text: string; gold?: boolean }
const HEADLINE: Word[] = [
  { text: 'Building' },
  { text: 'Brighter', gold: true },
  { text: 'Futures', gold: true },
  { text: 'Together' },
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
  const { openDonate } = useDonate()

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // Entrance sequence (~1.6s)
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
        .from('[data-hero-trust]', { opacity: 0, duration: 0.6 }, 1.5)

      // Scroll parallax (no pin): content 0.4x, arc 0.25x, background 0.6x
      gsap.to('[data-hero-content]', {
        y: -140,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-arcimg]', {
        y: -80,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-bg]', {
        y: 120,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-scrollcue]', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: '+=40', scrub: true },
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[max(640px,calc(100dvh-72px))] items-center overflow-hidden bg-navy-900"
      aria-label="LightBridge Foundation — welcome"
    >
      {/* Background image + scrim + texture */}
      <div className="absolute inset-0" data-hero-bg>
        <img
          src="/hero-home.jpg"
          alt="Families and volunteers walking together across a pedestrian bridge at dawn in warm golden light"
          className="h-[115%] w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div
        data-hero-scrim
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(14,42,71,0.92) 0%, rgba(14,42,71,0.55) 55%, rgba(14,42,71,0.25) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="texture-dots absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <img
        src="/arc-divider.svg"
        alt=""
        data-hero-arcimg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4%] left-0 w-[140%] max-w-none opacity-40"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-container px-6 py-20 lg:px-12" data-hero-content>
        <div className="max-w-[640px]">
          <p
            data-hero-eyebrow
            className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400"
          >
            LightBridge Foundation · Western Sydney
          </p>
          <h1 className="mt-6 font-fraunces text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.05] text-white">
            <SplitWord word={HEADLINE[0]} />{' '}
            <span className="relative inline-block">
              <SplitWord word={HEADLINE[1]} /> <SplitWord word={HEADLINE[2]} />
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
            </span>{' '}
            <SplitWord word={HEADLINE[3]} />
          </h1>
          <p
            data-hero-lead
            className="mt-8 max-w-[520px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/85"
          >
            We bridge hope and community — supporting culturally diverse
            families across Western Sydney with food relief, youth programs,
            casework and connection. 100% volunteer-run.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              data-hero-cta
              onClick={openDonate}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Donate Now
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
            <Link
              to="/contact?topic=support"
              data-hero-cta
              className="inline-flex min-h-11 items-center rounded-full border-2 border-white/80 px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
            >
              Get Support
            </Link>
            <a
              href="#programs"
              data-hero-cta
              className="group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-white transition-colors hover:text-gold-400"
            >
              Discover our programs
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
          <p data-hero-trust className="mt-12 text-[0.85rem] font-medium text-white/70">
            ACNC-Registered Charity · Public Benevolent Institution · ABN 89 859 003 724
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero-scrollcue
        className="absolute bottom-6 right-8 hidden flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="font-inter text-[0.7rem] font-bold uppercase tracking-[0.3em] text-gold-400">
          Scroll
        </span>
        <span className="block h-12 w-px animate-scroll-cue bg-gold-500" />
      </div>
    </section>
  )
}
