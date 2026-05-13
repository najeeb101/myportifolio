# Najeeb Barkhad — Portfolio Redesign Plan

---

## 0. Three Words

> **Technical. Entrepreneurial. Real.**

Someone opens the site and thinks: *this person actually builds things, thinks about AI seriously,
and isn't faking it.* Every decision below is made to reinforce that impression.

---

## 1. Visual Direction

**Aesthetic:** Dark-first, editorial-tech. Inspired by `aaabadcode.com` for the AI-engineer
authority and `parthh.in` for the energy, typography boldness, and project card polish.

The mix: `aaabadcode`'s focused minimalism + `parthh.in`'s visual confidence and layout variety.

### Color System

| Token | Value | Use |
|---|---|---|
| `--bg` | `#080B12` | Page background |
| `--surface` | `#0E1118` | Cards, nav |
| `--surface-2` | `#161B27` | Hover states, borders |
| `--accent` | `#38BDF8` | Sky blue — primary CTA, highlights |
| `--accent-2` | `#10B981` | Emerald — tags, badges, secondary |
| `--text` | `#F0F4FF` | Body copy |
| `--muted` | `#64748B` | Captions, timestamps |
| `--border` | `#1E293B` | Card borders |

Light mode: inverts to a clean off-white `#F9FAFB` bg with near-black text, accent colours preserved.

### Typography

| Use | Font | Weight |
|---|---|---|
| Display (Hero name, section titles) | `Syne` (Google Fonts) | 700–800 |
| Body / cards | `DM Sans` | 400–500 |
| Code blocks (terminal, tech stack) | `JetBrains Mono` | 400 |

### Animations (Framer Motion)
- **Page load:** Staggered fade-up on hero elements (name → subtitle → CTAs → stats)
- **Scroll reveals:** `whileInView` fade-up on every section, 0.2s stagger on children
- **Nav:** Blur-backdrop navbar that solidifies on scroll
- **Project cards:** Subtle lift + border glow on hover (`box-shadow` with `--accent`)
- **Hero bg:** Slow-moving gradient mesh or animated dot grid (CSS only, no heavy libs)
- **Terminal block:** Typewriter effect on the `whoami` lines
- **Section markers:** `// section-name` slides in from left on enter
- **Theme toggle:** Smooth color transition via CSS `transition: background 0.3s`

---

## 2. Sections (Single-Page Scroll)

### 1. `<Hero />`
Stolen from: `aaabadcode` structure + `parthh.in` typography boldness

- **Badge:** `● Open to opportunities` (pulsing green dot)
- **Name:** `Najeeb Barkhad` — oversized, Syne 800
- **Tagline:** `AI Engineer & Builder` (typed effect cycling through: *AI Engineer / ML Systems / Full-Stack Builder*)
- **Sub-copy:** One line — *"Building AI systems that ship — from automation pipelines to production apps."*
- **CTAs:** `View Projects ↓` + `Download Resume`
- **Socials row:** GitHub · LinkedIn · Email icons
- **Right side or below:** Your photo (circular, slight glow border in `--accent`)
- **Background:** Animated gradient mesh (deep blue → near-black) or subtle grid

---

### 2. `// about`
Stolen from: `aaabadcode`'s terminal block + stats row

**Left:** 2–3 short paragraphs (rewritten, see Section 5 below)

**Right:** Terminal block (typewriter):
```
$ whoami
> najeeb_barkhad

$ cat stack.txt
> python, nextjs, tensorflow,
> openai api, n8n, supabase

$ echo $STATUS
> building RouteyAI 🚀
```

**Stats row** (below or inline):
- `3rd Year CS` · `Qatar University`
- `AI Intern` · `Silatha, Amsterdam`
- `2 Research Roles`
- `7+ Projects Shipped`

---

### 3. `// experience`
Stolen from: `aaabadcode`'s timeline layout

Vertical timeline, right-side content:

1. **AI Intern @ Silatha** — Dec 2025–Present · Amsterdam (Remote)
2. **Research Intern — Aquaponics AI** — Aug–Nov 2025 · Qatar University
3. **IT Student Task Force** — Aug–Oct 2025 · ITS Department, QU

Each entry: role title, company/org, date badge, 2–3 bullet points (rewritten), tech tags.

---

### 4. `// projects`
Stolen from: `parthh.in`'s project card grid

**Featured (full-width card at top):**
- **RouteyAI** — AI-powered school bus tracking & routing startup (GCC)
  - Tags: `Next.js` `Supabase` `Mapbox` `K-Means++` `TypeScript`
  - Badge: `🚀 In Progress`
  - GitHub + live link (when ready)

**Grid (2-col on desktop, 1-col mobile):**

| Project | Stack | Links |
|---|---|---|
| Silatha Word Search Game | React 19, Vite, Firebase | GitHub + Live |
| Social Media Platform | Next.js, Prisma, Vanilla JS | GitHub |
| AI Contract Analyzer | Python, OpenAI API | GitHub |
| Library Loan Software | Java, GitHub Projects | GitHub |
| Conference Review DB | Oracle SQL, Java | GitHub |
| Event Management System | Java, Data Structures | GitHub |

Each card: project name, 1-line description, tech stack chips, date, links.

---

### 5. `// skills`
**Not** progress bars with fake percentages. Instead: grouped tag clouds.

```
AI & Machine Learning
[TensorFlow] [OpenAI API] [Federated Learning] [Reinforcement Learning]
[n8n Automation] [Data Pipelines] [Model Optimization] [Web Scraping]

Full-Stack Development
[Next.js] [React] [TypeScript] [Vanilla JS] [HTML/CSS] [Prisma ORM]
[Supabase] [Firebase] [REST APIs] [PostgreSQL] [Oracle SQL]

Languages & Tools
[Python] [Java] [JavaScript] [SQL] [Git] [GitHub]
[VS Code] [Raspberry Pi] [JavaFX] [Vite]
```

Each chip uses `--accent` or `--accent-2` border with hover glow.

---

### 6. `// education & activities`
Two-column layout or compact cards:

**Education:**
- Qatar University · B.S. Computer Science · Expected May 2027
- Relevant coursework chips

**Activities (compact row of cards):**
- Shell Intilaaqah Entrepreneurship Program
- AI Organization, Qatar University
- Mechatronics Committee, QU
- Event & IT Member, Research Complex

---

### 7. `// contact`
Stolen from: `aaabadcode`'s clean minimal contact

- Headline: *"Let's build something."*
- Sub: *"Open to internships, research collaborations, and interesting problems."*
- Large email link: `najeebabdi75@gmail.com`
- Social icons: GitHub · LinkedIn · (optional) WhatsApp

---

## 3. Rewritten Copy

### Hero tagline (cycling typed text)
> AI Engineer · ML Systems · Full-Stack Builder

### About (3 short paragraphs)
> I'm a third-year Computer Science student at Qatar University, specializing in AI/ML — and I spend most of my time outside class actually building with it.
>
> Currently interning at Silatha (Amsterdam), where I ship AI automation systems using Python, n8n, and the OpenAI API. Previously led research on Federated Learning and Reinforcement Learning for an AI-driven aquaponics system at QU. I'm also the founder of RouteyAI, an AI-powered school bus tracking startup targeting schools across Qatar and the GCC.
>
> I care about AI that ships — not just proofs of concept. If you're working on something in AI, automation, or applied ML, I'd like to hear about it.

### Experience bullets (sample — Silatha)
- Designed and deployed AI automation pipelines using n8n, Python, and the OpenAI API, cutting repetitive manual work across internal workflows
- Built robust web-scraping and data pipeline infrastructure with advanced monitoring and error handling for high-integrity data collection
- Integrated third-party APIs and built custom tooling that directly expanded the company's automation capabilities

---

## 4. Folder Structure

```
najeeb-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, ThemeProvider
│   ├── page.tsx            # All sections imported here
│   └── globals.css         # CSS variables, base resets, scrollbar
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Blur navbar, theme toggle, smooth scroll links
│   │   └── Footer.tsx      # Copyright + socials
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx       # Terminal block + stats
│       ├── Experience.tsx  # Timeline
│       ├── Projects.tsx    # Featured card + grid
│       ├── Skills.tsx      # Tag cloud groups
│       ├── Education.tsx   # Education + activities
│       └── Contact.tsx
├── components/ui/
│   ├── ProjectCard.tsx
│   ├── TimelineItem.tsx
│   ├── SkillChip.tsx
│   ├── Terminal.tsx        # Typewriter terminal block
│   ├── SectionHeader.tsx   # "// section-name" marker
│   └── ThemeToggle.tsx
├── data/
│   ├── projects.ts         # All project data in one place
│   ├── experience.ts
│   ├── skills.ts
│   └── activities.ts
├── lib/
│   └── utils.ts            # cn() helper, animation variants
├── public/
│   ├── resume.pdf
│   ├── najeeb.jpg          # Your photo
│   └── og-image.png        # Social share image
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 5. Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Local `ThemeProvider` | Dark/light toggle |
| `@fontsource` or Google Fonts | Syne + DM Sans + JetBrains Mono |
| Vercel | Deployment |

No backend needed. Contact = mailto link.

---

## 6. What to Avoid

From studying comparable portfolios, these are the most common mistakes:

| ❌ Avoid | Why |
|---|---|
| Skill bars with % (95% Python) | Nobody believes them; looks made-up |
| "Passionate developer who loves coding" | Generic, meaningless filler |
| Particle.js / Three.js blob backgrounds | Dated, slow, distracting |
| Purple gradient on white | Most overused AI portfolio look in 2024–25 |
| Walls of text in project descriptions | Recruiters skim; 2 lines max per card |
| 10+ unoptimized images | Kills Lighthouse score on Vercel |
| No personality in about section | Feels like a resume printed on a webpage |
| Listing every course as a "skill" | Dilutes credibility |
| Unlinked projects with no GitHub | Looks like they don't exist |

---

## 7. Implementation Order

1. **Scaffold** — Next.js + TS + Tailwind + Framer Motion + local theme provider
2. **Global styles** — CSS variables, fonts, scrollbar, base layout
3. **Layout** — Navbar + Footer
4. **Hero** — Name, typed text, photo, CTAs, animated bg
5. **About** — Terminal block + stats row
6. **Experience** — Timeline with animation
7. **Projects** — Featured card + 2-col grid
8. **Skills** — Tag cloud groups
9. **Education + Activities** — Compact cards
10. **Contact** — Simple, clean
11. **Polish** — OG image, metadata, mobile QA, Lighthouse audit
12. **Deploy** — Vercel + custom domain (optional)

---

*Ready to build. Say "start with Hero" or "start with scaffold" to begin.*
