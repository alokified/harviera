"use client"
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function CoursesFilters() {
  const [mode, setMode] = useState('All')
  const [level, setLevel] = useState('All')
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
          {/* Mode Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 font-medium">Mode:</span>
            <div className="flex gap-1">
              {['All', 'Online', 'Hybrid', 'On-Campus'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-3 py-1 text-sm rounded-xl transition-all ${
                    mode === m
                      ? 'bg-lavender text-gray-900 font-medium'
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 font-medium">Level:</span>
            <div className="flex gap-1">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`px-3 py-1 text-sm rounded-xl transition-all ${
                    level === l
                      ? 'bg-mint text-gray-900 font-medium'
                      : 'bg-white/50 text-gray-700 hover:bg-white/70'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search courses"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-white/50 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
            />
          </div>
        </div>

        {/* Right: Results Count */}
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">9 courses</span>
        </div>
      </div>
    </motion.div>
  )
}