import{s as _t,f as _,a as S,g as h,h as g,A as F,c as N,d as f,j as b,_ as ve,i as P,x as n,Y as he,B as oe,Z as mt,$ as bt,C as Je,o as lt,p as kt,T as gt,a0 as nt,l as ee,m as te,G as Ce,a1 as Ae,n as be,y as pe,e as Ue}from"../chunks/scheduler.ef5aa3da.js";import{S as ht,i as vt,b as je,d as Le,m as Qe,a as J,t as ie,e as qe,c as Pe,j as Et,g as Re,f as Ye}from"../chunks/index.7d1d894a.js";import{e as Me,u as pt,d as wt,o as Ct}from"../chunks/spread.e8bb49a5.js";import{I as He}from"../chunks/Icon.94fb4e69.js";import{d as yt,a as Tt,b as It}from"../chunks/window-close.fe4b2900.js";import{c as Fe,f as Ge}from"../chunks/index.51a055d9.js";import{p as St}from"../chunks/index.da65a039.js";import{a as Nt}from"../chunks/index.e6a189c6.js";function xt(i){let e,t,s,r,p="Ask Question",m,c,a,k,u,l,o,d,C='<span class="label-text">Question*</span>',R,x,M,q,B="*Required",O,I,L,U="Cancel",Z,j,Q="Submit",Y,W,v;return a=new He({props:{icon:yt,height:24}}),{c(){e=_("div"),t=_("form"),s=_("div"),r=_("p"),r.textContent=p,m=S(),c=_("button"),je(a.$$.fragment),k=S(),u=_("div"),l=S(),o=_("div"),d=_("label"),d.innerHTML=C,R=S(),x=_("textarea"),M=S(),q=_("p"),q.textContent=B,O=S(),I=_("div"),L=_("button"),L.textContent=U,Z=S(),j=_("button"),j.textContent=Q,this.h()},l(E){e=h(E,"DIV",{class:!0});var T=g(e);t=h(T,"FORM",{class:!0});var y=g(t);s=h(y,"DIV",{class:!0});var se=g(s);r=h(se,"P",{"data-svelte-h":!0}),F(r)!=="svelte-1ppjczx"&&(r.textContent=p),m=N(se),c=h(se,"BUTTON",{class:!0});var X=g(c);Le(a.$$.fragment,X),X.forEach(f),se.forEach(f),k=N(y),u=h(y,"DIV",{class:!0}),g(u).forEach(f),l=N(y),o=h(y,"DIV",{class:!0});var z=g(o);d=h(z,"LABEL",{class:!0,"data-svelte-h":!0}),F(d)!=="svelte-1t25sq6"&&(d.innerHTML=C),R=N(z),x=h(z,"TEXTAREA",{class:!0,placeholder:!0,maxlength:!0}),g(x).forEach(f),z.forEach(f),M=N(y),q=h(y,"P",{class:!0,"data-svelte-h":!0}),F(q)!=="svelte-16ayxtg"&&(q.textContent=B),O=N(y),I=h(y,"DIV",{class:!0});var ue=g(I);L=h(ue,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),F(L)!=="svelte-1j2aynd"&&(L.textContent=U),Z=N(ue),j=h(ue,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),F(j)!=="svelte-klbj1b"&&(j.textContent=Q),ue.forEach(f),y.forEach(f),T.forEach(f),this.h()},h(){b(c,"class","btn btn-circle"),b(s,"class","flex items-center justify-between"),b(u,"class","divider my-2"),b(d,"class","label"),b(x,"class","textarea textarea-bordered h-24"),b(x,"placeholder","Type here"),b(x,"maxlength",600),ve(x,"textarea-error",i[2]),b(o,"class","form-control mt-2"),b(q,"class","self-end mt-4 label-text"),b(L,"class","btn"),b(L,"type","button"),b(j,"class","btn btn-primary"),b(j,"type","submit"),ve(j,"btn-error",i[2]),b(I,"class","flex justify-between grow items-end mt-2"),b(t,"class","card h-full w-full md:w-3/4 max-w-3xl md:max-h-[32rem] max-h-none p-6 bg-base-100 flex flex-col overflow-auto"),b(e,"class","absolute h-full w-full flex items-center justify-center p-12 backdrop-blur-sm backdrop-brightness-50")},m(E,T){P(E,e,T),n(e,t),n(t,s),n(s,r),n(s,m),n(s,c),Qe(a,c,null),n(t,k),n(t,u),n(t,l),n(t,o),n(o,d),n(o,R),n(o,x),he(x,i[1]),n(t,M),n(t,q),n(t,O),n(t,I),n(I,L),n(I,Z),n(I,j),Y=!0,W||(v=[oe(c,"click",i[5]),oe(x,"input",i[6]),oe(L,"click",i[7]),oe(t,"submit",mt(i[3])),oe(e,"click",bt(i[8]))],W=!0)},p(E,[T]){T&2&&he(x,E[1]),(!Y||T&4)&&ve(x,"textarea-error",E[2]),(!Y||T&4)&&ve(j,"btn-error",E[2])},i(E){Y||(J(a.$$.fragment,E),Y=!0)},o(E){ie(a.$$.fragment,E),Y=!1},d(E){E&&f(e),qe(a),W=!1,Je(v)}}}function Ot(i,e,t){let{showAddQuestion:s}=e,{refreshCallback:r}=e,p="",m=!1;const c=async()=>{if(!(await fetch("/api/questions",{method:"POST",body:JSON.stringify({question:p.length>0?p:void 0}),headers:{"Content-Type":"application/json"}})).ok){t(2,m=!0);return}r(),t(0,s=!1)},a=()=>t(0,s=!1);function k(){p=this.value,t(1,p)}const u=()=>t(0,s=!1),l=()=>t(0,s=!1);return i.$$set=o=>{"showAddQuestion"in o&&t(0,s=o.showAddQuestion),"refreshCallback"in o&&t(4,r=o.refreshCallback)},[s,p,m,c,r,a,k,u,l]}class Vt extends ht{constructor(e){super(),vt(this,e,Ot,xt,_t,{showAddQuestion:0,refreshCallback:4})}}function ot(i,e,t){const s=i.slice();return s[26]=e[t].id,s[27]=e[t].question,s[28]=e[t].answer,s[29]=e[t].upvotes,s[30]=e[t].downvotes,s[32]=t,s}function at(i,e,t){const s=i.slice();return s[26]=e[t].id,s[27]=e[t].question,s[32]=t,s}function Dt(i){let e,t,s,r,p='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>',m,c,a="No. of Questions Answered",k,u,l=i[0].length+"",o,d,C,R,x,M,q,B,O,I,L="Order By",U,Z,j,Q,Y,W,v,E,T,y="Ask Question",se,X,z,ue="Ask Question",H,D,V,fe="Order By",K,ke,ae,$,ge,me,ye,Ee,Te,re,Ie,le,ne,ce,Be,ze,G=i[5].length>0&&rt(i);const We=[jt,Ut],de=[];function Xe(w,A){return w[0].length>0?0:1}return le=Xe(i),ne=de[le]=We[le](i),{c(){e=_("div"),t=_("div"),s=_("div"),r=_("div"),r.innerHTML=p,m=S(),c=_("div"),c.textContent=a,k=S(),u=_("div"),o=ee(l),d=S(),C=_("div"),R=ee("Out of "),x=ee(i[6]),M=ee(" Total"),q=S(),B=_("div"),O=_("select"),I=_("option"),I.textContent=L,U=_("option"),Z=ee("Recency"),Q=_("option"),Y=ee("Usefullness"),v=S(),E=_("div"),T=_("button"),T.textContent=y,se=S(),X=_("div"),z=_("button"),z.textContent=ue,H=S(),D=_("select"),V=_("option"),V.textContent=fe,K=_("option"),ke=ee("Recency"),$=_("option"),ge=ee("Usefullness"),ye=S(),Ee=_("div"),Te=S(),re=_("div"),G&&G.c(),Ie=S(),ne.c(),this.h()},l(w){e=h(w,"DIV",{class:!0});var A=g(e);t=h(A,"DIV",{class:!0});var we=g(t);s=h(we,"DIV",{class:!0});var _e=g(s);r=h(_e,"DIV",{class:!0,"data-svelte-h":!0}),F(r)!=="svelte-37racg"&&(r.innerHTML=p),m=N(_e),c=h(_e,"DIV",{class:!0,"data-svelte-h":!0}),F(c)!=="svelte-1nie11w"&&(c.textContent=a),k=N(_e),u=h(_e,"DIV",{class:!0});var Ze=g(u);o=te(Ze,l),Ze.forEach(f),d=N(_e),C=h(_e,"DIV",{class:!0});var Se=g(C);R=te(Se,"Out of "),x=te(Se,i[6]),M=te(Se," Total"),Se.forEach(f),_e.forEach(f),we.forEach(f),q=N(A),B=h(A,"DIV",{class:!0});var Ne=g(B);O=h(Ne,"SELECT",{class:!0});var xe=g(O);I=h(xe,"OPTION",{"data-svelte-h":!0}),F(I)!=="svelte-16y6kh5"&&(I.textContent=L),U=h(xe,"OPTION",{});var Ke=g(U);Z=te(Ke,"Recency"),Ke.forEach(f),Q=h(xe,"OPTION",{});var $e=g(Q);Y=te($e,"Usefullness"),$e.forEach(f),xe.forEach(f),v=N(Ne),E=h(Ne,"DIV",{class:!0});var et=g(E);T=h(et,"BUTTON",{class:!0,"data-svelte-h":!0}),F(T)!=="svelte-urakl4"&&(T.textContent=y),et.forEach(f),Ne.forEach(f),se=N(A),X=h(A,"DIV",{class:!0});var Oe=g(X);z=h(Oe,"BUTTON",{class:!0,"data-svelte-h":!0}),F(z)!=="svelte-1yt1tfn"&&(z.textContent=ue),H=N(Oe),D=h(Oe,"SELECT",{class:!0});var Ve=g(D);V=h(Ve,"OPTION",{"data-svelte-h":!0}),F(V)!=="svelte-16y6kh5"&&(V.textContent=fe),K=h(Ve,"OPTION",{});var tt=g(K);ke=te(tt,"Recency"),tt.forEach(f),$=h(Ve,"OPTION",{});var st=g($);ge=te(st,"Usefullness"),st.forEach(f),Ve.forEach(f),Oe.forEach(f),A.forEach(f),ye=N(w),Ee=h(w,"DIV",{class:!0}),g(Ee).forEach(f),Te=N(w),re=h(w,"DIV",{class:!0});var De=g(re);G&&G.l(De),Ie=N(De),ne.l(De),De.forEach(f),this.h()},h(){b(r,"class","stat-figure text-secondary hidden sm:block"),b(c,"class","stat-title text-xs sm:text-base whitespace-break-spaces"),b(u,"class","stat-value"),b(C,"class","stat-desc"),b(s,"class","stat py-0 pl-0"),b(t,"class","flex"),I.disabled=!0,I.__value="Order By",he(I,I.__value),U.selected=j=i[1]===i[9].RECENCY,U.__value=i[9].RECENCY,he(U,U.__value),Q.selected=W=i[1]===i[9].USEFULLNESS,Q.__value=i[9].USEFULLNESS,he(Q,Q.__value),b(O,"class","select select-bordered join-item"),i[1]===void 0&&Ce(()=>i[16].call(O)),b(T,"class","btn join-item btn-primary"),b(E,"class","indicator"),b(B,"class","join hidden sm:inline-flex"),b(z,"class","btn btn-primary btn-sm"),V.disabled=!0,V.__value="Order By",he(V,V.__value),K.selected=ae=i[1]===i[9].RECENCY,K.__value=i[9].RECENCY,he(K,K.__value),$.selected=me=i[1]===i[9].USEFULLNESS,$.__value=i[9].USEFULLNESS,he($,$.__value),b(D,"class","select select-bordered select-sm mt-2"),i[1]===void 0&&Ce(()=>i[19].call(D)),b(X,"class","flex flex-col sm:hidden"),b(e,"class","flex justify-between items-center"),b(Ee,"class","divider my-2 sm:my-3 h-3"),b(re,"class","flex grow flex-col relative overflow-y-auto")},m(w,A){P(w,e,A),n(e,t),n(t,s),n(s,r),n(s,m),n(s,c),n(s,k),n(s,u),n(u,o),n(s,d),n(s,C),n(C,R),n(C,x),n(C,M),n(e,q),n(e,B),n(B,O),n(O,I),n(O,U),n(U,Z),n(O,Q),n(Q,Y),Ae(O,i[1],!0),n(B,v),n(B,E),n(E,T),n(e,se),n(e,X),n(X,z),n(X,H),n(X,D),n(D,V),n(D,K),n(K,ke),n(D,$),n($,ge),Ae(D,i[1],!0),P(w,ye,A),P(w,Ee,A),P(w,Te,A),P(w,re,A),G&&G.m(re,null),n(re,Ie),de[le].m(re,null),ce=!0,Be||(ze=[oe(O,"change",i[16]),oe(T,"click",i[17]),oe(z,"click",i[18]),oe(D,"change",i[19])],Be=!0)},p(w,A){(!ce||A[0]&1)&&l!==(l=w[0].length+"")&&be(o,l),(!ce||A[0]&64)&&be(x,w[6]),(!ce||A[0]&514&&j!==(j=w[1]===w[9].RECENCY))&&(U.selected=j),(!ce||A[0]&514&&W!==(W=w[1]===w[9].USEFULLNESS))&&(Q.selected=W),A[0]&514&&Ae(O,w[1]),(!ce||A[0]&514&&ae!==(ae=w[1]===w[9].RECENCY))&&(K.selected=ae),(!ce||A[0]&514&&me!==(me=w[1]===w[9].USEFULLNESS))&&($.selected=me),A[0]&514&&Ae(D,w[1]),w[5].length>0?G?G.p(w,A):(G=rt(w),G.c(),G.m(re,Ie)):G&&(G.d(1),G=null);let we=le;le=Xe(w),le===we?de[le].p(w,A):(Re(),ie(de[we],1,1,()=>{de[we]=null}),Pe(),ne=de[le],ne?ne.p(w,A):(ne=de[le]=We[le](w),ne.c()),J(ne,1),ne.m(re,null))},i(w){ce||(J(ne),ce=!0)},o(w){ie(ne),ce=!1},d(w){w&&(f(e),f(ye),f(Ee),f(Te),f(re)),G&&G.d(),de[le].d(),Be=!1,Je(ze)}}}function At(i){let e,t='<span class="loading loading-ring loading-lg"></span>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=h(s,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-1foj6e5"&&(e.innerHTML=t),this.h()},h(){b(e,"class","grow flex items-center justify-center")},m(s,r){P(s,e,r)},p:pe,i:pe,o:pe,d(s){s&&f(e)}}}function rt(i){let e,t,s=i[3]?"Hide":"Show Your Questions",r,p,m,c,a,k,u=i[3]&&it(),l=i[3]&&ct(i);return{c(){e=_("div"),t=_("button"),r=ee(s),p=S(),u&&u.c(),m=S(),l&&l.c(),c=Ue(),this.h()},l(o){e=h(o,"DIV",{class:!0});var d=g(e);t=h(d,"BUTTON",{class:!0});var C=g(t);r=te(C,s),C.forEach(f),p=N(d),u&&u.l(d),d.forEach(f),m=N(o),l&&l.l(o),c=Ue(),this.h()},h(){b(t,"class","btn btn-primary max-sm:btn-sm ml-2"),b(e,"class","flex justify-between items-center flex-row-reverse mb-4")},m(o,d){P(o,e,d),n(e,t),n(t,r),n(e,p),u&&u.m(e,null),P(o,m,d),l&&l.m(o,d),P(o,c,d),a||(k=oe(t,"click",i[20]),a=!0)},p(o,d){d[0]&8&&s!==(s=o[3]?"Hide":"Show Your Questions")&&be(r,s),o[3]?u?d[0]&8&&J(u,1):(u=it(),u.c(),J(u,1),u.m(e,null)):u&&(u.d(1),u=null),o[3]?l?(l.p(o,d),d[0]&8&&J(l,1)):(l=ct(o),l.c(),J(l,1),l.m(c.parentNode,c)):l&&(l.d(1),l=null)},d(o){o&&(f(e),f(m),f(c)),u&&u.d(),l&&l.d(o),a=!1,k()}}}function it(i){let e,t="Your Questions (Pending Approval)",s;return{c(){e=_("p"),e.textContent=t,this.h()},l(r){e=h(r,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-n32xvn"&&(e.textContent=t),this.h()},h(){b(e,"class","text-sm sm:text-base")},m(r,p){P(r,e,p)},i(r){r&&(s||Ce(()=>{s=Ye(e,Ge,{duration:800,easing:Fe}),s.start()}))},o:pe,d(r){r&&f(e)}}}function ct(i){let e,t=[],s=new Map,r,p,m,c,a=Me(i[5]);const k=u=>u[26];for(let u=0;u<a.length;u+=1){let l=at(i,a,u),o=k(l);s.set(o,t[u]=ut(o,l))}return{c(){e=_("div");for(let u=0;u<t.length;u+=1)t[u].c();p=S(),m=_("div"),this.h()},l(u){e=h(u,"DIV",{});var l=g(e);for(let o=0;o<t.length;o+=1)t[o].l(l);l.forEach(f),p=N(u),m=h(u,"DIV",{class:!0}),g(m).forEach(f),this.h()},h(){b(m,"class","divider")},m(u,l){P(u,e,l);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);P(u,p,l),P(u,m,l)},p(u,l){l[0]&32&&(a=Me(u[5]),t=pt(t,l,k,1,u,a,s,e,wt,ut,null,at))},i(u){u&&(r||Ce(()=>{r=Ye(e,Ge,{duration:800,easing:Fe}),r.start()})),u&&(c||Ce(()=>{c=Ye(m,Ge,{duration:800,easing:Fe}),c.start()}))},o:pe,d(u){u&&(f(e),f(p),f(m));for(let l=0;l<t.length;l+=1)t[l].d()}}}function ut(i,e){let t,s,r,p="Question",m,c,a=(e[27].length>600?Array.from(e[27]).slice(0,600).join("")+"...":e[27])+"",k,u;return{key:i,first:null,c(){t=_("div"),s=_("div"),r=_("p"),r.textContent=p,m=S(),c=_("p"),k=ee(a),u=S(),this.h()},l(l){t=h(l,"DIV",{class:!0});var o=g(t);s=h(o,"DIV",{class:!0});var d=g(s);r=h(d,"P",{class:!0,"data-svelte-h":!0}),F(r)!=="svelte-xf0ujr"&&(r.textContent=p),m=N(d),c=h(d,"P",{});var C=g(c);k=te(C,a),C.forEach(f),d.forEach(f),u=N(o),o.forEach(f),this.h()},h(){b(r,"class","text-xs sm:text-sm label-text mb-1"),b(s,"class","flex flex-col grow overflow-x-auto"),b(t,"class","card p-4 flex items-center flex-row glass"),ve(t,"mt-4",e[32]>0),this.first=t},m(l,o){P(l,t,o),n(t,s),n(s,r),n(s,m),n(s,c),n(c,k),n(t,u)},p(l,o){e=l,o[0]&32&&a!==(a=(e[27].length>600?Array.from(e[27]).slice(0,600).join("")+"...":e[27])+"")&&be(k,a),o[0]&32&&ve(t,"mt-4",e[32]>0)},d(l){l&&f(t)}}}function Ut(i){let e,t='<p class="text-lg">No questions...</p>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=h(s,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-jkehdr"&&(e.innerHTML=t),this.h()},h(){b(e,"class","grow flex items-center justify-center")},m(s,r){P(s,e,r)},p:pe,i:pe,o:pe,d(s){s&&f(e)}}}function jt(i){let e=[],t=new Map,s,r,p=Me(i[0]);const m=c=>c[26];for(let c=0;c<p.length;c+=1){let a=ot(i,p,c),k=m(a);t.set(k,e[c]=ft(k,a))}return{c(){for(let c=0;c<e.length;c+=1)e[c].c();s=Ue()},l(c){for(let a=0;a<e.length;a+=1)e[a].l(c);s=Ue()},m(c,a){for(let k=0;k<e.length;k+=1)e[k]&&e[k].m(c,a);P(c,s,a),r=!0},p(c,a){a[0]&15745&&(p=Me(c[0]),Re(),e=pt(e,a,m,1,c,p,t,s.parentNode,Ct,ft,s,ot),Pe())},i(c){if(!r){for(let a=0;a<p.length;a+=1)J(e[a]);r=!0}},o(c){for(let a=0;a<e.length;a+=1)ie(e[a]);r=!1},d(c){c&&f(s);for(let a=0;a<e.length;a+=1)e[a].d(c)}}}function ft(i,e){let t,s,r,p="Question",m,c,a=(e[27].length>600?Array.from(e[27]).slice(0,600).join("")+"...":e[27])+"",k,u,l,o,d,C="Answer",R,x,M=e[28]+"",q,B,O,I,L,U,Z,j,Q=e[29]-e[30]+"",Y,W,v,E,T,y,se,X;U=new He({props:{icon:Tt,height:18,class:"max-sm:scale-75",color:e[7].includes(e[26])?"oklch(var(--su))":void 0}});function z(){return e[21](e[26])}E=new He({props:{icon:It,height:18,class:"max-sm:scale-75",color:e[8].includes(e[26])?"oklch(var(--er))":void 0}});function ue(){return e[22](e[26])}return{key:i,first:null,c(){t=_("div"),s=_("div"),r=_("p"),r.textContent=p,m=S(),c=_("p"),k=ee(a),u=S(),l=_("div"),o=S(),d=_("p"),d.textContent=C,R=S(),x=_("p"),q=ee(M),B=S(),O=_("div"),I=_("div"),L=_("button"),je(U.$$.fragment),Z=S(),j=_("p"),Y=ee(Q),W=S(),v=_("button"),je(E.$$.fragment),T=S(),this.h()},l(H){t=h(H,"DIV",{class:!0});var D=g(t);s=h(D,"DIV",{class:!0});var V=g(s);r=h(V,"P",{class:!0,"data-svelte-h":!0}),F(r)!=="svelte-xf0ujr"&&(r.textContent=p),m=N(V),c=h(V,"P",{});var fe=g(c);k=te(fe,a),fe.forEach(f),u=N(V),l=h(V,"DIV",{class:!0}),g(l).forEach(f),o=N(V),d=h(V,"P",{class:!0,"data-svelte-h":!0}),F(d)!=="svelte-uf51bh"&&(d.textContent=C),R=N(V),x=h(V,"P",{});var K=g(x);q=te(K,M),K.forEach(f),B=N(V),O=h(V,"DIV",{class:!0});var ke=g(O);I=h(ke,"DIV",{class:!0});var ae=g(I);L=h(ae,"BUTTON",{class:!0});var $=g(L);Le(U.$$.fragment,$),$.forEach(f),Z=N(ae),j=h(ae,"P",{class:!0});var ge=g(j);Y=te(ge,Q),ge.forEach(f),W=N(ae),v=h(ae,"BUTTON",{class:!0});var me=g(v);Le(E.$$.fragment,me),me.forEach(f),ae.forEach(f),ke.forEach(f),V.forEach(f),T=N(D),D.forEach(f),this.h()},h(){b(r,"class","text-xs sm:text-sm label-text mb-1"),b(l,"class","divider my-0"),b(d,"class","text-xs sm:text-sm label-text mb-1"),b(L,"class","btn sm:btn-sm btn-circle btn-xs"),b(j,"class","mx-2 max-sm:text-xs"),b(v,"class","btn sm:btn-sm btn-circle btn-xs"),b(I,"class","flex items-center"),b(O,"class","flex justify-between items-center pt-4 max-sm:pt-2"),b(s,"class","flex flex-col grow overflow-x-auto"),b(t,"class","card p-4 flex items-center flex-row glass"),ve(t,"mt-4",e[32]>0),this.first=t},m(H,D){P(H,t,D),n(t,s),n(s,r),n(s,m),n(s,c),n(c,k),n(s,u),n(s,l),n(s,o),n(s,d),n(s,R),n(s,x),n(x,q),n(s,B),n(s,O),n(O,I),n(I,L),Qe(U,L,null),n(I,Z),n(I,j),n(j,Y),n(I,W),n(I,v),Qe(E,v,null),n(t,T),y=!0,se||(X=[oe(L,"click",z),oe(v,"click",ue)],se=!0)},p(H,D){e=H,(!y||D[0]&1)&&a!==(a=(e[27].length>600?Array.from(e[27]).slice(0,600).join("")+"...":e[27])+"")&&be(k,a),(!y||D[0]&1)&&M!==(M=e[28]+"")&&be(q,M);const V={};D[0]&129&&(V.color=e[7].includes(e[26])?"oklch(var(--su))":void 0),U.$set(V),(!y||D[0]&1)&&Q!==(Q=e[29]-e[30]+"")&&be(Y,Q);const fe={};D[0]&257&&(fe.color=e[8].includes(e[26])?"oklch(var(--er))":void 0),E.$set(fe),(!y||D[0]&1)&&ve(t,"mt-4",e[32]>0)},i(H){y||(J(U.$$.fragment,H),J(E.$$.fragment,H),y=!0)},o(H){ie(U.$$.fragment,H),ie(E.$$.fragment,H),y=!1},d(H){H&&f(t),qe(U),qe(E),se=!1,Je(X)}}}function dt(i){let e,t,s;function r(m){i[23](m)}let p={refreshCallback:i[14]};return i[2]!==void 0&&(p.showAddQuestion=i[2]),e=new Vt({props:p}),kt.push(()=>Et(e,"showAddQuestion",r)),{c(){je(e.$$.fragment)},l(m){Le(e.$$.fragment,m)},m(m,c){Qe(e,m,c),s=!0},p(m,c){const a={};!t&&c[0]&4&&(t=!0,a.showAddQuestion=m[2],gt(()=>t=!1)),e.$set(a)},i(m){s||(J(e.$$.fragment,m),s=!0)},o(m){ie(e.$$.fragment,m),s=!1},d(m){qe(e,m)}}}function Lt(i){let e,t,s,r,p,m,c;const a=[At,Dt],k=[];function u(o,d){return o[4]?0:1}r=u(i),p=k[r]=a[r](i);let l=i[2]&&dt(i);return{c(){e=_("div"),t=_("div"),s=_("div"),p.c(),m=S(),l&&l.c(),this.h()},l(o){e=h(o,"DIV",{class:!0});var d=g(e);t=h(d,"DIV",{class:!0});var C=g(t);s=h(C,"DIV",{class:!0});var R=g(s);p.l(R),R.forEach(f),C.forEach(f),m=N(d),l&&l.l(d),d.forEach(f),this.h()},h(){b(s,"class","card p-6 bg-base-200 flex h-full overflow-x-auto opacity-95"),b(t,"class","relative p-6 h-full w-full"),b(e,"class","flex h-full items-center justify-center relative background-image svelte-fxiz4z")},m(o,d){P(o,e,d),n(e,t),n(t,s),k[r].m(s,null),n(e,m),l&&l.m(e,null),c=!0},p(o,d){let C=r;r=u(o),r===C?k[r].p(o,d):(Re(),ie(k[C],1,1,()=>{k[C]=null}),Pe(),p=k[r],p?p.p(o,d):(p=k[r]=a[r](o),p.c()),J(p,1),p.m(s,null)),o[2]?l?(l.p(o,d),d[0]&4&&J(l,1)):(l=dt(o),l.c(),J(l,1),l.m(e,null)):l&&(Re(),ie(l,1,1,()=>{l=null}),Pe())},i(o){c||(J(p),J(l),c=!0)},o(o){ie(p),ie(l),c=!1},d(o){o&&f(e),k[r].d(),l&&l.d()}}}function Qt(i,e,t){let s;lt(()=>(s=setTimeout(()=>St("/questions"),Nt),()=>clearTimeout(s)));var r=(v=>(v[v.RECENCY=0]="RECENCY",v[v.USEFULLNESS=1]="USEFULLNESS",v))(r||{});let p=!1,m=!1,c=!0,a=[],k=[],u=0,l=0,o=[],d=[],C=[];const R=async v=>{if(C.includes(v)&&q(v,!1),!(await fetch("/api/questions/upvote",{method:"POST",body:JSON.stringify({id:v}),headers:{"Content-Type":"application/json"}})).ok)return;const T=a.findIndex(({id:y})=>y===v);T!==-1&&t(0,a[T].upvotes+=1,a),t(7,d=[...d,v])},x=async v=>{if(d.includes(v)&&M(v,!1),!(await fetch("/api/questions/downvote",{method:"POST",body:JSON.stringify({id:v}),headers:{"Content-Type":"application/json"}})).ok)return;const T=a.findIndex(({id:y})=>y===v);T!==-1&&t(0,a[T].downvotes+=1,a),t(8,C=[...C,v])},M=async(v,E=!0)=>{if(E&&!(await fetch("/api/questions/upvote",{method:"DELETE",body:JSON.stringify({id:v}),headers:{"Content-Type":"application/json"}})).ok)return;const T=a.findIndex(({id:y})=>y===v);T!==-1&&t(0,a[T].upvotes-=1,a),t(7,d=d.filter(y=>y!==v))},q=async(v,E=!0)=>{if(E&&!(await fetch("/api/questions/downvote",{method:"DELETE",body:JSON.stringify({id:v}),headers:{"Content-Type":"application/json"}})).ok)return;const T=a.findIndex(({id:y})=>y===v);T!==-1&&t(0,a[T].downvotes-=1,a),t(8,C=C.filter(y=>y!==v))},B=async()=>await(await fetch("/api/questions")).json(),O=async()=>{t(4,c=!0);const v=await B();t(0,a=v.questions),t(7,d=v.upvoted),t(8,C=v.downvoted),t(5,k=v.awaiting_approval),t(6,u=v.total_number_of_questions),t(15,o=[...a]),t(4,c=!1)};lt(O);function I(){l=nt(this),t(1,l),t(9,r)}const L=()=>t(2,p=!0),U=()=>t(2,p=!0);function Z(){l=nt(this),t(1,l),t(9,r)}const j=()=>t(3,m=!m),Q=v=>d.includes(v)?M(v):R(v),Y=v=>C.includes(v)?q(v):x(v);function W(v){p=v,t(2,p)}return i.$$.update=()=>{if(i.$$.dirty[0]&32771)switch(l){case 0:t(0,a=o);break;case 1:t(0,a=a.toSorted((v,E)=>E.upvotes-E.downvotes-(v.upvotes-v.downvotes)));break;default:t(0,a=o);break}},[a,l,p,m,c,k,u,d,C,r,R,x,M,q,O,o,I,L,U,Z,j,Q,Y,W]}class Gt extends ht{constructor(e){super(),vt(this,e,Qt,Lt,_t,{},null,[-1,-1])}}export{Gt as component};
