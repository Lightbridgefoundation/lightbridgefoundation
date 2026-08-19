import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Node {
  label: string
  description: string
  /** Position on the 1200×380 desktop canvas */
  x: number
  y: number
}

const NODES: Node[] = [
  { label: 'Crisis', description: 'Weekly food relief when times are toughest.', x: 40, y: 220 },
  { label: 'Stability', description: 'Casework and advocacy through the hard moments.', x: 320, y: 145 },
  { label: 'Connection', description: 'Community support and referrals open every door.', x: 600, y: 120 },
  { label: 'Growth', description: 'Youth programs build skills and confidence.', x: 880, y: 145 },
  { label: 'Leadership', description: 'Cultural stages — and giving back to others.', x: 1160, y: 220 },
]

export default function JourneyBand() {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: '+=120%',
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
          },
        })
        tl.fromTo(
          '[data-journey-path]',
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, ease: 'none', duration: 1 },
        )
        gsap.utils.toArray<HTMLElement>('[data-journey-node]').forEach((node, i) => {
          tl.fromTo(
            node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.12, ease: 'back.out(2)' },
            0.05 + i * 0.2,
          )
          const text = node.querySelector('[data-journey-text]')
          if (text) {
            tl.fromTo(
              text,
              { y: 16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.1, ease: 'power2.out' },
              0.09 + i * 0.2,
            )
          }
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-navy-800"
      aria-label="How the programs fit together"
    >
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-container flex-col justify-center px-6 py-[clamp(80px,10vw,120px)] lg:px-12">
        <SectionHeading
          dark
          eyebrow="How It Fits Together"
          title={
            <>
              One family's journey{' '}
              <span className="italic text-gold-400">across the bridge</span>
            </>
          }
        />

        {/* Desktop: scroll-drawn gold arc path with nodes */}
        <div className="relative mt-16 hidden lg:block">
          <svg
            viewBox="0 0 1200 380"
            className="h-auto w-full"
            role="img"
            aria-label="A family's journey: Crisis, Stability, Connection, Growth, Leadership"
          >
            <path
              d="M40 220 Q600 20 1160 220"
              fill="none"
              stroke="#D4A017"
              strokeWidth={3}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              data-journey-path
              opacity={0.9}
            />
          </svg>
          {NODES.map((node, i) => (
            <div
              key={node.label}
              data-journey-node
              className="absolute"
              style={{
                left: `${(node.x / 1200) * 100}%`,
                top: `${(node.y / 380) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span
                className="block h-5 w-5 rounded-full border-[3px] border-navy-800 bg-gold-500 shadow-gold-glow"
                aria-hidden="true"
              />
              <div
                data-journey-text
                className={cn(
                  'absolute top-7 w-48 text-center',
                  i === 0 && 'left-0 -translate-x-[15%]',
                  i === NODES.length - 1 && 'left-full -translate-x-[85%]',
                  i > 0 && i < NODES.length - 1 && 'left-1/2 -translate-x-1/2',
                )}
              >
                <p className="font-fraunces text-xl font-semibold text-gold-400">{node.label}</p>
                <p className="mt-1.5 text-[0.85rem] leading-[1.5] text-white/70">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="relative mt-14 space-y-10 border-l-2 border-gold-500/50 pl-8 lg:hidden">
          {NODES.map((node, i) => (
            <motion.li
              key={node.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="relative"
            >
              <span
                className="absolute -left-[43px] top-1 block h-5 w-5 rounded-full border-[3px] border-navy-800 bg-gold-500"
                aria-hidden="true"
              />
              <p className="font-fraunces text-xl font-semibold text-gold-400">{node.label}</p>
              <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-white/75">{node.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
