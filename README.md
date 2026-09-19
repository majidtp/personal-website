# Majid's personal website

A simple personal website using Next.js App Router, React, TypeScript, and
Tailwind CSS. Prefer static content and minimal client-side JavaScript.

## Local development

Use Node.js 22 (see `.nvmrc`) and npm:

```bash
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or external services are
currently required. The starter uses `next/font/google`, so production builds
need network access to download fonts; fonts are served locally at runtime.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint with zero warnings allowed |
| `npm run typecheck` | Generate route types and check TypeScript |
| `npm run check` | Lint and type checking |
| `npm run verify` | All checks and a production build |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

## Structure

- `app/page.tsx`: one-page home with section anchors; section content is pending.
- `app/layout.tsx`: root document, fonts, and default metadata.
- `app/globals.css`: global styles and theme tokens.
- `components/home/`: home-page sections and scoped styles.
- `components/layout/`: shared site navigation.
- `components/ui/`: theme toggle and small SVG icons.
- `lib/site.ts`: one-page section links.
- `data/social-links.json`: editable social profile URLs.
- `public/`: static assets.
- `public/images/brand/`: original transparent logos for light/dark backgrounds.
- `public/images/portraits/`: original portrait, served through Next.js image optimization.
- `AGENTS.md`: project conventions and validation requirements.

## Colors and themes

Palette: https://colorhunt.co/palette/ffd4440061995f5f5ff2efe7

| Role | Light | Dark |
| --- | --- | --- |
| Background | Cream `#F2EFE7` | Deep navy `#0B1426` |
| Text | Gray `#5F5F5F` | Cream `#F2EFE7` |
| Primary / focus | Blue `#006199` | Yellow `#FFD444` |
| Text on primary | Cream `#F2EFE7` | Deep navy `#0B1426` |
| Accent / text on accent | Yellow / blue | Yellow / blue |

Theme tokens live in `app/globals.css`. The initial theme is dark, regardless of system preferences; the navigation toggle persists an explicit choice in localStorage. A small head script restores that choice before the page paints. Storage failures are handled gracefully.
Use semantic Tailwind utilities such as `bg-background`, `text-foreground`,
`bg-primary`, and `text-primary-foreground`. Use these tokens when building pages. Keep blue off gray backgrounds for body text.

The shared header links to `/#case-studies`, `/#services`, and `/#contact`,
so links also work from future separate pages. Edit `href` in `data/social-links.json` to activate each social icon.
Use full `https://` URLs for profiles and `mailto:you@example.com` for email.
Empty or invalid URLs remain disabled; no placeholder links are used. New pages should provide a main landmark
with `id="main-content"` for the global skip link.

## Production workflow

Run `npm ci` and `npm run verify`, then `npm start` to preview the production
build. CI runs the same verification on pushes and pull requests. Hosting has
not been selected; the standard Next.js Node build/start workflow is available.

In restricted environments, Turbopack may fail to open its internal worker port.
For that environment limitation, `npm run build -- --webpack` provides an
alternative production build. Keep the default build in CI to validate it on
the hosting runner. A successful build does not replace a browser smoke test.

Before public launch:

- Replace starter text, logos, favicon, and metadata with approved content.
- Confirm site language, direction, public domain, and hosting.
- Add page metadata, social previews, sitemap, and robots using the real domain.
- Check mobile/desktop layouts, accessibility, links, and production 404 behavior.
- Configure HTTPS on the hosting platform and verify the deployed site.

Do not commit secrets. Document future required variables with placeholder
values in an example environment file.

The home hero follows the light/dark theme, with editorial typography and a
blue portrait panel containing a subtle grid. Its styling is scoped to the hero.

## Research and writing

Edit `data/research.json` to manage the Case studies section. It links to
published research, articles, and notes, rather than portfolio projects.
The initial item is an unpublished template and is not shown on the website.

- `id`: unique stable identifier.
- `title`, `summary`, `topic`: article heading, short description, and subject.
- `publication`: name of the website where the article is published.
- `date`: publication date in `YYYY-MM-DD` format, or empty to omit it.
- `href`: an existing internal route such as `/writing/article-slug`, or a full
  external `https://` URL. Adding an internal URL does not create its page.
- `published`: set to `true` when the article and destination are ready.

Items appear in JSON order. Invalid/empty destinations and unpublished items
are hidden. External articles open in a new tab. No articles means the section
shows an honest empty state. Changes to JSON require a rebuild on deployment.

## Professional background

Edit `data/background.json` for work experience, its recognition highlight, and education. Entries
render in their listed order. Work experience supports an optional `href` for
the organization; use a full HTTPS URL or leave it empty. Periods are editable
text, so ongoing roles can use “Present”. No graduation dates are assumed.
The section uses two columns on desktop and stacks on mobile.

## Services

Edit `data/services.json` to change service headings, descriptions, focus tags,
and contact-link labels. Available icons: `compass`, `code`, and `collaborate`.
Each service links to the one-page contact section. Cards follow both themes
and stack vertically on mobile; hover movement respects reduced motion.

## Contact

Edit `data/contact.json` for the contact email and introduction, and
`data/social-links.json` for profile links (including the header email icon).
The quick-contact form validates fields and opens a mailto draft in the user's
email app. It does not submit to a server or claim successful delivery; the user
must send the draft. A configured email app is required; the direct email
address remains visible as a fallback. Direct website delivery needs a separate
email provider and server-side implementation.

The shared footer includes site links, email, social profiles, and a back-to-top
link. Dark mode uses deep navy with slightly raised blue surfaces. Subtle radial
gradients add depth; smooth scrolling respects reduced-motion preferences.
