import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  // The page is served as a section of the main Williamson site, not at the
  // domain root. If the path segment ever changes, update this, the URLs in
  // index.html, and public/sitemap.xml together (see DEPLOY.md).
  // VITE_BASE overrides it for previews served elsewhere (e.g. GitHub Pages
  // serves this repo at /williamson_collision/ — see .github/workflows/deploy.yml).
  // Vercel serves at the domain root, so default to '/' there.
  base: process.env.VITE_BASE ?? (process.env.VERCEL ? '/' : '/collision-center/'),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
