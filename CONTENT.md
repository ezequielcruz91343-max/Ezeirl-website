# CONTENT.md — EZE IRL Content Status

## Homepage Sections

| Section | Component | Content Status | Assets Status |
|---------|-----------|---------------|---------------|
| Navigation | Navigation.tsx | Complete | EZEEmblemSVG (complete) |
| Hero | Hero.tsx | Complete (copy) | hero-portrait.webp MISSING, hero-bg MISSING |
| IRL | IRLSection.tsx | Complete (copy) | No images required |
| Stream | StreamSection.tsx | Complete — Sept 5 2026, 6–8 PM Pacific | No image required |
| Gear | GearSection.tsx | Complete — all "coming soon" | gear mockups MISSING (optional) |
| Performance Lab | PerformanceLab.tsx | Complete | No images required |
| Fit-Mate | AppSection.tsx | Complete — waitlist state | app screenshots MISSING |
| Watch | WatchSection.tsx | Complete — no videos yet | video thumbnails MISSING |
| Partnerships | PartnershipSection.tsx | Complete | No images required |
| Community | CommunitySection.tsx | Complete — "coming soon" (no-provider) | No images required |
| Footer | Footer.tsx | Complete | EZEEmblemSVG (complete) |

## Legal Pages

| Page | Status | Content |
|------|--------|---------|
| /privacy | Complete | Full privacy policy |
| /terms | Complete | Full terms of service |
| /sponsorship-disclosure | Complete | FTC-compliant disclosure |
| /filming-policy | Complete | Consent and filming notice |
| /accessibility | Complete | Accessibility statement |
| /gym-collaboration-draft | Internal draft | Not publicly linked |
| /contact | Complete | Mailto links to booking@ezeirl.com |

## Placeholder Content

The following content is explicitly placeholder and must be replaced before or shortly after launch:

- **Hero portrait** — Component has `data-placeholder="hero-creator-portrait"`. Currently renders a gradient fill. Replace with actual photo.
- **Hero background** — No video or background image loaded. Section uses CSS gradient. Replace with cinematic background.
- **Watch section thumbnails** — Three video cards show placeholder boxes. No YouTube/TikTok links active.
- **Fit-Mate screenshots** — App section uses placeholder boxes. Replace with actual app UI screenshots.
- **Gear mockups** — GearSection uses category cards. No product images.

## Missing Assets (Required Before Launch)

| Asset | Filename | Location | Dimensions | Format |
|-------|----------|----------|-----------|--------|
| OG / Share Image | og-image.jpg | public/images/og-image.jpg | 1200×630 | JPG or WebP |
| Apple Touch Icon | apple-touch-icon.png | public/apple-touch-icon.png | 180×180 | PNG |
| Hero Creator Portrait | hero-portrait.webp | public/images/hero-portrait.webp | 800×1200 min | WebP |
| Hero Background | hero-bg.webp | public/images/hero-bg.webp | 1920×1080 | WebP or MP4 |
| Fit-Mate Screenshots (5) | app-screen-{1-5}.webp | public/images/app/ | 390×844 | WebP |
| Gear Mockups (3) | product-{1-3}.webp | public/images/products/ | 800×800 | WebP |
| Video Thumbnails (3) | thumb-{1-3}.webp | public/images/watch/ | 1280×720 | WebP |

## What Exists in public/

- `favicon.svg` — EZE emblem SVG (complete)
- `site.webmanifest` — PWA manifest (complete)
- `robots.txt` — robots configuration (complete)
- `public/images/` — directory exists, no assets yet
- `public/logos/` — directory exists, no assets yet

## Social / Platform Status

All social URLs are `null` in `config/social.ts`. No platform is confirmed. Footer displays "SOON" for all.

Stream platform: Twitch — account not yet configured. `platformUrl: null` in `config/stream.ts`.
