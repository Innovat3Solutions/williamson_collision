# Go-Live Checklist

The site is built to live at:

```
https://www.williamsonautomotivegroup.com/collision-center/
```

It is **not** a standalone site — it is a section of the main Williamson website. That
placement drives everything below.

## 1. Hosting

- Deploy the contents of `dist/` so they are served under the `/collision-center/` path
  (e.g. reverse-proxy or a subdirectory on the main site's host).
- Ensure `/collision-center` (no trailing slash) 301-redirects to `/collision-center/`.
- The Vite `base` is set in [vite.config.ts](vite.config.ts). If the path segment ever
  changes (e.g. to `/body-shop/`), update **all three together**:
  1. `base` in `vite.config.ts`
  2. The absolute URLs in `index.html` (canonical, og:url, og:image, JSON-LD)
  3. `public/sitemap.xml`
- If the domain differs from `williamsonautomotivegroup.com`, update the same
  `index.html` and `sitemap.xml` URLs.

## 2. Search engines

- **robots.txt**: crawlers only read robots.txt at the domain root, so this project does
  not ship one. Ask whoever manages the main site to add this line to the root
  `https://www.williamsonautomotivegroup.com/robots.txt`:

  ```
  Sitemap: https://www.williamsonautomotivegroup.com/collision-center/sitemap.xml
  ```

- **Search Console**: alternatively (or additionally), submit
  `/collision-center/sitemap.xml` in the Google Search Console property for the main
  domain.
- The main site's navigation should link to `/collision-center/` (e.g. a "Collision
  Center" tab) so the page isn't an orphan.

## 3. Google Business Profile

- Set the collision center's GBP "Website" field to
  `https://www.williamsonautomotivegroup.com/collision-center/`.
- Confirm the GBP name / address / phone exactly match the page footer
  (19300 SW 108 Ave, Miami, FL 33157 · 305-238-8801).

## 4. Verify before announcing

- [ ] Page loads at the final URL with all images and styles (no 404s in devtools).
- [ ] `info@williamsoncollision.com` mailbox exists and is monitored (it's the footer
      contact email).
- [ ] Share the URL in iMessage/Facebook and confirm the link preview shows the facility
      photo (og:image).
- [ ] Validate structured data at https://search.google.com/test/rich-results.

## Known follow-ups (not blockers)

- Customer reviews strip: needs 3–5 real Google/CARWISE reviews from the shop
  (automated scraping is blocked). Add them to a testimonials section when available.
- ASE / AATI certification logos: drop the source PNGs into
  `assets-source/images/Williamson/`, list them in `scripts/optimize-images.mjs`,
  re-run it, and restore the commented-out `<img>` tags in `src/App.tsx`.
- Page is client-rendered; consider a pre-render step so content is in the initial HTML.

## Image pipeline

Originals live in `assets-source/` (44 MB, not deployed). `scripts/optimize-images.mjs`
generates the shipped WebP/PNG/JPEG set into `public/images/opt/` (~3 MB). To add or
replace a photo: put the original in `assets-source/images/Williamson/`, add a line to
the script's manifest, and run `node scripts/optimize-images.mjs`.
