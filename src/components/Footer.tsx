import { Link } from 'react-router'
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react'
import Logo from '@/components/Logo'
import { NAV_LINKS } from '@/components/nav-links'

const PROGRAM_LINKS = [
  { to: '/programs#food-relief', label: 'Weekly Food Relief' },
  { to: '/programs#youth', label: 'Youth Empowerment' },
  { to: '/programs#casework', label: 'Casework & Advocacy' },
  { to: '/programs#excursions', label: 'Community Connections' },
  { to: '/programs#cultural', label: 'Cultural Programs' },
  { to: '/programs#referrals', label: 'Support & Referrals' },
]

const SOCIALS = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: Facebook },
  { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://youtube.com', label: 'YouTube', Icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white">
      {/* Decorative bridge arc silhouette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden" aria-hidden="true">
        <img src="/arc-divider.svg" alt="" className="w-full opacity-25" />
      </div>

      <div className="relative mx-auto grid w-full max-w-container gap-12 px-6 pb-12 pt-24 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* Brand */}
        <div>
          <Logo reversed />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-[1.7] text-white/70">
            Bridging hope and community — supporting culturally diverse families
            across Western Sydney, 100% volunteer-run.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/50 text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-navy-900"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Explore">
          <h3 className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[0.95rem] text-white/75 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Programs */}
        <nav aria-label="Programs">
          <h3 className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400">
            Programs
          </h3>
          <ul className="mt-5 space-y-3">
            {PROGRAM_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[0.95rem] text-white/75 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-white/75">
            <li>
              <a
                href="mailto:info@lightbridgefoundation.org.au"
                className="flex items-start gap-3 transition-colors hover:text-gold-400"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                info@lightbridgefoundation.org.au
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
              Western Sydney, NSW
            </li>
            <li>ABN 89 859 003 724</li>
            <li className="text-white/60">
              Registered with the ACNC — Public Benevolent Institution
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="text-[0.85rem] text-white/60">
            © 2025 LightBridge Foundation. All rights reserved.
          </p>
          <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 font-inter text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-gold-400">
            100% volunteer-run
          </span>
        </div>
      </div>
    </footer>
  )
}
