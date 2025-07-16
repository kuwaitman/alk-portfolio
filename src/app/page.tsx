import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { StatsSection } from '@/components/sections/stats-section'
import { CTA } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <CTA />
    </div>
  )
} 