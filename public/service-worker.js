const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), f = [
  t + "/_app/immutable/entry/app.fefbcac7.js",
  t + "/_app/immutable/nodes/0.f4337d0e.js",
  t + "/_app/immutable/nodes/1.27f58c1a.js",
  t + "/_app/immutable/assets/2.76f3e416.css",
  t + "/_app/immutable/nodes/2.53bf5ea4.js",
  t + "/_app/immutable/nodes/3.5b9e4920.js",
  t + "/_app/immutable/assets/4.cf062968.css",
  t + "/_app/immutable/nodes/4.e25d8bc9.js",
  t + "/_app/immutable/assets/5.727bb112.css",
  t + "/_app/immutable/nodes/5.722c1a2b.js",
  t + "/_app/immutable/assets/6.1b880871.css",
  t + "/_app/immutable/nodes/6.ceb52e6b.js",
  t + "/_app/immutable/assets/7.d5b5701a.css",
  t + "/_app/immutable/nodes/7.afdfe7f2.js",
  t + "/_app/immutable/chunks/close-box.d76c3357.js",
  t + "/_app/immutable/chunks/index.1edb9bf8.js",
  t + "/_app/immutable/chunks/index.6a063d08.js",
  t + "/_app/immutable/chunks/index.cbcae5bf.js",
  t + "/_app/immutable/chunks/index.de19a9b0.js",
  t + "/_app/immutable/chunks/navigation.f30b2e61.js",
  t + "/_app/immutable/assets/navigation.9c2e4d3a.css",
  t + "/_app/immutable/chunks/scheduler.f5065b4e.js",
  t + "/_app/immutable/chunks/singletons.efe6e2e6.js",
  t + "/_app/immutable/chunks/spread.fb33f1cf.js",
  t + "/_app/immutable/entry/start.c0483fe1.js"
], c = [
  t + "/apple-store.png",
  t + "/favicon.png",
  t + "/fonts/Geist/Geist-Black.ttf",
  t + "/fonts/Geist/Geist-Black.woff2",
  t + "/fonts/Geist/Geist-Bold.ttf",
  t + "/fonts/Geist/Geist-Bold.woff2",
  t + "/fonts/Geist/Geist-Light.ttf",
  t + "/fonts/Geist/Geist-Light.woff2",
  t + "/fonts/Geist/Geist-Medium.ttf",
  t + "/fonts/Geist/Geist-Medium.woff2",
  t + "/fonts/Geist/Geist-Regular.ttf",
  t + "/fonts/Geist/Geist-Regular.woff2",
  t + "/fonts/Geist/Geist-SemiBold.ttf",
  t + "/fonts/Geist/Geist-SemiBold.woff2",
  t + "/fonts/Geist/Geist-Thin.ttf",
  t + "/fonts/Geist/Geist-Thin.woff2",
  t + "/fonts/Geist/Geist-UltraBlack.ttf",
  t + "/fonts/Geist/Geist-UltraBlack.woff2",
  t + "/fonts/Geist/Geist-UltraLight.ttf",
  t + "/fonts/Geist/Geist-UltraLight.woff2",
  t + "/fonts/GeistMono/GeistMono-Black.ttf",
  t + "/fonts/GeistMono/GeistMono-Black.woff2",
  t + "/fonts/GeistMono/GeistMono-Bold.ttf",
  t + "/fonts/GeistMono/GeistMono-Bold.woff2",
  t + "/fonts/GeistMono/GeistMono-Light.ttf",
  t + "/fonts/GeistMono/GeistMono-Light.woff2",
  t + "/fonts/GeistMono/GeistMono-Medium.ttf",
  t + "/fonts/GeistMono/GeistMono-Medium.woff2",
  t + "/fonts/GeistMono/GeistMono-Regular.ttf",
  t + "/fonts/GeistMono/GeistMono-Regular.woff2",
  t + "/fonts/GeistMono/GeistMono-SemiBold.ttf",
  t + "/fonts/GeistMono/GeistMono-SemiBold.woff2",
  t + "/fonts/GeistMono/GeistMono-Thin.ttf",
  t + "/fonts/GeistMono/GeistMono-Thin.woff2",
  t + "/fonts/GeistMono/GeistMono-UltraBlack.ttf",
  t + "/fonts/GeistMono/GeistMono-UltraBlack.woff2",
  t + "/fonts/GeistMono/GeistMono-UltraLight.ttf",
  t + "/fonts/GeistMono/GeistMono-UltraLight.woff2",
  t + "/fonts/stylesheet.css",
  t + "/icons/icon-128x128.png",
  t + "/icons/icon-144x144.png",
  t + "/icons/icon-152x152.png",
  t + "/icons/icon-192x192.png",
  t + "/icons/icon-384x384.png",
  t + "/icons/icon-512x512.png",
  t + "/icons/icon-72x72.png",
  t + "/icons/icon-96x96.png",
  t + "/iphone.png",
  t + "/logo.svg",
  t + "/manifest.json",
  t + "/map-style.json",
  t + "/nature.jpg",
  t + "/play-store.png"
], p = [
  t + "/",
  t + "/app",
  t + "/login",
  t + "/signup"
], l = "1698784093297", o = self, n = `cache${l}`, G = [...f, ...c, ...p];
o.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(n).then((s) => s.addAll(G)).then(() => o.skipWaiting())
  );
});
o.addEventListener("fetch", (e) => {
  e.request.url.startsWith("http") && e.respondWith(
    fetch(e.request).then((s) => {
      if (!s || s.status !== 200 || s.type !== "basic")
        return s;
      const i = s.clone();
      return caches.open(n).then((a) => {
        a.put(e.request, i);
      }), s;
    }).catch(() => caches.match(e.request).then((s) => s ?? new Response()))
  );
});
