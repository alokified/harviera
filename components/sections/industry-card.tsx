"use client"
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type IndustryCardProps = {
  icon: LucideIcon
  name: string
  iconBg: string
  summary: string
  outcomes: string[]
}

export default function IndustryCard({ icon: Icon, name, iconBg, summary, outcomes }: IndustryCardProps) {
  return (
    <div className="glass-card p-6 flex flex-col h-full transition-all ease-soft hover:-translate-y-1 hover:shadow-xl">
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-gray-800" />
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-700 mb-4">{summary}</p>

      {/* Key Outcomes */}
      <div className="mb-4 flex-grow">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">Key Outcomes</p>
        <ul className="space-y-1.5">
          {outcomes.map((outcome) => (
            <li key={outcome} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="text-lavender mt-0.5">✓</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Link */}
      <Link 
        href="/case-studies" 
        className="text-sm text-gray-800 hover:text-gray-900 font-medium inline-flex items-center gap-1 group mt-auto"
      >
        See related case studies
        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}