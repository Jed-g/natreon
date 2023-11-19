const t = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), f = [
  t + "/_app/immutable/entry/app.608db4d5.js",
  t + "/_app/immutable/nodes/0.cb028b83.js",
  t + "/_app/immutable/nodes/1.58736e48.js",
  t + "/_app/immutable/assets/10.d5b5701a.css",
  t + "/_app/immutable/nodes/10.727d5fd1.js",
  t + "/_app/immutable/nodes/11.3a311eea.js",
  t + "/_app/immutable/assets/2.76f3e416.css",
  t + "/_app/immutable/nodes/2.8dd518c1.js",
  t + "/_app/immutable/assets/global.e3cd15d9.css",
  t + "/_app/immutable/nodes/3.58db0c3d.js",
  t + "/_app/immutable/nodes/4.7814ea3a.js",
  t + "/_app/immutable/nodes/5.d197139a.js",
  t + "/_app/immutable/assets/6.cf062968.css",
  t + "/_app/immutable/nodes/6.35acc66d.js",
  t + "/_app/immutable/assets/7.a2a6c0cf.css",
  t + "/_app/immutable/nodes/7.0e78511b.js",
  t + "/_app/immutable/assets/8.88f9be1b.css",
  t + "/_app/immutable/nodes/8.09eb9eb6.js",
  t + "/_app/immutable/assets/9.207ad9d3.css",
  t + "/_app/immutable/nodes/9.1000da6b.js",
  t + "/_app/immutable/chunks/Icon.3c8da370.js",
  t + "/_app/immutable/chunks/LogoutButton.cb0b4036.js",
  t + "/_app/immutable/chunks/close-box.75461ac6.js",
  t + "/_app/immutable/chunks/index.7fe2b75d.js",
  t + "/_app/immutable/chunks/index.aaf978d9.js",
  t + "/_app/immutable/chunks/index.b510b619.js",
  t + "/_app/immutable/chunks/index.ef04b1b2.js",
  t + "/_app/immutable/chunks/scheduler.89cb64c0.js",
  t + "/_app/immutable/chunks/singletons.45dbf6fd.js",
  t + "/_app/immutable/chunks/spread.8a381c43.js",
  t + "/_app/immutable/entry/start.63aec171.js"
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
], l = "1700355349700", o = self, n = `cache${l}`, m = [...f, ...c, ...p];
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
