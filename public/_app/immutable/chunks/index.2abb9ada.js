import{w as r}from"./index.4c7b2e0e.js";const a=async()=>{try{return(await fetch("/api/auth/status")).status===200}catch{return!1}},c=async(t,s)=>{try{return(await fetch("/api/auth/login",{method:"POST",body:JSON.stringify({user:{email:t,password:s}}),headers:{"Content-Type":"application/json"}})).status===200}catch{return!1}},i=async(t,s)=>{try{return(await fetch("/api/auth/signup",{method:"POST",body:JSON.stringify({user:{email:t,password:s}}),headers:{"Content-Type":"application/json"}})).status===200}catch{return!1}},u=async()=>{try{return(await fetch("/api/auth/logout",{method:"DELETE"})).status===200}catch{return!1}},n=()=>{const{subscribe:t,set:s}=r(null);return{subscribe:t,verify:async()=>s(await a())}},p=n();export{p as a,u as b,c as l,i as s};
