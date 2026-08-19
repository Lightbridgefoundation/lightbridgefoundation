import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  lead?: string
  align?: 'left' | 'center'
  /** dark = white heading text for navy sections */
  dark?: boolean
  className?: string
}

/**
 * Shared section heading block: gold eyebrow → Fraunces H2 → optional lead,
 * with a gold arc underline that draws itself on scroll into view.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className={cn(
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        lead && 'space-y-0',
        className,
      )}
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
      <svg
        viewBox="0 0 120 14"
        aria-hidden="true"
        className={cn('mt-4 h-3.5 w-[120px] text-gold-500', align === 'center' && 'mx-auto')}
      >
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
      {lead && (
        <p
          className={cn(
            'mt-5 max-w-[640px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65]',
            align === 'center' && 'mx-auto',
            dark ? 'text-white/80' : 'text-grey-500',
          )}
        >
          {lead}
        </p>
      )}
    </motion.div>
  )
}
