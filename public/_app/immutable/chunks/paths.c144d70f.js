import{y as l,N as m,C as q,s as k,M as v}from"./scheduler.eb6498a9.js";const c=[];function x(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=l){let r;const n=new Set;function u(t){if(k(s,t)&&(s=t,r)){const i=!c.length;for(const e of n)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(t){u(t(s))}function f(t,i=l){const e=[t,i];return n.add(e),n.size===1&&(r=o(u,b)||l),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:u,update:b,subscribe:f}}function C(s,o,r){const n=!Array.isArray(s),u=n?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return x(r,(f,t)=>{let i=!1;const e=[];let d=0,p=l;const h=()=>{if(d)return;p();const a=o(n?e[0]:e,f,t);b?f(a):p=v(a)?a:l},w=u.map((a,_)=>m(a,z=>{e[_]=z,d&=~(1<<_),i&&h()},()=>{d|=1<<_}));return i=!0,h(),function(){q(w),p(),i=!1}})}function E(s){return{subscribe:s.subscribe.bind(s)}}var y;const T=((y=globalThis.__sveltekit_12zyhld)==null?void 0:y.base)??"";var g;const M=((g=globalThis.__sveltekit_12zyhld)==null?void 0:g.assets)??T;export{E as a,T as b,M as c,C as d,x as r,A as w};