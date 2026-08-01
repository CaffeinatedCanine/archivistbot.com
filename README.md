# Archivist Bot Documentation

This repository contains the documentation site for Archivist Bot, a Discord bot
that creates rich AO3 embeds, handles fanfiction commands, and explains settings,
privacy, and usage.

The site is built with Astro and the Starlight theme. Documentation pages live in
`src/content/docs/` as Markdown and MDX files.

## 🚀 Project Structure

Inside this project, you will find:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- `src/content/docs/` contains the documentation pages.
- `src/assets/` contains images and other media.
- `public/` contains static assets such as icons.
- `src/styles/global.css` contains site-level styling.

## 🧞 Commands

Run these from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build the site to `./dist/`                      |
| `npm run preview`         | Preview the built site locally                   |
| `npm run astro -- --help` | Show Astro CLI help                              |

## 👀 More information

This site uses Astro and Starlight. For framework details, see:

- [Astro documentation](https://docs.astro.build)
- [Starlight documentation](https://starlight.astro.build)
