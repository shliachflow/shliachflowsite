# ShliachFlow — Design System

Mirrors `style.css`. If the two disagree, fix whichever is wrong and keep this file current. Tradition: M3 Contemporary Israeli. Palette: Warm Ink. Full rationale in `docs/shliachflow-design-override.md`.

## Color tokens
| Token | Value | Use |
|---|---|---|
| `--color-dark` | `#111827` | Dark sections, hero, footer |
| `--color-bg` | `#FAFAF8` | Light sections. Never pure `#FFFFFF` as a section background |
| `--color-bg-subtle` | `#F4F3F0` | Alternate light sections |
| `--color-text` | `#111111` | Body on light |
| `--color-text-muted` | `#5C5C5C` | Secondary text |
| `--color-accent` | `#E07820` | All primary CTAs, "Flow." in the hero, section labels, icons |
| `--color-accent-hover` | `#C0621A` | Accent hover |
| `--color-accent-blue` | `#3D9AE8` | ONLY: wordmark "Flow", inline text links |
| `--color-border` | `#E4E2DE` | Hairlines |

Rules: buttons are amber, never blue. No color tokens outside this table.

## Typography
- Display: Cabinet Grotesk (Fontshare), weight 700–900, tracking -0.03 to -0.04em above 2rem. Headings only.
- Body: Fraunces (Google), weight 400, line-height 1.65. Never for headings.
- UI: Inter, for nav, buttons, labels, captions, form text.
- Fluid scale (always `clamp`): `--text-body`, `--text-lg`, `--text-section-title`, `--text-service-title`, `--text-hero`.
- Prose measure 45–75ch. Use `text-wrap: balance` on headings, `pretty` on body.

## Spacing and layout
- Max width 1280px. Section padding `--section-padding-sm` (most) and `--section-padding-lg` (hero, CTA).
- Legacy `--sp-*` scale (8px base) is still in use for small gaps.
- No two adjacent sections should share the same layout. No wave dividers. Hero is left-aligned, never centered.

## Surfaces
- Radius: `--radius-xs` 4, `sm` 6, `md` 10, `lg` 14, `xl` 20, `full` pill (buttons are pills).
- Elevation: `--shadow-xs/sm/md/lg` are multi-layer and soft; `--shadow-ring` for hairline outlines.

## Components
- **Buttons** (`.btn`): pill, Inter 600. `.btn-primary` amber; `.btn-ghost` white outline on dark; `.btn-ghost-dark` outline on light. Hover darkens or brightens border, active scales to 0.97.
- **Services** (home): Websites as a full-width dark featured block with an amber left edge; remaining services in a two-column grid with no cards or borders; custom 48×48 stroked SVG icons in amber (no icon libraries); "Coming soon" / "Also available" use the small Inter label style.
- **Portfolio cards**: screenshot thumb, platform badge, title, one line, "Visit Site →" in amber. Three-across grid for tiers with 3+ items; Troy camp is the featured wide card.
- **Platform badges**: Custom Code (amber tint), ChabadOne/ChabadSuite (dark), Squarespace (neutral).
- **Section label**: Inter 0.75rem uppercase, 0.08em tracking, amber, above a section title.
- **Nav**: transparent over dark heroes, solid `--color-bg` once scrolled (also on subpages, keyed to the page hero). Amber WhatsApp pill. Floating WhatsApp button bottom right.

## Motion
- Hero words enter once on load; mesh gradient drifts slowly; flow line undulates.
- Scroll reveal: 22px rise + fade, 0.65s `cubic-bezier(0.16, 1, 0.3, 1)`, staggered. Do not reveal FAQ items (must be visible on load).
- Everything respects `prefers-reduced-motion`.

## Images
Portfolio screenshots are JPG, max 1600px wide, with `width`/`height` and `loading="lazy"`. Descriptive alt text. External links carry an "(opens in new tab)" screen-reader note.

## Don'ts (carried from CLAUDE.md)
Don't center the hero. Don't use Inter as the display font. Don't add wave dividers. Don't use card grids for the services section. Don't invent contact details, claims, prices or testimonials.

## Known gaps
Contrast of small amber/blue text, hero size drift vs spec, and a few legacy aliases (`--radius`, `--shadow`, `--sp-*`) still to consolidate. See `PRODUCT.md` open decisions.
