import type { Options } from '@sentry/types';
import { getRuntimeConfig } from '../environment/next.publicRuntimeConfig';

export const sentryConfigShared: Options = {
    dsn: getRuntimeConfig('sentryDsn'),
    environment: getRuntimeConfig('sentryEnvironment'),
};
