import { useLayoutEffect } from 'react';

// Reveal content groups independently, without adding wrappers to the grids.
const targets = {
  home: '.landingpage.center-aligned > *, .sticker-button, .case-study-card',
  about: '.character-block, .flex-block-38 > *, .recent-favs, .about-page-container .heading-2, .crochet .div-block-19, .crochet .div-block-17, .grid-8.adventures > img',
  resume: '.flex-block-35 > *, .flex-block-37 > .title-2, .grid-5 > *',
  caseStudy: '.banner-image, .case-study-body > .cs-container, .large-image',
};

export function useScrollReveal(page) {
  useLayoutEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    const elements = [...document.querySelectorAll(targets[page])];
    const adjacentMediaGroups = [...document.querySelectorAll(
      '[data-stagger-reveal], .case-study-body .h-flex, .case-study-body [class*="grid"], .case-study-body .cs-media, .case-study-body .tablet-horizontal, .large-image .h-flex, .large-image [class*="grid"]'
    )].filter(group => {
      if (group.hasAttribute('data-stagger-reveal')) return true;
      const mediaChildren = [...group.children].filter(child =>
        child.matches('img, video, picture') || child.querySelector(':scope > img, :scope > video, :scope > picture, :scope > .only-media')
      );
      return mediaChildren.length > 1 && mediaChildren.length === group.children.length;
    });
    adjacentMediaGroups.forEach(group => group.setAttribute('data-stagger-reveal-active', ''));
    const staggered = adjacentMediaGroups.flatMap(group =>
      [...group.children].map((element, index) => {
        element.style.setProperty('--reveal-delay', `${index * 200}ms`);
        return element;
      })
    );
    elements.push(...staggered);
    // Avoid animating both a group and its descendants.
    const groups = elements.filter(element =>
      staggered.includes(element) || !elements.some(parent => parent !== element && parent.contains(element))
    );
    const finish = element => element.classList.remove('reveal-pending', 'reveal-running');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.replace('reveal-pending', 'reveal-running');
        observer.unobserve(entry.target);
      }
    });
    const onEnd = event => {
      if (event.animationName === 'scroll-reveal') finish(event.target);
    };
    const onFocus = event => {
      for (const element of groups) {
        if (element.contains(event.target)) {
          finish(element);
          observer.unobserve(element);
        }
      }
    };
    const showAll = () => {
      if (!motion.matches) return;
      observer.disconnect();
      groups.forEach(finish);
    };
    groups.forEach(element => {
      element.classList.add('reveal-pending');
      observer.observe(element);
      element.addEventListener('animationend', onEnd);
    });
    document.addEventListener('focusin', onFocus);
    motion.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      adjacentMediaGroups.forEach(group => group.removeAttribute('data-stagger-reveal-active'));
      groups.forEach(element => {
        finish(element);
        element.style.removeProperty('--reveal-delay');
        element.removeEventListener('animationend', onEnd);
      });
      document.removeEventListener('focusin', onFocus);
      motion.removeEventListener('change', showAll);
    };
  }, [page]);
}
