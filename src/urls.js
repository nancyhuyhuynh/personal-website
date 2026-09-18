const base = import.meta.env.BASE_URL;

// Use for site-owned links and public assets; external URLs stay unchanged.
export function withBase(path) {
  return path.startsWith('/') && !path.startsWith('//')
    ? base + path.slice(1)
    : path;
}

export function routeFromPath(pathname) {
  if (pathname === base.slice(0, -1)) return '/';
  if (!pathname.startsWith(base)) return null;
  return '/' + pathname.slice(base.length).replace(/\/$/, '');
}
