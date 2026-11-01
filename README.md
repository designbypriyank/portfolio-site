# Priyank Savaliya — Portfolio

Static site built with [Astro](https://astro.build). Deploys to Vercel with zero config.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
```

## Where things live
- `src/styles/theme.css` — **theme tokens** (colours, fonts, spacing). Change these to apply your theme.
- `src/data/site.ts` — your name, bio, email, links, resume.
- `src/data/projects.ts` — project cards on the home page.
- `src/pages/work/` — one file per case study.
- `public/images/` — optimised images per project.

## Add a project
1. Add images to `public/images/<project>/`.
2. Add an entry to `src/data/projects.ts`.
3. Copy `src/pages/work/twig-labs.astro` to `src/pages/work/<slug>.astro` and replace the content.
