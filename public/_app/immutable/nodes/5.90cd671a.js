import{s as M,f as d,a as b,g as _,h as $,A as T,c as k,d as u,j as h,i as m,x as y,y as w,D as j,z as P,o as R,F as A,r as H,u as V,v as G,w as U,G as q}from"../chunks/scheduler.ef5aa3da.js";import{S as D,i as E,b as O,d as S,m as C,a as g,t as v,e as L,c as z,g as F,f as J}from"../chunks/index.7d1d894a.js";import{a as I,U as x}from"../chunks/index.a8729054.js";import{s as B}from"../chunks/index.51a055d9.js";import{L as K}from"../chunks/LogoutButton.943412aa.js";import{s as Q}from"../chunks/index.d3d61c93.js";import{P as W}from"../chunks/index.e6a189c6.js";function X(l){let e,s,o="Reporter Dashboard",r,i,c;return i=new K({}),{c(){e=d("div"),s=d("h1"),s.textContent=o,r=b(),O(i.$$.fragment),this.h()},l(t){e=_(t,"DIV",{class:!0});var a=$(e);s=_(a,"H1",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-13hpzoo"&&(s.textContent=o),r=k(a),S(i.$$.fragment,a),a.forEach(u),this.h()},h(){h(s,"class","select-none px-4"),h(e,"class","navbar bg-base-100 justify-between")},m(t,a){m(t,e,a),y(e,s),y(e,r),C(i,e,null),c=!0},p:w,i(t){c||(g(i.$$.fragment,t),c=!0)},o(t){v(i.$$.fragment,t),c=!1},d(t){t&&u(e),L(i)}}}class Y extends D{constructor(e){super(),E(this,e,null,X,M,{})}}function Z(l){let e,s,o,r,i;s=new Y({});const c=l[3].default,t=H(c,l,l[2],null);return{c(){e=d("div"),O(s.$$.fragment),o=b(),t&&t.c(),this.h()},l(a){e=_(a,"DIV",{class:!0});var n=$(e);S(s.$$.fragment,n),o=k(n),t&&t.l(n),n.forEach(u),this.h()},h(){h(e,"class","flex flex-col grow overflow-x-hidden")},m(a,n){m(a,e,n),C(s,e,null),y(e,o),t&&t.m(e,null),i=!0},p(a,n){t&&t.p&&(!i||n&4)&&V(t,c,a,a[2],i?U(c,a[2],n,null):G(a[2]),null)},i(a){i||(g(s.$$.fragment,a),g(t,a),a&&(r||q(()=>{r=J(e,B,{start:.9,duration:500,opacity:0}),r.start()})),i=!0)},o(a){v(s.$$.fragment,a),v(t,a),i=!1},d(a){a&&u(e),L(s),t&&t.d(a)}}}function ee(l){let e,s='<span class="loading loading-ring loading-lg"></span>';return{c(){e=d("div"),e.innerHTML=s,this.h()},l(o){e=_(o,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-y7ubrx"&&(e.innerHTML=s),this.h()},h(){h(e,"class","grow flex items-center justify-center")},m(o,r){m(o,e,r)},p:w,i:w,o:w,d(o){o&&u(e)}}}function te(l){let e,s,o,r,i;const c=[ee,Z],t=[];function a(n,f){return n[0]?0:1}return o=a(l),r=t[o]=c[o](l),{c(){e=b(),s=d("main"),r.c(),this.h()},l(n){j("svelte-mqxikt",document.head).forEach(u),e=k(n),s=_(n,"MAIN",{class:!0});var p=$(s);r.l(p),p.forEach(u),this.h()},h(){document.title="Reporter Dashboard",h(s,"class","h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex svelte-wv5lwa")},m(n,f){m(n,e,f),m(n,s,f),t[o].m(s,null),i=!0},p(n,[f]){let p=o;o=a(n),o===p?t[o].p(n,f):(F(),v(t[p],1,1,()=>{t[p]=null}),z(),r=t[o],r?r.p(n,f):(r=t[o]=c[o](n),r.c()),g(r,1),r.m(s,null))},i(n){i||(g(r),i=!0)},o(n){v(r),i=!1},d(n){n&&(u(e),u(s)),t[o].d()}}}function se(l,e,s){let o,r;P(l,I,f=>s(1,r=f));let{$$slots:i={},$$scope:c}=e;const t=Date.now();let a=0,n;return R(async()=>{if(await I.verify(),await Q(5e3),!(await fetch("/api/stats/reporter/register-new-page-visit")).ok){const p=await fetch("https://api.ipify.org?format=json"),N=(await p.json()).ip;if(!p.ok||!(await fetch("/api/stats/reporter/register-new-page-visit-with-ip-param",{method:"POST",body:JSON.stringify({ip:N}),headers:{"Content-Type":"application/json"}})).ok)return}n=setInterval(async()=>{a=Date.now()-t,(await fetch("/api/stats/reporter/update-page-visit",{method:"POST",body:JSON.stringify({time_spent_seconds:Math.floor(a/1e3)}),headers:{"Content-Type":"application/json"}})).ok||clearInterval(n)},W)}),A(()=>clearInterval(n)),l.$$set=f=>{"$$scope"in f&&s(2,c=f.$$scope)},l.$$.update=()=>{if(l.$$.dirty&2&&s(0,o=r===null),l.$$.dirty&2)switch(r){case!1:window.location.href="/login";break;case x.CUSTOMER:window.location.href="/app";break;case x.ADMIN:window.location.href="/admin";break}},[o,r,c,i]}class ue extends D{constructor(e){super(),E(this,e,se,te,M,{})}}export{ue as component};
