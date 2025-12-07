export default function ResourcesList() {
  const items = [
    { 
      title: 'Guides', 
      desc: 'Practical how-tos and patterns',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&q=80'
    },
    { 
      title: 'Articles', 
      desc: 'Opinions and deep dives',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80'
    },
    { 
      title: 'Tools', 
      desc: 'Utilities and templates',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80'
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
