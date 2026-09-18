import React, { Suspense, lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import { Navigation, Footer } from './components';
import './fonts.css';
import './reference.css';
import './styles.css';

const routes = {
  '/': { title: 'Home', Component: Home },
  '/about': { title: 'About', Component: lazy(() => import('./pages/About')) },
  '/resume': { title: 'Resume', Component: lazy(() => import('./pages/Resume')) },
  '/projects/revvity': { title: 'Revvity', Component: lazy(() => import('./pages/Revvity')) },
  '/projects/gradeeasy': { title: 'GradeEasy', Component: lazy(() => import('./pages/GradeEasy')) },
  '/projects/plooto': { title: 'Plooto', Component: lazy(() => import('./pages/Plooto')) },
  '/projects/radicalgary': { title: 'RadiCalgary', Component: lazy(() => import('./pages/RadiCalgary')) },
};

function currentLocation() {
  return window.location.pathname.replace(/\/$/, '') + window.location.hash || '/';
}

function App() {
  const [location, setLocation] = useState(currentLocation);
  const path = location.split('#')[0] || '/';
  const route = routes[path];

  useEffect(() => {
    function onNavigate(event) {
      const link = event.target.closest('a');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !routes[url.pathname.replace(/\/$/, '') || '/']) return;
      event.preventDefault();
      window.history.pushState({}, '', url.pathname + url.hash);
      setLocation(currentLocation());
      if (!url.hash) window.scrollTo({ top: 0, behavior: 'instant' });
      else document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
    const onPopState = () => setLocation(currentLocation());
    document.addEventListener('click', onNavigate);
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onNavigate);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  useEffect(() => {
    document.title = `${route?.title || 'Page not found'} | Nancy Huynh`;
    const id = location.split('#')[1];
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
  }, [location, route]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation path={path} projectsActive={location.includes('#projects')} />
    <main id="main" tabIndex={-1} className={path === '/' ? 'home-page' : 'content-page'}>
      <Suspense fallback={<div className="page-loading" role="status">Loading…</div>}>
        {route ? <route.Component /> : <div className="not-found"><h1>Page not found</h1><a href="/">Back to home</a></div>}
      </Suspense>
    </main>
    <Footer />
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
