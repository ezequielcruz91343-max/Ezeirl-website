# SECURITY.md — EZE IRL Website

## Security Headers

All headers applied globally via `next.config.ts` `headers()` on `"/(.*)"`.

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | `SAMEORIGIN` | Prevents clickjacking via iframe embedding on other origins |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Sends full URL only for same-origin; origin only for cross-origin HTTPS |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Disables browser API access to camera, mic, and location |
| `Content-Security-Policy` | See below | Controls resource origins |

## Content Security Policy

```
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob: https:;
connect-src 'self' https:;
worker-src blob:;
```

**Notes:**
- `unsafe-eval` and `unsafe-inline` on `script-src` are required by Next.js dev mode. These should be tightened with nonces in production when the CSP is hardened.
- `fonts.googleapis.com` and `fonts.gstatic.com` are permitted for Google Fonts (Inter, Bebas Neue, JetBrains Mono).
- `img-src: https:` is broad to allow OG image validation tools and future CDN integration. Narrow when a CDN domain is set.
- `connect-src: https:` allows fetch calls to HTTPS endpoints. When an email provider is configured, its API domain should be added explicitly.

## No-Email-Collection Policy

The Community section (`CommunitySection.tsx`) checks `env.emailProvider` at runtime. If the value is `null` (the default), no form is rendered and no email is accepted. When an email provider is configured:

1. The provider must have a signed DPA.
2. Privacy policy must be reviewed and updated.
3. `env.emailProvider` must be set to the approved provider name.
4. Email API key must be added to `.env.local` (never committed).

No email address is ever logged to console, written to a file, or passed to any third-party without the above steps completed.

## No-Secrets Policy

- `.env`, `.env.local`, `.env.production`, `*.env` are all listed in `.gitignore`.
- `config/env.ts` reads from `process.env.NEXT_PUBLIC_*` — values are only surfaced client-side when prefixed with `NEXT_PUBLIC_`.
- No API keys, tokens, or secrets exist anywhere in the committed codebase.

## What is Blocked

- Cross-origin iframe embedding (X-Frame-Options)
- Camera, microphone, and geolocation API access (Permissions-Policy)
- JavaScript from untrusted origins (CSP default-src 'self')
- Worker scripts from non-blob origins (worker-src blob:)

## Known CSP Limitations

- `unsafe-inline` on scripts: necessary for Next.js hydration. Future hardening: migrate to nonce-based CSP when a custom server is available.
- `img-src https:` is broad: tighten to specific CDN domain when assets are hosted.

## Dependency Security

- Do not run `npm audit fix --force` — this will downgrade or conflict with Next.js 15 peer dependencies.
- Run `npm audit` periodically and address high-severity issues manually.
- `@react-three/fiber` and `@react-three/drei` are in `dependencies` but Three.js is used imperatively (no R3F in production). These can be moved to `devDependencies` or removed once confirmed unused in the final bundle.
