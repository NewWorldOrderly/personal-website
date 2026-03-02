# bryanduckworth.com

Personal portfolio site built with Next.js 15, deployed on Vercel.

## Stack

- **Framework:** Next.js 15 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui (Radix UI)
- **Database:** Neon Postgres (via Vercel Storage integration)
- **AI:** Anthropic Claude Haiku (ChillChat)
- **Analytics:** PostHog + Vercel Analytics
- **Deployment:** Vercel

## Features

| Section | Description |
| --- | --- |
| Header | Avatar, links, scrolling marquee ticker |
| Tech Stack | Interactive hover cards for tools/technologies |
| Days Alive | Running count since birth |
| GitHub Contributions | Live contribution count via GitHub GraphQL API |
| Employment Timeline | Work history |
| Location Map | Interactive globe centered on Tucson, AZ |
| World Clock | Live clocks for key timezones |
| Now | What I'm currently focused on |
| **ChillChat** | Claude Haiku-powered AI chat widget with a chill persona |
| **Quacks** | Personal micro-blog feed, managed via `/admin` |

## Local Development

**Prerequisites:** Node.js 22+, npm

```bash
git clone https://github.com/NewWorldOrderly/personal-website
cd personal-website
npm install
```

Pull environment variables from Vercel (requires Vercel CLI + project access):

```bash
npx vercel env pull .env.local
```

Then manually append to `.env.local` (sensitive vars can't be pulled for Development):

```text
ANTHROPIC_API_KEY="sk-ant-..."
ADMIN_TOKEN="your-token"
```

Start the dev server:

```bash
npm run dev
```

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Neon Postgres connection string |
| `GITHUB_TOKEN` | Yes | GitHub PAT (`read:user`) for contribution stats |
| `ANTHROPIC_API_KEY` | Yes | Claude API key for ChillChat |
| `ADMIN_TOKEN` | Yes | Secret token for `/admin` and Quacks API |
| `NEXT_PUBLIC_POSTHOG_KEY` | Yes | PostHog analytics key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Yes | PostHog host URL |

## Database

Tables in Neon Postgres (create once via Neon SQL Editor):

```sql
CREATE TABLE IF NOT EXISTS quacks (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS chat_rate_limits (
  ip TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  reset_at TIMESTAMPTZ NOT NULL
);
```

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint
npm run lint:fix   # ESLint with auto-fix
npm run format     # Prettier
npm run typecheck  # TypeScript check
```

## Content

Site content (name, bio, marquee items, socials, "Now" list) lives in [src/lib/site.ts](src/lib/site.ts) — edit that file to update content without touching components.

## Quacks Admin

Post and delete quacks at `/admin`. Enter your `ADMIN_TOKEN` when prompted. No deploy required to publish new quacks.

## Project Structure

```text
src/
├── app/
│   ├── admin/          # Quacks admin UI
│   ├── api/
│   │   ├── chat/       # ChillChat API (Claude Haiku)
│   │   └── quacks/     # Quacks CRUD API
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/           # Page section components
│   ├── shared/         # Header, Footer, ModeToggle
│   └── ui/             # shadcn/ui primitives
└── lib/
    ├── db.ts           # Neon connection
    ├── github.ts       # GitHub GraphQL client
    ├── site.ts         # Site content config
    └── utils.ts        # cn() utility
```
