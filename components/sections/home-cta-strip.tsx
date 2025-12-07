"use client"
import Link from 'next/link'
import Button from '@/components/ui/button'

export default function HomeCtaStrip() {
  return (
    <div className="relative">
      {/* Vibrant Blurry Blobs */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        
        {/* Top-left center blob */}
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] blur-3xl opacity-40 rounded-full animate-wobble-1"
          style={{
            background: 'radial-gradient(circle, rgba(125,211,252,0.8) 0%, rgba(196,165,255,0.5) 100%)',
          }}
        />
        
        {/* Right-center blob */}
        <div 
          className="absolute top-1/2 right-1/3 w-[450px] h-[450px] blur-3xl opacity-35 rounded-full animate-wobble-2"
          style={{
            background: 'radial-gradient(circle, rgba(52,211,153,0.7) 0%, rgba(56,189,248,0.4) 100%)',
          }}
        />
      </div>

      <div className="glass-card-vibrant p-10 bg-gradient-cta shadow-glow-accent border border-accent/40 transition-all duration-500 ease-soft hover:scale-[1.02] hover:shadow-glow-accent relative">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to modernize your IT, AI, and education ecosystem?
          </h2>
          <p className="text-lg text-gray-700">
            Let's discuss your roadmap for development, consulting, marketing, or training.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-3 text-base">
                Schedule a consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}