/**
 * Inject values from environment variables into NextJS runtime configuration
 * Environment variables can be defined in `.env.runtime.XXX` files which are loaded by dotenv-cli during app startup
 *
 * Loaded into NextJS by `next.config.js` `publicRuntimeConfig`
 * https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
 *
 * To consume, use `getRuntimeConfig()` or `getRuntimeConfigRequired()` see `next.publicRuntimeConfig.ts`
 *
 * IMPORTANT NOTE: all values defined here WILL BE rendered as CLEAR TEXT into the CLIENT HTML output
 * DO NOT REFERENCE ANY SECRET VALUES HERE
 */

module.exports = {
    sentryDsn: process.env['SENTRY_DSN'],
    sentryEnvironment: process.env['SENTRY_ENVIRONMENT'],
};
