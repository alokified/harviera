import CoursesHero from '@/components/sections/courses-hero'
import CoursesFilters from '@/components/sections/courses-filters'
import CoursesGrid from '@/components/sections/courses-grid'
import CoursesCtaStrip from '@/components/sections/courses-cta-strip'

export const metadata = {
  title: 'Courses & Programs',
  description: 'Industry-relevant technical, digital, and career-focused programs designed to make you job-ready. Full-stack, cloud, data, AI, marketing, and soft skills training.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function CoursesPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <CoursesHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CoursesFilters />
          <div className="mt-8">
            <CoursesGrid />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CoursesCtaStrip />
        </div>
      </section>
    </>
  )
}
