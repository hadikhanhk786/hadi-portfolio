// GoatCounter (privacy-friendly, no cookies). Enabled only when REACT_APP_GOATCOUNTER is set to your
// GoatCounter code (the "xxx" in xxx.goatcounter.com).
const code = process.env.REACT_APP_GOATCOUNTER;

export function initAnalytics() {
  if (!code || document.getElementById('goatcounter')) return;
  window.goatcounter = { no_onload: true }; // we count SPA page views ourselves
  const s = document.createElement('script');
  s.id = 'goatcounter';
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
  document.body.appendChild(s);
}

export function trackPage(path) {
  if (code) window.goatcounter?.count?.({ path });
}

export function trackEvent(name) {
  if (code) window.goatcounter?.count?.({ path: name, event: true });
}
