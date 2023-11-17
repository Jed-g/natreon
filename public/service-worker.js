const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), f = [
  t + "/_app/immutable/entry/app.8d28410b.js",
  t + "/_app/immutable/nodes/0.f4337d0e.js",
  t + "/_app/immutable/nodes/1.b3fee860.js",
  t + "/_app/immutable/assets/10.d5b5701a.css",
  t + "/_app/immutable/nodes/10.6c1d015b.js",
  t + "/_app/immutable/nodes/11.b1994622.js",
  t + "/_app/immutable/assets/2.76f3e416.css",
  t + "/_app/immutable/nodes/2.c5510b67.js",
  t + "/_app/immutable/nodes/3.ec67ee78.js",
  t + "/_app/immutable/nodes/4.fd06484c.js",
  t + "/_app/immutable/nodes/5.5fb33ba2.js",
  t + "/_app/immutable/assets/6.cf062968.css",
  t + "/_app/immutable/nodes/6.bd9f4d0f.js",
  t + "/_app/immutable/assets/7.f6273a62.css",
  t + "/_app/immutable/nodes/7.afb021d2.js",
  t + "/_app/immutable/assets/8.9d3d0fbc.css",
  t + "/_app/immutable/nodes/8.f291750c.js",
  t + "/_app/immutable/assets/9.556f629f.css",
  t + "/_app/immutable/nodes/9.842ce1fb.js",
  t + "/_app/immutable/chunks/Icon.bf3e43ac.js",
  t + "/_app/immutable/chunks/LogoutButton.11a20322.js",
  t + "/_app/immutable/chunks/close-box.75461ac6.js",
  t + "/_app/immutable/chunks/each.e59479a4.js",
  t + "/_app/immutable/chunks/index.1aea65ab.js",
  t + "/_app/immutable/chunks/index.6a063d08.js",
  t + "/_app/immutable/chunks/index.cbcae5bf.js",
  t + "/_app/immutable/chunks/index.de19a9b0.js",
  t + "/_app/immutable/chunks/navigation.a1d7492a.js",
  t + "/_app/immutable/assets/navigation.bb366e7e.css",
  t + "/_app/immutable/chunks/scheduler.f5065b4e.js",
  t + "/_app/immutable/chunks/singletons.adceb85f.js",
  t + "/_app/immutable/chunks/spread.84d39b6c.js",
  t + "/_app/immutable/entry/start.b0328e83.js"
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
  t + "/metrics",
  t + "/signup",
  t + "/admin",
  t + "/admin/users",
  t + "/admin/reviews",
  t + "/admin/qa",
  t + "/admin/mailing-list"
], l = "1700195185796", o = self, n = `cache${l}`, m = [...f, ...c, ...p];
o.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(n).then((s) => s.addAll(m)).then(() => o.skipWaiting())
  );
});
o.addEventListener("fetch", (e) => {
  e.request.url.startsWith("http") && e.respondWith(
    fetch(e.request).then((s) => {
      if (!s || s.status !== 200 || s.type !== "basic")
        return s;
      const i = s.clone();
      return caches.open(n).then((a) => {
        try {
          a.put(e.request, i);
        } catch {
        }
      }), s;
    }).catch(async () => await caches.match(e.request) ?? new Response())
  );
});
