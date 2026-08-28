# EZE IRL Website

Official website for EZE IRL — the fitness, competition, comedy, and real-life media brand.

**Domain:** www.ezeirl.com
**Creator:** EZE (Ezekiel Cruz)
**Company:** EZE Media
**Community:** The EZE Crew
**Tagline:** Bad decisions. Better stories.
**Business:** booking@ezeirl.com

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS 3
- Framer Motion 11
- Three.js (imperative, no JSX R3F — React 19 peer compat)
- Bebas Neue + Inter + JetBrains Mono fonts

## Sections

1. Hero — cinematic intro with 3D metallic emblem
2. The IRL — brand pillars
3. First Stream — countdown, event details, pending location
4. EZE Gear — product category teasers
5. Performance Lab — supplement/sponsor placeholders
6. Fit-Mate App — AI fitness app preview
7. Watch — content platform cards
8. Partnerships — brand partnership positioning
9. Community — email signup (provider-safe)

## Local Development

```bash
npm install --legacy-peer-deps  # Required: R3F 8.x / React 19 peer dep
npm run dev                     # http://localhost:3000
```

## Build

```bash
npm run build
npm run start          # Preview production build locally
```

## Configuration

| File | Purpose |
|------|---------|
| `config/brand.ts` | Brand name, taglines, email, themes |
| `config/social.ts` | Social platform URLs (null = not configured) |
| `config/links.ts` | Internal and external links |
| `config/stream.ts` | First stream date, status, location |
| `config/fitmate.ts` | App feature status |
| `config/env.ts` | Runtime env variable access |

## Environment Variables

Copy `.env.example` to `.env.local`. Do not commit `.env.local`.

Email signup is disabled until a provider is configured and the privacy policy is attorney-reviewed.

## Deployment (Vercel)

1. Push repository to GitHub
2. Import at vercel.com
3. Set env vars from `.env.example`
4. Connect custom domain `www.ezeirl.com` after DNS is ready

**STOP: Do not deploy or change DNS without Ezekiel's approval.**

## Assets Required

See `ASSETS.md` for the full list of placeholder replacements needed.

## Legal

Draft legal pages are in `app/(legal)/`. All require attorney review before the site goes live.

The gym collaboration draft at `/gym-collaboration-draft` is marked noindex and must not be shared publicly without Ezekiel's approval.

## Actions Requiring Ezekiel's Approval

- Deploying to Vercel
- Connecting ezeirl.com domain
- Activating email provider
- Activating analytics
- Sending the gym collaboration outreach
- Publishing any sponsored or affiliate content
- Creating external social accounts
