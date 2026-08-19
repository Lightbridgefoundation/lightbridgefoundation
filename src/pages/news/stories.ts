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
  quote: StoryQuote
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
    title: '56 families, one beach, a lifetime of firsts',
    excerpt:
      'For many of the families who boarded our buses to Port Kembla Beach on 4 January 2025, it was the first time they had ever seen the ocean. A day of swimming, shared food and laughter — stress easing, wellbeing lifting, and a community knitting itself closer together.',
    image: '/beach-excursion.jpg',
    alt: 'Families and children laughing together on the golden sand at Port Kembla Beach under a blue sky',
    paragraphs: [
      'For many of the families who boarded our buses to Port Kembla Beach on 4 January 2025, it was the first time they had ever seen the ocean. A day of swimming, shared food and laughter — stress easing, wellbeing lifting, and a community knitting itself closer together.',
      'The buses left Western Sydney early, packed with picnic baskets, beach umbrellas and more excitement than luggage. Some parents had lived in Australia for years without ever making the trip to the coast; when the Pacific finally appeared on the horizon, cheers rolled down every aisle.',
      'Volunteers set up shade, shared out food and joined the games. By the afternoon, strangers had become friends — swapping recipes, phone numbers and stories between dips in the water, while children who had never felt the sand refused to leave the shoreline.',
      'Days like this sit at the heart of our Community Connections program: recreation that restores wellbeing and turns neighbours into family. The joy of that January day carried straight into planning our next great adventure — the Northern Beaches, January 2026.',
    ],
    quote: {
      text: 'My children had never felt the sand. Now they ask every week when we can go back.',
      attribution: 'A mother from Holroyd',
    },
    featured: true,
  },
  {
    id: 'blacktown-festival-2025',
    category: 'youth',
    meta: 'YOUTH · 2025',
    date: '2025',
    title: 'Youth dancers light up Blacktown Festival',
    excerpt:
      'Our Cultural Youth Dance Group performed African heritage dance at Blacktown Festival 2025 — building confidence, identity and leadership, and deepening ties with Blacktown City Council.',
    image: '/cultural-dance.jpg',
    alt: 'Cultural Youth Dance Group in vibrant African dress performing on an outdoor festival stage',
    paragraphs: [
      'Our Cultural Youth Dance Group performed African heritage dance at Blacktown Festival 2025 — building confidence, identity and leadership, and deepening ties with Blacktown City Council.',
      'The performance was the product of weeks of rehearsals inside our weekly youth group, where young people choreographed, taught and encouraged one another. On festival day, vibrant dress, drums and movement drew the crowd in — and our dancers rose to meet it.',
      'For many of the performers it was their first time on a public stage. They walked off it standing taller: confidence built, identity celebrated and leadership practised in front of their own community.',
      'The day also deepened our ties with Blacktown City Council, whose support helps open doors for our cultural programs. The dancers are already asking when they can perform again.',
    ],
    quote: {
      text: 'When the drums started, the nerves disappeared. I felt proud of who I am.',
      attribution: 'A youth dancer',
    },
  },
  {
    id: 'hampers-milestone',
    category: 'food-relief',
    meta: 'FOOD RELIEF · 2024–25',
    date: '2024–25',
    title: '2,000 hampers and counting',
    excerpt:
      'A milestone built hamper by hamper: 2,000+ food hampers distributed by volunteers, with Foodbank NSW & ACT and OzHarvest beside us.',
    image: '/hampers-milestone.jpg',
    alt: 'Two volunteers high-fiving in front of a wall of stacked food hamper boxes',
    paragraphs: [
      'A milestone built hamper by hamper: 2,000+ food hampers distributed by volunteers, with Foodbank NSW & ACT and OzHarvest beside us.',
      'Every week, more than 40 community members are supported through our weekly food relief program. Behind each of those hampers is a volunteer who packed it, a partner who supplied it and a family who breathed a little easier because of it.',
      'Working alongside Foodbank NSW & ACT and OzHarvest, our volunteers rescue, sort and pack fresh produce and pantry staples, then get them into the hands of families across Western Sydney — no salaries, no overheads, just neighbours helping neighbours.',
      'Passing 2,000 hampers is not a finish line; it is proof of what a volunteer-powered community can sustain. The wall of boxes keeps growing, and so does our resolve.',
    ],
    quote: {
      text: 'Every box is a family breathing a little easier this week.',
      attribution: 'A food relief volunteer',
    },
  },
  {
    id: 'neighbourhood-eats-together',
    category: 'community',
    meta: 'COMMUNITY · 2024',
    date: '2024',
    title: 'A neighbourhood that eats together',
    excerpt:
      'Family recreation days and shared meals are quietly ending isolation across our twelve suburbs.',
    image: '/community-event.jpg',
    alt: 'Multicultural families sharing food and conversation at a community fun day in a Western Sydney park',
    paragraphs: [
      'Family recreation days and shared meals are quietly ending isolation across our twelve suburbs.',
      'In parks and community halls across Western Sydney, our family fun days bring together stalls, games, balloons and long shared tables. Children run between activities while elders trade stories over food cooked from a dozen traditions.',
      'For families who are newly arrived, these gatherings are often the first place they are greeted by name. A shared plate becomes a shared language, and a quiet afternoon becomes the beginning of belonging.',
      'Isolation rarely ends with a grand gesture. It ends exactly like this — one meal, one conversation, one suburb at a time.',
    ],
    quote: {
      text: 'We came for the food and stayed for the friendships.',
      attribution: 'A family day regular',
    },
  },
  {
    id: 'student-to-mentor',
    category: 'youth',
    meta: 'YOUTH · 2025',
    date: '2025',
    title: 'From student to mentor: a full-circle story',
    excerpt:
      'Weekly youth group alumni are returning as mentors — leadership grown at home.',
    image: '/mentoring.jpg',
    alt: 'A volunteer mentor and a teenage boy smiling over a laptop during a mentoring session',
    paragraphs: [
      'Weekly youth group alumni are returning as mentors — leadership grown at home.',
      'Not long ago they were the ones sitting in the circle, learning life skills, financial literacy and study habits from older volunteers. Now those same young people are back — leading activities, tutoring younger kids and modelling what the program makes possible.',
      'This is the quiet measure of our Youth Empowerment program: not just confident graduates, but leaders who return. They know the journey because they have walked it, and younger participants believe them because they see themselves.',
      'A program that grows its own mentors never has to look far for its future. The circle keeps turning, and every return makes it stronger.',
    ],
    quote: {
      text: 'The program believed in me first. Now it is my turn to believe in someone else.',
      attribution: 'A youth group mentor',
    },
  },
  {
    id: 'volunteers-behind-the-bridge',
    category: 'community',
    meta: 'COMMUNITY · 2025',
    date: '2025',
    title: 'Meet the volunteers behind the bridge',
    excerpt:
      'No salaries, no offices, no shortcuts — meet the 100% volunteer team powering every program.',
    image: '/volunteers-team.jpg',
    alt: 'The LightBridge volunteer team laughing together in navy tees with gold accents',
    paragraphs: [
      'No salaries, no offices, no shortcuts — meet the 100% volunteer team powering every program.',
      'They are parents, students, retirees and working professionals. On any given week they pack food hampers, mentor young people, drive excursion buses, support casework clients and still find time to laugh together at the end of a long day.',
      'Because LightBridge Foundation is 100% volunteer-run, every dollar donated goes directly to charitable programs — food relief, youth programs, family support, community activities and local partnerships.',
      'The bridge holds because people choose to hold it. If you have time, skills or simply a willing heart, there is a place for you on the team.',
    ],
    quote: {
      text: 'Nobody here is paid — yet everybody here leaves richer.',
      attribution: 'A long-time volunteer',
    },
  },
  {
    id: 'northern-beaches-2026',
    category: 'excursions',
    meta: 'EXCURSIONS · JAN 2026',
    date: 'January 2026',
    title: 'Northern Beaches: the tradition grows',
    excerpt:
      'On 10 January 2026, 56 participants joined our second major excursion — family–volunteer bonds deepening with every wave.',
    image: '/beach-excursion.jpg',
    alt: 'Community members walking along the shoreline together on the Northern Beaches excursion',
    paragraphs: [
      'On 10 January 2026, 56 participants joined our second major excursion — family–volunteer bonds deepening with every wave.',
      'A year on from Port Kembla, the buses rolled north. Returning families arrived as seasoned beach-goers, towels under their arms, ready to introduce first-timers to the water they had once met for the very first time.',
      'The Northern Beaches day proved the excursion is no longer an event but a tradition — one where volunteers and families plan, cook, swim and laugh side by side, and where trust deepens with every trip.',
      'Two summers, two coastlines, one growing community. Planning is already underway for where the bridge reaches next January.',
    ],
    quote: {
      text: 'Last year we watched from the sand. This year we were first into the water.',
      attribution: 'A returning parent',
    },
  },
  {
    id: 'sharing-and-caring-a-vital-cog',
    category: 'community',
    meta: 'COMMUNITY · FEB 2025',
    date: '20 February 2025',
    title: 'Sharing and caring — a vital cog',
    excerpt:
      'Ubuntu teaches us "I am because we are". For the African diaspora in Australia, community support is not a luxury — it is the vital cog that keeps wellbeing, opportunity and culture turning.',
    image: '/community-event.jpg',
    alt: 'Multicultural families sharing food and conversation at a community gathering in a Western Sydney park',
    paragraphs: [
      'Ubuntu teaches us "I am because we are". For the African diaspora in Australia, community support is not a luxury — it is the vital cog that keeps wellbeing, opportunity and culture turning.',
      'When people settle far from home, the community becomes family. The first benefit is mental and emotional well-being: a network of people who greet you by name, check in when you go quiet and remind you that you belong.',
      'The second is economic empowerment. From cooperative savings schemes like stokvels to mentoring and job referrals, community networks open doors that formal systems too often leave closed — turning shared trust into shared prosperity.',
      'Third, community preserves culture and identity. Language, food, song and story survive when they are practised together, and children grow up proud of where they come from. Fourth, it fuels educational and career growth: advice, tutoring, references and encouragement flow freely between generations.',
      'And fifth, community provides practical assistance in times of need — food banks, financial aid and emergency accommodation referrals that catch people before they fall. Sharing and caring is not charity; it is how a community holds itself together, one act of kindness at a time.',
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
    image: '/cultural-dance.jpg',
    alt: 'Community members in vibrant African dress celebrating together through cultural performance',
    paragraphs: [
      '"Sticks in a bundle are unbreakable," says the Bondei proverb, and the Swahili remind us that unity is strength while division is weakness. Desmond Tutu put it simply: "My humanity is caught up, is inextricably bound up, in yours." Community is not something we have — it is something we do, together.',
      'The first strategy is to foster unity and collaboration. "When spider webs unite, they can tie up a lion": small efforts, woven together, achieve what no individual could. Shared goals, shared meals and shared work turn neighbours into a force.',
      'The second is intergenerational learning — "each one teach one". Elders carry wisdom, young people carry energy, and a strong community makes sure the two never stop exchanging gifts.',
      'The third is open communication. "Wisdom is like a baobab tree; no one individual can embrace it." When people speak honestly and listen generously, the whole community grows wiser than any one voice.',
      'And the fourth is celebrating cultural art forms — poetry, storytelling, song and dance that carry identity across oceans and generations. A community that tells its own stories never forgets its own strength.',
    ],
    quote: {
      text: 'My humanity is caught up, is inextricably bound up, in yours.',
      attribution: 'Desmond Tutu',
    },
    author: 'Fradreck Nyamhunga',
  },
]
