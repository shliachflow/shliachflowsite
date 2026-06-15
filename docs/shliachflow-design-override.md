# ShliachFlow — Master Design Override

**This single document replaces every previous addendum.**
Drop it at the end of the original build spec, after the footer section, before the quality checklist.
It supersedes: the original Design Tokens block, the Typography block, every layout prescription, every color value, and every section-specific visual instruction in the spec above.

What stays exactly as written in the original spec: all copy, all FAQ questions and answers, all testimonials, all functional requirements (accordion behavior, nav scroll behavior, mobile nav, WhatsApp links, smooth scroll), file structure, placeholder TODO comments, GitHub Pages deployment, and responsive breakpoints.

---

## 1 — Design Tokens (final values — replaces original block entirely)

```css
:root {
  /* Colors */
  --color-dark:         #111827;
  --color-bg:           #FAFAF8;
  --color-bg-subtle:    #F4F3F0;
  --color-text:         #111111;
  --color-text-muted:   #5C5C5C;
  --color-accent:       #E07820;
  --color-accent-hover: #C0621A;
  --color-accent-blue:  #3D9AE8;
  --color-border:       #E4E2DE;

  /* Typography */
  --font-display: 'Cabinet Grotesk', sans-serif;
  --font-body:    'Fraunces', serif;
  --font-ui:      'Inter', sans-serif;

  /* Type scale — fluid, always clamp() */
  --text-body:          clamp(1.0625rem, 1.5vw + 0.25rem, 1.3125rem);
  --text-lg:            clamp(1.25rem,  2vw + 0.25rem,   1.625rem);
  --text-section-title: clamp(2.25rem,  5vw + 0.5rem,    4.5rem);
  --text-service-title: clamp(1.25rem,  2vw + 0.25rem,   1.75rem);
  --text-hero:          clamp(4.5rem,   11vw + 0.5rem,   10rem);

  /* Spacing */
  --section-padding-sm: clamp(5rem, 12vw, 9rem);
  --section-padding-lg: clamp(7rem, 16vw, 13rem);
  --max-width:          1280px;

  /* Surfaces */
  --radius:    6px;
  --radius-lg: 12px;
  --shadow:    0 2px 20px rgba(17, 24, 39, 0.08);
}
```

**Color rules:**
- All primary CTA buttons: `--color-accent` (amber). Not blue. Never blue on buttons.
- `--color-accent-blue` is used only on: the "Flow." word in the hero headline, the "Flow" wordmark text, and inline text links. Nowhere else.
- All light section backgrounds: `--color-bg`. Never pure `#FFFFFF`.
- Dark sections: `--color-dark`. This is not the original navy — it is significantly darker and richer.

---

## 2 — Font Loading (replaces original Typography block)

```html
<!-- In <head>, before any styles -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
  href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet">
```

**Type application rules:**
- All headings (H1–H3): `font-family: var(--font-display)`, weight 700–900
- All body copy: `font-family: var(--font-body)`, weight 400, `line-height: 1.65`
- Form labels, captions, nav links, button text, small UI text: `font-family: var(--font-ui)`
- Never use Cabinet Grotesk for body paragraphs. Never use Fraunces for headings.
- Letter-spacing on display headings above 2rem: `-0.03em` to `-0.04em`
- Never track body text tighter than default

---

## 3 — Hero (replaces original Hero section spec entirely)

### What changed
- Headline is now **"Simplify. Solve. Flow."** — three words, brand statement
- "Because You Didn't Sign Up To Be the Web Guy Too." moves to the subhead of the Intro section below the hero, where it belongs as copy not a brand line
- No landscape photo. Type-dominant hero.
- No centered layout. Content anchors bottom-left.
- Background is a CSS animated mesh gradient with grain texture overlay

### HTML structure

```html
<section class="hero" id="hero">
  <!-- Animated background layers -->
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-grain" aria-hidden="true"></div>

  <!-- Content -->
  <div class="hero-content">
    <p class="hero-eyebrow">Built by a fellow shliach. Boosted by AI.</p>

    <h1 class="hero-headline">
      <span class="word">Simplify.</span>
      <span class="word">Solve.</span>
      <span class="word flow-word">Flow.</span>
    </h1>

    <p class="hero-sub">
      You're already juggling shiurim, fundraising, Yomim Tovim, and everything
      else that comes with the job. I handle the digital side — and you don't
      have to explain what a Chabad House is.
    </p>

    <div class="hero-ctas">
      <a href="https://wa.me/13109355236" class="btn btn-primary">
        WhatsApp: (310) 935-5236
      </a>
      <a href="portfolio.html" class="btn btn-ghost">
        See My Work
      </a>
    </div>

    <!-- Flow line — brand moment, bottom of hero -->
    <div class="hero-flow-line" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg" fill="none">
        <path class="flow-path"
          d="M0,30 C240,8 480,52 720,30 C960,8 1200,52 1440,30"
          stroke="rgba(224,120,32,0.2)"
          stroke-width="1.5"
          stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</section>
```

### Hero CSS

```css
/* ── Hero container ── */
.hero {
  position: relative;
  min-height: 92svh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background: var(--color-dark);
}

/* ── Animated mesh gradient background ── */
.hero-bg {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background:
    radial-gradient(ellipse 80% 60% at 15% 25%,
      rgba(224, 120, 32, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 85% 75%,
      rgba(61, 154, 232, 0.05) 0%, transparent 55%),
    radial-gradient(ellipse 100% 90% at 50% 50%,
      #111827 35%, #080c18 100%);
  animation: mesh-drift 28s ease-in-out infinite alternate;
  z-index: 0;
}

@keyframes mesh-drift {
  0%   { transform: translate(0%,  0%)    rotate(0deg);   }
  33%  { transform: translate(2%,  -1.5%) rotate(0.4deg); }
  66%  { transform: translate(-1%, 2%)    rotate(-0.3deg);}
  100% { transform: translate(1.5%, 1%)   rotate(0.2deg); }
}

/* ── Grain texture overlay ── */
.hero-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  opacity: 0.032;
  z-index: 1;
  pointer-events: none;
}

/* ── Hero content ── */
.hero-content {
  position: relative;
  z-index: 2;
  padding: var(--section-padding-lg) clamp(2rem, 6vw, 5rem)
           clamp(3rem, 7vw, 5rem);
  max-width: var(--max-width);
  width: 100%;
  margin-inline: auto;
}

/* ── Eyebrow ── */
.hero-eyebrow {
  font-family: var(--font-ui);
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-bottom: clamp(1.25rem, 3vw, 2rem);
}

/* ── Headline ── */
.hero-headline {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: #FFFFFF;
  margin: 0 0 clamp(1.5rem, 4vw, 2.5rem);
  max-width: 14ch;
}

.flow-word {
  color: var(--color-accent);
}

/* ── Word entrance animation ── */
.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(28px);
  animation: word-enter 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.word:nth-child(1) { animation-delay: 0.15s; }
.word:nth-child(2) { animation-delay: 0.30s; }
.word:nth-child(3) { animation-delay: 0.45s; }

@keyframes word-enter {
  to { opacity: 1; transform: translateY(0); }
}

/* ── Subhead ── */
.hero-sub {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: 1.6;
  color: rgba(255,255,255,0.72);
  max-width: 52ch;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}

/* ── CTAs ── */
.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ── Flow line ── */
.hero-flow-line {
  width: 100%;
  margin-top: clamp(3rem, 7vw, 5rem);
}
.hero-flow-line svg {
  width: 100%;
  height: auto;
  display: block;
}
.flow-path {
  animation: flow-undulate 10s ease-in-out infinite;
}
@keyframes flow-undulate {
  0%, 100% {
    d: path('M0,30 C240,8 480,52 720,30 C960,8 1200,52 1440,30');
    opacity: 0.20;
  }
  50% {
    d: path('M0,30 C240,52 480,8 720,30 C960,52 1200,8 1440,30');
    opacity: 0.30;
  }
}

/* ── Mobile hero ── */
@media (max-width: 640px) {
  .hero-ctas { flex-direction: column; }
  .hero-ctas .btn { text-align: center; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .hero-bg { animation: none; }
  .flow-path { animation: none; }
  .word { opacity: 1; transform: none; animation: none; }
}
```

---

## 4 — Button System

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn:active { transform: scale(0.97); }

/* Primary — amber */
.btn-primary {
  background: var(--color-accent);
  color: #FFFFFF;
}
.btn-primary:hover {
  background: var(--color-accent-hover);
  box-shadow: 0 4px 20px rgba(224, 120, 32, 0.3);
}

/* Ghost — white outline for dark sections */
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
  border-color: rgba(255,255,255,0.35);
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.06);
}

/* Ghost dark — outline for light sections */
.btn-ghost-dark {
  background: transparent;
  color: var(--color-text);
  border-color: var(--color-border);
}
.btn-ghost-dark:hover {
  border-color: var(--color-text);
}
```

---

## 5 — Services Section (replaces original services spec entirely)

No card grid. No three-column layout. No semi-transparent boxes.

### Layout

**Website Design & Management** (flagship) gets a full-width editorial feature block at the top of the section — dark background, amber left-accent line, generous padding. Different from everything else on the page.

**Remaining five services** sit below in a two-column editorial grid on desktop, single column on mobile. Each item: custom SVG icon, title, description. No cards, no borders, no background boxes. Whitespace is the separator.

**Digital Marketing Assets & Ads** gets a small `Add-on` label in Inter small-caps above the title.

### Custom SVG Icons

Draw all six icons inline in the HTML. Do not use Lucide, Heroicons, FontAwesome, or any icon library. All icons: `viewBox="0 0 48 48"`, `fill="none"`, `stroke="var(--color-accent)"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.

**Icon 1 — Website Design & Management**
```html
<svg class="service-icon" viewBox="0 0 48 48" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="var(--color-accent)" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- Browser frame -->
  <rect x="4" y="8" width="40" height="32" rx="3"/>
  <!-- Nav bar divider -->
  <line x1="4" y1="17" x2="44" y2="17"/>
  <!-- Browser dots -->
  <circle cx="10.5" cy="12.5" r="1.5" fill="var(--color-accent)" stroke="none"/>
  <circle cx="16"   cy="12.5" r="1.5" fill="var(--color-accent)" stroke="none"/>
  <circle cx="21.5" cy="12.5" r="1.5" fill="var(--color-accent)" stroke="none"/>
  <!-- Content lines -->
  <line x1="10" y1="24" x2="30" y2="24"/>
  <line x1="10" y1="29" x2="38" y2="29"/>
  <line x1="10" y1="34" x2="22" y2="34"/>
</svg>
```

**Icon 2 — Systems Setup & Consulting**
```html
<svg class="service-icon" viewBox="0 0 48 48" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="var(--color-accent)" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- Top node -->
  <circle cx="24" cy="10" r="5"/>
  <!-- Bottom nodes -->
  <circle cx="12" cy="36" r="5"/>
  <circle cx="36" cy="36" r="5"/>
  <!-- Connecting lines -->
  <line x1="20.5" y1="14.3" x2="15.5" y2="31.7"/>
  <line x1="27.5" y1="14.3" x2="32.5" y2="31.7"/>
  <!-- Cross connection -->
  <line x1="17"   y1="36"   x2="31"   y2="36"/>
</svg>
```

**Icon 3 — Writing & Content**
```html
<svg class="service-icon" viewBox="0 0 48 48" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="var(--color-accent)" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- Pen nib: diamond body -->
  <path d="M24 5 L40 24 L24 43 L8 24 Z"/>
  <!-- Center spine -->
  <line x1="24" y1="5" x2="24" y2="36"/>
  <!-- Nib tip split -->
  <line x1="19" y1="33" x2="24" y2="40"/>
  <line x1="29" y1="33" x2="24" y2="40"/>
</svg>
```

**Icon 4 — Design & Branding**
```html
<svg class="service-icon" viewBox="0 0 48 48" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="var(--color-accent)" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- Outer circle -->
  <circle cx="24" cy="24" r="18"/>
  <!-- Inner triangle — brand mark -->
  <path d="M24 14 L34 31 L14 31 Z"/>
  <!-- Horizontal axis -->
  <line x1="6" y1="24" x2="42" y2="24"/>
</svg>
```

**Icon 5 — Tech Troubleshooting**
```html
<svg class="service-icon" viewBox="0 0 48 48" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="var(--color-accent)" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- Hex nut -->
  <polygon points="24,5 38,13 38,29 24,37 10,29 10,13"/>
  <!-- Center bore -->
  <circle cx="24" cy="21" r="6"/>
  <!-- Bolt shaft below -->
  <line x1="24" y1="37" x2="24" y2="44"/>
  <line x1="20" y1="42" x2="28" y2="42"/>
</svg>
```

**Icon 6 — Digital Marketing Assets & Ads**
```html
<svg class="service-icon" viewBox="0 0 48 48" fill="none"
     xmlns="http://www.w3.org/2000/svg"
     stroke="var(--color-accent)" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <!-- Signal source dot -->
  <circle cx="14" cy="28" r="3.5" fill="var(--color-accent)" stroke="none"/>
  <!-- Broadcast arcs -->
  <path d="M21 21 C25 17 25 33 21 37"/>
  <path d="M27 16 C33 11 33 39 27 43"/>
  <path d="M33 11 C41  6 41 44 33 49"/>
</svg>
```

### Services CSS

```css
/* ── Featured service ── */
.service-featured {
  background: var(--color-dark);
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 5vw, 3rem);
  margin-bottom: clamp(3rem, 7vw, 5rem);
  border-left: 3px solid var(--color-accent);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.service-featured .service-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 1.25rem;
}

.service-featured h3 {
  font-family: var(--font-display);
  font-size: var(--text-service-title);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1rem;
}

.service-featured p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.65;
  color: rgba(255,255,255,0.72);
}

/* ── Services grid ── */
.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 6vw, 4rem) clamp(3rem, 8vw, 6rem);
}

.service-item {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.service-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
}

.service-addon-label {
  font-family: var(--font-ui);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  font-variant: small-caps;
}

.service-item h3 {
  font-family: var(--font-display);
  font-size: var(--text-service-title);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
}

.service-item p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.65;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .service-featured { grid-template-columns: 1fr; }
  .services-grid    { grid-template-columns: 1fr; }
}
```

---

## 6 — Scroll-Triggered Reveal Animations

### CSS

```css
/* ── Reveal setup — all animatable elements start hidden ── */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity  0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for child elements */
.stagger-child:nth-child(1) { transition-delay: 0ms;  }
.stagger-child:nth-child(2) { transition-delay: 80ms; }
.stagger-child:nth-child(3) { transition-delay: 160ms;}
.stagger-child:nth-child(4) { transition-delay: 240ms;}
.stagger-child:nth-child(5) { transition-delay: 320ms;}
.stagger-child:nth-child(6) { transition-delay: 400ms;}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### JavaScript (add to script.js)

```javascript
// ── Scroll reveal ──────────────────────────────────────────
(function () {
  const prefersReduced =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) return;

  // Add .reveal to all section headings, service items,
  // testimonial cards, FAQ items, and major content blocks
  const selectors = [
    'section > .container > h2',
    'section > .container > p.section-intro',
    '.service-featured',
    '.service-item',
    '.testimonial-card',
    '.faq-item',
    '.about-content',
    '.pricing-content',
    '.work-card'
  ];

  document.querySelectorAll(selectors.join(',')).forEach(el => {
    el.classList.add('reveal');
    // If it's inside a grid/list, also add stagger-child
    if (el.parentElement &&
        el.parentElement.children.length > 1) {
      el.classList.add('stagger-child');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -48px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
```

---

## 7 — Section Rhythm Rules

The agent must not let any two adjacent sections look the same. Apply this rhythm throughout the page:

- **Never** use a card grid more than once
- **Never** use the same column layout in two consecutive sections
- Each dark section should have at least one element rendered in `--color-accent` amber to break the monotony
- Section titles: `font-family: var(--font-display)`, `font-size: var(--text-section-title)`, weight 800
- Section label (small eyebrow above title): `font-family: var(--font-ui)`, `font-size: 0.75rem`, `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: var(--color-accent)`
- Section padding: `padding-block: var(--section-padding-sm)` on most sections; `var(--section-padding-lg)` on hero and the pricing/CTA sections

---

## 8 — Nav

The nav scroll behavior, mobile hamburger, WhatsApp button, and link targets stay exactly as specified in the original spec.

Update only the visual tokens:
- Logo text: `<span class="logo-shliach">Shliach</span><span class="logo-flow">Flow</span>`
- `.logo-flow` color: `var(--color-accent-blue)` (the logo blue — only correct usage outside the hero)
- Pre-scroll state: transparent background, white text, white logo
- Post-scroll state: `background: var(--color-bg)`, `color: var(--color-text)`, `box-shadow: var(--shadow)`
- WhatsApp pill button: `background: var(--color-accent)` (amber, not blue)

---

## 9 — Quality Check (design-specific additions)

Before declaring the build complete, verify:

- [ ] Hero headline reads "Simplify. Solve. Flow." — not the original long headline
- [ ] "Flow." in hero is amber (`var(--color-accent)`), not blue
- [ ] Word entrance animation plays once on load, stops, does not loop
- [ ] Mesh gradient animates (check in browser — subtle motion, not jarring)
- [ ] Flow SVG line animates slowly at bottom of hero
- [ ] No section background is pure `#FFFFFF` — all light sections use `var(--color-bg)`
- [ ] All primary CTA buttons are amber — zero blue buttons anywhere
- [ ] Service icons are custom SVG, not from any icon library
- [ ] Featured service card has amber left-border, dark background
- [ ] Remaining services have no card borders or background boxes
- [ ] All section elements have `.reveal` class and animate in on scroll
- [ ] `prefers-reduced-motion` disables all animations
- [ ] No horizontal scroll on any viewport
- [ ] Cabinet Grotesk loading from Fontshare (check Network tab — should not fall back to system font)
- [ ] Fraunces loading from Google Fonts at correct optical sizes
