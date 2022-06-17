import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), sitemap(), robotsTxt()],
})
