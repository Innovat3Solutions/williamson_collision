import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  // The site lives at its own domain (williamsoncollision.com), served from the
  // root. VITE_BASE overrides the base for previews served under a subpath
  // (e.g. GitHub Pages serves this repo at /williamson_collision/ — see
  // .github/workflows/deploy.yml). If the domain ever changes, update the URLs
  // in index.html, public/sitemap.xml, and public/robots.txt (see DEPLOY.md).
  base: process.env.VITE_BASE ?? '/',
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
