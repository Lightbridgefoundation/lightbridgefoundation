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
      aria-label="LightBridge Foundation, home"
      className={cn('flex items-center gap-3', className)}
    >
      <img
        src="/logo-badge.png"
        alt=""
        className="h-10 w-10 rounded-full object-contain"
        aria-hidden="true"
      />
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
