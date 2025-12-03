import { useState } from 'react'

export default function Tabs({ items }: { items: { label: string; content: React.ReactNode }[] }) {
  const [i, setI] = useState(0)
  return (
    <div>
      <div className="flex gap-2">
        {items.map((t, idx) => (
          <button key={t.label} onClick={() => setI(idx)} className={`rounded-2xl px-3 py-2 text-sm ${i === idx ? 'bg-baby-blue' : 'bg-white/40 backdrop-blur-xl'}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4 glass-card p-6">{items[i]?.content}</div>
    </div>
  )
}
