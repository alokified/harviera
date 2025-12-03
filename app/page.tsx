import HomeHero from '@/components/sections/home-hero'
import HomeHighlights from '@/components/sections/home-highlights'
import HomeServicesPreview from '@/components/sections/home-services-preview'
import HomeCtaStrip from '@/components/sections/home-cta-strip'

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <HomeHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <HomeHighlights />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <HomeServicesPreview />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <HomeCtaStrip />
        </div>
      </section>
    </>
  )
}
