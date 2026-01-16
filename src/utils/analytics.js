export const trackEvent = (eventName, data = {}) => {
  if (window.umami && typeof window.umami.track === 'function') {
    window.umami.track(eventName, data);
  }
};

