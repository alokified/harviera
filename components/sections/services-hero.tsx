"use client"
import { MotionDiv } from '@/components/common/motion-div'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { Code2, Brain, TrendingUp, GraduationCap, Users } from 'lucide-react'

export default function ServicesHero() {
  const serviceTiles = [
    { icon: Code2, label: 'IT Dev', color: 'bg-lavender/40' },
    { icon: Brain, label: 'Consulting', color: 'bg-mint/40' },
    { icon: TrendingUp, label: 'Marketing', color: 'bg-peach/40' },
    { icon: GraduationCap, label: 'Education', color: 'bg-baby-blue/40' },
    { icon: Users, label: 'Training', color: 'bg-sky/40' },
  ]

  return (
    <div className="relative">
      {/* Vibrant Blobs Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-linear-hero" />
        {/* Top-left center blob */}
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(125, 211, 252, 0.8) 0%, rgba(52, 211, 153, 0.5) 50%, transparent 100%)',
          }}
        />
        {/* Right-center blob */}
        <div 
          className="absolute top-1/2 right-1/3 w-[450px] h-[450px] rounded-full blur-3xl opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(196, 165, 255, 0.7) 0%, rgba(125, 211, 252, 0.4) 50%, transparent 100%)',
          }}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
      {/* Left: Text Content */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6" as any
      >
        <div className="inline-block">
          <div className="glass-card-vibrant px-4 py-2 text-sm bg-gradient-radial-accent border border-accent/50">
            What We Deliver
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Services & Solutions
          </h1>
          <p className="mt-3 text-xl text-gray-800">
            Comprehensive IT, consulting, marketing, education, and training services designed to power your growth.
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <p className="font-medium">Harviera provides:</p>
          <ul className="space-y-2 ml-4">
            <li>✓ IT Development & Solutions</li>
            <li>✓ IT Consulting & Advisory</li>
            <li>✓ Digital Marketing</li>
            <li>✓ Educational Consulting</li>
            <li>✓ Training & Skill Development</li>
          </ul>
          <p className="text-sm italic">From code to cloud, strategy to student success.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact">
            <Button variant="primary">Talk to Our Team</Button>
          </Link>
          <a href="#" className="inline-block">
            <Button variant="ghost">Download Services Deck</Button>
          </a>
        </div>
      </MotionDiv>

      {/* Right: Service Tiles Illustration */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative" as any
      >
        <div className="glass-card p-8 bg-gradient-to-br from-lavender/20 via-mint/15 to-baby-blue/20">
          <div className="grid grid-cols-2 gap-4">
            {serviceTiles.map((tile, i) => {
              const Icon = tile.icon
              return (
                <MotionDiv
                  key={tile.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    duration: 3 + i * 0.3, 
                    repeat: Infinity, 
                    ease: 'easeInOut',
                    delay: i * 0.2 
                  }}
                  className={`glass-card p-5 ${tile.color} flex flex-col items-center justify-center space-y-2 ${i === 4 ? 'col-span-2' : ''}`}
                >
                  <Icon className="h-8 w-8 text-gray-800" />
                  <span className="text-sm font-medium">{tile.label}</span>
                </MotionDiv>
              )
            })}
          </div>
        </div>
      </MotionDiv>
      </div>
    </div>
  )
}
