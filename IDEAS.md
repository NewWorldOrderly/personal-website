# Website Improvement Ideas

A running backlog of potential improvements for BryanDuckworth.com. These are grouped by theme so you can triage quickly.

> Note: Some accessibility items are already addressed by PRs #10, #11, and #15. Consider migrating this list into GitHub Issues if you want per-item tracking and status.

## UX
- Add “Now” section inline editing for Bryan (admin panel toggle + live preview).
- Add a compact “About Bryan” card with a one‑sentence summary near the header.
- Add a lightweight “Recent work” or “Latest project” card (pull from GitHub or static list).
- Add a “Quick links” row under the header (resume, GitHub, LinkedIn, email, blog).
- Add subtle hover states on cards to make the grid feel more interactive.

## Performance
- Lazy load heavy visual components (globe, carousel) below the fold.
- Add Suspense + skeletons for data‑fetching sections (Quacks, GitHub contributions).
- Add `priority` only for the hero/avatar image; defer non‑critical images.

## Accessibility
- Add `alt`/`aria-label` coverage for Avatar images and icon‑only buttons.
- Ensure all external links with `target="_blank"` include `rel="noreferrer"`.
- Add `aria-live` for dynamic chat responses + better focus states for keyboard users.

## Copy / Content
- Tighten ChillChat description copy (shorter, more punchy).
- Add brief tooltips or labels for the “Days Alive” and “World Clock” cards.
- Consider adding a one‑line note for Quacks explaining the source (Slack? personal note?).

## Missing Features
- “Contact” panel with lightweight form + honeypot (no auth required).
- Optional “Newsletter” or “Updates” signup (email capture).
- Toggle to view condensed vs full home layout for smaller screens.
- “Press/Media” section with links to interviews/talks.
