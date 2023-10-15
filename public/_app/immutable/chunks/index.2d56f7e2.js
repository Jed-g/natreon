import{G as _,X as m}from"./scheduler.f5065b4e.js";function k(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function $(t){const n=t-1;return n*n*n+1}function S(t){return Math.pow(t-1,3)*(1-t)+1}function b(t,{delay:n=0,duration:e=400,easing:s=_}={}){const a=+getComputedStyle(t).opacity;return{delay:n,duration:e,easing:s,css:o=>`opacity: ${o*a}`}}function w(t,{delay:n=0,duration:e=400,easing:s=$,x:a=0,y:o=0,opacity:c=0}={}){const r=getComputedStyle(t),f=+r.opacity,u=r.transform==="none"?"":r.transform,y=f*(1-c),[l,i]=m(a),[d,g]=m(o);return{delay:n,duration:e,easing:s,css:(p,h)=>`
			transform: ${u} translate(${(1-p)*l}${i}, ${(1-p)*d}${g});
			opacity: ${f-y*h}`}}function x(t,{delay:n=0,duration:e=400,easing:s=$,start:a=0,opacity:o=0}={}){const c=getComputedStyle(t),r=+c.opacity,f=c.transform==="none"?"":c.transform,u=1-a,y=r*(1-o);return{delay:n,duration:e,easing:s,css:(l,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${r-y*i}
		`}}function O(t,{delay:n=0,speed:e,duration:s,easing:a=k}={}){let o=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(o+=parseInt(c.strokeWidth)),s===void 0?e===void 0?s=800:s=o/e:typeof s=="function"&&(s=s(o)),{delay:n,duration:s,easing:a,css:(r,f)=>`
			stroke-dasharray: ${o};
			stroke-dashoffset: ${f*o};
		`}}export{w as a,$ as c,O as d,b as f,S as q,x as s};
