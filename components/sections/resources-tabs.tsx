"use client"
import { motion } from 'framer-motion'
import Tabs from '@/components/ui/tabs'
import ResourceCard from './resource-card'

type Resource = {
  id: string
  title: string
  description: string
  type: 'Blog' | 'Guide' | 'Webinar'
  typeBg: string
  topic: string
  timeToConsume: string
  level?: string
  ctaLabel: string
}

export default function ResourcesTabs() {
  const blogs: Resource[] = [
    {
      id: 'b1',
      title: 'Building Scalable Cloud Infrastructure with AWS',
      description: 'Learn best practices for designing fault-tolerant, auto-scaling cloud architectures using AWS services like EC2, RDS, and S3.',
      type: 'Blog',
      typeBg: 'bg-lavender',
      topic: 'Cloud',
      timeToConsume: '6 min read',
      level: 'Intermediate',
      ctaLabel: 'Read article',
    },
    {
      id: 'b2',
      title: 'AI-Powered Student Admissions: A Complete Guide',
      description: 'Discover how universities are using AI and machine learning to automate application processing and improve student matching.',
      type: 'Blog',
      typeBg: 'bg-lavender',
      topic: 'Admissions',
      timeToConsume: '8 min read',
      level: 'Intro',
      ctaLabel: 'Read article',
    },
    {
      id: 'b3',
      title: 'SEO Trends for EdTech Platforms in 2025',
      description: 'Stay ahead with the latest SEO strategies tailored for online education platforms, from keyword research to content optimization.',
      type: 'Blog',
      typeBg: 'bg-lavender',
      topic: 'Marketing',
      timeToConsume: '7 min read',
      level: 'Intermediate',
      ctaLabel: 'Read article',
    },
    {
      id: 'b4',
      title: 'Career Skills for Tech Professionals in 2025',
      description: 'Explore the soft skills, certifications, and technical expertise that employers are seeking in the evolving tech landscape.',
      type: 'Blog',
      typeBg: 'bg-lavender',
      topic: 'Careers',
      timeToConsume: '5 min read',
      level: 'Intro',
      ctaLabel: 'Read article',
    },
    {
      id: 'b5',
      title: 'Generative AI in Enterprise: Use Cases & ROI',
      description: 'Understand how businesses are leveraging Gen AI for automation, content creation, and customer support with measurable returns.',
      type: 'Blog',
      typeBg: 'bg-lavender',
      topic: 'AI',
      timeToConsume: '9 min read',
      level: 'Advanced',
      ctaLabel: 'Read article',
    },
    {
      id: 'b6',
      title: 'Digital Transformation for SMEs: Where to Start',
      description: 'A practical roadmap for small and medium enterprises looking to modernize operations with cloud, automation, and data analytics.',
      type: 'Blog',
      typeBg: 'bg-lavender',
      topic: 'Cloud',
      timeToConsume: '6 min read',
      level: 'Intro',
      ctaLabel: 'Read article',
    },
  ]

  const guides: Resource[] = [
    {
      id: 'g1',
      title: 'The Complete DevOps Playbook for Startups',
      description: 'A step-by-step guide to setting up CI/CD pipelines, container orchestration, and monitoring for fast-growing startups.',
      type: 'Guide',
      typeBg: 'bg-mint',
      topic: 'Cloud',
      timeToConsume: '15 min read',
      level: 'Intermediate',
      ctaLabel: 'Download guide',
    },
    {
      id: 'g2',
      title: 'Overseas Admissions Toolkit for Counsellors',
      description: 'Everything counsellors need to guide students through university selection, application writing, and visa processes.',
      type: 'Guide',
      typeBg: 'bg-mint',
      topic: 'Admissions',
      timeToConsume: '20 min read',
      level: 'Intro',
      ctaLabel: 'Download guide',
    },
    {
      id: 'g3',
      title: 'Performance Marketing ROI Calculator & Framework',
      description: 'A practical framework for measuring and optimizing ROI across Google Ads, Facebook Ads, and content marketing campaigns.',
      type: 'Guide',
      typeBg: 'bg-mint',
      topic: 'Marketing',
      timeToConsume: '12 min read',
      level: 'Intermediate',
      ctaLabel: 'Download guide',
    },
    {
      id: 'g4',
      title: 'Building Your First LMS: A Technical Guide',
      description: 'Learn how to architect, develop, and deploy a learning management system with video hosting, quizzes, and analytics.',
      type: 'Guide',
      typeBg: 'bg-mint',
      topic: 'Cloud',
      timeToConsume: '18 min read',
      level: 'Advanced',
      ctaLabel: 'Download guide',
    },
  ]

  const webinars: Resource[] = [
    {
      id: 'w1',
      title: 'AI & Automation in Higher Education',
      description: 'Join our live session exploring how universities are using AI for admissions, student support, and academic operations.',
      type: 'Webinar',
      typeBg: 'bg-sky',
      topic: 'AI',
      timeToConsume: '45 min webinar',
      ctaLabel: 'Watch webinar',
    },
    {
      id: 'w2',
      title: 'Scaling SaaS Products: Infrastructure & Strategy',
      description: 'Learn from experts about cloud architecture, database optimization, and growth strategies for scaling SaaS platforms.',
      type: 'Webinar',
      typeBg: 'bg-sky',
      topic: 'Cloud',
      timeToConsume: '50 min webinar',
      ctaLabel: 'Watch webinar',
    },
    {
      id: 'w3',
      title: 'Digital Marketing Masterclass for EdTech',
      description: 'A comprehensive masterclass covering SEO, social media, content strategy, and paid advertising for education technology companies.',
      type: 'Webinar',
      typeBg: 'bg-sky',
      topic: 'Marketing',
      timeToConsume: '60 min webinar',
      ctaLabel: 'Watch webinar',
    },
    {
      id: 'w4',
      title: 'Career Transition into Tech: Panel Discussion',
      description: 'Hear from industry professionals who successfully transitioned into tech roles, sharing tips on upskilling and job hunting.',
      type: 'Webinar',
      typeBg: 'bg-sky',
      topic: 'Careers',
      timeToConsume: '40 min webinar',
      ctaLabel: 'Watch webinar',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-block">
          <div className="glass-card px-4 py-2 text-sm bg-lavender/40">
            Content Types
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Browse our latest resources
        </h2>
        <p className="text-gray-700">
          Stay updated on the latest trends in technology, digital marketing, and education.
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        items={[
          {
            label: 'Blogs',
            content: (
              <motion.div
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {blogs.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </motion.div>
            ),
          },
          {
            label: 'Guides',
            content: (
              <motion.div
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {guides.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </motion.div>
            ),
          },
          {
            label: 'Webinars',
            content: (
              <motion.div
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {webinars.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <ResourceCard {...resource} />
                  </motion.div>
                ))}
              </motion.div>
            ),
          },
        ]}
      />
    </div>
  )
}