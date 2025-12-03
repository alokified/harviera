"use client"
import Button from '@/components/ui/button'

type ResourceCardProps = {
  type: 'Blog' | 'Guide' | 'Webinar'
  typeBg: string
  title: string
  description: string
  topic: string
  timeToConsume: string
  level?: string
  ctaLabel: string
}

export default function ResourceCard({
  type,
  typeBg,
  title,
  description,
  topic,
  timeToConsume,
  level,
  ctaLabel,
}: ResourceCardProps) {
  return (
    <div className="glass-card p-6 flex flex-col h-full transition-all ease-soft hover:-translate-y-1 hover:shadow-xl">
      {/* Type Badge */}
      <div className="mb-4">
        <span className={`inline-flex px-3 py-1 text-xs font-medium ${typeBg} rounded-full`}>
          {type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4 flex-grow">{description}</p>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200/50">
        <span>{timeToConsume}</span>
        <span>•</span>
        <span>{topic}</span>
        {level && (
          <>
            <span>•</span>
            <span>{level}</span>
          </>
        )}
      </div>

      {/* CTA */}
      <div>
        <a href="#" className="inline-block w-full">
          <Button variant="primary" className="w-full">{ctaLabel}</Button>
        </a>
      </div>
    </div>
  )
}