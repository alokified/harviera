import ServicesHero from '@/components/sections/services-hero'
import ServicesGrid from '@/components/sections/services-grid'
import ServicesCtaStrip from '@/components/sections/services-cta-strip'

export const metadata = {
  title: 'Services & Solutions',
  description: 'Comprehensive IT development, consulting, digital marketing, educational consulting, and training services designed to power your growth.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <ServicesHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <ServicesGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <ServicesCtaStrip />
        </div>
      </section>
    </>
  )
}
