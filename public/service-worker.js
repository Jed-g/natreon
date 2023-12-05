const j = "db";
const i = self;
i.addEventListener("install", () => {
  i.skipWaiting();
});
i.addEventListener("activate", (e) => {
  e.waitUntil(i.clients.claim());
});
i.addEventListener("fetch", (e) => {
  if (!e.request.url.startsWith("http"))
    return;
  const q = new Promise((t) => {
    const d = indexedDB.open(j, 1);
    d.onupgradeneeded = (c) => {
      c.target.result.createObjectStore("auth", { keyPath: "id" }).createIndex("id", "id", { unique: !0 });
    }, d.onsuccess = (c) => {
      const a = c.target.result, r = e.request.clone();
      if (r.headers.has("Authorization"))
        fetch(e.request).then((o) => {
          if (o.ok) {
            const u = r.headers.get("Authorization");
            if (u === null)
              return t(o);
            const s = a.transaction("auth", "readwrite").objectStore("auth").put({ id: 0, header: u });
            s.onsuccess = () => t(o), s.onerror = (n) => {
              console.error(n.target.error), t(o);
            };
          } else
            t(o);
        });
      else {
        const h = a.transaction("auth", "readonly").objectStore("auth").index("id").get(0);
        h.onsuccess = async (s) => {
          const n = s.target.result;
          if (n) {
            const f = n.header, l = new Headers(r.headers);
            l.set("Authorization", f);
            const S = new Request(r, { headers: l }), b = await fetch(S);
            if (b.ok)
              t(b);
            else {
              const g = await fetch(e.request);
              t(g);
            }
          } else {
            const f = await fetch(r);
            t(f);
          }
        }, h.onerror = async (s) => {
          console.error(s.target.error);
          const n = await fetch(r);
          t(n);
        };
      }
    }, d.onerror = async (c) => {
      console.error(c.target.error);
      const a = await fetch(e.request);
      t(a);
    };
  });
  e.respondWith(q);
});
