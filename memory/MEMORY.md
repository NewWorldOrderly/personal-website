# Portfolio Project Memory

## Stack
- Next.js 15 (App Router), React 18, TypeScript strict
- Tailwind CSS v4 (migrated from v3 — config now in globals.css, no tailwind.config.ts)
- shadcn/ui components (Radix UI primitives)
- ESLint v9 flat config (eslint.config.mjs) using eslint-config-next native flat array
- Prettier v3 with @ianvs/prettier-plugin-sort-imports
- PostHog + Vercel Analytics
- Package manager: npm (package-lock.json)

## Key Architecture
- Single-page portfolio at src/app/page.tsx
- Components: src/components/home/, src/components/shared/, src/components/ui/
- `cn()` utility in src/lib/utils.ts (clsx + tailwind-merge)
- GitHub contributions fetched via GraphQL API in src/lib/github.ts (requires GITHUB_TOKEN env)
- Neon DB connection singleton at src/lib/db.ts (uses DATABASE_URL)
- ChillChat: src/components/home/chillchat/chillchat.tsx (client) + src/app/api/chat/route.ts
- Quacks: src/components/home/quacks/quacks.tsx (async server component) + src/app/api/quacks/route.ts
- Admin UI: src/app/admin/page.tsx (token entered in-page, no server session)
- DB tables: quacks (id, message, created_at), chat_rate_limits (ip, count, reset_at)

## Important Lessons
- ESLint v10 breaks eslint-plugin-react v7 (context.getFilename removed). Pin to ESLint v9.
- Tailwind v4 uses `@import "tailwindcss"` in CSS, `@theme {}` block for colors/animations, `@utility` for custom utilities. No tailwind.config.ts needed.
- eslint-config-next v16+ exports a native flat config array — use directly without FlatCompat.
- `@tailwindcss/postcss` replaces the old tailwindcss PostCSS plugin.
- In Tailwind v4: `--color-*` vars in @theme → bg/text/border utilities. `--radius-*` → rounded-* utilities. `--animate-*` → animate-* utilities.
- tailwindcss-animate is no longer needed (v4 has built-in animation support via --animate-*).

## Env Vars Needed
- NEXT_PUBLIC_POSTHOG_KEY — PostHog analytics
- NEXT_PUBLIC_POSTHOG_HOST — PostHog host
- GITHUB_TOKEN — GitHub PAT (read:user scope) for contribution count fetching
- DATABASE_URL — Neon Postgres via Vercel Storage integration (auto-injected for Production/Preview)
- ANTHROPIC_API_KEY — Claude API for ChillChat (sensitive; Production/Preview on Vercel, must add manually to .env.local)
- ADMIN_TOKEN — Quacks admin auth (same caveat; add manually to .env.local for local dev)

## User Preferences
- Prefers concise, direct communication (no emojis)
- Wants comprehensive improvement PRs with real changes, not stubs
