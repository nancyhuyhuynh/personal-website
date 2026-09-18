import React from 'react';

import { useRef, useState } from 'react';

export function Navigation({ path, projectsActive }) {
  const links = [['Home', '/'], ['Projects', '/#projects'], ['About', '/about'], ['Resume', '/resume']];
  return <header className="navbar-2">
    <nav className="nav-menu-4" aria-label="Main navigation">
      <a href="/" className="brand-link" aria-label="Nancy Huynh home"><img src="/assets/68eda3953dccfdef218d1e04_nancysLogo.png" width="40" height="40" alt="" /></a>
      {links.map(([label, href]) => {
        const active = label === 'Projects' ? projectsActive : path === href && !projectsActive;
        return <a key={href} href={href} className={`body-1 navbar nav-link w-nav-link${active ? ' w--current' : ''}`} aria-current={active ? 'page' : undefined}>{label}</a>;
      })}
    </nav>
  </header>;
}

export function Footer() {
  return <footer className="footer">
    <div className="container-4 w-container">
      <div className="div-block-9">
        <div className="w-layout-hflex flex-block-12">
          <img src="/assets/66cca46979940782c5945e07_Bunny.png" alt="" className="image-10" loading="lazy" />
          <div className="body-2-light white">Made with love by Nancy.</div>
        </div>
        <div className="w-layout-hflex flex-block-11">
          <a href="https://www.linkedin.com/in/nancy-huynh1/" target="_blank" rel="noreferrer" className="text-brand-icon" aria-label="Nancy on LinkedIn">&#xf08c;</a>
          <a href="mailto:n4huynh@uwaterloo.ca" className="text-icon" aria-label="Email Nancy">&#xf0e0;</a>
        </div>
      </div>
    </div>
  </footer>;
}

export function DraggableSticker({ sticker, index }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const origin = useRef(null);
  function finish(event) {
    origin.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }
  return <button
    className={`${sticker.className} sticker-button${dragging ? ' is-dragging' : ''}`}
    aria-label={`Move illustrated character ${index + 1}. Use arrow keys to move, Escape to reset.`}
    style={{ transform: `translate(${position.x}px, ${position.y}px)`, zIndex: dragging ? 20 : 10 }}
    onPointerDown={event => {
      if (event.button !== 0) return;
      origin.current = { x: event.clientX - position.x, y: event.clientY - position.y };
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }}
    onPointerMove={event => {
      if (origin.current) setPosition({ x: event.clientX - origin.current.x, y: event.clientY - origin.current.y });
    }}
    onPointerUp={finish}
    onPointerCancel={finish}
    onDoubleClick={() => setPosition({ x: 0, y: 0 })}
    onKeyDown={event => {
      const changes = { ArrowLeft: [-10, 0], ArrowRight: [10, 0], ArrowUp: [0, -10], ArrowDown: [0, 10] };
      if (event.key === 'Escape') setPosition({ x: 0, y: 0 });
      if (!changes[event.key]) return;
      event.preventDefault();
      const [x, y] = changes[event.key];
      setPosition(p => ({ x: p.x + x, y: p.y + y }));
    }}
  >
    <img className="top-character-image" src={sticker.top} alt="" draggable="false" />
    <img className="bottom-character-image" src={sticker.bottom} alt="" draggable="false" />
    <img className="empty-character" src={sticker.spacer} alt="" draggable="false" />
  </button>;
}

export function ProjectCard({ project }) {
  return <article className="w-layout-grid case-study-card">
    <div className="w-layout-vflex case-study-text">
      <div className="w-layout-vflex flex-block-53">
        <div className={`w-layout-hflex logo-chip ${project.id}`}>
          <img src={project.logo} className="project-logo" alt="" loading="lazy" />
          <div className={`body-1 medium${project.id === 'revvity' ? '' : ' white'}`}>{project.company}</div>
        </div>
        <h2 className="heading-2">{project.title}</h2>
        <div className="w-layout-hflex chip-container">{project.tags.map((tag, index) => <div key={tag} className={`company-tag feature-tag${index === 0 ? ' mobile-s--hidden' : ''}`}><div className="body-1 grey">{tag}</div></div>)}</div>
        <p className="body-1 project-description">{project.description}</p>
      </div>
      <a href={`/projects/${project.id}`} className="link-block-5 w-inline-block" aria-label={`Read the ${project.company} case study`}>
        <div className="w-layout-hflex black-button-arrow"><span className="body-1 white">Read the Case Study</span><img className="button-arrow" src="/assets/67d75631937bee50f3e4c1a8_Icons.png" alt="" /></div>
      </a>
    </div>
    <a href={`/projects/${project.id}`} className="cs-cover-link w-inline-block" aria-label={`Explore ${project.company}`}>
      <div className="div-card-image">
        <img className="top-card-image" src={project.top} alt={`${project.company} project preview`} loading="lazy" />
        <img className="bottom-card-image" src={project.bottom} alt="" loading="lazy" />
        <img src={project.spacer} alt="" loading="lazy" />
      </div>
    </a>
  </article>;
}
