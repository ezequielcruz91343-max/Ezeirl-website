# ASSETS.md — EZE IRL Asset Inventory

## What Exists (Committed)

| Asset | Location | Status |
|-------|----------|--------|
| Favicon SVG | `public/favicon.svg` | Complete |
| PWA Manifest | `public/site.webmanifest` | Complete |
| Robots.txt | `public/robots.txt` | Complete |
| EZEEmblemSVG (inline) | `components/3D/EZEEmblemSVG.tsx` | Complete |

## Required Before Launch

| Asset | Filename | Location | Dimensions | Format | Notes |
|-------|----------|----------|-----------|--------|-------|
| Apple Touch Icon | `apple-touch-icon.png` | `public/apple-touch-icon.png` | 180×180 px | PNG | Referenced in layout.tsx metadata; reference removed until file exists |
| OG / Share Image | `og-image.jpg` | `public/images/og-image.jpg` | 1200×630 px | JPG or WebP | Fallback for platforms that don't support Next.js OG route |
| Hero Creator Portrait | `hero-portrait.webp` | `public/images/hero-portrait.webp` | 800×1200 px min | WebP | Do not modify face, body, tattoos, or identifying features |
| Hero Background | `hero-bg.webp` | `public/images/hero-bg.webp` | 1920×1080 px min | WebP or MP4 | Cinematic gym/IRL background |

## Required Before Stream

| Asset | Filename | Location | Dimensions | Format | Notes |
|-------|----------|----------|-----------|--------|-------|
| Stream Promo Image | `stream-promo.webp` | `public/images/stream-promo.webp` | 1200×630 px | WebP | For community section, social sharing |
| Twitch Account URL | — | `config/stream.ts` → `platformUrl` | — | — | Set when account is confirmed |

## Required Before Social Activation

| Platform | Config Key | File |
|----------|-----------|------|
| Instagram | `instagram.url` | `config/social.ts` |
| TikTok | `tiktok.url` | `config/social.ts` |
| YouTube | `youtube.url` | `config/social.ts` |
| Twitch | `twitch.url` | `config/social.ts` |
| X | `x.url` | `config/social.ts` |

## Optional / Nice to Have

| Asset | Filename | Location | Dimensions | Format | Notes |
|-------|----------|----------|-----------|--------|-------|
| Fit-Mate Screenshot 1 | `app-screen-1.webp` | `public/images/app/` | 390×844 px | WebP | App UI — workout logging |
| Fit-Mate Screenshot 2 | `app-screen-2.webp` | `public/images/app/` | 390×844 px | WebP | App UI — progress tracking |
| Fit-Mate Screenshot 3 | `app-screen-3.webp` | `public/images/app/` | 390×844 px | WebP | App UI — challenges |
| Fit-Mate Screenshot 4 | `app-screen-4.webp` | `public/images/app/` | 390×844 px | WebP | App UI — leaderboard |
| Fit-Mate Screenshot 5 | `app-screen-5.webp` | `public/images/app/` | 390×844 px | WebP | App UI — social feed |
| Gear Mockup 1 | `product-apparel.webp` | `public/images/products/` | 800×800 px | WebP | Apparel category hero |
| Gear Mockup 2 | `product-training.webp` | `public/images/products/` | 800×800 px | WebP | Training gear category hero |
| Gear Mockup 3 | `product-accessories.webp` | `public/images/products/` | 800×800 px | WebP | Accessories category hero |
| Video Thumbnail 1 | `thumb-1.webp` | `public/images/watch/` | 1280×720 px | WebP | Watch section — video 1 |
| Video Thumbnail 2 | `thumb-2.webp` | `public/images/watch/` | 1280×720 px | WebP | Watch section — video 2 |
| Video Thumbnail 3 | `thumb-3.webp` | `public/images/watch/` | 1280×720 px | WebP | Watch section — video 3 |

## Image Guidelines

- **Format:** WebP preferred for all photos and thumbnails. PNG for icons. SVG for logos and emblems.
- **Hero portrait:** Do not modify face, body proportions, tattoos, or identifying features. Allowed: crop, color grade, lighting overlay, background treatment, sharpening.
- **Alt text:** Every `<img>` must have a meaningful `alt` attribute.
- **Compression:** Target < 150 KB for hero images, < 50 KB for thumbnails. Use Squoosh or similar.
- **apple-touch-icon.png:** Generate from the favicon SVG at 180×180. Add to `public/` and restore the `apple` entry in `app/layout.tsx` icons config.
