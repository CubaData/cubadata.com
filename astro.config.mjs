import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { readFileSync } from 'fs'

const redirections = JSON.parse(
  readFileSync(new URL('./src/data/redirections.json', import.meta.url), 'utf-8')
)

const redirects = {}
for (const redir of redirections) {
  redirects[redir.from] = redir.to
}

export default defineConfig({
  site: 'https://cubadata.com',
  integrations: [react(), sitemap()],
  output: 'static',
  redirects,
})
