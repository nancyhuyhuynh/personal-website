import { useLayoutEffect } from 'react';
import { withBase } from './urls';

export function useColouredBackground() {
  useLayoutEffect(() => {
    const previousClass = document.body.className;
    const previousImage = document.body.style.backgroundImage;
    document.body.className = 'body bg-colour';
    document.body.style.backgroundImage = `url("${withBase('/assets/about-background.png')}")`;
    return () => {
      document.body.className = previousClass;
      document.body.style.backgroundImage = previousImage;
    };
  }, []);
}
