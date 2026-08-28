# AGENTS.md — EZE IRL Website

Agent coordination file for AI-assisted development.

## Project

EZE IRL public website at www.ezeirl.com. Next.js 15 / React 19 / TypeScript.

## Critical Rules

- **Do not deploy** without Ezekiel's approval
- **Do not activate email signup** until privacy policy is attorney-reviewed
- **Do not fabricate** follower counts, sponsors, testimonials, or product claims
- **Do not claim EOS Fitness or any gym has approved filming**
- **Do not claim Twitch account exists** — platformUrl is null in config/stream.ts
- **Do not connect social accounts** — all are null in config/social.ts
- **Do not send outreach** — gym-collaboration-draft is for internal review only
- **No secrets or credentials** in committed files
- **Install with --legacy-peer-deps** (R3F 8.x / React 19 peer conflict)

## Build Commands

```bash
npm run build       # Must pass with zero errors
npm run typecheck   # Must pass
npm run lint        # Warnings acceptable, errors not
```

## Config Files (edit these, not components)

- `config/brand.ts` — brand identity
- `config/social.ts` — set url: to real URL when account is confirmed
- `config/stream.ts` — update status when stream is confirmed/live/ended
- `config/fitmate.ts` — update feature statuses as app develops
- `config/env.ts` — runtime env vars only

## Stream State Machine

status: "planned" → "live" → "ended" | "cancelled"
locationStatus: "pending-approval" → "confirmed"
platformStatus: "not-configured" → "configured"

## Social Account State

All social.ts entries start with url: null. Set to real URL only when account exists and is confirmed by Ezekiel.

## Legal

All pages in app/(legal)/ are drafts requiring attorney review before data collection is activated.

## Known Limitations

- R3F/React 19 peer dep conflict — use --legacy-peer-deps on install
- No email provider connected — CommunitySection shows "coming soon" state
- No real social URLs — Footer shows "SOON" badges
- No real creator images — data-placeholder attributes mark where assets go
- No analytics — activate only after privacy policy is finalized
