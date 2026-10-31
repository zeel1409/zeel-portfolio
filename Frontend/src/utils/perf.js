/** Skip cinematic extras on slow/mobile loads so LCP can paint immediately. */
export function shouldSkipBoot() {
  if (typeof window === 'undefined') return true;

  try {
    if (sessionStorage.getItem('zeel-booted')) return true;
  } catch {
    /* private mode */
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  if (window.matchMedia('(max-width: 768px)').matches) return true;
  if (navigator.connection?.saveData) return true;

  return false;
}

export function isCompactViewport() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(max-width: 768px)').matches;
}
