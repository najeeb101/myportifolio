# Najeeb Abdi — Portfolio

Personal portfolio of Najeeb Abdi, a Computer Science student at Qatar University building AI
products, automation, and full-stack apps.

**Live:** <https://najeeb-abdi.vercel.app>

## Highlights

- Projects in an endlessly looping rail you can scroll, drag, or swipe, each with an
  isometric glyph and a detail card (role, impact, stack, code and demo links)
- Scroll-driven motion: masked heading reveals, hero parallax, magnetic buttons, card tilt,
  and a tools marquee, all switched off for visitors who prefer reduced motion
- Dark and light themes
- Optimized images and GPU-friendly animation for smooth scrolling

## Tech Stack

Next.js (App Router) · React · TypeScript · Framer Motion · CSS custom properties ·
lucide-react · Vercel

## Run Locally

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

Set `NEXT_PUBLIC_SITE_URL` to the deployed URL in production; metadata, the sitemap, and
`robots.txt` use it.

## Editing Content

Content lives in `data/` (profile, projects, experience, education, skills), so most updates
never touch a component. See [architecture.md](architecture.md) for the structure and design
decisions, and [AGENTS.md](AGENTS.md) for contribution guidelines.

## Deployment

Hosted on Vercel. Every push to `main` deploys to production.
