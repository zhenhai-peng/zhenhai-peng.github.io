# zhenhai-peng.github.io

Personal website and blog built with Astro. Supports English and Chinese.

**Live site:** https://zhenhai-peng.github.io

## Tech Stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org) — type safety

## Features

- Bilingual (EN / 中文) with per-page language switching
- Blog with Markdown support and per-post translations
- Scroll reveal, cursor glow, 3D card tilt, magnetic buttons
- Deployed to GitHub Pages via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Writing a Blog Post

Create a folder under `src/content/blog/` with the post slug, then add `en.md` and/or `zh.md`:

```
src/content/blog/
└── my-post/
    ├── en.md
    └── zh.md
```

Each file needs this frontmatter:

```yaml
---
title: "Post Title"
description: "Short description"
pubDate: 2026-01-01
tags: ["tag1", "tag2"]
draft: false
---
```

## Deployment

Automatically deploys to GitHub Pages on every push to `main` via GitHub Actions.
