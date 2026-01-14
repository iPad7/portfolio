import { useEffect } from 'react';

const PAGE_WIDTH = 1123;
const PAGE_HEIGHT = 794;
const MIN_SCALE = 0.45;
const PADDING = 32;

const setCssVar = (name, value) => {
  document.documentElement.style.setProperty(name, value);
};

const updateScale = (container) => {
  const width = container?.clientWidth ?? window.innerWidth;
  const height = window.innerHeight;
  const availableWidth = Math.max(width - PADDING * 2, 0);
  const availableHeight = Math.max(height - PADDING * 2, 0);
  const scale = Math.min(availableWidth / PAGE_WIDTH, availableHeight / PAGE_HEIGHT, 1);
  const safeScale = Number.isFinite(scale) ? Math.max(scale, MIN_SCALE) : 1;

  setCssVar('--page-scale', safeScale.toFixed(3));
  setCssVar('--page-scale-width', `${Math.round(PAGE_WIDTH * safeScale)}px`);
  setCssVar('--page-scale-height', `${Math.round(PAGE_HEIGHT * safeScale)}px`);
};

const useA4Scale = (containerRef) => {
  useEffect(() => {
    if (!containerRef?.current) {
      updateScale(null);
      return undefined;
    }

    const observer = new ResizeObserver(() => updateScale(containerRef.current));
    observer.observe(containerRef.current);
    updateScale(containerRef.current);

    const handleResize = () => updateScale(containerRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef]);
};

export default useA4Scale;
