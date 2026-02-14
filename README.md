# Ato.Sys Documentation

Astro + Starlight documentation site for Capsule platform.

## Overview

This documentation site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build/), featuring:

- English language content (default)
- Custom Ato.Sys design system
- Pagefind search integration
- MDX support for interactive components
- Responsive layout with custom sidebar

## Project Structure

```
.
├── src/
│   ├── components/          # Custom Astro components
│   │   ├── Header.astro     # Top navigation
│   │   ├── Sidebar.astro    # Left sidebar
│   │   ├── TocSidebar.astro # Right TOC
│   │   └── DocsLayout.astro # Main layout wrapper
│   ├── content/
│   │   └── docs/           # Documentation pages (MDX)
│   │       ├── index.mdx           # Overview
│   │       ├── getting-started.mdx
│   │       ├── core-concepts.mdx
│   │       ├── cli-reference.mdx
│   │       ├── publish-guideline.mdx
│   │       └── future-roadmap.mdx
│   └── styles/
│       └── custom.css      # Custom design system styles
├── astro.config.mjs        # Astro configuration
└── TODO.md                 # Machine translation roadmap
```

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## Design System

The site uses a custom design system based on the original HTML template:

- **Colors**: CSS variables in `src/styles/custom.css`
- **Typography**: DM Sans for body, JetBrains Mono for code
- **Components**: Custom cards, info boxes, code blocks
- **Layout**: 280px sidebar, max 800px content width

## Content

Documentation pages are written in MDX format in `src/content/docs/`:

- Use markdown for basic formatting
- Use HTML for custom layouts when needed
- Use `:::tip`, `:::caution`, `:::note` for callouts
- Code blocks use standard markdown fences with language

## Future: Machine Translation

See `TODO.md` for planned machine translation framework implementation to support multiple languages.

## License

Part of the Capsule project.
