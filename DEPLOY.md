# Go-Live Checklist

The site lives at its own domain:

```
https://williamsoncollision.com/
```

> **History**: the original plan was a page inside the main Williamson site at
> `/collision-center/`. That changed in July 2026 — the site now has its own domain,
> hosted on Vercel. The Vite `base` defaults to `/` accordingly.

## 1. Hosting (Vercel)

- Vercel project: **williamson-collision** (team "Innovat3 Solutions' projects").
- Deploy from the project directory: `npx vercel deploy --prod --yes`.
- Git integration is NOT connected — pushes to GitHub do **not** auto-deploy to Vercel.
  Connect the repo at https://vercel.com/new for push-to-deploy, or keep deploying via CLI.
- GitHub Pages also builds on every push (preview only):
  https://innovat3solutions.github.io/williamson_collision/

## 2. Connect the domain (registrar side)

The domain `williamsoncollision.com` is registered at the registrar shown in the
client's Domain Portfolio (currently on parking nameservers). To connect it:

1. Registrar → `williamsoncollision.com` → **DNS → Nameservers → Change Nameservers**.
2. Choose "custom / my own nameservers" and enter exactly:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. Save. Propagation is usually minutes, can take up to 24–48h.
4. Vercel then verifies the domain automatically and issues SSL. `www.` redirects to
   the apex domain.

## 3. After the domain is live

- [ ] Update the Google Business Profile "Website" field to `https://williamsoncollision.com/`.
- [ ] Submit `https://williamsoncollision.com/sitemap.xml` in Google Search Console
      (domain property, verified via DNS TXT — addable in Vercel DNS).
- [ ] Ask the main Williamson site to link to the new domain from its nav ("Collision Center").
- [ ] Confirm `info@williamsoncollision.com` mailbox exists (MX records must be added in
      Vercel DNS if email is hosted elsewhere — nameserver moves drop existing MX records).
- [ ] Share the URL in iMessage/Facebook and confirm the link preview shows the facility photo.
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
