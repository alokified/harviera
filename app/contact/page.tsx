import ContactHero from '@/components/sections/contact-hero'
import ContactFormSection from '@/components/sections/contact-form-section'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Harviera IT Solutions for IT development, consulting, digital marketing, educational consulting, and training services.',
  openGraph: { images: ['/og-image.svg'] },
}

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="section-inner">
          <ContactHero />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <ContactFormSection />
        </div>
      </section>
    </>
  )
}
