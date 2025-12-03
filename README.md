# Harviera IT Solutions – Marketing Site

Pastel glassmorphism marketing site using Next.js App Router, TypeScript, Tailwind, shadcn/ui, Framer Motion, and Lucide.

## Run locally

```pwsh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Tech stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Framer Motion
- Lucide Icons

## Design system
- Pastel color tokens defined in `tailwind.config.ts`
- Glass cards via `.glass-card` in `app/globals.css`
- Layout helpers: `.page-container`, `.section`, `.section-inner`

## Next steps
- SEO: per-route `metadata`, `app/sitemap.ts`, `app/robots.txt`, social images
- Content: replace placeholders with final copy
- Analytics: integrate Plausible or GA4
- Accessibility: focus states, aria labels, contrast pass
- Performance: `next/image`, font loading, code-splitting
# harviera