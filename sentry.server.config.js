// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { sentryConfigShared } from './src/sentry/sentryConfig';

Sentry.init({
  ...sentryConfigShared,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
});
