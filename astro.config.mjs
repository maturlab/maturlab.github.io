// @ts-check
import { defineConfig } from 'astro/config';

// Site GitHub Pages'e yüklenirken bu iki değer otomatik ayarlanır (bkz. .github/workflows/deploy.yml).
// Kendi alan adınızı (ör. micelab.deu.edu.tr) bağlarsanız SITE_URL'yi ona göre değiştirin.
export default defineConfig({
  site: process.env.SITE_URL || 'https://mice-lab.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
