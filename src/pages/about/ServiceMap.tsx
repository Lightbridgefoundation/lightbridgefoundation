import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface Suburb {
  name: string
  x: number
  y: number
  hub?: boolean
}

interface Lga {
  name: string
  suburbs: string
  hub?: boolean
}

const LGAS: Lga[] = [
  {
    name: 'Cumberland LGA',
    suburbs: 'Auburn, Berala, Greystanes, Granville, Harris Park, Lidcombe, Merrylands, Pemulwuy, South Granville, Wentworthville, Holroyd',
    hub: true,
  },
  {
    name: 'Parramatta LGA',
    suburbs: 'Parramatta, Epping, Carlingford, Dundas, Oatlands, North Parramatta, Westmead, Rosehill, Harris Park',
  },
  {
    name: 'Blacktown LGA',
    suburbs: 'Blacktown, Rooty Hill, Mount Druitt, St Marys, Seven Hills, Kings Langley, Toongabbie, Doonside, Glenwood, Prospect',
  },
  {
    name: 'Penrith LGA',
    suburbs: 'Penrith, St Marys, South Penrith, Werrington, Jamisontown, Cranebrook, Kingswood, Glenmore Park, Emu Plains',
  },
  {
    name: 'Liverpool LGA',
    suburbs: 'Liverpool, Moorebank, Casula, Chipping Norton, Hammondville, Prestons, Hoxton Park, Edmondson Park, Busby',
  },
  {
    name: 'Canterbury-Bankstown LGA',
    suburbs: 'Canterbury, Campsie, Belmore, Lakemba, Hurlstone Park, Earlwood, Punchbowl, Wiley Park, Chester Hill',
  },
  {
    name: 'Campbelltown LGA',
    suburbs: 'Campbelltown, Ingleburn, Macquarie Fields, Glenfield, Bradbury, Leumeah, Minto, Raby, Kearns',
  },
]

const SUBURBS: Suburb[] = [
  { name: 'Holroyd (Major Hub)', x: 420, y: 230, hub: true },
  { name: 'Guildford', x: 388, y: 262 },
  { name: 'Pendle Hill', x: 392, y: 188 },
  { name: 'Chester Hill', x: 414, y: 302 },
  { name: 'Bankstown', x: 474, y: 330 },
  { name: 'Fairfield', x: 330, y: 300 },
  { name: 'Blacktown', x: 332, y: 168 },
  { name: 'Schofield', x: 302, y: 118 },
  { name: 'Mt Druitt', x: 240, y: 170 },
  { name: "St Mary's", x: 170, y: 228 },
  { name: 'Penrith', x: 100, y: 242 },
  { name: 'Glenmore Park', x: 112, y: 322 },
]

function MapDot({ suburb, index }: { suburb: Suburb; index: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 + index * 0.08 }}
      style={{ transformOrigin: `${suburb.x}px ${suburb.y}px` }}
      className="group cursor-pointer"
      tabIndex={0}
      role="img"
      aria-label={suburb.name}
    >
      {/* Pulse ring */}
      <motion.circle
        cx={suburb.x}
        cy={suburb.y}
        r={suburb.hub ? 12 : 8}
        fill="none"
        stroke="#E5B93E"
        strokeWidth={2}
        initial={{ scale: 0, opacity: 0.8 }}
        whileInView={{ scale: 1.6, opacity: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={
          suburb.hub
            ? { duration: 0.8, delay: 0.4 + index * 0.08, repeat: Infinity, repeatDelay: 3.2 }
            : { duration: 0.8, delay: 0.4 + index * 0.08 }
        }
        style={{ transformOrigin: `${suburb.x}px ${suburb.y}px` }}
      />
      <circle
        cx={suburb.x}
        cy={suburb.y}
        r={suburb.hub ? 10 : 7}
        fill="#D4A017"
        stroke="#0E2A47"
        strokeWidth={2.5}
        className="transition-all duration-300 group-hover:fill-gold-400"
      />
      {/* Tooltip */}
      <g
        className="pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
        aria-hidden="true"
      >
        <rect
          x={suburb.x - 62}
          y={suburb.y - 46}
          width={124}
          height={28}
          rx={8}
          fill="#FFFFFF"
          filter="drop-shadow(0 8px 20px rgba(14,42,71,0.35))"
        />
        <text
          x={suburb.x}
          y={suburb.y - 27}
          textAnchor="middle"
          fill="#163A5F"
          fontSize={suburb.hub ? 11 : 12}
          fontWeight={600}
          fontFamily="Inter, sans-serif"
        >
          {suburb.name}
        </text>
      </g>
    </motion.g>
  )
}

export default function ServiceMap() {
  return (
    <section className="relative overflow-hidden bg-navy-900" aria-label="Where we work">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-container items-center gap-14 px-6 py-[clamp(80px,10vw,140px)] lg:grid-cols-2 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-400">
            Where We Work
          </p>
          <h2 className="mt-4 font-fraunces text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.12] text-white">
            Twelve communities, <span className="italic text-gold-400">one bridge</span>
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
          <p className="mt-5 max-w-[480px] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.65] text-white/80">
            From our major hub in Holroyd to Penrith, Glenmore Park and beyond,
            our volunteers serve across Western Sydney.
          </p>

          {/* Accessible chip list of all suburbs */}
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Communities we serve">
            {SUBURBS.map((s, i) => (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.3 + i * 0.05 }}
                className={
                  s.hub
                    ? 'rounded-full bg-gold-500 px-4 py-1.5 text-[0.82rem] font-semibold text-navy-900'
                    : 'rounded-full border border-gold-500/60 px-4 py-1.5 text-[0.82rem] font-medium text-gold-400'
                }
              >
                {s.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Stylised dot map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative rounded-[24px] bg-navy-800/60 p-6 shadow-card"
        >
          <svg
            viewBox="0 0 600 420"
            className="h-auto w-full"
            role="img"
            aria-label="Stylised map of Western Sydney showing the twelve communities LightBridge Foundation serves"
          >
            {/* Abstract region shapes */}
            <g fill="#2A5580" opacity={0.35}>
              <rect x={60} y={180} width={180} height={190} rx={48} />
              <rect x={200} y={80} width={200} height={170} rx={48} />
              <rect x={280} y={200} width={220} height={160} rx={48} />
              <rect x={380} y={150} width={150} height={140} rx={44} />
            </g>
            {/* Connecting arc */}
            <path
              d="M100 242 Q300 60 474 330"
              fill="none"
              stroke="#D4A017"
              strokeWidth={2}
              strokeDasharray="6 8"
              opacity={0.4}
              strokeLinecap="round"
            />
            {SUBURBS.map((s, i) => (
              <MapDot key={s.name} suburb={s} index={i} />
            ))}
          </svg>
          <p className="mt-4 text-center text-[0.8rem] font-medium text-white/50">
            Stylised service-area map, hover or focus a gold dot to see the community
          </p>
        </motion.div>
      </div>

      {/* Activity Map, LGA breakdown */}
      <div className="relative mx-auto w-full max-w-container px-6 pb-[clamp(80px,10vw,140px)] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <h3 className="font-fraunces text-[clamp(1.5rem,2.8vw,2.25rem)] font-semibold leading-[1.2] text-white">
            Activity Map, <span className="italic text-gold-400">seven LGAs</span>
          </h3>
          <p className="mx-auto mt-3 max-w-[560px] text-[0.95rem] leading-[1.65] text-white/70">
            Our programs reach families across seven local government areas of
            Greater Western Sydney, anchored by our Holroyd hub in Cumberland.
          </p>
        </motion.div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label="Local government areas we serve">
          {LGAS.map((lga, i) => (
            <motion.li
              key={lga.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
              className={
                lga.hub
                  ? 'rounded-2xl border border-gold-500/70 bg-gold-500/10 p-6'
                  : 'rounded-2xl border border-white/15 bg-navy-800/60 p-6'
              }
            >
              <p className="flex flex-wrap items-center gap-2 font-fraunces text-lg font-semibold text-white">
                {lga.name}
                {lga.hub && (
                  <span className="rounded-full bg-gold-500 px-3 py-0.5 font-inter text-[0.68rem] font-bold uppercase tracking-[0.14em] text-navy-900">
                    Holroyd hub
                  </span>
                )}
              </p>
              <p className="mt-2.5 text-[0.88rem] leading-[1.65] text-white/70">
                {lga.suburbs}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
