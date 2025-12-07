"use client"
import { FileDown } from 'lucide-react'
import Button from '@/components/ui/button'

type CaseStudyCardProps = {
  title: string
  industry: string
  industryColor: string
  clientType: string
  servicesUsed: string[]
  challenge: string
  solution: string
  impact: string[]
  image?: string
}

export default function CaseStudyCard({
  title,
  industry,
  industryColor,
  clientType,
  servicesUsed,
  challenge,
  solution,
  impact,
  image,
}: CaseStudyCardProps) {
  return (
    <div className="glass-card-vibrant overflow-hidden flex flex-col h-full border border-accent/30 transition-all duration-300 ease-soft hover:-translate-y-2 hover:shadow-glow-accent hover:border-accent/50">
      {/* Image */}
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
      {/* Top Meta */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex px-3 py-1 text-xs font-medium ${industryColor} rounded-full`}>
          {industry}
        </span>
        <span className="text-xs text-gray-600">{clientType}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* Services Used */}
      <div className="flex flex-wrap gap-1 mb-4">
        {servicesUsed.map((service) => (
          <span key={service} className="px-2 py-0.5 text-xs bg-white/50 rounded-md border border-gray-200/50">
            {service}
          </span>
        ))}
      </div>

      {/* Challenge */}
      <div className="mb-3">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">Challenge</p>
        <p className="text-sm text-gray-700">{challenge}</p>
      </div>

      {/* Solution */}
      <div className="mb-3">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">Solution</p>
        <p className="text-sm text-gray-700">{solution}</p>
      </div>

      {/* Impact */}
      <div className="mb-4 flex-grow">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">Impact</p>
        <ul className="space-y-1.5">
          {impact.map((metric) => (
            <li key={metric} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-mint mt-0.5">✓</span>
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50">
        <a href="#" className="flex-1">
          <Button variant="primary" className="w-full">View details</Button>
        </a>
        <a 
          href="#" 
          className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
          title="Download PDF"
        >
          <FileDown className="h-4 w-4" />
          <span className="hidden sm:inline">PDF</span>
        </a>
      </div>
      </div>
    </div>
  )
}