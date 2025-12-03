"use client"
import { motion } from 'framer-motion'
import Tabs from '@/components/ui/tabs'
import LeadershipCard from './about-leadership-card'
import { Award } from 'lucide-react'

export default function AboutTabs() {
  const leaders = [
    { name: 'Rajesh Kumar', role: 'CEO & Founder', expertise: 'Visionary leader with 15+ years in IT strategy and digital transformation.' },
    { name: 'Priya Sharma', role: 'CTO', expertise: 'Expert in cloud architecture, AI/ML systems, and scalable infrastructure.' },
    { name: 'Amit Patel', role: 'Head of Education', expertise: 'Pioneering educational consultant specializing in overseas admissions and EdTech.' },
    { name: 'Neha Verma', role: 'Director of Marketing', expertise: 'Digital marketing strategist driving growth through SEO, social, and analytics.' },
  ]

  const values = [
    'Integrity',
    'Innovation',
    'Student-First',
    'Excellence',
    'Accountability',
    'Learning Culture',
  ]

  const certifications = [
    'ISO 9001:2015 Certified',
    'AWS Partner Network',
    'Microsoft Azure Partner',
    'Google Cloud Partner',
    'Certified Agile Organization',
    'Data Privacy Compliant',
  ]

  return (
    <Tabs
      items={[
        {
          label: 'Company Overview',
          content: (
            <div className="space-y-4 text-gray-700">
              <p>
                Founded with a mission to bridge technology, strategy, and education, Harviera IT Solutions has grown 
                into a trusted partner for organizations seeking comprehensive digital transformation. Our expertise spans 
                IT development, AI-driven automation, cloud infrastructure, cybersecurity, and educational consulting.
              </p>
              <p>
                We specialize in custom software development, mobile and web applications, cloud migration, and infrastructure 
                optimization. Our consulting practice helps businesses navigate complex IT landscapes, adopt emerging technologies, 
                and build resilient, scalable systems.
              </p>
              <p>
                Beyond technology, we empower individuals and institutions through our education arm — offering overseas admissions 
                consulting, professional training programs, and upskilling initiatives designed to prepare the next generation of 
                tech professionals. With a focus on innovation, integrity, and student-first values, Harviera stands as a unified 
                ecosystem for growth.
              </p>
            </div>
          ),
        },
        {
          label: 'Mission & Vision',
          content: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 bg-lavender/30">
                <h3 className="text-xl font-medium mb-4">Our Mission</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Deliver world-class IT solutions that drive measurable business outcomes</li>
                  <li>✓ Provide strategic consulting that transforms challenges into opportunities</li>
                  <li>✓ Empower learners with education pathways and skill development programs</li>
                  <li>✓ Foster innovation, integrity, and excellence in every engagement</li>
                </ul>
              </div>
              <div className="glass-card p-6 bg-mint/30">
                <h3 className="text-xl font-medium mb-4">Our Vision</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Be the global leader in integrated IT, AI, and education ecosystems</li>
                  <li>✓ Enable organizations to scale sustainably through cutting-edge technology</li>
                  <li>✓ Create a learning culture that bridges industry needs with talent readiness</li>
                  <li>✓ Build lasting partnerships grounded in trust, transparency, and impact</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          label: 'Leadership Team',
          content: (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {leaders.map((leader) => (
                <motion.div
                  key={leader.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <LeadershipCard {...leader} />
                </motion.div>
              ))}
            </motion.div>
          ),
        },
        {
          label: 'Core Values',
          content: (
            <div className="glass-card p-8 bg-peach/20">
              <h3 className="text-xl font-medium mb-6 text-center">What Drives Us</h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {values.map((value) => (
                  <motion.div
                    key={value}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    className="glass-card p-4 bg-white/50 text-center flex items-center justify-center gap-2"
                  >
                    <Award className="h-4 w-4 text-gray-700" />
                    <span className="font-medium">{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ),
        },
        {
          label: 'Certifications',
          content: (
            <div className="glass-card p-8 bg-sky/20">
              <h3 className="text-xl font-medium mb-6 text-center">Industry Recognition & Partnerships</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="glass-card p-4 bg-white/50 border border-gray-200/50 text-center"
                  >
                    <Award className="h-6 w-6 text-gray-700 mx-auto mb-2" />
                    <p className="text-sm font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ]}
    />
  )
}