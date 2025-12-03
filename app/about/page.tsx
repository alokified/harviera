import AboutHero from '@/components/sections/about-hero'
import AboutTabs from '@/components/sections/about-tabs'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Harviera IT Solutions - a unified IT, AI, Digital & Education partner helping organizations scale, transform, and innovate.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <AboutHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <AboutTabs />
        </div>
      </section>
    </>
  )
}
