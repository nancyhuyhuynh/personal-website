import React from 'react';
import { withBase } from './urls';

// Keep Figma's 580 × 350 artwork coordinates while scaling the whole illustration.
export default function LyftProjectCover() {
  return <svg className="lyft-project-art" viewBox="0 0 580 350" role="img" aria-label="Lyft Rider Badges mobile screens, shipped">
    <rect className="lyft-project-panel" x="42.5" y="2.5" width="495" height="345" rx="7.5" />
    <image href={withBase('/assets/lyft-card-artwork.png')} x="50" y="68" width="480" height="214" />
    <image className="lyft-project-default" href={withBase('/assets/lyft-card-corner-logo.svg')} x="0" y="230" width="80" height="80" />
    <image className="lyft-project-hover" href={withBase('/assets/lyft-card-corner-logo-hover.svg')} x="0" y="230" width="80" height="80" />
    <rect className="lyft-project-shipped" x="502.5" y="42.5" width="75" height="75" rx="7.5" />
    <image className="lyft-project-default" href={withBase('/assets/lyft-card-star.svg')} x="523.518" y="53.776" width="32.9645" height="31.5474" />
    <image className="lyft-project-hover" href={withBase('/assets/lyft-card-star-hover.svg')} x="523.518" y="53.776" width="32.9645" height="31.5474" />
    <text className="lyft-project-shipped-label" x="540" y="105" textAnchor="middle">SHIPPED</text>
  </svg>;
}
