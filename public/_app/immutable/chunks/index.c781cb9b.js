import{p as s,n as i}from"./index.4976184a.js";import{aa as n}from"./scheduler.e46bbd4c.js";const o=e=>new Promise(t=>setTimeout(t,e)),c=async()=>{if(await o(5e3),!(await fetch("/api/stats/landing/register-new-page-visit")).ok){const t=await fetch("https://api.ipify.org?format=json"),a=(await t.json()).ip;if(!t.ok||!(await fetch("/api/stats/landing/register-new-page-visit-with-ip-param",{method:"POST",body:JSON.stringify({ip:a}),headers:{"Content-Type":"application/json"}})).ok)return}},h=e=>{s.update(t=>t.then(async()=>{await n(i),await fetch("/api/stats/landing/path-to-registration-append",{method:"POST",body:JSON.stringify({path:e}),headers:{"Content-Type":"application/json"}})}))};export{h as p,c as r,o as s};