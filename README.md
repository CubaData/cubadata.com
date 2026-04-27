# Cubadata Static Site

Static Astro site for Cubadata with React components and per-route SEO metadata.

## Requirements

- Node.js 22.12 or newer is recommended for Astro.
- npm is used as the package manager.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

`npm run dev` starts local development, usually at `http://localhost:4321`.

`npm run build` validates and generates the production site into `dist/`.

`npm run preview` serves the production build locally.

## SEO

The build creates real HTML files per route, including each post page. SEO metadata is set in the Astro route files and shared layout. The build also generates `sitemap-index.xml` and includes `robots.txt`.

## Adding Content

Most content lives in `src/data.ts`.

In instance, to add a new survey, add a new object to the `encuestas` array.

The route `/encuestas/mi-nuevo-post` is generated automatically during `npm run build`.

To add a new study, add a new object to the `estudios` array. The generated route will be `/estudios/{slug}`.
