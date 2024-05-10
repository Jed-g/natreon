import{ae as b,af as h}from"./scheduler.e46bbd4c.js";function x(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function w(t){return t*t*t}function g(t){const o=t-1;return o*o*o+1}function F(t){return--t*t*t*t*t+1}function C(t,{delay:o=0,duration:r=400,easing:n=b}={}){const c=+getComputedStyle(t).opacity;return{delay:o,duration:r,easing:n,css:e=>`opacity: ${e*c}`}}function S(t,{delay:o=0,duration:r=400,easing:n=g,x:c=0,y:e=0,opacity:i=0}={}){const p=getComputedStyle(t),l=+p.opacity,s=p.transform==="none"?"":p.transform,d=l*(1-i),[f,u]=h(c),[$,m]=h(e);return{delay:o,duration:r,easing:n,css:(y,_)=>`
			transform: ${s} translate(${(1-y)*f}${u}, ${(1-y)*$}${m});
			opacity: ${l-d*_}`}}function k(t,{delay:o=0,duration:r=400,easing:n=g,axis:c="y"}={}){const e=getComputedStyle(t),i=+e.opacity,p=c==="y"?"height":"width",l=parseFloat(e[p]),s=c==="y"?["top","bottom"]:["left","right"],d=s.map(a=>`${a[0].toUpperCase()}${a.slice(1)}`),f=parseFloat(e[`padding${d[0]}`]),u=parseFloat(e[`padding${d[1]}`]),$=parseFloat(e[`margin${d[0]}`]),m=parseFloat(e[`margin${d[1]}`]),y=parseFloat(e[`border${d[0]}Width`]),_=parseFloat(e[`border${d[1]}Width`]);return{delay:o,duration:r,easing:n,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*i};${p}: ${a*l}px;padding-${s[0]}: ${a*f}px;padding-${s[1]}: ${a*u}px;margin-${s[0]}: ${a*$}px;margin-${s[1]}: ${a*m}px;border-${s[0]}-width: ${a*y}px;border-${s[1]}-width: ${a*_}px;`}}function I(t,{delay:o=0,duration:r=400,easing:n=g,start:c=0,opacity:e=0}={}){const i=getComputedStyle(t),p=+i.opacity,l=i.transform==="none"?"":i.transform,s=1-c,d=p*(1-e);return{delay:o,duration:r,easing:n,css:(f,u)=>`
			transform: ${l} scale(${1-s*u});
			opacity: ${p-d*u}
		`}}function O(t,{delay:o=0,speed:r,duration:n,easing:c=x}={}){let e=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(e+=parseInt(i.strokeWidth)),n===void 0?r===void 0?n=800:n=e/r:typeof n=="function"&&(n=n(e)),{delay:o,duration:n,easing:c,css:(p,l)=>`
			stroke-dasharray: ${e};
			stroke-dashoffset: ${l*e};
		`}}export{S as a,w as b,g as c,O as d,k as e,C as f,F as q,I as s};
