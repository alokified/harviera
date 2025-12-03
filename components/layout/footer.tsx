import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { label: 'IT Development', href: '/services#it-dev' },
    { label: 'Consulting', href: '/services#consulting' },
    { label: 'Digital Marketing', href: '/services#marketing' },
    { label: 'Education Consulting', href: '/services#education' },
    { label: 'Training Programs', href: '/services#training' },
  ]

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Courses', href: '/courses' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
  ]

  const support = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Help Center', href: '#' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-br from-lavender/20 via-baby-blue/15 to-mint/20 border-t border-gray-200/50">
      <div className="page-container">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lavender to-baby-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Harviera</span>
            </div>
            <p className="text-gray-700 mb-4 max-w-sm">
              Empowering businesses through IT development, consulting, marketing, education, and training solutions. Your partner for digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@harviera.com" className="hover:text-gray-900 transition-colors">
                  contact@harviera.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-gray-900 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link 
                    href={service.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-gray-200/50">
          <div className="max-w-md">
            <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for the latest insights, resources, and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-lavender to-baby-blue text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200/50 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="text-sm text-gray-600">
            © {currentYear} Harviera IT Solutions. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Privacy Notice */}
        <div id="privacy" className="pb-6 text-xs text-gray-500 max-w-3xl">
          <p>
            <strong>Privacy Notice:</strong> We use privacy-friendly analytics to understand site usage. No personal data or tracking cookies are stored. You can block analytics by using your browser's tracking protection or extensions.
          </p>
        </div>
      </div>
    </footer>
  )
}
