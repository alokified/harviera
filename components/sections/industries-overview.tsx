export default function IndustriesOverview() {
  const items = [
    { title: 'Fintech', desc: 'Secure, compliant, performant' },
    { title: 'Healthcare', desc: 'Accessible and reliable experiences' },
    { title: 'Education', desc: 'Engaging learning platforms' },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((i) => (
        <div key={i.title} className="glass-card p-6 bg-lavender/40">
          <h3 className="text-lg font-medium">{i.title}</h3>
          <p className="mt-1 text-gray-700">{i.desc}</p>
        </div>
      ))}
    </div>
  )
}
