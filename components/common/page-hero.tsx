export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="glass-card p-8">
      <h1>{title}</h1>
      {subtitle && <p className="mt-2 text-gray-700">{subtitle}</p>}
    </div>
  )
}
