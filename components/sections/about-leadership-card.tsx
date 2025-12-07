"use client"
import { User } from 'lucide-react'

type LeadershipCardProps = {
  name: string
  role: string
  expertise: string
  image?: string
}

export default function LeadershipCard({ name, role, expertise, image }: LeadershipCardProps) {
  return (
    <div className="glass-card-vibrant overflow-hidden border border-accent/30 transition-all duration-300 ease-soft hover:-translate-y-2 hover:shadow-glow-accent">
      {image ? (
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-64 bg-gradient-to-br from-lavender/30 to-baby-blue/30 flex items-center justify-center">
          <User className="h-24 w-24 text-gray-400" />
        </div>
      )}
      <div className="p-6">
      <div className="flex flex-col text-center space-y-3">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <p className="text-sm text-gray-700">{expertise}</p>
      </div>
      </div>
    </div>
  )
}