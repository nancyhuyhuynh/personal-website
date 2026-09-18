# Nancy Huynh — React portfolio

A React recreation of https://nancyhuynh.webflow.io/ using the original portfolio content, artwork, typography, and responsive styles. Images and fonts are served locally. No Webflow or jQuery runtime is required.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run build
npm run preview
```

## Structure

- `src/pages/Home.jsx`: introduction, draggable characters, and project cards
- `src/content.js`: project and illustration data
- `src/pages/`: About, Resume, and four complete case studies, loaded on demand
- `src/components.jsx`: navigation, footer, cards, and pointer/keyboard interactions
- `src/reference.css`: original responsive visual styles
- `src/styles.css`: React interaction and accessibility styles
- `public/assets/`: original images, fonts, and case study videos

Drag the illustrated characters with a mouse or touch. Focus one and use the arrow keys to move it; Escape or a double-click resets its position. The navigation uses browser history and supports direct URLs. External project, LinkedIn, email, and resume PDF links retain their original destinations.

## Deploy to GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. It builds and deploys on pushes to `main`, and can also be run manually from the Actions tab.

1. Open [repository Settings → Pages](https://github.com/ronaldLjin/personal-website/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Commit and push these changes to `main` (including `.github/workflows/deploy-pages.yml`). If already pushed, run **Deploy to GitHub Pages** from the Actions tab.
4. Once the workflow succeeds, visit **https://ronaldLjin.github.io/personal-website/**.

The workflow reads the base path from GitHub Pages, so assets and navigation also work if the repository is renamed or a custom domain is configured. It uses the automatic `GITHUB_TOKEN`; no personal access token is needed. See the [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The build generates an `index.html` for every route, plus `404.html` and `.nojekyll`. Direct links and refreshes on `/personal-website/about/` or `/personal-website/projects/revvity/` therefore work on static hosting without rewrite rules.

To preview the project-site build locally:

```sh
PAGES_BASE_PATH=/personal-website/ npm run build
PAGES_BASE_PATH=/personal-website/ npm run preview
```

Visit `http://localhost:4173/personal-website/`. For a root domain, use `PAGES_BASE_PATH=/` (the default). The deployable files are in `dist`; dependencies and test output are excluded from Git.

## Browser checks

```sh
npx playwright install chromium
npm test
npm run test:pages
```

`test:pages` builds into `.pages-test` and checks all routes, images, fonts, links, refreshes, the 404 page, and video playback on desktop and mobile using a static server under `/personal-website/`. The server has no SPA fallback, so missing page entries cannot be masked by Vite’s development routing.

The content and artwork belong to their original owners. The recreation preserves the source site's portfolio copy, including its original dates.
