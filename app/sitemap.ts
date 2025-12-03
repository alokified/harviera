import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.harviera.example'
  const pages = ['/', '/about', '/services', '/courses', '/industries', '/case-studies', '/resources', '/contact']
  const now = new Date().toISOString()
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: 'monthly', priority: p === '/' ? 1 : 0.7 }))
}
