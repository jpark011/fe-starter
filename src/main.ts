import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://a6375ca77cde49b58b64c42aad5a46d1@o512486.ingest.sentry.io/5612779',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

// Custom Element Registration
// Remove async function when top-level await is supported
(async () => {
  const { AppSample } = await import(/* webpackChunkName: "app-sample" */ './components/app-sample');

  customElements.get('app-sample') ?? customElements.define('app-sample', AppSample);
})();

// PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then((registration) => {
        console.log(`SW registered: ${registration}`);
      })
      .catch((regError) => {
        console.error(`SW register failed: ${regError}`);
      });
  });
}
