import type { ReactNode } from 'react'

export default function SectionShell({ children }: { children: ReactNode }) {
  return (
    <section className="section">
      <div className="section-inner">{children}</div>
    </section>
  )
}
