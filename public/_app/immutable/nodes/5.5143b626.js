import{s as C,f as _,a as y,g as m,h as $,A as E,c as k,d as u,j as h,i as p,x as w,y as b,D as A,z as S,o as U,r as V,u as q,v as N,w as z,E as B}from"../chunks/scheduler.de25b927.js";import{S as D,i as I,b as L,d as j,m as H,a as g,t as v,e as T,c as O,g as R,f as F}from"../chunks/index.da899c38.js";/* empty css                       */import{a as x,U as M}from"../chunks/index.6a425438.js";import{s as G}from"../chunks/index.78027e64.js";import{L as J}from"../chunks/LogoutButton.7eb2004c.js";function K(i){let e,s,a="Metrics",r,l,c;return l=new J({}),{c(){e=_("div"),s=_("h1"),s.textContent=a,r=y(),L(l.$$.fragment),this.h()},l(t){e=m(t,"DIV",{class:!0});var n=$(e);s=m(n,"H1",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-1d9v4q0"&&(s.textContent=a),r=k(n),j(l.$$.fragment,n),n.forEach(u),this.h()},h(){h(s,"class","select-none px-4"),h(e,"class","navbar bg-base-100 justify-between")},m(t,n){p(t,e,n),w(e,s),w(e,r),H(l,e,null),c=!0},p:b,i(t){c||(g(l.$$.fragment,t),c=!0)},o(t){v(l.$$.fragment,t),c=!1},d(t){t&&u(e),T(l)}}}class P extends D{constructor(e){super(),I(this,e,null,K,C,{})}}function Q(i){let e,s,a,r,l;s=new P({});const c=i[3].default,t=V(c,i,i[2],null);return{c(){e=_("div"),L(s.$$.fragment),a=y(),t&&t.c(),this.h()},l(n){e=m(n,"DIV",{class:!0});var o=$(e);j(s.$$.fragment,o),a=k(o),t&&t.l(o),o.forEach(u),this.h()},h(){h(e,"class","flex flex-col grow overflow-x-hidden")},m(n,o){p(n,e,o),H(s,e,null),w(e,a),t&&t.m(e,null),l=!0},p(n,o){t&&t.p&&(!l||o&4)&&q(t,c,n,n[2],l?z(c,n[2],o,null):N(n[2]),null)},i(n){l||(g(s.$$.fragment,n),g(t,n),n&&(r||B(()=>{r=F(e,G,{start:.9,duration:500,opacity:0}),r.start()})),l=!0)},o(n){v(s.$$.fragment,n),v(t,n),l=!1},d(n){n&&u(e),T(s),t&&t.d(n)}}}function W(i){let e,s='<span class="loading loading-ring loading-lg"></span>';return{c(){e=_("div"),e.innerHTML=s,this.h()},l(a){e=m(a,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-y7ubrx"&&(e.innerHTML=s),this.h()},h(){h(e,"class","grow flex items-center justify-center")},m(a,r){p(a,e,r)},p:b,i:b,o:b,d(a){a&&u(e)}}}function X(i){let e,s,a,r,l;const c=[W,Q],t=[];function n(o,f){return o[0]?0:1}return a=n(i),r=t[a]=c[a](i),{c(){e=y(),s=_("main"),r.c(),this.h()},l(o){A("svelte-w6ew0j",document.head).forEach(u),e=k(o),s=m(o,"MAIN",{class:!0});var d=$(s);r.l(d),d.forEach(u),this.h()},h(){document.title="Metrics",h(s,"class","h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex svelte-wv5lwa")},m(o,f){p(o,e,f),p(o,s,f),t[a].m(s,null),l=!0},p(o,[f]){let d=a;a=n(o),a===d?t[a].p(o,f):(R(),v(t[d],1,1,()=>{t[d]=null}),O(),r=t[a],r?r.p(o,f):(r=t[a]=c[a](o),r.c()),g(r,1),r.m(s,null))},i(o){l||(g(r),l=!0)},o(o){v(r),l=!1},d(o){o&&(u(e),u(s)),t[a].d()}}}function Y(i,e,s){let a,r;S(i,x,t=>s(1,r=t));let{$$slots:l={},$$scope:c}=e;return U(()=>x.verify()),i.$$set=t=>{"$$scope"in t&&s(2,c=t.$$scope)},i.$$.update=()=>{if(i.$$.dirty&2&&s(0,a=r===null),i.$$.dirty&2)switch(r){case!1:window.location.href="/login";break;case M.CUSTOMER:window.location.href="/app";break;case M.ADMIN:window.location.href="/admin";break}},[a,r,c,l]}class re extends D{constructor(e){super(),I(this,e,Y,X,C,{})}}export{re as component};
