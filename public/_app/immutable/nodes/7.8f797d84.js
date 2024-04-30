import{s as z,f as m,a as T,g as p,h as L,A as $,c as y,d as v,j as s,i as R,x as r,Y as N,B as S,Z as le,C as re,o as ne,y as J,P as ie}from"../chunks/scheduler.ef5aa3da.js";import{S as K,i as X,a as V,g as oe,t as O,c as ce,b as ee,d as te,m as se,e as ae}from"../chunks/index.7d1d894a.js";import{e as ue}from"../chunks/spread.e8bb49a5.js";import{l as de,a as fe}from"../chunks/index.a8729054.js";import{I as me}from"../chunks/Icon.94fb4e69.js";import{d as pe}from"../chunks/close-box.75461ac6.js";import{p as he}from"../chunks/index.d3d61c93.js";import{a as _e}from"../chunks/index.e6a189c6.js";function Z(h){let t,e,n,a,d="Email Or Password Invalid",u;return e=new me({props:{icon:pe,height:24,class:"scale-125",color:"oklch(var(--er))"}}),{c(){t=m("div"),ee(e.$$.fragment),n=T(),a=m("p"),a.textContent=d,this.h()},l(i){t=p(i,"DIV",{class:!0});var o=L(t);te(e.$$.fragment,o),n=y(o),a=p(o,"P",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-10cbbrj"&&(a.textContent=d),o.forEach(v),this.h()},h(){s(a,"class","ml-3"),s(t,"class","flex mt-1")},m(i,o){R(i,t,o),se(e,t,null),r(t,n),r(t,a),u=!0},i(i){u||(V(e.$$.fragment,i),u=!0)},o(i){O(e.$$.fragment,i),u=!1},d(i){i&&v(t),ae(e)}}}function ve(h){let t,e,n,a="Login",d,u,i,o='<span class="label-text">Email</span>',l,c,I,E,w,F='<span class="label-text">Password</span>',U,g,G,P,D,j,M,Q='<button class="btn btn-neutral btn-sm" data-testid="login-button">Login</button>',q,C,W='<a class="btn btn-primary btn-sm mt-2" href="/signup">Create An Account</a>',A,B,Y,f=h[1]&&Z();return{c(){t=m("form"),e=m("div"),n=m("h2"),n.textContent=a,d=T(),u=m("div"),i=m("label"),i.innerHTML=o,l=T(),c=m("input"),I=T(),E=m("div"),w=m("label"),w.innerHTML=F,U=T(),g=m("input"),G=T(),f&&f.c(),P=T(),D=m("div"),j=T(),M=m("div"),M.innerHTML=Q,q=T(),C=m("div"),C.innerHTML=W,this.h()},l(b){t=p(b,"FORM",{class:!0});var x=L(t);e=p(x,"DIV",{class:!0});var _=L(e);n=p(_,"H2",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-15325d3"&&(n.textContent=a),d=y(_),u=p(_,"DIV",{class:!0});var H=L(u);i=p(H,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),$(i)!=="svelte-efmmh6"&&(i.innerHTML=o),l=y(H),c=p(H,"INPUT",{type:!0,placeholder:!0,class:!0,id:!0,"data-testid":!0}),H.forEach(v),I=y(_),E=p(_,"DIV",{class:!0});var k=L(E);w=p(k,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),$(w)!=="svelte-1wufbq4"&&(w.innerHTML=F),U=y(k),g=p(k,"INPUT",{type:!0,placeholder:!0,class:!0,id:!0,"data-testid":!0}),k.forEach(v),G=y(_),f&&f.l(_),P=y(_),D=p(_,"DIV",{class:!0}),L(D).forEach(v),j=y(_),M=p(_,"DIV",{class:!0,"data-svelte-h":!0}),$(M)!=="svelte-1oql68v"&&(M.innerHTML=Q),q=y(_),C=p(_,"DIV",{class:!0,"data-svelte-h":!0}),$(C)!=="svelte-godd6p"&&(C.innerHTML=W),_.forEach(v),x.forEach(v),this.h()},h(){s(n,"class","card-title"),s(i,"class","label"),s(i,"for","email"),s(c,"type","text"),s(c,"placeholder","email"),s(c,"class","input input-bordered"),s(c,"id","email"),s(c,"data-testid","email"),s(u,"class","form-control"),s(w,"class","label"),s(w,"for","password"),s(g,"type","password"),s(g,"placeholder","password"),s(g,"class","input input-bordered"),s(g,"id","password"),s(g,"data-testid","password"),s(E,"class","form-control"),s(D,"class","divider my-1"),s(M,"class","form-control"),s(C,"class","form-control"),s(e,"class","card-body"),s(t,"class","card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100")},m(b,x){R(b,t,x),r(t,e),r(e,n),r(e,d),r(e,u),r(u,i),r(u,l),r(u,c),N(c,h[0].email),r(e,I),r(e,E),r(E,w),r(E,U),r(E,g),N(g,h[0].password),r(e,G),f&&f.m(e,null),r(e,P),r(e,D),r(e,j),r(e,M),r(e,q),r(e,C),A=!0,B||(Y=[S(c,"input",h[3]),S(c,"input",h[4]),S(g,"input",h[5]),S(g,"input",h[6]),S(t,"submit",le(h[2]))],B=!0)},p(b,[x]){x&1&&c.value!==b[0].email&&N(c,b[0].email),x&1&&g.value!==b[0].password&&N(g,b[0].password),b[1]?f?x&2&&V(f,1):(f=Z(),f.c(),V(f,1),f.m(e,P)):f&&(oe(),O(f,1,1,()=>{f=null}),ce())},i(b){A||(V(f),A=!0)},o(b){O(f),A=!1},d(b){b&&v(t),f&&f.d(),B=!1,re(Y)}}}function ge(h,t,e){let n;ne(()=>(n=setTimeout(()=>he("/login"),_e),()=>clearTimeout(n)));let a={email:"",password:""},d=!1;const u=async()=>{await de(a.email,a.password)?fe.verify():e(1,d=!0)};function i(){a.email=this.value,e(0,a)}const o=()=>e(1,d=!1);function l(){a.password=this.value,e(0,a)}return[a,d,u,i,o,l,()=>e(1,d=!1)]}class be extends K{constructor(t){super(),X(this,t,ge,ve,z,{})}}function Ie(h,t,e){const n=h.slice();return n[0]=t[e],n}function we(h){let t;return{c(){t=m("div"),this.h()},l(e){t=p(e,"DIV",{class:!0}),L(t).forEach(v),this.h()},h(){s(t,"class","tri svelte-1b87h80")},m(e,n){R(e,t,n)},p:J,d(e){e&&v(t)}}}function Ee(h){let t,e,n,a,d,u,i=ue(Array(200)),o=[];for(let l=0;l<i.length;l+=1)o[l]=we(Ie(h,i,l));return d=new be({}),{c(){t=m("div"),e=m("div");for(let l=0;l<o.length;l+=1)o[l].c();n=T(),a=m("div"),ee(d.$$.fragment),this.h()},l(l){t=p(l,"DIV",{class:!0});var c=L(t);e=p(c,"DIV",{class:!0});var I=L(e);for(let w=0;w<o.length;w+=1)o[w].l(I);I.forEach(v),n=y(c),a=p(c,"DIV",{class:!0});var E=L(a);te(d.$$.fragment,E),E.forEach(v),c.forEach(v),this.h()},h(){s(e,"class","wrap svelte-1b87h80"),s(a,"class","h-full flex items-center justify-center"),s(t,"class","grow relative")},m(l,c){R(l,t,c),r(t,e);for(let I=0;I<o.length;I+=1)o[I]&&o[I].m(e,null);r(t,n),r(t,a),se(d,a,null),u=!0},p:J,i(l){u||(V(d.$$.fragment,l),u=!0)},o(l){O(d.$$.fragment,l),u=!1},d(l){l&&v(t),ie(o,l),ae(d)}}}class Se extends K{constructor(t){super(),X(this,t,null,Ee,z,{})}}export{Se as component};
