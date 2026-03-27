# Accessibility Widget + Cookie Consent Banner — Design Spec
**Date:** 2026-03-27
**Status:** Approved

---

## Overview

Two new self-contained, zero-dependency components added to the site:

1. **`AccessibilityWidget`** — ADA-compliant floating widget, bottom-left, with 6 accessibility tools
2. **`CookieBanner`** — Full-width dark bottom bar for cookie consent

Both are added to `app/layout.tsx` so they render on every page.

---

## 1. Accessibility Widget

### Trigger Button
- Fixed position: `bottom: 24px`, `left: 24px`, `z-index: 9998`
- Style: Blue pill (`bg-blue-600`) with wheelchair SVG icon + "Accessibility" text label
- Hover: slight scale-up and shadow increase
- On mobile: reduced padding, still visible above the sticky call button

### Panel
- Slides up from bottom-left when trigger is clicked
- Fixed position, anchored above the trigger button
- Width: `280px`, dark card with blue header
- Header: "♿ Accessibility Options" title + `✕` close button
- Body: 6 control rows (see below)
- Footer: "Reset all" button that clears all preferences

### Controls

| # | Label | UI | Behavior |
|---|-------|----|----------|
| 1 | Font Size | `−` / `+` buttons | Adds `data-font-size="sm/md/lg/xl"` to `<html>`. Default: `md`. Range: 3 steps smaller, 3 steps larger. CSS in `globals.css` maps these to `font-size` overrides. |
| 2 | High Contrast | Toggle switch | Adds `class="high-contrast"` to `<html>`. CSS class inverts backgrounds/text to black/white high-contrast palette. |
| 3 | Dyslexia Font | Toggle switch | Loads OpenDyslexic from `https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/open-dyslexic-regular.woff2` (only on first toggle). Adds `class="dyslexia-font"` to `<html>`. CSS swaps font-family. |
| 4 | Highlight Links | Toggle switch | Adds `class="highlight-links"` to `<html>`. CSS adds `text-decoration: underline; background: #fef08a` to all `<a>` tags. |
| 5 | Reduce Motion | Toggle switch | Adds `class="reduce-motion"` to `<html>`. CSS adds `*, *::before, *::after { animation: none !important; transition: none !important; }` |
| 6 | Reading Guide | Toggle switch | Renders a full-width `60px` semi-transparent horizontal bar (`bg-yellow-200/40`) that follows `mousemove` on the page. Hidden on touch devices. |

### Persistence
- All preferences stored in `localStorage` under key `a11y-prefs` as JSON
- On mount, preferences are read and re-applied before first paint (via `useEffect` + CSS class injection)

### Accessibility (meta)
- Panel has `role="dialog"`, `aria-label="Accessibility Options"`, `aria-modal="true"`
- Focus trapped inside panel while open (`Tab` / `Shift+Tab` cycle within)
- `Escape` key closes the panel
- Trigger button has `aria-expanded` and `aria-controls` attributes
- All toggle switches use `role="switch"` and `aria-checked`

---

## 2. Cookie Consent Banner

### Layout
- Fixed position: `bottom: 0`, `left: 0`, `right: 0`, `z-index: 9999` (above accessibility widget)
- Background: `bg-slate-900`
- Single row on desktop, stacked on mobile

### Content
- Text: *"We use cookies to improve your experience and analyze site traffic."*
- "Learn more" link → `/cookie-policy` (page already exists in the repo)
- **Decline** button: grey outline style
- **Accept All** button: `bg-blue-600`, white text

### Behavior
- On mount: check `localStorage` for key `cookie_consent`
  - If `accepted` or `declined` → banner hidden immediately (no flash)
  - If not set → banner shown
- On **Accept All**: set `cookie_consent=accepted`, hide banner
- On **Decline**: set `cookie_consent=declined`, hide banner
- Banner uses `useState` + conditional render (not CSS `display:none`) to avoid layout shift after mount

### Notes
- This is a UI-only consent notice. Google Analytics is already loaded unconditionally via `GoogleAnalytics.tsx`. Gating GA behind consent is out of scope for this spec.
- No third-party cookie consent library — fully custom to avoid bloat.

---

## File Plan

| File | Action |
|------|--------|
| `components/AccessibilityWidget.tsx` | Create |
| `components/CookieBanner.tsx` | Create |
| `app/globals.css` | Add CSS classes for a11y modes (high-contrast, dyslexia-font, highlight-links, reduce-motion, font-size steps) |
| `app/layout.tsx` | Import and render both components |

---

## Out of Scope
- Gating any existing scripts (GA, Facebook Pixel) behind cookie consent
- WCAG audit of entire site
- Screen reader testing beyond semantic markup
