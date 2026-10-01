import React from 'react';
import { withBase } from '../../urls';

export default function EntryPointDiagram() {
  return <div className="lyft-panel lyft-entry-diagram">
    <img className="entry-home" src={withBase('/assets/lyft/c0242.png')} alt="Homepage display card" loading="lazy" />
    <img className="entry-menu" src={withBase('/assets/lyft/d5298.png')} alt="You tab carousel" loading="lazy" />
    <div className="entry-highlight home" /><div className="entry-highlight menu" />
    <span className="entry-label home">Display card</span><span className="entry-label menu">You tab carousel</span>
    <div className="entry-arrow home"><img src={withBase('/assets/lyft/527fb.svg')} alt="" /></div>
    <div className="entry-arrow menu"><img src={withBase('/assets/lyft/b5366.svg')} alt="" /></div>
  </div>;
}
