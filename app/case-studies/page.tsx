import CaseStudiesHero from '@/components/sections/case-studies-hero'
import CaseStudiesFilters from '@/components/sections/case-studies-filters'
import CaseStudiesList from '@/components/sections/case-studies-list'
import CaseStudiesCtaStrip from '@/components/sections/case-studies-cta-strip'

export const metadata = {
  title: 'Case Studies & Success Stories',
  description: 'Measurable results across education, IT, digital marketing, and training—delivering efficiency, engagement, and growth with proven outcomes.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <CaseStudiesHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CaseStudiesFilters />
          <div className="mt-8">
            <CaseStudiesList />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CaseStudiesCtaStrip />
        </div>
      </section>
    </>
  )
}
