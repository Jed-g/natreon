import{s as T,a as M,f as w,D as E,d as f,c as O,g as v,h as k,j as y,i as _,z as N,o as P,F as S,r as D,u as R,v as j,w as A,G as L,A as C,y as u}from"../chunks/scheduler.fa2c1182.js";import{S as G,i as V,t as h,c as $,a as m,g as q,f as F}from"../chunks/index.488748fd.js";/* empty css                       */import{a as g,U as b}from"../chunks/index.e0160b1b.js";import{s as H}from"../chunks/index.95330f13.js";import{s as J,P as U}from"../chunks/index.b8c1d675.js";function z(l){let t,o,e;const s=l[3].default,n=D(s,l,l[2],null);return{c(){t=w("div"),n&&n.c(),this.h()},l(a){t=v(a,"DIV",{class:!0});var r=k(t);n&&n.l(r),r.forEach(f),this.h()},h(){y(t,"class","grow overflow-hidden")},m(a,r){_(a,t,r),n&&n.m(t,null),e=!0},p(a,r){n&&n.p&&(!e||r&4)&&R(n,s,a,a[2],e?A(s,a[2],r,null):j(a[2]),null)},i(a){e||(m(n,a),a&&(o||L(()=>{o=F(t,H,{start:.9,duration:500,opacity:0}),o.start()})),e=!0)},o(a){h(n,a),e=!1},d(a){a&&f(t),n&&n.d(a)}}}function x(l){let t,o='<span class="loading loading-ring loading-lg"></span>';return{c(){t=w("div"),t.innerHTML=o,this.h()},l(e){t=v(e,"DIV",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-y7ubrx"&&(t.innerHTML=o),this.h()},h(){y(t,"class","grow flex items-center justify-center")},m(e,s){_(e,t,s)},p:u,i:u,o:u,d(e){e&&f(t)}}}function B(l){let t,o,e,s,n;const a=[x,z],r=[];function d(i,c){return i[0]?0:1}return e=d(l),s=r[e]=a[e](l),{c(){t=M(),o=w("main"),s.c(),this.h()},l(i){E("svelte-11dqd79",document.head).forEach(f),t=O(i),o=v(i,"MAIN",{class:!0});var p=k(o);s.l(p),p.forEach(f),this.h()},h(){document.title="App",y(o,"class","h-screen w-screen full-dynamic-viewport-height full-dynamic-viewport-width flex svelte-wv5lwa")},m(i,c){_(i,t,c),_(i,o,c),r[e].m(o,null),n=!0},p(i,[c]){let p=e;e=d(i),e===p?r[e].p(i,c):(q(),h(r[p],1,1,()=>{r[p]=null}),$(),s=r[e],s?s.p(i,c):(s=r[e]=a[e](i),s.c()),m(s,1),s.m(o,null))},i(i){n||(m(s),n=!0)},o(i){h(s),n=!1},d(i){i&&(f(t),f(o)),r[e].d()}}}function K(l,t,o){let e,s;N(l,g,c=>o(1,s=c));let{$$slots:n={},$$scope:a}=t;const r=Date.now();let d=0,i;return P(async()=>{if(await g.verify(),await J(5e3),!(await fetch("/api/stats/app/register-new-page-visit")).ok){const p=await fetch("https://api.ipify.org?format=json"),I=(await p.json()).ip;if(!p.ok||!(await fetch("/api/stats/app/register-new-page-visit-with-ip-param",{method:"POST",body:JSON.stringify({ip:I}),headers:{"Content-Type":"application/json"}})).ok)return}i=setInterval(async()=>{d=Date.now()-r,(await fetch("/api/stats/app/update-page-visit",{method:"POST",body:JSON.stringify({time_spent_seconds:Math.floor(d/1e3)}),headers:{"Content-Type":"application/json"}})).ok||clearInterval(i)},U)}),S(()=>clearInterval(i)),l.$$set=c=>{"$$scope"in c&&o(2,a=c.$$scope)},l.$$.update=()=>{if(l.$$.dirty&2&&o(0,e=s===null),l.$$.dirty&2)switch(s){case!1:window.location.href="/login";break;case b.ADMIN:window.location.href="/admin";break;case b.REPORTER:window.location.href="/metrics";break}},[e,s,a,n]}class ae extends G{constructor(t){super(),V(this,t,K,B,T,{})}}export{ae as component};
