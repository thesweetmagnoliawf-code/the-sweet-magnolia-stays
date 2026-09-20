# PRD — The Sweet Magnolia (Coming Soon Page)

## Original Problem Statement
"I have a domain, I just need a starter page welcoming and kind of coming soon page with the logo in the middle a a few intro lines"

## User Choices (2026-09-20)
- Brand: The Sweet Magnolia — boutique stays + residential rental management
- Style: Elegant & minimal, lots of space, refined typography, subtle animation
- No email signup form — welcome page only
- Exact copy provided by user (welcome line, intro lines, manifesto paragraph, coming soon notice, closing line)
- Logo: user has one but did not attach it — placeholder typographic lockup + magnolia line-mark SVG in use, swap-in ready

## Architecture
- Frontend-only React page (no backend endpoints needed)
- Stack: React 19, Tailwind, framer-motion (kinetic reveals), lenis (smooth scroll)
- Fonts: Cormorant Garamond (display serif) + Manrope (body)
- Palette: ivory #F7F5F0, deep green #232F26, gold accent #C4A484
- Design system: /app/design_guidelines.json

## Implemented (2026-09-20)
- Hero: centered logo lockup ("The Sweet / Magnolia" serif + magnolia mark), "Welcome to" eyebrow, masked line-by-line kinetic reveal, parallax fade + rotating mark on scroll, animated scroll cue
- Slow editorial marquee: "Beautiful stays. Thoughtful homes. Seamless living." (pauses on hover)
- Manifesto: numbered chapters 01–03 (Beautiful Stays / Thoughtful Homes / Seamless Living), user's exact paragraph, magnolia photo with scroll parallax
- Coming Soon: dark green section, "Direct Booking & Resident Portal", closing line "Stay awhile. Feel at home.", masked in-view reveals
- Footer with copyright + brand line
- Grain overlay, custom favicon, page title/meta, data-testids throughout

## Verified
- Page loads, all sections render, scroll reveals fire, text content matches user's copy (screenshot-tested end to end)

## Backlog
- Done (2026-09-20): Real logo swapped into hero (user-provided artwork, blended into ivory background)
- P1: Optional notify-me email capture (user declined for now)
- P2: Direct booking flow + resident portal (the products being teased)
