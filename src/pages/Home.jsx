import { withBase } from '../urls';
import React, { useState } from 'react';

import { DraggableSticker, ProjectCard } from '../components';
import { projects, stickers, heroIcons } from '../content';

let hasDraggedCharacter = false;

export default function Home() {
  const [showDragHint, setShowDragHint] = useState(!hasDraggedCharacter);
  function dismissDragHint() {
    hasDraggedCharacter = true;
    setShowDragHint(false);
  }
  const [colouredIcons, setColouredIcons] = useState({});
  const colourIcon = index => setColouredIcons(previous => ({ ...previous, [index]: true }));
  return <div className="w-layout-vflex home-container-draggable">
    <div className="home-background" aria-hidden="true">
      {['head-left', 'header-right', 'revvity', 'gradeeasy', 'plooto', 'radicalgary'].map(name => <div key={name} className={`bg-colour-blur ${name}`} />)}
    </div>
    <section className="w-layout-vflex home-header" aria-label="Introduction">
      <div className="w-layout-vflex center-aligned landingpage">
        <h1 className="title-1 hero-title">Hi, I'm <a href={withBase('/about')}><em>Nancy</em></a>!</h1>
        <div className="headinglandingpage">Designing thoughtful, human-centred solutions as a systems design engineer @UWaterloo</div>
        <div className="w-layout-hflex h-flex landingpage hero-icons" aria-label="Art, engineering, and Waterloo">
          {heroIcons.map((icon, index) => <div key={icon.top} className={`header-text-image${colouredIcons[index] ? ' is-coloured' : ''}`} onPointerEnter={() => colourIcon(index)} onPointerDown={() => colourIcon(index)} onFocus={() => colourIcon(index)} tabIndex={0} aria-label={['An artist’s palette', 'An engineering gear', 'A Waterloo goose'][index]}>
            <img className="top" src={icon.top} alt="" />
            <img className="bottom" src={icon.bottom} alt="" />
          </div>)}
        </div>
        <a href={withBase('/#projects')} className="body-1 center-aligned projects-prompt">See my projects below!</a>
      </div>
    </section>
    <div className="w-layout-hflex characters" aria-label="Draggable illustrated characters">
      {stickers.map((sticker, index) => <DraggableSticker key={sticker.top} sticker={sticker} index={index} showDragHint={showDragHint} onDragged={dismissDragHint} />)}
    </div>
    <section className="w-layout-blockcontainer container-5 w-container" id="projects" aria-label="Selected projects">
      <div className="w-layout-vflex div-all-case-study-cards">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  </div>;
}
