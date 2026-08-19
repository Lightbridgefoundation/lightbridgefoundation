import { useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Share2,
  Youtube,
} from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Topic = 'support' | 'volunteer' | 'partner' | 'donate' | 'other'

const TOPICS: { value: Topic; label: string }[] = [
  { value: 'support', label: 'I need support' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'partner', label: 'Partnership' },
  { value: 'donate', label: 'Donation' },
  { value: 'other', label: 'Something else' },
]

const PLACEHOLDERS: Record<Topic, string> = {
  support: "Tell us a little about what's going on, it's confidential.",
  volunteer: 'Tell us which roles interest you and your availability…',
  partner: 'Tell us about your organisation and your partnership idea…',
  donate: "Tell us how you'd like to give…",
  other: 'How can we help?',
}

const HELPERS: Partial<Record<Topic, string>> = {
  support: 'In immediate danger? Call 000. We can help with safety planning and referrals.',
  donate: 'You can also use the Donate button above for giving details.',
}

interface Errors {
  name?: string
  email?: string
  message?: string
  consent?: string
}

const SOCIALS: { Icon: LucideIcon; label: string }[] = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Youtube, label: 'YouTube' },
]

const INFO_CARDS = [
  {
    Icon: Mail,
    title: 'Email',
    value: 'info@lightbridgefoundation.org.au',
    href: 'mailto:info@lightbridgefoundation.org.au',
    desc: 'Best for everything, support, volunteering, partnerships, donations.',
  },
  {
    Icon: MapPin,
    title: 'Where we are',
    value: '24-27 Crescent St, Holroyd NSW 2142',
    desc: 'Our major hub is Holroyd. Serving Bankstown, Chester Hill, Guildford, Fairfield, Pendle Hill, Schofield, Blacktown, Mt Druitt, St Mary\u2019s, Penrith & Glenmore Park.',
  },
  {
    Icon: BadgeCheck,
    title: 'Charity details',
    value: 'ABN 89 859 003 724 · INC 2400448',
    desc: 'ACNC-registered Public Benevolent Institution · 100% volunteer-run.',
  },
  {
    Icon: Share2,
    title: 'Follow along',
    desc: '',
  },
] as const

export default function ContactSplit() {
  const [searchParams] = useSearchParams()
  const topicParam = searchParams.get('topic')
  const initialTopic: Topic =
    topicParam === 'support' ||
    topicParam === 'volunteer' ||
    topicParam === 'partner' ||
    topicParam === 'donate'
      ? topicParam
      : 'support'

  const [topic, setTopic] = useState<Topic>(initialTopic)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [shakeKey, setShakeKey] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (!name.trim()) next.name = 'Please tell us your name.'
    if (!email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = 'That email address does not look right.'
    if (!message.trim()) next.message = 'Please add a message.'
    if (!consent) next.consent = 'Please confirm we may reply to you.'
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setShakeKey((k) => k + 1)
      return
    }
    setSubmitted(true)
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setConsent(false)
    setErrors({})
    setSubmitted(false)
  }

  const fieldClass =
    'h-12 rounded-xl border-navy-100 bg-white px-4 text-ink focus-visible:border-gold-500 focus-visible:ring-gold-500/30'

  return (
    <section className="relative bg-white" aria-label="Contact form and details">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">
          {/* Form card */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="scroll-mt-24 rounded-[20px] border border-navy-100 bg-white p-6 shadow-card sm:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="py-8 text-center"
                >
                  <svg
                    viewBox="0 0 64 64"
                    className="mx-auto h-20 w-20 text-gold-500"
                    aria-hidden="true"
                  >
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    <motion.path
                      d="M20 33 L28 41 L44 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
                    />
                  </svg>
                  <h3 className="mt-6 font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                    Message received, thank you!
                  </h3>
                  <p className="mx-auto mt-3 max-w-[440px] leading-[1.7] text-grey-500">
                    A volunteer will reply to you at the email you provided. You
                    can also reach us any time at{' '}
                    <a
                      href="mailto:info@lightbridgefoundation.org.au"
                      className="font-semibold text-navy-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-500"
                    >
                      info@lightbridgefoundation.org.au
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 inline-flex min-h-11 items-center rounded-full border-2 border-navy-800 px-8 py-3 font-inter text-[0.95rem] font-semibold text-navy-800 transition-all duration-300 hover:bg-navy-800 hover:text-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <h3 className="font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                    Send us a message
                  </h3>

                  <motion.form
                    key={shakeKey}
                    animate={shakeKey > 0 ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-8 space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ct-name" className="font-semibold text-navy-800">
                          Your name
                        </Label>
                        <Input
                          id="ct-name"
                          type="text"
                          autoComplete="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          className={fieldClass}
                        />
                        {errors.name && (
                          <p className="text-[0.85rem] font-medium text-red-700">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ct-email" className="font-semibold text-navy-800">
                          Email
                        </Label>
                        <Input
                          id="ct-email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          className={fieldClass}
                        />
                        {errors.email && (
                          <p className="text-[0.85rem] font-medium text-red-700">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Topic selector */}
                    <fieldset>
                      <legend className="mb-3 font-inter text-[0.85rem] font-semibold text-navy-800">
                        What's this about?
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {TOPICS.map(({ value, label }) => {
                          const active = topic === value
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => setTopic(value)}
                              aria-pressed={active}
                              className={cn(
                                'relative min-h-11 rounded-full border px-5 py-2.5 font-inter text-[0.88rem] font-semibold transition-colors duration-300',
                                active
                                  ? 'border-gold-500 text-navy-900'
                                  : 'border-navy-100 text-grey-500 hover:border-navy-600 hover:text-navy-800',
                              )}
                            >
                              {active && (
                                <motion.span
                                  layoutId="topic-indicator"
                                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                  className="absolute inset-0 rounded-full bg-gold-500"
                                  aria-hidden="true"
                                />
                              )}
                              <span className="relative">{label}</span>
                            </button>
                          )
                        })}
                      </div>
                      {HELPERS[topic] && (
                        <p className="mt-3 text-[0.85rem] font-medium leading-[1.5] text-grey-500">
                          {HELPERS[topic]}
                        </p>
                      )}
                    </fieldset>

                    <div className="space-y-2">
                      <Label htmlFor="ct-message" className="font-semibold text-navy-800">
                        Message
                      </Label>
                      <Textarea
                        id="ct-message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={PLACEHOLDERS[topic]}
                        aria-invalid={Boolean(errors.message)}
                        className="rounded-xl border-navy-100 bg-white px-4 py-3 text-ink focus-visible:border-gold-500 focus-visible:ring-gold-500/30"
                      />
                      {errors.message && (
                        <p className="text-[0.85rem] font-medium text-red-700">{errors.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="ct-consent"
                          checked={consent}
                          onCheckedChange={(checked) => setConsent(checked === true)}
                          aria-invalid={Boolean(errors.consent)}
                          className="mt-0.5 h-5 w-5 rounded-md border-navy-100 data-[state=checked]:border-gold-500 data-[state=checked]:bg-gold-500 data-[state=checked]:text-navy-900"
                        />
                        <Label
                          htmlFor="ct-consent"
                          className="cursor-pointer text-[0.92rem] font-normal leading-[1.6] text-ink"
                        >
                          I'm happy for LightBridge Foundation to reply to my
                          message.
                        </Label>
                      </div>
                      {errors.consent && (
                        <p className="text-[0.85rem] font-medium text-red-700">{errors.consent}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97] sm:w-auto"
                    >
                      Send message
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info rail */}
          <div className="space-y-6">
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="rounded-2xl bg-grey-50 p-6"
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: i * 0.1 + 0.15 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-100"
                  >
                    <card.Icon className="h-5 w-5 text-gold-500" strokeWidth={1.75} aria-hidden="true" />
                  </motion.span>
                  <h3 className="font-fraunces text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-navy-800">
                    {card.title}
                  </h3>
                </div>
                {'value' in card && card.value && (
                  <p className="mt-4 break-words">
                    {'href' in card && card.href ? (
                      <a
                        href={card.href}
                        className="font-semibold text-navy-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-500"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-navy-800">{card.value}</span>
                    )}
                  </p>
                )}
                {card.desc && (
                  <p className="mt-2 text-[0.92rem] leading-[1.7] text-grey-500">{card.desc}</p>
                )}
                {card.title === 'Follow along' && (
                  <div className="mt-4 flex gap-3">
                    {SOCIALS.map(({ Icon, label }, s) => (
                      <motion.a
                        key={label}
                        href="#"
                        aria-label={`LightBridge Foundation on ${label}`}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-15% 0px' }}
                        transition={{
                          type: 'spring',
                          stiffness: 320,
                          damping: 18,
                          delay: 0.3 + s * 0.06,
                        }}
                        className="group relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-500 text-gold-500 transition-colors duration-300 hover:text-navy-900"
                      >
                        <span
                          className="absolute inset-0 scale-0 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-100"
                          aria-hidden="true"
                        />
                        <Icon className="relative h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
