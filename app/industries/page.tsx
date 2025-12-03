import IndustriesHero from '@/components/sections/industries-hero'
import IndustriesGrid from '@/components/sections/industries-grid'
import IndustriesCtaStrip from '@/components/sections/industries-cta-strip'

export const metadata = {
  title: 'Industries We Serve',
  description: 'Delivering tailored IT, AI, digital marketing, and education solutions across education, SaaS, healthcare, startups, enterprises, and training institutes.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function IndustriesPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <IndustriesHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <IndustriesGrid />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <IndustriesCtaStrip />
        </div>
      </section>
    </>
  )
}
