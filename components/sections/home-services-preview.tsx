"use client"
import { Code2, Lightbulb, TrendingUp, GraduationCap, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/button'

export default function HomeServicesPreview() {
  const services = [
    {
      icon: Code2,
      title: 'IT Development & Solutions',
      description: 'Custom software, cloud infrastructure, and automation.',
      color: 'bg-baby-blue/30',
    },
    {
      icon: Lightbulb,
      title: 'IT Consulting & Advisory',
      description: 'Strategic guidance for cloud, data, and security.',
      color: 'bg-lavender/30',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, social media, and performance marketing.',
      color: 'bg-peach/30',
    },
    {
      icon: GraduationCap,
      title: 'Educational Consulting',
      description: 'Overseas admissions and educational strategy.',
      color: 'bg-mint/30',
    },
    {
      icon: BookOpen,
      title: 'Training & Skill Development',
      description: 'Upskilling programs and professional training.',
      color: 'bg-blush/30',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-block glass-card px-3 py-1 text-sm bg-white/60 mb-3">
          Service overview
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          What we can help you with
        </h2>
        <p className="mt-2 text-gray-700">
          Comprehensive solutions across IT, digital, and education.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {services.map(({ icon: Icon, title, description, color }) => (
          <div
            key={title}
            className={`glass-card p-5 ${color} transition-transform ease-soft hover:-translate-y-0.5`}
          >
            <div className="glass-card w-10 h-10 rounded-2xl bg-white/50 flex items-center justify-center mb-3">
              <Icon className="h-5 w-5 text-gray-900" />
            </div>
            <h3 className="text-base font-medium mb-1">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/services">
          <Button variant="ghost">View all services →</Button>
        </Link>
      </div>
    </div>
  )
}