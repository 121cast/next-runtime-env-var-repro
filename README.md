## next-runtime-env-var-repro

When using `@sentry/nextjs` `v7.33.0`, the following is shown in the browser console when running this example app:

```
[Log] sentryDsn – "https://1234@o1234.ingest.sentry.io/12341234" (_app-b26dea273607caee.js, line 11)
[Log] sentryEnvironment – "Production" (_app-b26dea273607caee.js, line 11)
```

---

When using `@sentry/nextjs` `v7.34.0`, the following is shown in the browser console when running this example app:

```
[Error] TypeError: Right side of assignment cannot be destructured
	a (main-6e28a7a0f7042600.js:14:93518)
	(anonymous function) (main-6e28a7a0f7042600.js:14:14382)
	u (webpack-94547de1949c56d7.js:1:157)
	t (main-6e28a7a0f7042600.js:14:103390)
	(anonymous function) (main-6e28a7a0f7042600.js:14:103430)
	(anonymous function) (webpack-94547de1949c56d7.js:1:570)
	(anonymous function) (main-6e28a7a0f7042600.js:14:103455)
	n (webpack-94547de1949c56d7.js:1:1669)
	n
	Global Code (main-6e28a7a0f7042600.js:1)
```

---

I believe this is because [this change](https://github.com/getsentry/sentry-javascript/pull/6927/files#diff-d8672a67805979e70e5fe8b85aa0e28dcbb716927c395674d09cbfdb0899a982R236) where the Sentry initialization is performed before Next calls `setConfig` with the public runtime config data, and thus our call to `getConfig` returns `undefined`, hence the destructor error above when we [attempt to deconstruct the object here](https://github.com/121cast/next-runtime-env-var-repro/blob/main/src/environment/next.publicRuntimeConfig.ts#L21).