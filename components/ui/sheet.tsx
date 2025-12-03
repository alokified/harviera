import { useState } from 'react'

export default function Sheet({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/20" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 glass-card p-6">
            <button className="text-sm" onClick={() => setOpen(false)}>Close</button>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}
