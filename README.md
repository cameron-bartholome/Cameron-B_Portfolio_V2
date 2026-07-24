# Cameron Bartholome — Portfolio

A single-page Astro portfolio with anchor navigation (Hero, About, Career Journey,
How I Think, Continuous Learning, My Work, Contact) plus a project case-study page
for each entry in **My Work**, generated from Markdown via Astro Content Collections.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the production build
```

## Adding a new project

Projects live in `src/content/projects/` and are the only part of this site backed
by a content collection — everything else (About, Career Journey, How I Think,
Continuous Learning, Contact) is normal Astro markup you'd edit directly.

1. Duplicate `src/content/projects/_template.md` to a new file in the same folder,
   named after your project, e.g. `src/content/projects/safetymaze.md`.
   (Filenames starting with `_` are ignored by Astro's content collections, which
   is why the template itself never shows up as a project — leave it in place as
   the thing you copy from.)
2. Fill in the frontmatter at the top of your new file:
   - `title`, `category` (e.g. `Vorago`, `Digital Tools`, `Mechanical`), `status`
     (e.g. `In development`, `Paused / exploratory`, `Complete`), `summary`
   - `technologies` — a list shown as chips on the card
   - `role`, `domain`, `year` — optional, shown on the project detail page
   - `date` — used for sorting (newest first)
   - `order` — optional; if set, it overrides date-based sorting (lower sorts
     earlier), useful for pinning a project to a specific position
   - `coverImage` — optional path under `public/images/projects/...` for the card
     and hero image; leave it out to fall back to a placeholder block
   - `draft` — leave `true` while you're still writing, set to `false` to publish
3. Write the body using the `##` section headings already in the template
   (Overview, The problem, Requirements and constraints, System breakdown, Concepts
   considered, Design and development, CAD/calculations, Prototype, Testing and
   observations, Problems and iterations, Final outcome, Lessons learned, Next
   steps). Delete any headings that don't apply, reorder them, or add your own —
   whatever headings exist in the body automatically become the "Contents" sidebar
   on the project page, in order.
4. Add any images to `public/images/projects/your-project-slug/` and reference them
   either as `coverImage` in the frontmatter or inline in the body with standard
   markdown image syntax: `![Alt text](/images/projects/your-project-slug/photo.jpg)`.
5. Set `draft: false` when it's ready to publish.
6. Commit and push. Astro picks it up automatically:
   - a card appears in **My Work**, sorted correctly, with its category/status/tech
     badges
   - a full detail page is generated at `/projects/your-project-slug/`
   - draft projects (and the `_template.md` file) never appear anywhere

No other file needs to change to add, edit, reorder, or unpublish a project.

## Updating Career Journey

Career Journey content lives in `src/data/career.ts`, not in a content collection,
since it changes rarely and has a fixed shape (current role, previous role, future
direction). To add a new role once one exists:

1. Open `src/data/career.ts`.
2. Add a new object to the `careerStages` array (or edit an existing one) — set
   `active: true` on whichever stage is your current role; only one stage should be
   marked `active` at a time, since it's rendered as the highlighted "current role"
   card.
3. Optionally add a `parallel` entry to a stage for a role that ran alongside it
   (used for the weekend cleanroom role alongside the first design role).
4. `futureStages` and `openDirection` describe the "Where this could lead" block at
   the bottom of the section — edit these directly as your direction evolves.

No component changes are needed — `src/components/CareerJourney.astro` renders
directly from this file.

## Project structure

```text
src/
├── components/       Reusable page sections and UI pieces
├── content/
│   ├── config.ts      Content collection schema (projects only)
│   └── projects/       One Markdown file per project + _template.md
├── data/
│   └── career.ts       Career Journey content
├── layouts/
│   ├── BaseLayout.astro     Shared <head>, fonts, global reveal-on-scroll script
│   └── ProjectLayout.astro  Chrome for individual project pages
├── pages/
│   ├── index.astro           The single-page site
│   └── projects/[slug].astro Dynamic project detail route
└── styles/
    ├── tokens.css     Design tokens (colors, fonts, spacing) as CSS variables
    └── global.css     Resets, base typography, reduced-motion handling

public/
└── images/projects/   Project images, one subfolder per project
```
