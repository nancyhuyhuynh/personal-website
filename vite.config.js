import { defineConfig } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pageTitles } from './src/routes.js';

// Pages serves static files; emit a real entry for every client-side route.
function staticPages() {
  let outDir;
  return {
    name: 'static-page-entries',
    apply: 'build',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir); },
    async closeBundle() {
      const html = await readFile(resolve(outDir, 'index.html'), 'utf8');
      for (const [route, title] of Object.entries(pageTitles)) {
        if (route === '/') continue;
        const directory = resolve(outDir, route.slice(1));
        await mkdir(directory, { recursive: true });
        await writeFile(resolve(directory, 'index.html'), html.replace('<title>Home | Nancy Huynh</title>', `<title>${title} | Nancy Huynh</title>`));
      }
      await writeFile(resolve(outDir, '404.html'), html.replace('<title>Home | Nancy Huynh</title>', '<title>Page not found | Nancy Huynh</title>'));
      await writeFile(resolve(outDir, '.nojekyll'), '');
    },
  };
}

export default defineConfig({
  base: process.env.PAGES_BASE_PATH || '/',
  esbuild: { jsx: 'automatic' },
  plugins: [staticPages()],
});
