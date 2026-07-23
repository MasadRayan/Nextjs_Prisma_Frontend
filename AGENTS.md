<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo guide

## Route groups
- `(publicGroup)/` — home, `/news`, `/news/[id]`
- `(authGroup)/` — `/login`, `/register` (shared layout)
- `(dashboardGroup)/` — `/dashboard`, `/dashboard/profile`, `/dashboard/my-posts`, `/author-dashboard`, `/admin-dashboard`

## Tailwind CSS v4
No `tailwind.config.*`. CSS-first config via `@theme inline {}` in `app/globals.css`. Plugin is `@tailwindcss/postcss` (not the v3 plugin).

## shadcn/ui
Style: `radix-vega`. Icon library: `@phosphor-icons/react`. Uses `radix-ui` unified package (not individual `@radix-ui/*`). Components use `data-slot` attribute and `Slot.Root` from radix-ui.

## Server actions
Located in `app/**/_actions/`. Pattern: `"use server"`, `useActionState` with `(prevState, formData)`, `cookies()` from `next/headers`, `redirect()` from `next/navigation`.

## Env
`BACKEND_API_URL` required (base URL for backend API).

## Commands
```
npm run dev       # next dev
npm run build     # next build
npm run start     # next start
npm run lint      # eslint
```
No test or typecheck scripts.

## Fonts
IBM Plex Sans (`--font-sans`), Source Sans 3 (`--font-heading`) via `next/font/google`. Mapped in `@theme inline {}`.

## Other
- `AGENTS.md` and `CLAUDE.md` are gitignored — local only.
- Sonner `<Toaster>` wired in root layout.
