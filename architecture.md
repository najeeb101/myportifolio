# Najeeb Abdi — Portfolio Architecture

How the portfolio at <https://najeeb-abdi.vercel.app> is put together, and the decisions behind
the parts that are not obvious from reading one file.

---

## 1. Stack

| Tool | Purpose |
|---|---|
| Next.js (App Router, Turbopack) | Framework, static prerender of the single page |
| React + TypeScript | Components |
| Framer Motion | All JS-driven animation |
| Plain CSS in `app/globals.css` | Nearly all styling, driven by custom properties |
| Tailwind CSS v4 | Imported, but only used by `Gallery.tsx` |
| lucide-react | Icons |
| `next/image` | Resized WebP for every photo |
| Vercel | Hosting; every push to `main` deploys production |

There is no backend. Contact is a `mailto:` link, and all content lives in `data/`.

---

## 2. Page Composition

`app/page.tsx` renders one scrolling page:

```
Navbar
Hero          #home
TechMarquee   (no id; decorative strip of tools)
About         #about
Experience    #experience
Projects      #projects
Skills        #skills
Gallery       #gallery
Education     #education
Contact       #contact
Footer
```

`app/layout.tsx` wraps everything in `ThemeProvider` and adds the page-wide chrome:
`CustomCursor`, `ScrollProgress`, `SectionRail`, and `BackToTop`.

`SectionRail` finds sections by id, so a new section needs an entry in its `sections` list to
appear in the side counter.

---

## 3. Folder Structure

```
app/
  layout.tsx            metadata, fonts, providers, page-wide chrome
  page.tsx              section order
  globals.css           theme tokens, layout, every component's styles
  opengraph-image.tsx   generated social preview image
  icon.tsx              generated favicon
  robots.ts, sitemap.ts built from NEXT_PUBLIC_SITE_URL
components/
  ThemeProvider.tsx     dark/light theme + MotionConfig reducedMotion="user"
  layout/               Navbar, Footer
  sections/             one file per homepage section
  ui/                   reusable pieces (see section 5)
data/
  profile.ts            name, title, location, email, socials, hero stats
  projects.ts           featured project, project list, categories, glyph names
  experience.ts         timeline entries
  education.ts          education and activities
  skills.ts             three skill groups (also feed the TechMarquee)
public/
  media/                photos (served through next/image)
  resume/Najeeb Resume.pdf   generated from resume/Najeeb Resume.html
resume/
  Najeeb Resume.html    one-page resume source (not served)
```

---

## 4. Theme

Colors, widths, and gutters are CSS custom properties on `:root`, with a light theme under
`.light` (toggled by `ThemeProvider`, which stores the choice in `localStorage`).

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#080b12` | `#f8fafc` | Page background |
| `--surface` | `#0e1118` | `#ffffff` | Cards, nav |
| `--surface-2` | `#161b27` | `#eef6fb` | Raised surfaces |
| `--accent` | `#38bdf8` | `#0284c7` | Primary highlight, CTAs |
| `--accent-2` | `#10b981` | `#059669` | Secondary highlight |
| `--text` | `#f0f4ff` | `#0f172a` | Body copy |
| `--muted` / `--muted-2` | `#94a3b8` / `#64748b` | `#475569` / `#64748b` | Secondary text |
| `--border` | `#1e293b` | `#dbe6ef` | Borders |

Fonts (Google Fonts): **Syne** for display headings, **DM Sans** for body, **JetBrains Mono**
for labels and code-like text, **Plus Jakarta Sans** for the nav brand.

Each project also carries its own `accent`, passed to its tile and detail card as `--tile-accent`.

---

## 5. Key Components

### Projects (`components/sections/Projects.tsx`)

A horizontal rail that loops forever, above a detail card for the selected project.

- **Loop:** the rail renders the project set three times and starts on the middle copy. When
  scrolling settles (120 ms after the last scroll event), `recenter()` jumps by a whole number
  of sets so the position is back inside the middle copy. The jump is an exact multiple of
  the tile pitch, so nothing visibly moves. Filters with few projects are repeated until a set
  has at least 8 tiles, so a hard fling cannot run off the end.
- **Accessibility:** only the first pass of the middle copy is real to assistive tech. Every
  other tile is `aria-hidden` and `tabIndex={-1}` (the `clone` prop on `ProjectTile`).
- **Input:** native horizontal scroll and swipe with `scroll-snap`, mouse drag (pointer capture
  starts only after a 6px move, so ordinary clicks still reach the tiles), and arrow buttons
  that scroll one tile.
- **Indicator:** a counter and a thumb that wraps with the loop. Both update through a ref and
  a motion value, so scrolling never re-renders the tiles.
- **Filters:** "All" plus the categories in `data/projects.ts`. Changing a filter remounts the
  track and re-centres it.

### ProjectTile / ProjectDetail / IsoGlyph

- `ProjectTile` tilts toward the cursor and draws a spotlight that follows it (mouse only).
  Its description types in with `TypeReveal` the first time it is seen.
- `ProjectDetail` shows role, impact, highlights, metrics, stack, and Code / Live links. A link
  of `"#"` renders as a disabled "Code soon" / "Demo soon".
- `IsoGlyph` draws each project's isometric cube sculpture from the `shapes` map. A new
  project needs a `ProjectGlyph` name in `data/projects.ts` and a matching shape. The tile
  caps glyphs at 130px tall so every title lines up.

### Motion helpers

| Component | What it does |
|---|---|
| `MotionSection` | Fades each section up as it enters the viewport |
| `SectionHeader` | `// eyebrow` slide-in and word-by-word masked title reveal |
| `Reveal` (`RevealGroup` / `RevealItem`) | Staggered blur-and-rise for lists and chips |
| `MagneticLink` | Buttons that lean toward the cursor (hero and contact CTAs) |
| `TechMarquee` | Two CSS-animated ribbons of skills, in opposite directions |
| `Typewriter` | Hero "currently …" line |
| `CustomCursor` | Dot and trailing ring; hidden on touch and reduced motion |

The hero copy and portrait drift apart on scroll (parallax) on side-by-side layouts only.

---

## 6. Performance Rules

These keep scrolling smooth; keep them when adding features.

- **Animate `transform` and `opacity` only.** The hero grid drifts by translating an oversized
  layer, not by animating `background-position`, which would repaint every frame.
- **No `backdrop-filter` on cards.** It is recomputed on every scroll frame and is invisible
  over the dark background. Only the fixed navbar keeps its blur.
- **Every photo goes through `next/image` with a `sizes` prop.** The originals are phone photos
  up to 3.6 MB; the gallery serves resized WebP (about 46 KB for a 3.1 MB original). Gallery
  entries list the real, EXIF-rotated width and height.
- **No always-on animation loops.** `CustomCursor` stops its `requestAnimationFrame` loop once
  the ring catches up and restarts on the next pointer move.
- **Respect reduced motion.** `MotionConfig reducedMotion="user"` covers Framer Motion; the
  tilt, magnetic pull, and parallax also check `useReducedMotion`; `globals.css` shortens
  CSS animations under `prefers-reduced-motion`.

---

## 7. Deployment

- **Production:** <https://najeeb-abdi.vercel.app> (Vercel project `najeeb-portfolio`).
  The old `najeeb-portfolio-pi.vercel.app` permanently redirects (308) to it.
- **Deploys:** the Vercel project is connected to the GitHub repo; every push to `main`
  deploys production.
- **Environment:** `NEXT_PUBLIC_SITE_URL` must be the production URL. It feeds `metadataBase`,
  the Open Graph URL, `sitemap.xml`, and `robots.txt`; without it they fall back to
  `http://localhost:3000`.
- `.vercel/` and `.env*` are gitignored.

---

## 8. Adding or Changing Content

| To change | Edit |
|---|---|
| Name, title, email, socials, hero stats | `data/profile.ts` |
| Hero "current focus" and typed phrases | `components/sections/Hero.tsx` |
| A project | `data/projects.ts` (plus a shape in `IsoGlyph.tsx` for a new glyph) |
| Skills and the marquee | `data/skills.ts` (keep three groups; `Skills.tsx` labels them AI / WEB / DATA) |
| Experience, education | `data/experience.ts`, `data/education.ts` |
| Resume | edit `resume/Najeeb Resume.html`, then regenerate `public/resume/Najeeb Resume.pdf` (see README, "Updating the Resume"); the same file name keeps every link working |
| Gallery photos | `public/media/` and the `photos` list in `Gallery.tsx` |
