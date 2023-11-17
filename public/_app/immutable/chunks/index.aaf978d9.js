import{G as _,X as m}from"./scheduler.89cb64c0.js";function b(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function C(t){return t*t*t}function $(t){const s=t-1;return s*s*s+1}function S(t){return Math.pow(t-1,3)*(1-t)+1}function w(t,{delay:s=0,duration:e=400,easing:n=_}={}){const r=+getComputedStyle(t).opacity;return{delay:s,duration:e,easing:n,css:o=>`opacity: ${o*r}`}}function x(t,{delay:s=0,duration:e=400,easing:n=$,x:r=0,y:o=0,opacity:c=0}={}){const a=getComputedStyle(t),f=+a.opacity,u=a.transform==="none"?"":a.transform,y=f*(1-c),[l,i]=m(r),[d,g]=m(o);return{delay:s,duration:e,easing:n,css:(p,h)=>`
			transform: ${u} translate(${(1-p)*l}${i}, ${(1-p)*d}${g});
			opacity: ${f-y*h}`}}function I(t,{delay:s=0,duration:e=400,easing:n=$,start:r=0,opacity:o=0}={}){const c=getComputedStyle(t),a=+c.opacity,f=c.transform==="none"?"":c.transform,u=1-r,y=a*(1-o);return{delay:s,duration:e,easing:n,css:(l,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${a-y*i}
		`}}function O(t,{delay:s=0,speed:e,duration:n,easing:r=b}={}){let o=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(o+=parseInt(c.strokeWidth)),n===void 0?e===void 0?n=800:n=o/e:typeof n=="function"&&(n=n(o)),{delay:s,duration:n,easing:r,css:(a,f)=>`
			stroke-dasharray: ${o};
			stroke-dashoffset: ${f*o};
		`}}export{C as a,w as b,$ as c,O as d,x as f,S as q,I as s};
