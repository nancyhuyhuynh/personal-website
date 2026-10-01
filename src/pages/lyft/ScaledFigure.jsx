import React, { useLayoutEffect, useRef, useState } from 'react';
import './illustrations.css';

// Scale layered illustrations as a unit, preserving their original asset geometry.
export default function ScaledFigure({ width, height, children, label }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const update = () => setScale(ref.current.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [width]);
  return <div ref={ref} className="lyft-scaled-figure" style={{ aspectRatio: `${width} / ${height}` }} role={label ? 'img' : undefined} aria-label={label}>
    <div className="lyft-layered-art" style={{ width, height, transform: `scale(${scale})` }}>{children}</div>
  </div>;
}
