import SectionHeading from '@/components/SectionHeading'

/**
 * Placeholder page shell used until each page agent ships its route.
 */
export default function PageStub({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string
  title: string
  lead: string
}) {
  return (
    <section className="navy-gradient relative overflow-hidden">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[60dvh] w-full max-w-container flex-col items-center justify-center px-6 py-24 lg:px-12">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} dark />
      </div>
    </section>
  )
}
