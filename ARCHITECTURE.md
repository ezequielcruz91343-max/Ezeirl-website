# ARCHITECTURE.md — EZE IRL Website

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| UI library | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Animation | Framer Motion | 11.x |
| 3D | Three.js (imperative) | 0.175.x |

## Route Structure

```
app/
  layout.tsx            — Root layout: metadata, skip link, fonts
  page.tsx              — Homepage (all sections rendered server-side shell, client components hydrate)
  globals.css           — Base styles, CSS vars, reduced-motion media query
  not-found.tsx         — Custom 404 page
  opengraph-image.tsx   — Static OG image via next/og ImageResponse (edge runtime)
  sitemap.ts            — Auto-generated sitemap
  (legal)/              — Route group: shared layout with back navigation
    layout.tsx          — Legal layout: header, back link, footer
    privacy/            — /privacy
    terms/              — /terms
    sponsorship-disclosure/ — /sponsorship-disclosure
    filming-policy/     — /filming-policy
    accessibility/      — /accessibility
    gym-collaboration-draft/ — /gym-collaboration-draft (internal draft)
    contact/            — /contact
```

The `(legal)` route group applies a shared layout (back button, brand header, legal footer) without adding a path segment. All legal pages are statically generated.

## Config System

All site-wide configuration lives in `config/`. Components import from config; no hardcoded values in components.

| File | Purpose |
|------|---------|
| `brand.ts` | Name, tagline, domain, email, description |
| `social.ts` | Social platform URLs — all null until confirmed |
| `links.ts` | Internal routes and mailto links used across components |
| `stream.ts` | Stream event data: date, platform, location, status flags |
| `fitmate.ts` | Fit-Mate app config, features, waitlist state |
| `env.ts` | Runtime env vars: emailProvider, analyticsId — all null until approved |

## 3D Approach

Three.js is used imperatively inside `useEffect` in `components/3D/HeroEmblem3D.tsx`. This bypasses the React Three Fiber (R3F) / React 19 compatibility conflict (R3F 8.x does not support React 19 concurrent features cleanly as of build date).

Cleanup in `useEffect` return function:
- `cancelAnimationFrame`
- `removeEventListener` (mousemove)
- `ResizeObserver.disconnect()`
- `emblem.traverse()` — disposes geometry and material per mesh
- `renderer.dispose()`

Fallback: SVG emblem renders if WebGL is unavailable or `prefers-reduced-motion: reduce` is set.

## Social / Stream / Fitmate State

- Social URLs: all `null` in `config/social.ts`. Footer renders "SOON" badges for null entries. No fabricated handles or follower counts anywhere.
- Stream: `config/stream.ts` uses `platformUrl: null` — the "WATCH ON TWITCH" button only renders when `platformUrl` is non-null. Countdown guards against negative values with `if (diff <= 0) return zeros`.
- Email/Community: `env.emailProvider` is `null`. `CommunitySection.tsx` detects this and shows a "coming soon" state — no form is displayed, no email is submitted or logged.
- Gear: all "COMING SOON" badges, no purchase links anywhere.

## Security Headers

Configured in `next.config.ts` via `headers()`:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy` — see SECURITY.md
