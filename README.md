# Williamson Automotive Collision Center

Single-page marketing site for the Williamson Automotive Collision Center (South Miami).
Built with Vite + React + Tailwind CSS v4. Deploys as a **section of the main Williamson
site** at `/collision-center/` — not at a domain root and not on its own subdomain.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # outputs dist/ with /collision-center/ base paths
npm run preview    # serves the production build locally
npm run lint       # typecheck (tsc --noEmit)
```

Because the production base path is `/collision-center/`, the dev server also serves the
site at `http://localhost:3000/collision-center/`.

See [DEPLOY.md](DEPLOY.md) for the go-live checklist (hosting path, robots/sitemap,
Search Console, Google Business Profile).
