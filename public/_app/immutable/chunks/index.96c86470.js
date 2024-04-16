import{aa as _,ab as m}from"./scheduler.79c3331f.js";function h(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function C(t){return t*t*t}function $(t){const s=t-1;return s*s*s+1}function S(t){return--t*t*t*t*t+1}function x(t,{delay:s=0,duration:o=400,easing:n=_}={}){const a=+getComputedStyle(t).opacity;return{delay:s,duration:o,easing:n,css:e=>`opacity: ${e*a}`}}function I(t,{delay:s=0,duration:o=400,easing:n=$,x:a=0,y:e=0,opacity:c=0}={}){const r=getComputedStyle(t),f=+r.opacity,u=r.transform==="none"?"":r.transform,y=f*(1-c),[l,i]=m(a),[d,g]=m(e);return{delay:s,duration:o,easing:n,css:(p,b)=>`
			transform: ${u} translate(${(1-p)*l}${i}, ${(1-p)*d}${g});
			opacity: ${f-y*b}`}}function O(t,{delay:s=0,duration:o=400,easing:n=$,start:a=0,opacity:e=0}={}){const c=getComputedStyle(t),r=+c.opacity,f=c.transform==="none"?"":c.transform,u=1-a,y=r*(1-e);return{delay:s,duration:o,easing:n,css:(l,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${r-y*i}
		`}}function q(t,{delay:s=0,speed:o,duration:n,easing:a=h}={}){let e=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(e+=parseInt(c.strokeWidth)),n===void 0?o===void 0?n=800:n=e/o:typeof n=="function"&&(n=n(e)),{delay:s,duration:n,easing:a,css:(r,f)=>`
			stroke-dasharray: ${e};
			stroke-dashoffset: ${f*e};
		`}}export{I as a,C as b,$ as c,q as d,x as f,S as q,O as s};
