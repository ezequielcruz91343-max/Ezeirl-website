# DEPLOYMENT.md — EZE IRL

## STATUS: NOT DEPLOYED — AWAITING EZEKIEL'S APPROVAL

Do not execute any steps in this document without explicit approval.

## Target Architecture

- Host: Vercel (recommended) or Netlify / Cloudflare Pages
- Domain: www.ezeirl.com
- DNS: Managed via current domain registrar (Squarespace Domains)
- Repository: GitHub (private, to be created)

## Pre-Deployment Checklist

### Content
- [ ] All social URLs configured in config/social.ts
- [ ] Real OG image at public/images/og-image.jpg
- [ ] Creator portrait or placeholder confirmed
- [ ] Legal pages attorney-reviewed

### Technical
- [ ] npm run build passes clean
- [ ] npm run typecheck passes
- [ ] npm run lint passes
- [ ] All env vars documented in .env.example

### Legal
- [ ] Privacy policy attorney-reviewed
- [ ] Terms of use attorney-reviewed
- [ ] Email provider selected and privacy process approved
- [ ] Sponsorship disclosure up to date

## Vercel Deployment Steps

1. Create GitHub repository (private)
2. Push project: `git remote add origin <url> && git push -u origin main`
3. Go to vercel.com → New Project → Import from GitHub
4. Framework: Next.js (auto-detected)
5. Environment variables: copy from .env.example and set real values
6. Deploy
7. In Vercel project settings → Domains → Add `www.ezeirl.com`
8. Update DNS at domain registrar: CNAME www → cname.vercel-dns.com
9. Wait for SSL provisioning (~5 minutes)

## Rollback

In Vercel dashboard → Deployments → click any prior deployment → Promote to Production.

## Preview Deployments

Every PR/branch gets an automatic preview URL from Vercel. Share these for review without touching production.

## Local Production Preview

```bash
npm run build && npm run start
# Visit http://localhost:3000
```
