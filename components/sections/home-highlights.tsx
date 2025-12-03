"use client"
import { motion } from 'framer-motion'
import { Code2, Lightbulb, TrendingUp, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function HomeHighlights() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-stack IT Development',
      description: 'Custom software, web, mobile, cloud, and automation solutions tailored to your needs.',
      color: 'bg-baby-blue/40',
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Consulting',
      description: 'IT consulting, cloud & infrastructure, data strategy, and cybersecurity expertise.',
      color: 'bg-lavender/40',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Brand Growth',
      description: 'SEO, social media, performance marketing, and analytics to scale your reach.',
      color: 'bg-peach/40',
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Overseas admissions, educational consulting, training programs, and upskilling initiatives.',
      color: 'bg-mint/40',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block glass-card px-3 py-1 text-sm bg-white/60 mb-3">
          Why Harviera
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          A single partner for your IT, AI, and education journey
        </h2>
        <p className="mt-3 text-gray-700">
          Harviera combines technology, strategy, digital marketing, and learning to drive your success.
        </p>
      </div>

      {/* Highlights Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {highlights.map(({ icon: Icon, title, description, color }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className={`glass-card p-6 ${color} transition-transform ease-soft hover:-translate-y-1`}
          >
            <div className="glass-card w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center mb-4">
              <Icon className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray-700 mb-3">{description}</p>
            <Link href="/services" className="text-sm text-gray-900 hover:underline">
              Learn more →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
