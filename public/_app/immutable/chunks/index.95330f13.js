import{Z as b,_ as m}from"./scheduler.fa2c1182.js";function h(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function C(t){return t*t*t}function $(t){const n=t-1;return n*n*n+1}function S(t,{delay:n=0,duration:o=400,easing:s=b}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:e=>`opacity: ${e*r}`}}function x(t,{delay:n=0,duration:o=400,easing:s=$,x:r=0,y:e=0,opacity:c=0}={}){const a=getComputedStyle(t),f=+a.opacity,u=a.transform==="none"?"":a.transform,y=f*(1-c),[l,i]=m(r),[d,g]=m(e);return{delay:n,duration:o,easing:s,css:(p,_)=>`
			transform: ${u} translate(${(1-p)*l}${i}, ${(1-p)*d}${g});
			opacity: ${f-y*_}`}}function I(t,{delay:n=0,duration:o=400,easing:s=$,start:r=0,opacity:e=0}={}){const c=getComputedStyle(t),a=+c.opacity,f=c.transform==="none"?"":c.transform,u=1-r,y=a*(1-e);return{delay:n,duration:o,easing:s,css:(l,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${a-y*i}
		`}}function w(t,{delay:n=0,speed:o,duration:s,easing:r=h}={}){let e=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(e+=parseInt(c.strokeWidth)),s===void 0?o===void 0?s=800:s=e/o:typeof s=="function"&&(s=s(e)),{delay:n,duration:s,easing:r,css:(a,f)=>`
			stroke-dasharray: ${e};
			stroke-dashoffset: ${f*e};
		`}}export{x as a,C as b,$ as c,w as d,S as f,I as s};
