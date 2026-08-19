import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import { NAV_LINKS } from '@/components/nav-links'
import { useDonate } from '@/context/DonateContext'
import { cn } from '@/lib/utils'

function DonateButton({ className }: { className?: string }) {
  const { openDonate } = useDonate()
  return (
    <button
      type="button"
      onClick={openDonate}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]',
        className,
      )}
    >
      <Heart className="h-4 w-4" aria-hidden="true" />
      Donate Now
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy-900/90 shadow-card backdrop-blur-[12px]'
          : 'bg-navy-900',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] w-full max-w-container items-center justify-between px-6 lg:px-12"
      >
        <Logo reversed />

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'group relative py-2 font-inter text-[0.92rem] font-medium tracking-[0.01em] transition-colors duration-300',
                    isActive ? 'text-gold-400' : 'text-white/85 hover:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <svg
                      viewBox="0 0 48 8"
                      aria-hidden="true"
                      className={cn(
                        'absolute -bottom-1 left-0 h-2 w-full text-gold-500 transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60',
                      )}
                    >
                      <path
                        d="M2 6 Q24 -2 46 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray={1}
                        strokeDashoffset={isActive ? 0 : 1}
                        style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
                      />
                    </svg>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <DonateButton className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-navy-900 lg:hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 60px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 60px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 60px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/arc-divider.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-6 left-0 w-full opacity-30"
            />
            <ul className="flex flex-col gap-2 px-8 py-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 font-fraunces text-4xl font-semibold transition-colors',
                        isActive ? 'italic text-gold-400' : 'text-white hover:text-gold-400',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.06, duration: 0.5 }}
                className="mt-6"
              >
                <div onClick={() => setMenuOpen(false)}>
                  <DonateButton />
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
