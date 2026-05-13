# Repository Guidelines

## Project Structure & Module Organization

This repository contains a static personal portfolio site. The site lives in `Portifolio website/`.

- `Portifolio website/index.html` is the primary page served to users.
- `Portifolio website/src/styles/main.css` contains global styles, layout rules, responsive behavior, and theme variables.
- `Portifolio website/src/scripts/main.js` contains browser-side interactions such as smooth scrolling and header state changes.
- `Portifolio website/src/index/index.html` appears to be an alternate or legacy HTML entry.

Place new CSS in `src/styles/`, JavaScript in `src/scripts/`, and local assets in `src/assets/` if assets are added later.

## Build, Test, and Development Commands

There is no package manager or build pipeline configured. Run the site directly as static files.

- `cd "Portifolio website"`: move into the web root.
- `python -m http.server 8000`: serve the site locally at `http://localhost:8000`.
- Open `Portifolio website/index.html` in a browser for a quick static preview.

After changes, check desktop and mobile widths because the navigation and sections rely on responsive CSS.

## Coding Style & Naming Conventions

Use 4-space indentation for HTML, CSS, and JavaScript. Keep class names descriptive and kebab-case, such as `hero-content`, `section-title`, and `floating-icon`. Prefer CSS custom properties in `:root` for reusable colors, spacing, and layout constants.

Keep JavaScript plain and dependency-light. Wrap DOM setup in `DOMContentLoaded` before binding events.

## Testing Guidelines

No automated test framework is configured. Validate changes manually by serving the site and checking:

- Navigation links scroll to the correct sections.
- Contact form behavior still works.
- Header scroll styling still toggles.
- Layout remains usable at mobile, tablet, and desktop widths.

If tests are introduced later, document the framework and add a command such as `npm test`.

## Commit & Pull Request Guidelines

The current history uses short, informal commit messages. For future work, use concise imperative messages, such as `Update portfolio hero layout` or `Fix contact form handling`.

Pull requests should include a brief summary, screenshots for visual changes, manual testing notes, and related issue links when available. Keep changes scoped to one feature or fix.

## Security & Configuration Tips

Avoid committing secrets, API keys, or private contact data. External CDN links for fonts, icons, and animations load from `index.html`; review them before adding more third-party scripts.
