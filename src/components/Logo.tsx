import { Link } from 'react-router'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Reversed = white wordmark for navy backgrounds */
  reversed?: boolean
  className?: string
}

export default function Logo({ reversed = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="LightBridge Foundation — home"
      className={cn('flex items-center gap-3', className)}
    >
      {reversed ? (
        /* Reversed white/gold mark for navy backgrounds */
        <svg viewBox="0 0 72 64" className="h-10 w-auto" aria-hidden="true">
          <polygon points="15,30 21,30 20,58 16,58" fill="#FFFFFF" />
          <polygon points="51,30 57,30 56,58 52,58" fill="#FFFFFF" />
          <rect x="11" y="56" width="50" height="4" rx="2" fill="#FFFFFF" />
          <path
            d="M14 33 Q36 5 58 33"
            fill="none"
            stroke="#D4A017"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M36 3v8" stroke="#D4A017" strokeWidth="4" strokeLinecap="round" />
          <path d="M26 7l3 7" stroke="#D4A017" strokeWidth="4" strokeLinecap="round" />
          <path d="M46 7l-3 7" stroke="#D4A017" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ) : (
        <img src="/logo.svg" alt="" className="h-10 w-auto" aria-hidden="true" />
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-fraunces text-[1.35rem] font-semibold tracking-[-0.02em]',
            reversed ? 'text-white' : 'text-navy-800',
          )}
        >
          LightBridge
        </span>
        <span className="mt-1 font-inter text-[0.62rem] font-bold uppercase tracking-[0.32em] text-gold-500">
          Foundation
        </span>
      </span>
    </Link>
  )
}
