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
- `components/layout/`: shared site navigation.
- `components/ui/`: theme toggle and small SVG icons.
- `lib/site.ts`: one-page section links.
- `data/social-links.json`: editable social profile URLs.
- `public/`: static assets.
- `public/images/brand/`: original transparent logos for light/dark backgrounds.
- `AGENTS.md`: project conventions and validation requirements.

## Colors and themes

Palette: https://colorhunt.co/palette/ffd4440061995f5f5ff2efe7

| Role | Light | Dark |
| --- | --- | --- |
| Background | Cream `#F2EFE7` | Gray `#5F5F5F` |
| Text | Gray `#5F5F5F` | Cream `#F2EFE7` |
| Primary / focus | Blue `#006199` | Yellow `#FFD444` |
| Text on primary | Cream `#F2EFE7` | Blue `#006199` |
| Accent / text on accent | Yellow / blue | Yellow / blue |

Theme tokens live in `app/globals.css`. The initial theme follows `prefers-color-scheme`; the navigation toggle persists an explicit choice in localStorage. A small head script restores that choice before the page paints. Storage failures are handled gracefully.
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
