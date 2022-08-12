import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import fontsNext from 'astro-fonts-next'

import config from './src/data/config.js'

// https://astro.build/config
export default defineConfig({
  site: config.siteUrl,
  base: config.baseUrl,
  integrations: [
    preact(),
    image(),
    sitemap(),
    tailwind(),
    robotsTxt(),
    config.googleFontsUrl && fontsNext({ url: config.googleFontsUrl }),
  ],
})
