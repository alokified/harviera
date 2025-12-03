"use client"
import { User } from 'lucide-react'

type LeadershipCardProps = {
  name: string
  role: string
  expertise: string
}

export default function LeadershipCard({ name, role, expertise }: LeadershipCardProps) {
  return (
    <div className="glass-card p-6 bg-baby-blue/30 transition-transform ease-soft hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center">
          <User className="h-10 w-10 text-gray-700" />
        </div>
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <p className="text-sm text-gray-700">{expertise}</p>
      </div>
    </div>
  )
}