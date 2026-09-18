import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { build } from 'vite';

// Deliberately no SPA fallback: this models Pages' directory/index.html routing.
const base = '/personal-website/';
const root = resolve('.pages-test');
await build({ base, build: { outDir: root } });
const types = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.webm': 'video/webm', '.mp4': 'video/mp4',
  '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    if (!url.pathname.startsWith(base)) {
      response.writeHead(404).end('Outside the project site');
      return;
    }
    let file = resolve(root, decodeURIComponent(url.pathname.slice(base.length)));
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(404).end();
      return;
    }
    if ((await stat(file)).isDirectory()) {
      if (!url.pathname.endsWith('/')) {
        response.writeHead(301, { Location: url.pathname + '/' + url.search }).end();
        return;
      }
      file = resolve(file, 'index.html');
    }
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Content-Length': body.length });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(await readFile(resolve(root, '404.html')));
  }
}).listen(4174, '127.0.0.1', () => console.log(`Pages test server: http://127.0.0.1:4174${base}`));
