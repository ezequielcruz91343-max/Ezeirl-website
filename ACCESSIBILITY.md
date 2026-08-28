# ACCESSIBILITY.md — EZE IRL Website

## What Is Implemented

### Skip Link
A visually hidden skip link is present in `app/layout.tsx`:
```html
<a href="#main-content">Skip to main content</a>
```
It becomes visible on focus (`.sr-only focus:not-sr-only`). The main content area uses `id="main-content"` on the page component.

### Semantic Landmarks
- `<nav role="navigation" aria-label="Main navigation">` — primary navigation
- `<nav aria-label="Social media links">` — footer social nav
- `<nav aria-label="Legal and business links">` — footer legal nav
- `<footer role="contentinfo" aria-label="Site footer">` — site footer
- All sections use `aria-labelledby` pointing to their respective `<h2>` elements

### ARIA Labels
- Hamburger button: `aria-expanded`, `aria-controls="mobile-menu"`, dynamic `aria-label`
- Mobile menu: `role="dialog"`, `aria-modal="true"`, `aria-label="Mobile navigation menu"`
- 3D canvas: `aria-label="EZE IRL 3D emblem"`, `role="img"`
- SVG emblem fallback: `aria-label="EZE Emblem"`, `role="img"`
- Countdown timer: `role="timer"`, `aria-label="Time until stream"`, `aria-live="off"`
- Form fields: `aria-required`, `aria-describedby`, `aria-invalid` on email input
- Error messages: `role="alert"`, `aria-live="assertive"`
- Success message: `role="status"`, `aria-live="polite"`
- Decorative elements: `aria-hidden="true"` on all dividers, icons, and SVG decorations

### Focus Management
- All interactive elements have visible `:focus-visible` outlines (2px solid brand red)
- Focus styles defined in `globals.css`
- Mobile close button is present inside the dialog for keyboard users

### Reduced Motion
`globals.css` includes:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

`HeroEmblem3D.tsx` reads `prefers-reduced-motion` via `window.matchMedia` and renders the static SVG fallback instead of the Three.js animation when set.

### Color and Contrast
- Body text: `#f5f5f5` on `#0a0a0a` — high contrast
- Muted text: `#888888` on `#0a0a0a` — passes WCAG AA at body sizes
- Brand red `#cc0000` used for accents, not for text-only communication

## Known Issues / Work Needed

| Issue | Priority | Notes |
|-------|----------|-------|
| Mobile menu keyboard trap | High | No `Tab` trap inside mobile dialog — focus can escape. Implement focus trap on open. |
| Framer Motion animations on reduced-motion | Medium | CSS rule cuts durations but JS-driven animations may still trigger. Add `useReducedMotion()` from Framer Motion in heavy animation components. |
| `aria-hidden` on desktop nav with `menuOpen` | Low | Currently a boolean — verify React renders correctly vs. string `"true"/"false"` |
| Legal page headings | Low | Check heading hierarchy (h1 → h2 → h3) in all legal pages |
| Link underlines | Low | Footer legal links have no underline — consider adding for low-vision users |

## How to Test

### Manual
1. Tab through the entire page — every interactive element must receive visible focus
2. Activate skip link — focus should jump to `#main-content`
3. Open mobile menu — verify it announces as a dialog
4. Press Escape in mobile menu — ideally should close (not yet implemented)
5. Enable macOS/Windows high-contrast mode and verify readability
6. Enable `prefers-reduced-motion` in browser devtools and verify no animation

### Screen Reader
- macOS: VoiceOver (Safari) — cmd + F5
- Windows: NVDA or Narrator (Chrome or Edge)
- Check: landmark navigation, heading structure, button labels, countdown announcement

### Automated
```bash
# Install axe-core CLI or use browser extension
# Lighthouse accessibility audit: target 90+
npx lighthouse http://localhost:3000 --only-categories=accessibility
```
