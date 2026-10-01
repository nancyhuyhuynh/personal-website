import React from 'react';
import { withBase } from '../../urls';

export default function MilestoneComparison() {
  return <div className="lyft-panel lyft-milestone-map">
    <div className="lyft-milestone-badge"><img src={withBase('/assets/lyft/ffad3.svg')} alt="" /><strong>Five-Star Rider</strong></div>
    <div className="milestone-column"><h3>Current Milestones</h3>{[1, 5, 15, 50, 150].map(count => <div className="milestone-row" key={count}><span>{count} five-star {count === 1 ? 'rating' : 'ratings'}</span>{count === 150 && <span className="milestone-tag ceiling"><img src={withBase('/assets/lyft/d78d6.svg')} alt="" />Ceiling</span>}</div>)}</div>
    <div className="milestone-column"><h3>New Milestones</h3>{['250', '400', '600', '1,000'].map(count => <div className="milestone-row" key={count}><span>{count} five-star ratings</span><span className="milestone-tag"><img src={withBase('/assets/lyft/25f38.svg')} alt="" />New</span></div>)}</div>
  </div>;
}
