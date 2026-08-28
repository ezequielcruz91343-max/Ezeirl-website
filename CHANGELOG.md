# CHANGELOG.md — EZE IRL Website

All notable changes to this project are documented here.

---

## [1.0.0] — 2026-08-28 — Initial Build & Launch Preparation

### Added
- Complete Next.js 15 / React 19 / TypeScript / Tailwind CSS / Framer Motion website
- Custom App Router structure with `(legal)` route group for shared layout
- Homepage with all sections:
  - Hero (with imperative Three.js 3D emblem, WebGL fallback, reduced-motion support)
  - IRL Section
  - Stream Section (Sept 5 2026 countdown, Pacific time, guards against negative countdown)
  - Gear Section (all categories "coming soon", no purchase links)
  - Performance Lab Section
  - Fit-Mate / App Section (waitlist state)
  - Watch Section (no fake video links)
  - Partnership Section
  - Community Section (no-provider guard — no form shown until email provider is configured)
  - Footer (null social URLs render "SOON" badges)
- Legal pages: Privacy, Terms, Sponsorship Disclosure, Filming Policy, Accessibility, Contact
- Config system: `brand.ts`, `social.ts`, `links.ts`, `stream.ts`, `fitmate.ts`, `env.ts`
- Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Sitemap generation (`app/sitemap.ts`)
- Robots.txt
- Custom 404 page (`app/not-found.tsx`)
- OG image generation via `next/og` (`app/opengraph-image.tsx`)
- Skip link for keyboard accessibility
- `prefers-reduced-motion` handling in CSS and Three.js component
- ARIA landmarks, labels, roles throughout all components
- Navigation: mobile menu with `role="dialog"`, `aria-modal`, close button, `aria-controls`
- Documentation: ASSETS.md, ARCHITECTURE.md, CONTENT.md, SECURITY.md, ACCESSIBILITY.md, DECISIONS.md, CHANGELOG.md, DEPLOYMENT.md, AGENTS.md, README.md

### Technical Decisions
- Three.js used imperatively (bypasses R3F / React 19 conflict)
- All social URLs `null` until confirmed — no fabricated handles
- Email collection disabled until provider is approved
- Static site generation — no server-side compute
- No venue named — location pending written authorization
- No Twitch account confirmed — `platformUrl: null`, "WATCH ON TWITCH" button hidden

### Build Status
- `npm run build` — 11 static pages, zero TypeScript errors
- `npm run typecheck` — clean
- `npm run lint` — clean

---

## Upcoming

- [ ] Replace hero portrait placeholder with actual creator photo
- [ ] Add hero background (video or high-quality image)
- [ ] Generate and add `public/apple-touch-icon.png` (180×180)
- [ ] Generate and add `public/images/og-image.jpg` (1200×630) for fallback browsers
- [ ] Confirm and set Twitch account URL
- [ ] Confirm and set social platform URLs
- [ ] Select email provider, sign DPA, activate community form
- [ ] Add video thumbnails for Watch section
- [ ] Add Fit-Mate app screenshots
- [ ] Confirm stream venue and update location note
- [ ] Harden CSP: replace `unsafe-inline` with nonce-based policy
