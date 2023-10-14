import{j as p}from"./singletons.f633651a.js";import{c as g}from"./index.09b61e35.js";const _=p("goto");function $(c,{delay:n=0,duration:r=400,easing:a=g,start:e=0,opacity:m=0}={}){const t=getComputedStyle(c),o=+t.opacity,i=t.transform==="none"?"":t.transform,f=1-e,l=o*(1-m);return{delay:n,duration:r,easing:a,css:(y,s)=>`
			transform: ${i} scale(${1-f*s});
			opacity: ${o-l*s}
		`}}export{_ as g,$ as s};
