"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import { useState } from 'react'
import Button from '@/components/ui/button'
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const services = [
    'IT Development & Solutions',
    'IT Consulting & Advisory',
    'Digital Marketing',
    'Educational Consulting',
    'Training & Skill Development',
    'Not sure yet',
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    if (validateForm()) {
      console.log('Form submitted:', formData)
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        service: '',
        message: '',
      })
      setErrors({})
      
      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-8">
      {/* Left: Contact Form */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
          <p className="text-gray-700 mb-6">Fill out the form below and we'll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-2.5 bg-white/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200/50 focus:ring-lavender/50 focus:border-lavender'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-2.5 bg-white/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200/50 focus:ring-lavender/50 focus:border-lavender'
                }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone (optional)
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-4 py-2.5 bg-white/50 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                Organization / Institution (optional)
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange('organization', e.target.value)}
                className="w-full px-4 py-2.5 bg-white/50 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
                placeholder="Your company or institution"
              />
            </div>

            {/* Service of Interest */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                Service of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className={`w-full px-4 py-2.5 bg-white/50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.service
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200/50 focus:ring-lavender/50 focus:border-lavender'
                }`}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Message / Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={5}
                className={`w-full px-4 py-2.5 bg-white/50 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-gray-200/50 focus:ring-lavender/50 focus:border-lavender'
                }`}
                placeholder="Tell us about your project, goals, and timelines..."
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-600 italic">
              We'll only use this information to respond to your enquiry.
            </p>

            {/* Success Message */}
            {success && (
              <div className="glass-card p-4 bg-mint/30 border border-mint">
                <p className="text-sm text-gray-800 flex items-center gap-2">
                  <span className="text-mint text-lg">✓</span>
                  Thanks! We'll get back to you shortly.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" variant="primary" className="w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              Submit enquiry
            </Button>
          </form>
        </div>
      </MotionDiv>

      {/* Right: Contact Info */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Reach Us Directly */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Reach us directly</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <a href="mailto:hello@harviera.com" className="text-gray-900 hover:text-lavender transition-colors">
                  hello@harviera.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <a href="tel:+91XXXXXXXXXX" className="text-gray-900 hover:text-lavender transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-600">Hours</p>
                <p className="text-gray-900">Mon–Sat, 10 AM – 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Presence */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Our presence</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Based in India, supporting clients across education, IT & SaaS, and growing businesses worldwide.
              </p>
            </div>
            
            {/* Simple Map Representation */}
            <div className="glass-card p-4 bg-gradient-to-br from-mint/20 to-sky/20 relative h-32 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-lavender rounded-full animate-pulse" />
              </div>
              <div className="absolute bottom-2 left-2 text-xs text-gray-600">
                India
              </div>
            </div>
          </div>
        </div>

        {/* Social / Other */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
          <p className="text-sm text-gray-700 mb-3">
            You can also reach us on:
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="glass-card px-4 py-2 text-sm bg-baby-blue/30 hover:bg-baby-blue/50 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="glass-card px-4 py-2 text-sm bg-mint/30 hover:bg-mint/50 transition-colors">
              WhatsApp
            </a>
            <a href="#" className="glass-card px-4 py-2 text-sm bg-sky/30 hover:bg-sky/50 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </MotionDiv>
    </div>
  )
}
