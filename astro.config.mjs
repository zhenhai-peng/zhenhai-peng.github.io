import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://zhenhai-peng.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/': '/en/',
  },
});
