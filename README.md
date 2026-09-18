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

For deployment, publish `dist` and configure the host to serve `index.html` for application routes such as `/about` and `/projects/revvity`.

## Browser checks

```sh
npx playwright install chromium
npm test
```

The content and artwork belong to their original owners. The recreation preserves the source site's portfolio copy, including its original dates.
