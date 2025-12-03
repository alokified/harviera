import ResourcesHero from '@/components/sections/resources-hero'
import ResourcesTabs from '@/components/sections/resources-tabs'
import ResourcesCtaStrip from '@/components/sections/resources-cta-strip'

export const metadata = {
  title: 'Resources & Knowledge Hub',
  description: 'Explore our collection of insights on IT development, cloud & AI, digital marketing, EdTech & student success, and career skills through blogs, guides, and webinars.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function ResourcesPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <ResourcesHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <ResourcesTabs />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <ResourcesCtaStrip />
        </div>
      </section>
    </>
  )
}
