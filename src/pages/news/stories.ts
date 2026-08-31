export type StoryCategory = 'excursions' | 'youth' | 'food-relief' | 'community'

export interface StoryQuote {
  text: string
  attribution: string
}

export interface Story {
  id: string
  category: StoryCategory
  /** Full pill text, e.g. "EXCURSIONS · JAN 2025" */
  meta: string
  /** Human-readable date used in the modal, e.g. "January 2025" */
  date: string
  title: string
  excerpt: string
  image: string
  alt: string
  paragraphs: string[]
  /** Optional quote. Only quotes verified from our own sources may appear. */
  quote?: StoryQuote
  /** Optional byline shown in the story modal */
  author?: string
  featured?: boolean
}

export const FILTERS: { key: StoryCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'excursions', label: 'Excursions' },
  { key: 'youth', label: 'Youth' },
  { key: 'food-relief', label: 'Food Relief' },
  { key: 'community', label: 'Community' },
]

export const STORIES: Story[] = [
  {
    id: 'port-kembla-2025',
    category: 'excursions',
    meta: 'EXCURSIONS · JAN 2025',
    date: 'January 2025',
    title: 'Port Kembla Beach: community cohesion by the sea',
    excerpt:
      'On 4 January 2025, 56 participants joined our community excursion to Port Kembla Beach, a day built around connection, cohesion and belonging.',
    image: '/real-excursion-beach.jpg',
    alt: 'LightBridge Foundation community members gathered on the grass by the sea at the Port Kembla Beach excursion, January 2025',
    paragraphs: [
      'On 4 January 2025, 56 participants joined our community excursion to Port Kembla Beach, a day built around connection, cohesion and belonging.',
      'Our community excursions are an annual tradition with a clear purpose: safe, enjoyable recreation in a culturally safe environment, reducing social isolation and strengthening the bonds that hold a community together.',
      'The impact was immediate and lasting. Families reported improved wellbeing and reduced stress, and the day strengthened trust and engagement between the community and our volunteers.',
      'Days like this sit at the heart of our community connections work: neighbours getting to know neighbours, and a community growing closer with every trip. The success of Port Kembla carried straight into planning our next excursion, the Northern Beaches, in January 2026.',
    ],
    featured: true,
  },
  {
    id: 'blacktown-festival-2025',
    category: 'youth',
    meta: 'YOUTH · 2025',
    date: '2025',
    title: 'Youth dancers at Blacktown Festival 2025',
    excerpt:
      'Our Cultural Youth Dance Group performed at Blacktown Festival 2025, showcasing African cultural heritage and strengthening youth confidence, cultural identity and leadership.',
    image: '/real-excursion-city.jpg',
    alt: 'Young LightBridge community members together during a group outing',
    paragraphs: [
      'Our Cultural Youth Dance Group performed at Blacktown Festival 2025, showcasing African cultural heritage and strengthening youth confidence, cultural identity and leadership.',
      'The dancers are part of our weekly youth group, which supports 15 young people aged 8 to 24 through psychosocial wellbeing activities, financial literacy, hygiene education and mentoring.',
      'The performance was supported with $400 and deepened our relationships with Blacktown City Council and local multicultural networks.',
      'Cultural programs like this one give young people a stage to celebrate who they are, and a community that stands behind them while they do it.',
    ],
  },
  {
    id: 'hampers-milestone',
    category: 'food-relief',
    meta: 'FOOD RELIEF · 2024-25',
    date: '2024-25',
    title: '300 hampers and counting',
    excerpt:
      'A milestone built hamper by hamper: 300+ food hampers distributed by volunteers, with Foodbank NSW & ACT and OzHarvest beside us.',
    image: '/real-outreach-bags-close.jpg',
    alt: 'Packed food hampers ready for distribution at a LightBridge outreach in Merrylands',
    paragraphs: [
      'A milestone built hamper by hamper: 300+ food hampers distributed by volunteers, with Foodbank NSW & ACT and OzHarvest beside us.',
      'Every week, more than 40 community members are supported through our weekly food relief program, which provides fresh fruit and vegetables, pantry staples, low-cost non-perishables and emergency food support. Beyond the weekly program, our volunteers also run community outreaches, like our recent hamper outreach in Merrylands.',
      'The program supports families facing financial hardship, unemployment, health disparities and settlement challenges, and it runs entirely on volunteers. LightBridge Foundation is 100% volunteer-run, with no paid staff.',
      'Passing 300 hampers is not a finish line; it is proof of what a volunteer-powered community can sustain. Our plans for 2025-26 include increasing our food relief storage and distribution capacity.',
    ],
  },
  {
    id: 'northern-beaches-2026',
    category: 'excursions',
    meta: 'EXCURSIONS · JAN 2026',
    date: 'January 2026',
    title: 'Northern Beaches: the tradition continues',
    excerpt:
      'On 10 January 2026, 56 participants joined our second annual community excursion, this time to the Northern Beaches.',
    image: '/real-excursion-city.jpg',
    alt: 'Young community members relaxing together on city steps during a LightBridge excursion',
    paragraphs: [
      'On 10 January 2026, 56 participants joined our second annual community excursion, this time to the Northern Beaches.',
      'A year on from Port Kembla, the excursion has become what we hoped it would be: a tradition. Its purpose remains the same, safe and enjoyable recreation that reduces social isolation and strengthens connection and belonging in a culturally safe environment.',
      'As with our first excursion, the day improved wellbeing and reduced stress for participating families, and deepened the trust between families and the volunteers who organise every detail.',
      'Two summers, two coastlines, one growing community. The annual excursion is now a fixture of the LightBridge calendar.',
    ],
  },
  {
    id: 'sharing-and-caring-a-vital-cog',
    category: 'community',
    meta: 'COMMUNITY · FEB 2025',
    date: '20 February 2025',
    title: 'Sharing and caring, a vital cog',
    excerpt:
      'Ubuntu teaches us "I am because we are". For the African diaspora in Australia, community support is not a luxury, it is the vital cog that keeps wellbeing, opportunity and culture turning.',
    image: '/real-youth-venue.jpg',
    alt: 'LightBridge community members standing together during a youth group outing',
    paragraphs: [
      'Ubuntu teaches us "I am because we are". For the African diaspora in Australia, community support is not a luxury, it is the vital cog that keeps wellbeing, opportunity and culture turning.',
      'When people settle far from home, the community becomes family. The first benefit is mental and emotional well-being: a network of people who greet you by name, check in when you go quiet and remind you that you belong.',
      'The second is economic empowerment. From cooperative savings schemes like stokvels to mentoring and job referrals, community networks open doors that formal systems too often leave closed, turning shared trust into shared prosperity.',
      'Third, community preserves culture and identity. Language, food, song and story survive when they are practised together, and children grow up proud of where they come from. Fourth, it fuels educational and career growth: advice, tutoring, references and encouragement flow freely between generations.',
      'And fifth, community provides practical assistance in times of need, food banks, financial aid and emergency accommodation referrals that catch people before they fall. Sharing and caring is not charity; it is how a community holds itself together, one act of kindness at a time.',
    ],
    quote: {
      text: 'I am because we are.',
      attribution: 'Ubuntu philosophy',
    },
    author: 'Fradreck Nyamhunga',
  },
  {
    id: 'the-power-of-community',
    category: 'community',
    meta: 'COMMUNITY · FEB 2025',
    date: '19 February 2025',
    title: 'The Power of Community',
    excerpt:
      '"Sticks in a bundle are unbreakable," says the Bondei proverb. From unity and intergenerational learning to poetry and storytelling, here is how communities grow stronger together.',
    image: '/real-youth-soccer.jpg',
    alt: 'Young community members playing soccer together in a Western Sydney park',
    paragraphs: [
      '"Sticks in a bundle are unbreakable," says the Bondei proverb, and the Swahili remind us that unity is strength while division is weakness. Desmond Tutu put it simply: "My humanity is caught up, is inextricably bound up, in yours." Community is not something we have, it is something we do, together.',
      'The first strategy is to foster unity and collaboration. "When spider webs unite, they can tie up a lion": small efforts, woven together, achieve what no individual could. Shared goals, shared meals and shared work turn neighbours into a force.',
      'The second is intergenerational learning, "each one teach one". Elders carry wisdom, young people carry energy, and a strong community makes sure the two never stop exchanging gifts.',
      'The third is open communication. "Wisdom is like a baobab tree; no one individual can embrace it." When people speak honestly and listen generously, the whole community grows wiser than any one voice.',
      'And the fourth is celebrating cultural art forms, poetry, storytelling, song and dance that carry identity across oceans and generations. A community that tells its own stories never forgets its own strength.',
    ],
    quote: {
      text: 'My humanity is caught up, is inextricably bound up, in yours.',
      attribution: 'Desmond Tutu',
    },
    author: 'Fradreck Nyamhunga',
  },
]
