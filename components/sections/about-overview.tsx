export default function AboutOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="glass-card-vibrant p-8 border border-accent/30">
        <h2 className="text-3xl font-semibold mb-4">Human-first, outcome-driven</h2>
        <p className="text-gray-700 text-lg mb-4">We blend engineering precision with design clarity.</p>
        <p className="text-gray-600">Our approach combines cutting-edge technology with a deep understanding of human needs, delivering solutions that truly make a difference.</p>
      </div>
      <div className="glass-card-vibrant overflow-hidden border border-accent/30">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
          alt="Team collaboration"
          className="w-full h-72 object-cover"
        />
      </div>
    </div>
  )
}
