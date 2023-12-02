const g = "db";
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
  const b = new Promise((t) => {
    const d = indexedDB.open(g, 1);
    d.onupgradeneeded = (a) => {
      a.target.result.createObjectStore("auth", { keyPath: "id" }).createIndex("id", "id", { unique: !0 });
    }, d.onsuccess = (a) => {
      const c = a.target.result, r = e.request.clone();
      if (r.headers.has("Authorization"))
        fetch(e.request).then((o) => {
          if (o.ok) {
            const u = r.headers.get("Authorization");
            if (u === null)
              return t(o);
            const n = c.transaction("auth", "readwrite").objectStore("auth").put({ id: 0, header: u });
            n.onsuccess = () => t(o), n.onerror = (s) => {
              console.error(s.target.error), t(o);
            };
          } else
            t(o);
        });
      else {
        const h = c.transaction("auth", "readonly").objectStore("auth").index("id").get(0);
        h.onsuccess = async (n) => {
          const s = n.target.result;
          if (s) {
            const f = s.header;
            r.headers.set("Authorization", f);
            const l = await fetch(r);
            if (l.ok)
              t(l);
            else {
              const S = await fetch(e.request);
              t(S);
            }
          } else {
            const f = await fetch(r);
            t(f);
          }
        }, h.onerror = async (n) => {
          console.error(n.target.error);
          const s = await fetch(r);
          t(s);
        };
      }
    }, d.onerror = async (a) => {
      console.error(a.target.error);
      const c = await fetch(e.request);
      t(c);
    };
  });
  e.respondWith(b);
});
