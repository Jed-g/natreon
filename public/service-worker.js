const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), c = [
  e + "/_app/immutable/entry/app.ed591538.js",
  e + "/_app/immutable/nodes/0.f4337d0e.js",
  e + "/_app/immutable/nodes/1.a293d78d.js",
  e + "/_app/immutable/assets/2.76f3e416.css",
  e + "/_app/immutable/nodes/2.57171c7f.js",
  e + "/_app/immutable/nodes/3.c526f9f2.js",
  e + "/_app/immutable/assets/4.2db83781.css",
  e + "/_app/immutable/nodes/4.60eabe61.js",
  e + "/_app/immutable/nodes/5.d79ecd68.js",
  e + "/_app/immutable/nodes/6.ef3e3d5b.js",
  e + "/_app/immutable/assets/7.d5b5701a.css",
  e + "/_app/immutable/nodes/7.afdfe7f2.js",
  e + "/_app/immutable/chunks/close-box.7d8f5253.js",
  e + "/_app/immutable/chunks/index.1edb9bf8.js",
  e + "/_app/immutable/chunks/index.6a063d08.js",
  e + "/_app/immutable/chunks/index.cbcae5bf.js",
  e + "/_app/immutable/chunks/index.de19a9b0.js",
  e + "/_app/immutable/chunks/navigation.2ee3ede2.js",
  e + "/_app/immutable/assets/navigation.e6255157.css",
  e + "/_app/immutable/chunks/scheduler.f5065b4e.js",
  e + "/_app/immutable/chunks/singletons.a6dda5eb.js",
  e + "/_app/immutable/chunks/spread.84d39b6c.js",
  e + "/_app/immutable/entry/start.a8e65340.js"
], o = [
  e + "/apple-store.png",
  e + "/favicon.png",
  e + "/icons/icon-128x128.png",
  e + "/icons/icon-144x144.png",
  e + "/icons/icon-152x152.png",
  e + "/icons/icon-192x192.png",
  e + "/icons/icon-384x384.png",
  e + "/icons/icon-512x512.png",
  e + "/icons/icon-72x72.png",
  e + "/icons/icon-96x96.png",
  e + "/iphone.png",
  e + "/logo.svg",
  e + "/manifest.json",
  e + "/map-style.json",
  e + "/nature.jpg",
  e + "/play-store.png"
], m = [
  e + "/",
  e + "/app",
  e + "/login",
  e + "/signup"
], u = "1698361163070", n = self, t = `cache${u}`, l = [...c, ...o, ...m];
n.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(t).then((s) => s.addAll(l)).then(() => n.skipWaiting())
  );
});
n.addEventListener("fetch", (a) => {
  a.request.url.startsWith("http") && a.respondWith(
    fetch(a.request).then((s) => {
      if (!s || s.status !== 200 || s.type !== "basic")
        return s;
      const p = s.clone();
      return caches.open(t).then((i) => {
        i.put(a.request, p);
      }), s;
    }).catch(() => caches.match(a.request).then((s) => s ?? new Response()))
  );
});
