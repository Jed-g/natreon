import{p as s,n}from"./index.4e6d79c5.js";import{X as i}from"./scheduler.b2ba2f20.js";const o=e=>new Promise(t=>setTimeout(t,e)),d=async()=>{if(await o(5e3),!(await fetch("/api/stats/landing/register-new-page-visit")).ok){const t=await fetch("https://api.ipify.org?format=json"),a=(await t.json()).ip;if(!t.ok||!(await fetch("/api/stats/landing/register-new-page-visit-with-ip-param",{method:"POST",body:JSON.stringify({ip:a}),headers:{"Content-Type":"application/json"}})).ok)return}},g=e=>{s.update(t=>t.then(async()=>{await i(n),await fetch("/api/stats/landing/path-to-registration-append",{method:"POST",body:JSON.stringify({path:e}),headers:{"Content-Type":"application/json"}})}))},T=1500,I=500,N=3e3;export{T as M,N as P,I as a,g as p,d as r,o as s};
