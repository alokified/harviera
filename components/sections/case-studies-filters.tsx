"use client"
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function CaseStudiesFilters() {
  const [industry, setIndustry] = useState('All')
  const [service, setService] = useState('All')
  const [search, setSearch] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-4 md:p-5 bg-white/35"
    >
      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Left: Filter Controls */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Industry Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 font-medium">Industry:</span>
            <div className="flex gap-1 flex-wrap">
              {['All', 'Education', 'IT & SaaS', 'Startups', 'Enterprises', 'Healthcare'].map((ind) => (
                <button
                  key={ind}
                  onClick={() => setIndustry(ind)}
                  className={`px-3 py-1 text-sm rounded-xl transition-all whitespace-nowrap ${
                    industry === ind
                      ? 'bg-lavender text-gray-900 font-medium'
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Service Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 font-medium">Service:</span>
            <div className="flex gap-1 flex-wrap">
              {['All', 'IT Dev', 'Consulting', 'Marketing', 'Education', 'Training'].map((svc) => (
                <button
                  key={svc}
                  onClick={() => setService(svc)}
                  className={`px-3 py-1 text-sm rounded-xl transition-all whitespace-nowrap ${
                    service === svc
                      ? 'bg-mint text-gray-900 font-medium'
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  {svc}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-white/50 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
            />
          </div>
        </div>

        {/* Right: Results Count */}
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">6 case studies</span>
        </div>
      </div>
    </motion.div>
  )
}