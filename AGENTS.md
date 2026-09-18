<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Project

This is Majid's simple personal website using Next.js App Router, TypeScript,
and Tailwind CSS. Keep the implementation small and suitable for production.
Communicate with the owner in Persian unless requested otherwise.

## Development

- Use Node.js 22 and npm. Install with `npm ci`; keep package-lock.json in sync.
- Routes/layouts live in app/, global styles in app/globals.css, assets in public/.
  Add shared components when actually needed.
- Prefer static pages and Server Components. Use client components only for
  browser APIs or interactions that require them.
- Use the existing stack. Add dependencies, services, abstractions, or a CMS
  only when a concrete requirement warrants them.
- Preserve TypeScript strictness; do not suppress build or lint errors.
- Use semantic HTML, accessible names, keyboard navigation, visible focus,
  responsive layouts, and optimized images. Respect reduced-motion preferences.
- Give completed pages meaningful metadata. Match document language/direction
  to the content. Do not invent biography, links, or the public domain.
- Keep secrets out of source and browser bundles.
- Use the palette and semantic theme tokens in app/globals.css for new pages;
  see README.md for light/dark roles. Logos live in public/images/brand/ and
  are named for their intended background. Preserve their colors and ratio.

## Validation and delivery

- Run `npm run check` after code changes and `npm run verify` before declaring
  a milestone ready. Type checking generates Next.js route types first.
- For page changes, check mobile/desktop layouts, keyboard navigation, links,
  and browser console when browser tooling is available. Report skipped checks.
- Add focused tests for real behavior when introduced; static content changes
  do not require a new testing framework.
- Before release, replace starter content/branding, confirm domain and hosting,
  finish metadata/social previews and sitemap/robots, and smoke-test the
  production server including unknown routes.
- Distinguish readiness for page development from readiness for public launch.
  Report validation results and remaining limitations.
