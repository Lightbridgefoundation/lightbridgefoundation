import { useEffect, useState } from 'react'
import NewsHero from '@/pages/news/NewsHero'
import FeaturedStory from '@/pages/news/FeaturedStory'
import StoryGrid from '@/pages/news/StoryGrid'
import Timeline from '@/pages/news/Timeline'
import ReportSpotlight from '@/pages/news/ReportSpotlight'
import ClosingCta from '@/pages/news/ClosingCta'
import StoryModal from '@/pages/news/StoryModal'
import { STORIES } from '@/pages/news/stories'
import type { Story } from '@/pages/news/stories'

const FEATURED = STORIES[0]

export default function News() {
  const [openStory, setOpenStory] = useState<Story | null>(null)

  useEffect(() => {
    const previous = document.title
    document.title = 'News & Stories | LightBridge Foundation'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <>
      <NewsHero />
      <FeaturedStory story={FEATURED} onOpen={setOpenStory} />
      <StoryGrid onOpen={setOpenStory} />
      <Timeline />
      <ReportSpotlight />
      <ClosingCta />
      <StoryModal story={openStory} onClose={() => setOpenStory(null)} />
    </>
  )
}
