import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router'
import Lenis from 'lenis'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DonateModal from '@/components/DonateModal'

/**
 * Shared site shell (children pattern, wraps <Routes> in App.tsx).
 * Navbar is `sticky top-0 z-50` in normal flow, so pages need no
 * nav-height offset bookkeeping.
 */
export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  // Page-wide smooth scrolling (disabled for reduced-motion users)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.1 })
    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // Restore scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a
        href="#main-content"
        className="sr-only z-[110] rounded-full bg-gold-500 px-6 py-3 font-inter font-semibold text-navy-900 focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <DonateModal />
    </div>
  )
}
