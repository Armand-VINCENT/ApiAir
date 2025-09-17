// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  base: '/ApiAir/',
  site: 'https://Armand-VINCENT.github.io/ApiAir/'
});


