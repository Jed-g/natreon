import{s as k,f as h,g as m,h as b,d as u,j as g,i as v,z as w,o as M,r as E,u as I,v as L,w as $,E as j,A,y as f}from"../chunks/scheduler.f5065b4e.js";import{S as C,i as D,t as d,c as H,a as p,g as S,f as T}from"../chunks/index.cbcae5bf.js";import{g as V}from"../chunks/navigation.f30b2e61.js";import{a as y}from"../chunks/index.1edb9bf8.js";import{s as q}from"../chunks/index.de19a9b0.js";function z(o){let t,l,e;const n=o[3].default,a=E(n,o,o[2],null);return{c(){t=h("div"),a&&a.c(),this.h()},l(s){t=m(s,"DIV",{class:!0});var i=b(t);a&&a.l(i),i.forEach(u),this.h()},h(){g(t,"class","grow overflow-hidden")},m(s,i){v(s,t,i),a&&a.m(t,null),e=!0},p(s,i){a&&a.p&&(!e||i&4)&&I(a,n,s,s[2],e?$(n,s[2],i,null):L(s[2]),null)},i(s){e||(p(a,s),s&&(l||j(()=>{l=T(t,q,{start:.9,duration:500,opacity:0}),l.start()})),e=!0)},o(s){d(a,s),e=!1},d(s){s&&u(t),a&&a.d(s)}}}function N(o){let t,l='<span class="loading loading-ring loading-lg"></span>';return{c(){t=h("div"),t.innerHTML=l,this.h()},l(e){t=m(e,"DIV",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-y7ubrx"&&(t.innerHTML=l),this.h()},h(){g(t,"class","grow flex items-center justify-center")},m(e,n){v(e,t,n)},p:f,i:f,o:f,d(e){e&&u(t)}}}function x(o){let t,l,e,n;const a=[N,z],s=[];function i(r,c){return r[0]?0:1}return l=i(o),e=s[l]=a[l](o),{c(){t=h("main"),e.c(),this.h()},l(r){t=m(r,"MAIN",{class:!0});var c=b(t);e.l(c),c.forEach(u),this.h()},h(){g(t,"class","h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex svelte-wv5lwa")},m(r,c){v(r,t,c),s[l].m(t,null),n=!0},p(r,[c]){let _=l;l=i(r),l===_?s[l].p(r,c):(S(),d(s[_],1,1,()=>{s[_]=null}),H(),e=s[l],e?e.p(r,c):(e=s[l]=a[l](r),e.c()),p(e,1),e.m(t,null))},i(r){n||(p(e),n=!0)},o(r){d(e),n=!1},d(r){r&&u(t),s[l].d()}}}function B(o,t,l){let e,n;w(o,y,i=>l(1,n=i));let{$$slots:a={},$$scope:s}=t;return M(()=>y.verify()),o.$$set=i=>{"$$scope"in i&&l(2,s=i.$$scope)},o.$$.update=()=>{o.$$.dirty&2&&l(0,e=n===null),o.$$.dirty&2&&n===!1&&V("/login")},[e,n,s,a]}class P extends C{constructor(t){super(),D(this,t,B,x,k,{})}}export{P as component};