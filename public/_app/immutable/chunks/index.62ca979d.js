function p(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function y(t){const s=t-1;return s*s*s+1}function m(t){return Math.pow(t-1,3)*(1-t)+1}function d(t,{delay:s=0,duration:c=400,easing:e=y,start:r=0,opacity:n=0}={}){const o=getComputedStyle(t),f=+o.opacity,a=o.transform==="none"?"":o.transform,i=1-r,l=f*(1-n);return{delay:s,duration:c,easing:e,css:(h,u)=>`
			transform: ${a} scale(${1-i*u});
			opacity: ${f-l*u}
		`}}function g(t,{delay:s=0,speed:c,duration:e,easing:r=p}={}){let n=t.getTotalLength();const o=getComputedStyle(t);return o.strokeLinecap!=="butt"&&(n+=parseInt(o.strokeWidth)),e===void 0?c===void 0?e=800:e=n/c:typeof e=="function"&&(e=e(n)),{delay:s,duration:e,easing:r,css:(f,a)=>`
			stroke-dasharray: ${n};
			stroke-dashoffset: ${a*n};
		`}}export{g as d,m as q,d as s};
