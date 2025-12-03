"use client"
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/common/motion-div'
import CaseStudyCard from './case-study-card'

type CaseStudy = {
  id: string
  title: string
  industry: string
  industryColor: string
  clientType: string
  servicesUsed: string[]
  challenge: string
  solution: string
  impact: string[]
}

export default function CaseStudiesList() {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Automating Admissions for a Tier-2 University',
      industry: 'Education',
      industryColor: 'bg-lavender',
      clientType: 'Private University',
      servicesUsed: ['IT Development', 'Process Automation'],
      challenge: 'Manual admission workflows caused delays, data errors, and poor applicant experience during peak enrollment season.',
      solution: 'Built a custom student portal with automated document verification, AI-powered application scoring, and real-time status tracking.',
      impact: [
        '+32% faster application processing time',
        '45% reduction in manual data entry errors',
        '78% improved applicant satisfaction scores',
      ],
    },
    {
      id: '2',
      title: 'Scaling Cloud Infrastructure for a SaaS Startup',
      industry: 'IT & SaaS',
      industryColor: 'bg-baby-blue',
      clientType: 'SaaS Product Team',
      servicesUsed: ['Cloud & DevOps', 'IT Consulting'],
      challenge: 'Rapid user growth led to performance bottlenecks, downtime during peak hours, and rising infrastructure costs.',
      solution: 'Migrated to AWS with auto-scaling EC2, implemented containerization using Docker/Kubernetes, and optimized database queries.',
      impact: [
        '99.9% uptime achieved post-migration',
        '40% reduction in cloud infrastructure costs',
        '3x faster page load times under peak traffic',
      ],
    },
    {
      id: '3',
      title: 'Digital Marketing Transformation for EdTech Platform',
      industry: 'Education',
      industryColor: 'bg-lavender',
      clientType: 'EdTech Startup',
      servicesUsed: ['Digital Marketing', 'SEO', 'PPC'],
      challenge: 'Low organic traffic, high cost-per-acquisition, and minimal brand visibility in a competitive online education market.',
      solution: 'Executed comprehensive SEO overhaul, launched targeted Google/Facebook ad campaigns, and created viral social content strategy.',
      impact: [
        '+180% organic search traffic in 6 months',
        '50% lower cost-per-acquisition on paid ads',
        '2.5x increase in course enrollments',
      ],
    },
    {
      id: '4',
      title: 'Building an LMS for Corporate Training Institute',
      industry: 'Training',
      industryColor: 'bg-mint',
      clientType: 'Corporate Training Provider',
      servicesUsed: ['IT Development', 'LMS Solutions'],
      challenge: 'Fragmented training delivery across multiple tools, lack of student progress tracking, and manual certificate generation.',
      solution: 'Developed a custom LMS with video hosting, quiz modules, progress dashboards, and automated certificate issuance.',
      impact: [
        '60% faster course deployment cycles',
        '85% instructor satisfaction with new tools',
        '100% automated certificate generation',
      ],
    },
    {
      id: '5',
      title: 'Enterprise Digital Transformation for Manufacturing SME',
      industry: 'Enterprises',
      industryColor: 'bg-sky',
      clientType: 'Manufacturing SME',
      servicesUsed: ['IT Consulting', 'Digital Transformation'],
      challenge: 'Legacy ERP system, manual inventory tracking, and lack of real-time production visibility across multiple facilities.',
      solution: 'Implemented cloud-based ERP with IoT sensors for inventory tracking, real-time dashboards, and automated reporting.',
      impact: [
        '40% reduction in operational costs',
        '95% inventory accuracy improvement',
        '30% faster production cycle times',
      ],
    },
    {
      id: '6',
      title: 'AI-Powered Student Counselling for Overseas Admissions',
      industry: 'Education',
      industryColor: 'bg-lavender',
      clientType: 'Education Consulting Firm',
      servicesUsed: ['AI Development', 'Educational Consulting'],
      challenge: 'Manual university matching process was time-intensive, inconsistent recommendations, and low conversion rates.',
      solution: 'Built an AI recommendation engine analyzing student profiles, university data, and historical outcomes to suggest optimal matches.',
      impact: [
        '+55% improvement in university match accuracy',
        '70% faster counselling session prep time',
        '42% higher student acceptance rates',
      ],
    },
  ]

  return (
    <div id="case-studies-list" className="space-y-8">
      <MotionDiv
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {caseStudies.map((caseStudy) => (
          <MotionDiv
            key={caseStudy.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <CaseStudyCard {...caseStudy} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  )
}

