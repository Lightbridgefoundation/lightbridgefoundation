import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import type { InterestPathway } from '@/pages/GetInvolved'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const OPTIONS: { value: InterestPathway; label: string }[] = [
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'donate', label: 'Donate' },
  { value: 'partner', label: 'Partner' },
]

const PLACEHOLDERS: Record<InterestPathway, string> = {
  volunteer: 'Tell us which roles interest you and your availability…',
  donate: "Tell us how you'd like to give — one-off, regular, or in-kind…",
  partner: "Tell us about your organisation and how you'd like to partner…",
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

interface InterestFormProps {
  interest: InterestPathway
  onInterestChange: (value: InterestPathway) => void
}

export default function InterestForm({ interest, onInterestChange }: InterestFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [shakeKey, setShakeKey] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    if (!name.trim()) next.name = 'Please tell us your full name.'
    if (!email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = 'That email address does not look right.'
    if (!message.trim()) next.message = 'Please add a short message.'
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setShakeKey((k) => k + 1)
      return
    }
    setSubmitted(true)
  }

  const fieldClass =
    'h-12 rounded-xl border-navy-100 bg-white px-4 text-ink focus-visible:border-gold-500 focus-visible:ring-gold-500/30'

  return (
    <section id="form" className="relative scroll-mt-20 bg-grey-50" aria-label="Interest form">
      <div className="mx-auto w-full max-w-container px-6 py-[clamp(80px,10vw,140px)] lg:px-12">
        <img
          src="/arc-divider.svg"
          alt=""
          aria-hidden="true"
          className="mx-auto mb-10 w-full max-w-[480px] opacity-70"
        />

        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto w-full max-w-[640px] rounded-[20px] border border-navy-100 bg-white p-8 shadow-card lg:p-10"
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
                  Thank you — we'll be in touch!
                </h3>
                <p className="mt-3 leading-[1.7] text-grey-500">
                  Or email us directly at{' '}
                  <a
                    href="mailto:info@lightbridgefoundation.org.au"
                    className="font-semibold text-navy-800 underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-500"
                  >
                    info@lightbridgefoundation.org.au
                  </a>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div className="text-center">
                  <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
                    Take the First Step
                  </p>
                  <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-navy-800">
                    Tell us how you'd like{' '}
                    <span className="italic text-gold-500">to help</span>
                  </h2>
                </div>

                <motion.form
                  key={shakeKey}
                  animate={shakeKey > 0 ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-10 space-y-6"
                >
                  {/* Segmented control */}
                  <fieldset>
                    <legend className="mb-3 font-inter text-[0.85rem] font-semibold text-navy-800">
                      I want to…
                    </legend>
                    <div className="flex flex-wrap gap-2 rounded-full border border-navy-100 bg-grey-50 p-1.5 sm:flex-nowrap">
                      {OPTIONS.map(({ value, label }) => {
                        const active = interest === value
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => onInterestChange(value)}
                            aria-pressed={active}
                            className={cn(
                              'relative min-h-11 flex-1 rounded-full px-5 py-2.5 font-inter text-[0.92rem] font-semibold transition-colors duration-300',
                              active ? 'text-navy-900' : 'text-grey-500 hover:text-navy-800',
                            )}
                          >
                            {active && (
                              <motion.span
                                layoutId="interest-indicator"
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
                  </fieldset>

                  <div className="space-y-2">
                    <Label htmlFor="gi-name" className="font-semibold text-navy-800">
                      Full name
                    </Label>
                    <Input
                      id="gi-name"
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

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="gi-email" className="font-semibold text-navy-800">
                        Email
                      </Label>
                      <Input
                        id="gi-email"
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
                    <div className="space-y-2">
                      <Label htmlFor="gi-phone" className="font-semibold text-navy-800">
                        Phone <span className="font-normal text-grey-500">(optional)</span>
                      </Label>
                      <Input
                        id="gi-phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gi-message" className="font-semibold text-navy-800">
                      Message
                    </Label>
                    <Textarea
                      id="gi-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={PLACEHOLDERS[interest]}
                      aria-invalid={Boolean(errors.message)}
                      className="rounded-xl border-navy-100 bg-white px-4 py-3 text-ink focus-visible:border-gold-500 focus-visible:ring-gold-500/30"
                    />
                    {errors.message && (
                      <p className="text-[0.85rem] font-medium text-red-700">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97] sm:w-auto"
                  >
                    Send my interest
                  </button>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
