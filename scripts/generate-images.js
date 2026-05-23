#!/usr/bin/env node
// scripts/generate-images.js
// Generates resized variants and WebP versions for images in src/assets
// Usage: node ./scripts/generate-images.js

import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src', 'assets');
const sizes = [400, 800];
const supported = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function run() {
  try {
    const files = await fs.readdir(assetsDir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!supported.has(ext)) continue;
      // skip already-generated variants like name-400w.jpg or name-800w.webp
      if (/-\d+w\.(jpg|jpeg|png|webp)$/.test(file)) continue;

      const name = path.parse(file).name;
      const input = path.join(assetsDir, file);
      for (const w of sizes) {
        const outJpg = path.join(assetsDir, `${name}-${w}w.jpg`);
        const outWebp = path.join(assetsDir, `${name}-${w}w.webp`);
        try {
          await sharp(input)
            .resize({ width: w })
            .jpeg({ quality: 82 })
            .toFile(outJpg);
          await sharp(input)
            .resize({ width: w })
            .webp({ quality: 80 })
            .toFile(outWebp);
          console.log(`Generated ${path.basename(outJpg)} and ${path.basename(outWebp)}`);
        } catch (err) {
          console.error(`Failed to generate variants for ${file}:`, err.message);
        }
      }
    }
    console.log('Image variant generation complete.');
  } catch (err) {
    console.error('Error reading assets directory:', err.message);
    process.exit(1);
  }
}

run();
