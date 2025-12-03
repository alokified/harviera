# Harviera Website – Build Prompt

This file captures the core assumptions, design system, tech stack, and phased build plan to keep the project consistent across iterations.

## Tech Stack (fixed)
- Next.js 14+ (App Router)
- TypeScript everywhere
- Tailwind CSS
- shadcn/ui primitives: Button, Input, Tabs, Dialog, NavigationMenu, Sheet
- Framer Motion (animations & scroll reveals)
- Lucide Icons
- Optional: Magic UI / Aceternity-like patterns (bento, spotlight) — only if consistent with tokens

## Design System (fixed)
- Style: pastel + glassmorphism, light & airy
- Components: glass cards (rgba(255,255,255,0.35), backdrop-blur-xl, soft border, generous shadow), rounded corners (rounded-2xl / rounded-3xl), subtle gradients, smooth transitions & hover glow
- Color tokens:
  - Lavender: #E7D7FF
  - Baby Blue: #D9EFFF
  - Mint: #DFFFEA
  - Blush Pink: #FFE7EF
  - Peach: #FFD9C2
  - Sky: #CFF3FF
  - Soft Gray: #F2F5F8

## Routes (target)
- / → Home
- /about → About Us
- /services → Services
- /courses → Courses
- /industries → Industries
- /case-studies → Case Studies
- /resources → Resources
- /contact → Contact Us

## Target Structure
```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  services/page.tsx
  courses/page.tsx
  industries/page.tsx
  case-studies/page.tsx
  resources/page.tsx
  contact/page.tsx

components/
  layout/
    header.tsx
    footer.tsx
    animated-background.tsx
    mobile-menu.tsx
  common/
    section-shell.tsx
    page-hero.tsx
  sections/
    home-hero.tsx
    home-highlights.tsx
    services-grid.tsx
    about-overview.tsx
  ui/
    button.tsx
    card.tsx
    input.tsx
    textarea.tsx
    tabs.tsx
    sheet.tsx
    navigation-menu.tsx

lib/
  navigation.ts
  utils.ts

public/
  logo.svg
```

## Working Principles
- Use TypeScript everywhere
- Use Tailwind + shadcn/ui primitives
- Keep a consistent pastel glassmorphism look across all phases
- If a design token changes, explain why and update globally
- Work in small phases; summarize changes at phase end

## Phased Build Plan
- Phase 0 – Project assumptions (this document)
- Phase 1 – Initialize Next.js + Tailwind + shadcn/ui baseline
- Phase 2 – Global layout (`app/layout.tsx`), header/footer shell, base tokens
- Phase 3 – Home page scaffold (`app/page.tsx`) and core sections
- Phase 4 – Remaining route pages placeholders with consistent shells
- Phase 5 – Animations (Framer Motion) + scroll reveals
- Phase 6 – Navigation menu, mobile sheet, and accessibility
- Phase 7 – Content polish, bento patterns, spotlight effects (optional)
- Phase 8 – Forms and contact page UX
- Phase 9 – SEO, metadata, sitemap, social images
- Phase 10 – Performance pass (images, code-splitting), CI/CD readiness

## Notes
- Keep tokens centralized; prefer Tailwind config for colors and radii.
- Reuse glass card and section shell primitives for consistency.
