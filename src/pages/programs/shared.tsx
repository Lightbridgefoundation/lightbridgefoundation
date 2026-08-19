import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useDonate } from '@/context/DonateContext'
import { cn } from '@/lib/utils'

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

/* ---------------- Buttons ---------------- */

const btnBase =
  'inline-flex min-h-11 items-center gap-2 rounded-full px-8 py-3 font-inter text-[0.95rem] font-semibold tracking-[0.01em] transition-all duration-300 active:scale-[0.97]'

export function GoldLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        btnBase,
        'bg-gold-500 py-3.5 text-navy-900 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow',
      )}
    >
      {children}
    </Link>
  )
}

export function GoldDonateButton({ children }: { children: React.ReactNode }) {
  const { openDonate } = useDonate()
  return (
    <button
      type="button"
      onClick={openDonate}
      className={cn(
        btnBase,
        'bg-gold-500 py-3.5 text-navy-900 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow',
      )}
    >
      {children}
    </button>
  )
}

export function NavyLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        btnBase,
        'bg-navy-800 py-3.5 text-white hover:-translate-y-0.5 hover:bg-navy-600 hover:shadow-card-hover',
      )}
    >
      {children}
    </Link>
  )
}

export function NavyOutlineLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        btnBase,
        'border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
      )}
    >
      {children}
    </Link>
  )
}

export function GhostLink({
  to,
  children,
  dark = false,
}: {
  to: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold transition-colors',
        dark ? 'text-white hover:text-gold-400' : 'text-navy-800 hover:text-gold-500',
      )}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

export function GhostDonateButton({ children }: { children: React.ReactNode }) {
  const { openDonate } = useDonate()
  return (
    <button
      type="button"
      onClick={openDonate}
      className="group relative inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800 transition-colors hover:text-gold-500"
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
    </button>
  )
}

/* ---------------- Program block primitives ---------------- */

/** Gold offset-frame image with optional floating badge. */
export function FramedImage({
  src,
  alt,
  badge,
  fromLeft = true,
  aspect = 'aspect-[4/3]',
}: {
  src: string
  alt: string
  badge?: string
  fromLeft?: boolean
  aspect?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -64 : 64 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative"
    >
      <div className="relative rounded-[20px] before:absolute before:inset-0 before:-translate-x-4 before:translate-y-4 before:rounded-[20px] before:border-2 before:border-gold-500/60 before:content-['']">
        <div className="relative overflow-hidden rounded-[20px] shadow-card">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
              'w-full object-cover transition-transform duration-[600ms] ease-out hover:scale-105',
              aspect,
            )}
          />
        </div>
      </div>
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
          className="absolute -bottom-6 -left-3 rounded-2xl bg-navy-800 px-6 py-4 shadow-card-hover sm:-left-6"
        >
          <p className="font-fraunces text-lg font-semibold leading-snug text-gold-400">
            {badge}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

/** Checklist with gold check icons. */
export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-7 space-y-3.5">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
          className="flex items-start gap-3"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
            <Check className="h-3.5 w-3.5 text-gold-500" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className={cn('leading-[1.6]', dark ? 'text-white/85' : 'text-ink')}>{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

/** Mini stat with count-up (numeric) or static display (e.g. "8–24"). */
export function MiniStat({
  value,
  suffix = '',
  display,
  label,
  dark = false,
  index = 0,
}: {
  value?: number
  suffix?: string
  display?: string
  label: string
  dark?: boolean
  index?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString('en-AU'))

  useEffect(() => {
    if (!inView || value === undefined) return
    const controls = animate(count, value, {
      duration: 1.2,
      ease: 'easeOut',
      delay: index * 0.1,
    })
    return () => controls.stop()
  }, [inView, count, value, index])

  return (
    <div ref={ref}>
      <div className="font-fraunces text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-none text-gold-500">
        {value !== undefined ? <motion.span>{rounded}</motion.span> : <span>{display}</span>}
        {suffix && <span>{suffix}</span>}
      </div>
      <p
        className={cn(
          'mt-2 text-[0.85rem] font-medium leading-[1.5]',
          dark ? 'text-white/70' : 'text-grey-500',
        )}
      >
        {label}
      </p>
    </div>
  )
}

/** Eyebrow + H2 + gold arc underline for program blocks. */
export function ProgramHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string
  title: string
  dark?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12]',
          dark ? 'text-white' : 'text-navy-800',
        )}
      >
        {title}
      </h2>
      <svg viewBox="0 0 120 14" aria-hidden="true" className="mt-4 h-3.5 w-[120px] text-gold-500">
        <motion.path
          d="M4 11 Q60 -4 116 11"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </svg>
    </motion.div>
  )
}
