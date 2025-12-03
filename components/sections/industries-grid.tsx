"use client"
import { motion } from 'framer-motion'
import { GraduationCap, Code2, Award, Rocket, Building2, Activity } from 'lucide-react'
import IndustryCard from './industry-card'

export default function IndustriesGrid() {
  const industries = [
    {
      id: '1',
      name: 'Education & EdTech',
      icon: GraduationCap,
      iconBg: 'bg-lavender/40',
      summary: 'Empowering universities, colleges, and EdTech platforms with digital learning tools, student portals, and AI-driven admissions workflows.',
      outcomes: [
        'Automated admission workflows and student onboarding',
        'Improved student engagement with digital learning platforms',
        'Data-driven insights for academic performance tracking',
      ],
    },
    {
      id: '2',
      name: 'IT & SaaS',
      icon: Code2,
      iconBg: 'bg-baby-blue/40',
      summary: 'Building scalable cloud infrastructure, custom software solutions, and DevOps pipelines for technology companies and SaaS platforms.',
      outcomes: [
        'Accelerated product development with modern tech stacks',
        'Scalable cloud infrastructure with 99.9% uptime',
        'Optimized CI/CD pipelines reducing deployment time by 60%',
      ],
    },
    {
      id: '3',
      name: 'Training Institutes & Skill Centers',
      icon: Award,
      iconBg: 'bg-mint/40',
      summary: 'Delivering LMS platforms, course management systems, and student progress tracking for training centers and professional development institutes.',
      outcomes: [
        'Streamlined training operations with LMS solutions',
        'Enhanced student-instructor collaboration tools',
        'Certificate and credential management automation',
      ],
    },
    {
      id: '4',
      name: 'Startups & Innovation Hubs',
      icon: Rocket,
      iconBg: 'bg-peach/40',
      summary: 'Helping startups build MVPs, scale rapidly, and achieve product-market fit with agile development, marketing, and technical consulting.',
      outcomes: [
        'MVP development in 8-12 weeks with iterative feedback',
        'Growth marketing strategies increasing user acquisition by 3x',
        'Technical architecture ready for scale and funding rounds',
      ],
    },
    {
      id: '5',
      name: 'Enterprises & SMEs',
      icon: Building2,
      iconBg: 'bg-sky/40',
      summary: 'Transforming legacy systems, optimizing business processes, and implementing enterprise-grade cloud, security, and automation solutions.',
      outcomes: [
        'Digital transformation reducing operational costs by 40%',
        'Enterprise security and compliance (ISO, GDPR, SOC2)',
        'Process automation saving 20+ hours/week per team',
      ],
    },
    {
      id: '6',
      name: 'Healthcare',
      icon: Activity,
      iconBg: 'bg-blush/40',
      summary: 'Developing patient management systems, telemedicine platforms, and healthcare analytics solutions with HIPAA-compliant infrastructure.',
      outcomes: [
        'HIPAA-compliant patient portals and telehealth apps',
        'AI-driven diagnostics and predictive health analytics',
        'Streamlined appointment scheduling and EMR integration',
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-block">
          <div className="glass-card px-4 py-2 text-sm bg-lavender/40">
            Sectors
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Driving outcomes across industries
        </h2>
        <p className="text-gray-700">
          We adapt our IT, AI, digital, and education solutions to the unique challenges of each domain.
        </p>
      </div>

      {/* Industries Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {industries.map((industry) => (
          <motion.div
            key={industry.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <IndustryCard {...industry} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}