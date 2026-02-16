export const trackEvent = (eventName, data = {}) => {
  if (window.umami && typeof window.umami.track === 'function') {
    window.umami.track(eventName, data);
  }
};

// Track scroll depth
let scrollDepthTracked = {
  25: false,
  50: false,
  75: false,
  100: false
};

export const trackScrollDepth = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  Object.keys(scrollDepthTracked).forEach(depth => {
    if (scrollPercent >= depth && !scrollDepthTracked[depth]) {
      trackEvent('scroll_depth', { depth: `${depth}%` });
      scrollDepthTracked[depth] = true;
    }
  });
};

let startTime = Date.now();
export const trackTimeOnPage = () => {
  const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
  trackEvent("portfolio_time_spent", { seconds: totalSeconds });
};

export const trackSectionView = (sectionName) => {
  trackEvent('section_view', { section: sectionName });
};

