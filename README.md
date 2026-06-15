# ShliachFlow — shliachflow.com

Marketing site for ShliachFlow, digital services for Chabad shluchim.

## Stack

Plain HTML + CSS + vanilla JS. No build step. Hosted on GitHub Pages with a custom domain via Cloudflare DNS.

## Files

- `index.html` — single-scroll homepage
- `portfolio.html` — portfolio subpage
- `style.css` — all styles (CSS custom properties, mobile-first)
- `script.js` — FAQ accordion, mobile nav, nav scroll behavior
- `.nojekyll` — disables Jekyll processing on GitHub Pages
- `CNAME` — custom domain record for GitHub Pages

## Deployment

1. Push to GitHub repo `shliachflow-site`, `main` branch
2. Settings → Pages → Source: main branch, root folder
3. Custom domain: `shliachflow.com` (CNAME file already present)
4. DNS: A records pointing to GitHub Pages IPs, managed via Cloudflare

## TODOs before launch

- [ ] Replace logo wordmark with transparent PNG (logo-dark.png / logo-white.png)
- [ ] Add LinkedIn profile URL (search for `#` placeholder in both HTML files)
- [ ] Replace Calendly link in Contact section
- [ ] Embed Tally retainer interest form (Pricing section)
- [ ] Embed Tally contact form (Contact section)
- [ ] Replace About section headshot
- [ ] Add real portfolio project links and screenshots (3 on homepage, 6 on portfolio page)

## Updating content

- **Dates, prices, copy:** Edit directly in `index.html` or `portfolio.html`
- **Portfolio projects:** Find the `portfolio-card` blocks and update the title, description, and `href` values; swap placeholder `<div>` thumbs for `<img>` tags pointing to screenshots in `assets/portfolio/`
- **Logo:** Drop `logo-dark.png` and `logo-white.png` into `assets/`, then swap the SVG wordmark for `<img>` tags (search for `REPLACE WITH LOGO PNG` comments)
