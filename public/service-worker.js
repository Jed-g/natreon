const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), f = [
  s + "/_app/immutable/entry/app.81588f10.js",
  s + "/_app/immutable/nodes/0.cb028b83.js",
  s + "/_app/immutable/nodes/1.2269105a.js",
  s + "/_app/immutable/assets/10.bb44c373.css",
  s + "/_app/immutable/nodes/10.175f780e.js",
  s + "/_app/immutable/assets/11.6a477bc9.css",
  s + "/_app/immutable/nodes/11.ab124836.js",
  s + "/_app/immutable/assets/12.d5b5701a.css",
  s + "/_app/immutable/nodes/12.c276f6d9.js",
  s + "/_app/immutable/nodes/13.3a311eea.js",
  s + "/_app/immutable/assets/2.19a11ec7.css",
  s + "/_app/immutable/nodes/2.cb000a0b.js",
  s + "/_app/immutable/assets/global.763249ad.css",
  s + "/_app/immutable/assets/3.76f3e416.css",
  s + "/_app/immutable/nodes/3.99004f57.js",
  s + "/_app/immutable/nodes/4.ce2673af.js",
  s + "/_app/immutable/nodes/5.a4fcc054.js",
  s + "/_app/immutable/assets/6.19a63dc8.css",
  s + "/_app/immutable/nodes/6.8556579a.js",
  s + "/_app/immutable/assets/7.9a21b2e6.css",
  s + "/_app/immutable/nodes/7.81bb2332.js",
  s + "/_app/immutable/nodes/8.3a311eea.js",
  s + "/_app/immutable/assets/9.f2d2ca72.css",
  s + "/_app/immutable/nodes/9.cfa08738.js",
  s + "/_app/immutable/chunks/Icon.f5e83453.js",
  s + "/_app/immutable/chunks/LogoutButton.cb0b4036.js",
  s + "/_app/immutable/chunks/close-box.75461ac6.js",
  s + "/_app/immutable/chunks/each.8eb97166.js",
  s + "/_app/immutable/chunks/index.7fe2b75d.js",
  s + "/_app/immutable/chunks/index.aaf978d9.js",
  s + "/_app/immutable/chunks/index.b510b619.js",
  s + "/_app/immutable/chunks/index.ef04b1b2.js",
  s + "/_app/immutable/chunks/scheduler.89cb64c0.js",
  s + "/_app/immutable/chunks/singletons.f36f1d8d.js",
  s + "/_app/immutable/chunks/spread.84d39b6c.js",
  s + "/_app/immutable/entry/start.8c0ff830.js"
], p = [
  s + "/apple-store.png",
  s + "/favicon.png",
  s + "/fonts/Geist/Geist-Black.ttf",
  s + "/fonts/Geist/Geist-Black.woff2",
  s + "/fonts/Geist/Geist-Bold.ttf",
  s + "/fonts/Geist/Geist-Bold.woff2",
  s + "/fonts/Geist/Geist-Light.ttf",
  s + "/fonts/Geist/Geist-Light.woff2",
  s + "/fonts/Geist/Geist-Medium.ttf",
  s + "/fonts/Geist/Geist-Medium.woff2",
  s + "/fonts/Geist/Geist-Regular.ttf",
  s + "/fonts/Geist/Geist-Regular.woff2",
  s + "/fonts/Geist/Geist-SemiBold.ttf",
  s + "/fonts/Geist/Geist-SemiBold.woff2",
  s + "/fonts/Geist/Geist-Thin.ttf",
  s + "/fonts/Geist/Geist-Thin.woff2",
  s + "/fonts/Geist/Geist-UltraBlack.ttf",
  s + "/fonts/Geist/Geist-UltraBlack.woff2",
  s + "/fonts/Geist/Geist-UltraLight.ttf",
  s + "/fonts/Geist/Geist-UltraLight.woff2",
  s + "/fonts/GeistMono/GeistMono-Black.ttf",
  s + "/fonts/GeistMono/GeistMono-Black.woff2",
  s + "/fonts/GeistMono/GeistMono-Bold.ttf",
  s + "/fonts/GeistMono/GeistMono-Bold.woff2",
  s + "/fonts/GeistMono/GeistMono-Light.ttf",
  s + "/fonts/GeistMono/GeistMono-Light.woff2",
  s + "/fonts/GeistMono/GeistMono-Medium.ttf",
  s + "/fonts/GeistMono/GeistMono-Medium.woff2",
  s + "/fonts/GeistMono/GeistMono-Regular.ttf",
  s + "/fonts/GeistMono/GeistMono-Regular.woff2",
  s + "/fonts/GeistMono/GeistMono-SemiBold.ttf",
  s + "/fonts/GeistMono/GeistMono-SemiBold.woff2",
  s + "/fonts/GeistMono/GeistMono-Thin.ttf",
  s + "/fonts/GeistMono/GeistMono-Thin.woff2",
  s + "/fonts/GeistMono/GeistMono-UltraBlack.ttf",
  s + "/fonts/GeistMono/GeistMono-UltraBlack.woff2",
  s + "/fonts/GeistMono/GeistMono-UltraLight.ttf",
  s + "/fonts/GeistMono/GeistMono-UltraLight.woff2",
  s + "/fonts/stylesheet.css",
  s + "/icons/icon-128x128.png",
  s + "/icons/icon-144x144.png",
  s + "/icons/icon-152x152.png",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/icons/icon-72x72.png",
  s + "/icons/icon-96x96.png",
  s + "/iphone.png",
  s + "/logo.svg",
  s + "/manifest.json",
  s + "/map-style.json",
  s + "/nature.jpg",
  s + "/play-store.png"
], c = [
  s + "/",
  s + "/app",
  s + "/login",
  s + "/metrics",
  s + "/questions",
  s + "/reviews",
  s + "/signup",
  s + "/admin",
  s + "/admin/users",
  s + "/admin/reviews",
  s + "/admin/qa",
  s + "/admin/mailing-list"
], l = "1700440778560", o = self, i = `cache${l}`, m = [...f, ...p, ...c];
o.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(i).then((t) => t.addAll(m)).then(() => o.skipWaiting())
  );
});
o.addEventListener("fetch", (e) => {
  e.request.url.startsWith("http") && e.respondWith(
    fetch(e.request).then((t) => {
      if (!t || t.status !== 200 || t.type !== "basic")
        return t;
      const n = t.clone();
      return caches.open(i).then((a) => {
        try {
          a.put(e.request, n);
        } catch {
        }
      }), t;
    }).catch(async () => await caches.match(e.request) ?? new Response())
  );
});
