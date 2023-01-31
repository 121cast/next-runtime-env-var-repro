import getConfig from 'next/config';
import runtimeConfig from './runtimeConfig';

/**
 * Types for NextJS runtime configuration
 * This is defined separately because the `runtimeConfig.js` must be a JavaScript file for `next.config.js`
 * See `runtimeConfig.js` to inject value
 */
export type NextPublicRuntimeConfig = typeof runtimeConfig;

export function getRuntimeConfig(key: keyof NextPublicRuntimeConfig) {
    const isServer = typeof window === 'undefined';

    /**
     * If running server-side, return using the environment variable directly
     */
    if (isServer) {
        return runtimeConfig[key];
    }

    const { publicRuntimeConfig }: { publicRuntimeConfig: NextPublicRuntimeConfig } = getConfig();

    return publicRuntimeConfig[key];
}

export function getRuntimeConfigRequired(key: keyof NextPublicRuntimeConfig) {
    const value = getRuntimeConfig(key);

    if (value === undefined) {
        throw new Error(`Runtime config "${key}" is not defined`);
    }

    return value;
}
