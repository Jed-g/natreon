import{s as x,f as _,l as d,a as S,g as f,h as g,m as h,d as l,c as y,i as m,x as v,n as $,y as E,z as q}from"../chunks/scheduler.f5065b4e.js";import{S as z,i as C}from"../chunks/index.cbcae5bf.js";import{d as H}from"../chunks/singletons.86325736.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=d(r),n=S(),i=_("p"),u=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=y(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function w(s,t,r){let o;return q(s,j,n=>r(0,o=n)),[o]}let F=class extends z{constructor(t){super(),C(this,t,w,k,x,{})}};export{F as component};
