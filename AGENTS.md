# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Next.js personal portfolio site for Najeeb Barkhad.

- `app/page.tsx` composes the homepage sections.
- `app/layout.tsx` defines metadata and the root providers.
- `app/globals.css` contains global styles, theme variables, responsive layout rules, and component styling.
- `components/layout/` contains shared layout pieces such as `Navbar` and `Footer`.
- `components/sections/` contains homepage sections such as `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Gallery`, `Education`, and `Contact`.
- `components/ui/` contains reusable UI helpers such as cards, brand icons, theme toggle, scroll progress, and back-to-top controls.
- `data/` contains structured portfolio content for profile, projects, experience, education, and skills.
- `public/` contains public assets, including media and the resume PDF.

Place new React components in the closest matching `components/` folder, content data in `data/`, and public assets in `public/`.

## Build, Test, and Development Commands

Use the configured npm scripts:

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build.
- `npm run start`: serve the production build.
- `npm run typecheck`: run TypeScript validation with `tsc --noEmit`.

After visual changes, check desktop and mobile widths because the navigation, hero, project grid, gallery, and contact section rely on responsive CSS.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep component names in PascalCase, such as `ProjectCard` and `ThemeToggle`. Keep CSS class names descriptive and kebab-case, such as `hero-content`, `section-title`, and `project-metric`.

Prefer CSS custom properties in `:root` for reusable colors, spacing, and layout constants. Keep JavaScript dependency-light and avoid introducing new packages unless they clearly simplify the implementation.

## Testing Guidelines

No dedicated automated test framework is configured. Validate changes with:

- `npm run typecheck`
- `npm run build`
- Manual browser checks for navigation, theme toggle, project cards, contact links, resume link, and mobile layout.

If tests are introduced later, document the framework and add a command such as `npm test`.

## Commit & Pull Request Guidelines

Use concise imperative commit messages, such as `Update portfolio hero layout` or `Improve contact CTA`.

Pull requests should include a brief summary, screenshots for visual changes, manual testing notes, and related issue links when available. Keep changes scoped to one feature or fix.

## Security & Configuration Tips

Avoid committing secrets, API keys, or private contact data. Keep external font and media references intentional, and review any third-party scripts before adding them.
