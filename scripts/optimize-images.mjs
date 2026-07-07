// Generates the optimized WebP/PNG/JPEG assets the site actually ships.
// Originals live in assets-source/ (not deployed); outputs go to public/images/opt/.
// Run with: node scripts/optimize-images.mjs
import sharp from 'sharp';
import {mkdir, stat} from 'node:fs/promises';
import path from 'node:path';

const SRC = 'assets-source/images/Williamson';
const OUT = 'public/images/opt';

// [source file, output slug, widths] — one WebP per width, named `${slug}-${width}.webp`
const PHOTOS = [
  ['Background-Hero_section.png', 'hero-bg', [1920, 1280]],
  ['dji_fly_20230223_090534_69_1677161603236_aeb.jpg', 'facade-front', [1200]],
  ['Overhead.jpg', 'facade-aerial', [1200]],
  ['Reception 1b.png', 'reception', [1600, 480]],
  ['IMG_0214.jpg', 'service-drive', [1600, 480]],
  ['IMG_0219.jpg', 'entrance', [1600]],
  ['IMG_0250.jpg', 'frame-rack-wide', [1600]],
  ['Production Area 1b.png', 'shop-overview', [1600, 480]],
  ['Production Area 2b.png', 'frame-rack-caroliner', [1600, 480]],
  ['IMG_0258.jpg', 'paint-mix-room', [1600, 480]],
  ['IMG_0260.jpg', 'paint-bench', [1600, 480]],
  ['IMG_0261.jpg', 'escalade-bumper', [1600, 480]],
  ['IMG_0265.jpg', 'escalade-masked', [1600, 480]],
  ['IMG_0274.jpg', 'team-warehouse', [1600, 480]],
  ['Body Tech Staff.png', 'body-tech-staff', [1200]],
  ['Office Staff.jpg', 'office-staff', [1200]],
  ['Paint Shop Staff.png', 'paint-shop-staff', [1200]],
];

// [source file, output slug, max dimension] — logos keep transparency, capped on both axes
const LOGOS = [
  ['Collision Logo White Letters.png', 'wordmark-white', 800],
  ['Collision Logo Black Letters.png', 'wordmark-black', 800],
  ['alpha-romero-certified.png', 'alfa-romeo-certified', 400],
  ['CPN-logo-blue.png', 'cpn', 400],
  ['Hyundai_RECOGNIZED_shop-badge.png', 'hyundai-recognized', 400],
  ['kia_certified_collision_center_WEB.png', 'kia-certified', 400],
  ['nissan-and-infiniti-certified-repair-network-logo-300x115.jpg', 'nissan-infiniti', 400],
  ['FCA Brand Logo.png', 'fca', 400],
  ['Jeep Brand Logo.jpg', 'jeep', 400],
  ['RAM Brand Logo.jpg', 'ram', 400],
  ['Dodge Brand Logo.jpg', 'dodge', 400],
  ['Chrysler Brand Logo.jpg', 'chrysler', 400],
  ['FIAT Brand Logo.jpg', 'fiat', 400],
  ['Cadillac-Logo-2014.png', 'cadillac', 400],
  ['Chevrolet-logo.png', 'chevrolet', 400],
  ['Buick-Logo.png', 'buick', 400],
  ['gmc-logo.png', 'gmc', 400],
  ['I-CAR-Gold-Class.png', 'icar-gold', 400],
];

await mkdir(OUT, {recursive: true});
let total = 0;
const emit = async (pipeline, file) => {
  await pipeline.toFile(path.join(OUT, file));
  const {size} = await stat(path.join(OUT, file));
  total += size;
  console.log(`${file.padEnd(36)} ${(size / 1024).toFixed(0).padStart(5)} KB`);
};

for (const [src, slug, widths] of PHOTOS) {
  for (const w of widths) {
    await emit(
      sharp(path.join(SRC, src)).resize({width: w, withoutEnlargement: true}).webp({quality: 75}),
      `${slug}-${w}.webp`
    );
  }
}

for (const [src, slug, max] of LOGOS) {
  await emit(
    sharp(path.join(SRC, src))
      .resize({width: max, height: max, fit: 'inside', withoutEnlargement: true})
      .webp({quality: 85}),
    `${slug}.webp`
  );
}

// Social/share image: 1200x630 JPEG (broadest og:image support)
await emit(
  sharp(path.join(SRC, 'dji_fly_20230223_090534_69_1677161603236_aeb.jpg'))
    .resize(1200, 630, {fit: 'cover'})
    .jpeg({quality: 80}),
  'og-image.jpg'
);

// Favicons stay PNG
await emit(sharp(path.join(SRC, 'Collision favicon.png')).resize(64, 64, {fit: 'inside'}).png(), 'favicon-64.png');
await emit(sharp(path.join(SRC, 'Collision favicon.png')).resize(180, 180, {fit: 'inside'}).png(), 'apple-touch-icon.png');

// Structured-data logo (PNG for maximum crawler compatibility)
await emit(
  sharp(path.join(SRC, 'Williamson-Collision-Center-logo.png')).resize({width: 600, withoutEnlargement: true}).png(),
  'brand-logo.png'
);

console.log(`\nTotal shipped image payload: ${(total / 1024 / 1024).toFixed(2)} MB`);
