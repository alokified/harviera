export default function IndustriesOverview() {
  const items = [
    { 
      title: 'Fintech', 
      desc: 'Secure, compliant, performant',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80'
    },
    { 
      title: 'Healthcare', 
      desc: 'Accessible and reliable experiences',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'
    },
    { 
      title: 'Education', 
      desc: 'Engaging learning platforms',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80'
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((i) => (
        <div key={i.title} className="glass-card-vibrant overflow-hidden border border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent">
          <img 
            src={i.image} 
            alt={i.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{i.title}</h3>
            <p className="text-gray-700">{i.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
