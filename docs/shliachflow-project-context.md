# ShliachFlow — Project Context Document

This document is read alongside the v3 master prompt and the ShliachFlow design override. It provides project-specific context that the master prompt does not contain: the portfolio, the three-tier service offering, and reference sites.

---

## About ShliachFlow

ShliachFlow is a digital services business run by Rabbi Yisroel Chaim Shuchat, a Chabad shliach based in San Pedro, CA. The business serves Chabad shluchim and Jewish nonprofits who need professional digital work done without having to manage it themselves or explain the context from scratch.

Primary conversion action: WhatsApp contact at (310) 935-5236 / https://wa.me/13109355236

The owner's voice: direct, personal, confident, no corporate language, no em-dashes. Speaks like a shliach who has been doing this for years and genuinely loves it.

---

## The Three Service Tiers

ShliachFlow offers websites in three distinct configurations. These should be explained clearly on the site — they help potential clients self-select before reaching out, which means better leads.

### Tier 1 — Custom Code Site
Built from scratch in code. Hosted free on GitHub Pages. No platform fees, no monthly costs, no template constraints. Most advanced design possible.

Editing options (three paths, client chooses):
- **Managed by ShliachFlow:** Client sends requests for text corrections, photo swaps, date updates. Quick and simple for most ongoing needs.
- **Limited front-end CMS:** ShliachFlow can set up a lightweight CMS (Keystatic, TinaCMS, Pages CMS) so the client can update specific fields — text, images, dates — without touching code. Not a full drag-and-drop experience, but handles 80% of real update needs.
- **Client edits the code:** Possible but at the client's own risk. ShliachFlow provides the codebase but is not responsible for self-made changes.

Goal: working toward a Squarespace-quality editing experience for custom code clients. Not fully there yet but closer than it was.

Best for: camps, event microsites, one-time dinners, programs that don't need frequent complex layout changes, any project where design quality matters more than self-editing flexibility.

### Tier 2 — Platform Build
Squarespace, Wix, or similar. Client or their office gets a real drag-and-drop editor and can update the site independently. Platform fees typically $15–30/month. Design is constrained by what the platform allows.

Best for: active community sites with frequent updates that need to be managed independently without coming back to ShliachFlow every time.

### Tier 3 — Platform Work
Working within an existing institutional platform the client is already on. Two sub-types:

**ChabadOne:** Locked homepage (predefined blocks only). Inner pages give full source HTML access — ShliachFlow can build fully custom-designed pages for events, campaigns, or programs. Must be XHTML 1.0 compatible. These pages can look completely modern and custom despite the platform's age.

**ChabadSuite:** No source HTML access. HTML embed blocks available — ShliachFlow can inject custom-designed sections into pages. Those embedded sections are not editable through the CMS. Good for one-time campaigns or sections that won't need ongoing changes.

---

## Portfolio

These are the sites ShliachFlow has built. Use these for the portfolio page and for the "three platform tiers" section. Visit each URL to take a current screenshot.

### Tier 1 — Custom Code (GitHub Pages)

**Kosher Culinary Camp — Troy, MI**
URL: https://camp.jewishtroy.com/
Platform: Fully custom code, GitHub Pages
Notable: Lead portfolio piece. Bold split layout, large energetic typography ("COOK. CREATE. EXPLORE."), marquee ticker, strong orange/dark palette, real camp photography. The most visually impressive piece in the portfolio.
Description for site: "A fully custom camp site with bold typography, real photography, and a design that converts parents into registrations."

**Kosher Culinary Camp — Southern Delaware**
URL: https://shliachflow.github.io/chabad-southern-delaware-camp/
Platform: Fully custom code, GitHub Pages
Notable: Same framework as Troy, adapted for a different client. Shows the repeatable template approach — same quality, different community.
Description for site: "Custom camp site for Chabad of Southern Delaware — same professional framework, tailored to a different community."

**Chabad of Fredericksburg — Shining Lights Gala**
URL: https://dinner.jewishfredericksburg.org/
Platform: Fully custom code, GitHub Pages
Notable: Gala/event microsite. Dark luxury palette, gold type, formal register. Completely different aesthetic from the camps — shows range.
Description for site: "A gala microsite for Chabad of Fredericksburg's first annual dinner — elegant, dark, designed to build donor trust."

### Tier 3 — ChabadOne Work

**Chabad S. Pedro — Move to San Pedro Page**
URL: https://jewishpedro.org/move
Platform: ChabadOne inner page (source HTML)
Notable: The best example of what ChabadOne inner page work can look like. Teal gradient card, gold pill badge, "The Jewish Community LA Hasn't Found Yet" headline. Most shluchim won't believe it was done inside ChabadOne.
Description for site: "A custom-designed inner page embedded in ChabadOne — showing what's possible when you have source HTML access."

**Chabad Chayil — Building Campaign**
URL: https://www.chabadchayil.org/templates/section_cdo/aid/7011523/jewish/Building-Campaign.htm
Platform: ChabadOne minisite
Notable: Full building campaign page with horizontal sub-navigation, multiple tabs (Photos, Videos, Plans, etc.). Shows the depth of what's possible with ChabadOne inner pages.
Description for site: "A full building campaign microsite inside ChabadOne, with multi-tab navigation and custom page design."

### Tier 2 — Platform Build (Squarespace)

**ShliachFlow.com**
URL: https://www.shliachflow.com/ — DO NOT link to this on the portfolio page. This is the ShliachFlow site itself and is being replaced by the new GitHub-hosted version.
Platform: Squarespace
Notable: Full-bleed mountain lake hero photo, "Simplify. Solve. Flow." headline, service cards with photos, clean professional layout. Use a screenshot as the portfolio thumbnail but label it as "ShliachFlow — our own site (Squarespace)" without a live link, since the URL is being replaced.
Description for site: "ShliachFlow's own website — built on Squarespace as a demonstration of what a managed platform site can look like."

---

## Portfolio Screenshots — Claude Code Instructions

At the start of the portfolio build, before writing any card HTML, visit each portfolio URL below using browser automation, take a full-viewport screenshot, and save it as a JPEG into `assets/portfolio/`. Use these exact filenames:

| Site | URL | Save as |
|---|---|---|
| Troy camp | https://camp.jewishtroy.com/ | `assets/portfolio/camp-troy.jpg` |
| Fredericksburg gala | https://dinner.jewishfredericksburg.org/ | `assets/portfolio/gala-fredericksburg.jpg` |
| Southern Delaware camp | https://shliachflow.github.io/chabad-southern-delaware-camp/ | `assets/portfolio/camp-southern-delaware.jpg` |
| San Pedro /move page | https://jewishpedro.org/move | `assets/portfolio/chabadone-pedro-move.jpg` |
| ChabadChayil building campaign | https://www.chabadchayil.org/templates/section_cdo/aid/7011523/jewish/Building-Campaign.htm | `assets/portfolio/chabadone-chayil-campaign.jpg` |

For each: navigate to the URL, wait 3 seconds for the page to fully render, scroll to the top, take the screenshot at 1400px wide viewport, crop or save at a 16:9 ratio (1400×788px), save to the path above.

The ShliachFlow.com Squarespace screenshot cannot be taken this way since that URL will become the new site. Take a screenshot of shliachflow.com manually and save it as `assets/portfolio/squarespace-shliachflow.jpg` — the user will provide this or take it separately.

Once all screenshots are saved, reference them in the portfolio card thumbnails using `<img src="assets/portfolio/camp-troy.jpg" ...>` etc.

---

## Portfolio Page Structure

Organize the portfolio page by the three service tiers. Each tier gets a brief header (matching the three-tier explanation on the homepage), then a grid of project cards.

Card format:
- Screenshot thumbnail (full-width, 16:9 aspect ratio, `object-fit: cover`)
- Platform badge (small label: "Custom Code", "ChabadOne", "Squarespace")
- Project name (bold)
- One-line description
- "Visit Site →" link (amber accent, NO link for ShliachFlow.com specifically)

Order within Tier 1: Troy camp first (featured/larger card), Fredericksburg gala, Southern Delaware camp.
Order within Tier 3: /move page first, ChabadChayil building campaign.
Tier 2: ShliachFlow.com, no link.

---

## Reference Sites (for design inspiration and screenshot comparison)

The agent may visit these URLs during the build to take screenshots for comparison or inspiration. These are NOT portfolio pieces — they are reference points.

**Calendly.com** — Reference for craft-level execution: multi-layer shadows, precise transition easing, scroll-synced feature panels. Note their editorial left-right split layout.

**Linear.app** — Reference for typographic confidence and restraint. Near-perfect spacing rhythm.

**Stripe.com** — Reference for shadow system and gradient technique (their hero gradient is radial, warm, barely visible).

**Jewishpedro.org** — The ChabadOne main site for Chabad S. Pedro (owner's own community site). Shows the platform's standard template for context.

---

## Substack / Blog

ShliachFlow is adding a blog/resources section powered by Substack. Posts will be written by Rabbi Shuchat covering topics like platform comparisons, AI tools for shluchim, and behind-the-scenes project notes.

Substack publication URL will be provided when set up. The homepage should include a "From the Field" section that pulls the three most recent posts via RSS feed using a lightweight IntersectionObserver-based JS fetch. Posts open on Substack, not within the ShliachFlow site.

If the Substack URL is not yet available, include the section as a placeholder with the label "<!-- TODO: Replace with Substack RSS URL -->" and hardcode three placeholder cards matching the eventual design.

---

## CLAUDE.md Template

Create this file at the project root. Claude Code reads it automatically at session start.

```markdown
# ShliachFlow Site — Project Memory

## Read these documents first (in order)
1. docs/v3-master-prompt.md — The master design and build framework
2. docs/design-override.md — ShliachFlow-specific design decisions (palette, fonts, hero, animations, icons)
3. docs/project-context.md — Portfolio, service tiers, reference sites

## Project state
[UPDATE THIS EACH SESSION — note what's done and what's next]

## Key decisions (do not revisit without user confirmation)
- Tradition: M3 Contemporary Israeli
- Fonts: Cabinet Grotesk (display) + Fraunces (body) + Inter (UI)
- Palette: Warm Ink — see design-override.md for exact values
- Hero: Type-dominant, "Simplify. Solve. Flow." headline, CSS mesh gradient background, animated flow line
- Primary CTA: WhatsApp (310) 935-5236
- Stack: Plain HTML + CSS + Vanilla JS, GitHub Pages
- Tailwind: NOT used on this project
- No framework

## What NOT to do
- Do not center the hero
- Do not use Inter as the primary display font
- Do not use the original build spec's color tokens (overridden in design-override.md)
- Do not add wave dividers between every section
- Do not use card grids for the services section
- Do not link to shliachflow.com on the portfolio page (it's being replaced by this site)

## Contact info (do not invent or modify)
- WhatsApp: https://wa.me/13109355236
- Email: info@shliachflow.com
- Address: 817 W 9th St, San Pedro, CA
```
