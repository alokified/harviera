export default function NavigationMenu() {
  return (
    <nav className="flex flex-wrap gap-3 text-sm">
      {[
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/courses', label: 'Courses' },
        { href: '/industries', label: 'Industries' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/resources', label: 'Resources' },
        { href: '/contact', label: 'Contact' },
      ].map((i) => (
        <a key={i.href} href={i.href} className="rounded-2xl bg-white/40 backdrop-blur-xl px-3 py-2">
          {i.label}
        </a>
      ))}
    </nav>
  )
}
