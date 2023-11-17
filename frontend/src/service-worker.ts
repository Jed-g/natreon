/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, prerendered, version } from '$service-worker';

const cacheId = `cache${version}`;

const cachePayloadArr = [...build, ...files, ...prerendered];

sw.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(cacheId)
			.then((cache) => cache.addAll(cachePayloadArr))
			.then(() => sw.skipWaiting())
	);
});

sw.addEventListener('fetch', (event) => {
	if (!event.request.url.startsWith('http')) {
		return;
	}
	event.respondWith(
		fetch(event.request)
			.then((response) => {
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				const responseToCache = response.clone();

				caches.open(cacheId).then((cache) => {
					try {
						cache.put(event.request, responseToCache);
					} catch (error) {}
				});

				return response;
			})
			.catch(async () => {
				const response = await caches.match(event.request);
				return response ?? new Response();
			})
	);
});
