import{s as I,a as E,f as w,D as M,d,c as O,g as v,h as k,j as y,i as _,z as S,o as P,F as R,r as D,u as N,v as j,w as L,G as A,A as C,y as u}from"../chunks/scheduler.fa2c1182.js";import{S as x,i as G,t as h,c as U,a as m,g as V,f as $}from"../chunks/index.488748fd.js";/* empty css                       */import{a as g,U as b}from"../chunks/index.e0160b1b.js";import{s as F}from"../chunks/index.95330f13.js";import{s as H,P as J}from"../chunks/index.b8c1d675.js";function q(l){let t,o,e;const s=l[3].default,n=D(s,l,l[2],null);return{c(){t=w("div"),n&&n.c(),this.h()},l(a){t=v(a,"DIV",{class:!0});var r=k(t);n&&n.l(r),r.forEach(d),this.h()},h(){y(t,"class","flex flex-col grow overflow-x-hidden")},m(a,r){_(a,t,r),n&&n.m(t,null),e=!0},p(a,r){n&&n.p&&(!e||r&4)&&N(n,s,a,a[2],e?L(s,a[2],r,null):j(a[2]),null)},i(a){e||(m(n,a),a&&(o||A(()=>{o=$(t,F,{start:.9,duration:500,opacity:0}),o.start()})),e=!0)},o(a){h(n,a),e=!1},d(a){a&&d(t),n&&n.d(a)}}}function z(l){let t,o='<span class="loading loading-ring loading-lg"></span>';return{c(){t=w("div"),t.innerHTML=o,this.h()},l(e){t=v(e,"DIV",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-y7ubrx"&&(t.innerHTML=o),this.h()},h(){y(t,"class","grow flex items-center justify-center")},m(e,s){_(e,t,s)},p:u,i:u,o:u,d(e){e&&d(t)}}}function B(l){let t,o,e,s,n;const a=[z,q],r=[];function p(i,c){return i[0]?0:1}return e=p(l),s=r[e]=a[e](l),{c(){t=E(),o=w("main"),s.c(),this.h()},l(i){M("svelte-8mmi25",document.head).forEach(d),t=O(i),o=v(i,"MAIN",{class:!0});var f=k(o);s.l(f),f.forEach(d),this.h()},h(){document.title="Admin Dashboard",y(o,"class","h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex svelte-wv5lwa")},m(i,c){_(i,t,c),_(i,o,c),r[e].m(o,null),n=!0},p(i,[c]){let f=e;e=p(i),e===f?r[e].p(i,c):(V(),h(r[f],1,1,()=>{r[f]=null}),U(),s=r[e],s?s.p(i,c):(s=r[e]=a[e](i),s.c()),m(s,1),s.m(o,null))},i(i){n||(m(s),n=!0)},o(i){h(s),n=!1},d(i){i&&(d(t),d(o)),r[e].d()}}}function K(l,t,o){let e,s;S(l,g,c=>o(1,s=c));let{$$slots:n={},$$scope:a}=t;const r=Date.now();let p=0,i;return P(async()=>{if(await g.verify(),await H(5e3),!(await fetch("/api/stats/admin/register-new-page-visit")).ok){const f=await fetch("https://api.ipify.org?format=json"),T=(await f.json()).ip;if(!f.ok||!(await fetch("/api/stats/admin/register-new-page-visit-with-ip-param",{method:"POST",body:JSON.stringify({ip:T}),headers:{"Content-Type":"application/json"}})).ok)return}i=setInterval(async()=>{p=Date.now()-r,(await fetch("/api/stats/admin/update-page-visit",{method:"POST",body:JSON.stringify({time_spent_seconds:Math.floor(p/1e3)}),headers:{"Content-Type":"application/json"}})).ok||clearInterval(i)},J)}),R(()=>clearInterval(i)),l.$$set=c=>{"$$scope"in c&&o(2,a=c.$$scope)},l.$$.update=()=>{if(l.$$.dirty&2&&o(0,e=s===null),l.$$.dirty&2)switch(s){case!1:window.location.href="/login";break;case b.CUSTOMER:window.location.href="/app";break;case b.REPORTER:window.location.href="/metrics";break}},[e,s,a,n]}class ae extends x{constructor(t){super(),G(this,t,K,B,I,{})}}export{ae as component};
