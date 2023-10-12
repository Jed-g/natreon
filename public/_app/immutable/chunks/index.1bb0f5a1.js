import{j as g}from"./singletons.c209cb06.js";const d=g("goto");function p(o){const t=o-1;return t*t*t+1}function _(o,{delay:t=0,duration:r=400,easing:a=p,start:e=0,opacity:f=0}={}){const s=getComputedStyle(o),n=+s.opacity,i=s.transform==="none"?"":s.transform,m=1-e,l=n*(1-f);return{delay:t,duration:r,easing:a,css:(u,c)=>`
			transform: ${i} scale(${1-m*c});
			opacity: ${n-l*c}
		`}}export{d as g,_ as s};
