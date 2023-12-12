import{s as Qe,f as d,a as V,g as f,h as b,A as z,c as E,d as v,j as m,i as N,x as l,B as Ae,y as ge,o as at,F as pt,p as bt,U as ct,P as Ge,G as ot,V as Ye,C as wt,l as re,m as oe,n as ce,S as Me,e as ut}from"../chunks/scheduler.fa2c1182.js";import{S as Be,i as We,b as Q,d as B,m as W,a as P,t as O,e as Y,g as nt,c as it,f as St}from"../chunks/index.488748fd.js";import{_ as rt}from"../chunks/preload-helper.a4192956.js";import{e as vt,u as Tt,d as Lt}from"../chunks/each.9917cb24.js";import{C as $t,g as Rt,a as xt,b as It,c as Dt,e as Vt,f as Et,d as yt}from"../chunks/star.b21a40d0.js";import{I as _e}from"../chunks/Icon.4e55cced.js";import{c as At,f as Ft}from"../chunks/index.95330f13.js";function Mt(o){let e,t,s,n,a,c="All Visits",i,_="Unique Visits",p,r,h,u="Autorotate",g,w,I,y;return{c(){e=d("div"),t=V(),s=d("div"),n=d("select"),a=d("option"),a.textContent=c,i=d("option"),i.textContent=_,p=V(),r=d("div"),h=d("p"),h.textContent=u,g=V(),w=d("input"),this.h()},l(x){e=f(x,"DIV",{class:!0}),b(e).forEach(v),t=E(x),s=f(x,"DIV",{class:!0});var D=b(s);n=f(D,"SELECT",{class:!0});var k=b(n);a=f(k,"OPTION",{"data-svelte-h":!0}),z(a)!=="svelte-w2ewlg"&&(a.textContent=c),i=f(k,"OPTION",{"data-svelte-h":!0}),z(i)!=="svelte-1l0fgq9"&&(i.textContent=_),k.forEach(v),D.forEach(v),p=E(x),r=f(x,"DIV",{class:!0});var A=b(r);h=f(A,"P",{class:!0,"data-svelte-h":!0}),z(h)!=="svelte-1ae0u45"&&(h.textContent=u),g=E(A),w=f(A,"INPUT",{type:!0,class:!0}),A.forEach(v),this.h()},h(){m(e,"class","absolute w-full h-full"),a.__value=!1,Ge(a,a.__value),i.__value=!0,Ge(i,i.__value),m(n,"class","select select-sm max-sm:select-xs select-info w-full max-w-xs"),o[0]===void 0&&ot(()=>o[11].call(n)),m(s,"class","absolute top-2 left-2"),m(h,"class","mr-2"),m(w,"type","checkbox"),m(w,"class","toggle toggle-info"),m(r,"class","absolute bottom-2 right-2 card flex flex-row")},m(x,D){N(x,e,D),o[10](e),N(x,t,D),N(x,s,D),l(s,n),l(n,a),l(n,i),Ye(n,o[0],!0),N(x,p,D),N(x,r,D),l(r,h),l(r,g),l(r,w),w.checked=o[1],I||(y=[Ae(n,"change",o[11]),Ae(w,"change",o[12])],I=!0)},p(x,D){D&1&&Ye(n,x[0]),D&2&&(w.checked=x[1])},d(x){x&&(v(e),v(t),v(s),v(p),v(r)),o[10](null),I=!1,wt(y)}}}function Pt(o){let e,t='<span class="loading loading-ring loading-lg"></span>';return{c(){e=d("div"),e.innerHTML=t,this.h()},l(s){e=f(s,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-oeracv"&&(e.innerHTML=t),this.h()},h(){m(e,"class","grow flex items-center justify-center")},m(s,n){N(s,e,n)},p:ge,d(s){s&&v(e)}}}function Ot(o){let e,t,s="Landing Page Visits By Location",n,a,c,i;function _(h,u){return h[2]?Pt:Mt}let p=_(o),r=p(o);return{c(){e=d("div"),t=d("p"),t.textContent=s,n=V(),a=d("div"),r.c(),this.h()},l(h){e=f(h,"DIV",{class:!0});var u=b(e);t=f(u,"P",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-87d2lc"&&(t.textContent=s),n=E(u),a=f(u,"DIV",{class:!0});var g=b(a);r.l(g),g.forEach(v),u.forEach(v),this.h()},h(){m(t,"class","p-4"),m(a,"class","flex grow relative overflow-hidden"),m(e,"class","flex grow card overflow-hidden bg-base-300")},m(h,u){N(h,e,u),l(e,t),l(e,n),l(e,a),r.m(a,null),c||(i=Ae(window,"resize",o[9]),c=!0)},p(h,[u]){p===(p=_(h))&&r?r.p(h,u):(r.d(1),r=p(h),r&&(r.c(),r.m(a,null)))},i:ge,o:ge,d(h){h&&v(e),r.d(),c=!1,i()}}}function Nt(o,e,t){let s,n;const a=(D,k)=>{const X={};return D.forEach(([F,$,S])=>{const T=F*Math.PI/180,H=$*Math.PI/180,G=Math.floor(T/(k/6371)),Z=Math.floor(H/(k/6371)),q=`${G},${Z}`;X[q]=(X[q]||0)+S}),Object.entries(X).map(([F,$])=>{const[S,T]=F.split(",").map(Number),H=(S+.5)*k/6371*(180/Math.PI),G=(T+.5)*k/6371*(180/Math.PI);return[H,G,$]})};let c=!1,i=!0,_=!0,p,r,h,u;at(async()=>{const D=await fetch("/api/reporter/stats/globe");if(!D.ok)return;const k=await D.json();t(5,p=k.all),t(6,r=k.unique),t(2,_=!1)});const g=async()=>{const D=await rt(()=>import("../chunks/star.b21a40d0.js").then(k=>k.am),["../chunks/star.b21a40d0.js","../chunks/scheduler.fa2c1182.js","../chunks/index.488748fd.js","../assets/star.5c000760.css"],import.meta.url);await rt(()=>import("../chunks/index.8727a9e2.js"),["../chunks/index.8727a9e2.js","../chunks/star.b21a40d0.js","../chunks/scheduler.fa2c1182.js","../chunks/index.488748fd.js","../assets/star.5c000760.css"],import.meta.url),t(3,u=D.init(h,"dark",{locale:"EN"}))};pt(()=>u&&u.dispose());const w=()=>u&&u.resize();function I(D){bt[D?"unshift":"push"](()=>{h=D,t(4,h)})}function y(){c=ct(this),t(0,c)}function x(){i=this.checked,t(1,i)}return o.$$.update=()=>{o.$$.dirty&97&&t(8,s=r&&p&&a(c?r:p,50).map(([D,k,A])=>[D.toFixed(4),k.toFixed(4),Math.log(A+1)])),o.$$.dirty&258&&t(7,n={darkMode:!0,animation:!0,backgroundColor:"#000",globe:{baseTexture:"/world.jpg",heightTexture:"/world_displacement.jpg",displacementScale:.02,displacementQuality:"high",shading:"realistic",environment:"/starfield.jpg",globeRadiusRadius:100,globeOuterRadius:120,realisticMaterial:{roughness:.2,metalness:0},postEffect:{enable:!0,depthOfField:{enable:!1}},temporalSuperSampling:{enable:!0},light:{ambient:{intensity:0},main:{intensity:.1,shadow:!1},ambientCubemap:{texture:"/lake.hdr",exposure:1,diffuseIntensity:.5,specularIntensity:.5}},viewControl:{autoRotate:i,autoRotateSpeed:5,beta:180,alpha:20,distance:200,targetCoord:[-3.5,35]}},visualMap:{show:!1,max:s?Math.max(...s.map(D=>D[2])):1,realtime:!1,inRange:{colorLightness:[.2,.65]},outOfRange:{colorAlpha:0}},series:[{type:"bar3D",coordinateSystem:"globe",data:s,barSize:.6,minHeight:.2,silent:!0,itemStyle:{color:"red"}}]}),o.$$.dirty&136&&u&&u.setOption(n),o.$$.dirty&4&&(_||g())},[c,i,_,u,h,p,r,n,s,w,I,y,x]}class Ct extends Be{constructor(e){super(),We(this,e,Nt,Ot,Qe,{})}}function Ht(o){let e,t,s,n;return{c(){e=d("div"),t=d("div"),this.h()},l(a){e=f(a,"DIV",{class:!0});var c=b(e);t=f(c,"DIV",{class:!0}),b(t).forEach(v),c.forEach(v),this.h()},h(){m(t,"class","w-full h-full absolute"),m(e,"class","flex grow relative overflow-hidden card")},m(a,c){N(a,e,c),l(e,t),o[5](t),s||(n=Ae(window,"resize",o[4]),s=!0)},p:ge,i:ge,o:ge,d(a){a&&v(e),o[5](null),s=!1,n()}}}function jt(o,e,t){let s,{data:n}=e,a,c;at(async()=>{const r=await rt(()=>import("../chunks/star.b21a40d0.js").then(h=>h.am),["../chunks/star.b21a40d0.js","../chunks/scheduler.fa2c1182.js","../chunks/index.488748fd.js","../assets/star.5c000760.css"],import.meta.url);await rt(()=>import("../chunks/index.8727a9e2.js"),["../chunks/index.8727a9e2.js","../chunks/star.b21a40d0.js","../chunks/scheduler.fa2c1182.js","../chunks/index.488748fd.js","../assets/star.5c000760.css"],import.meta.url),t(0,c=r.init(a,"dark",{locale:"EN"}))}),pt(()=>c&&c.dispose());const _=()=>c&&c.resize();function p(r){bt[r?"unshift":"push"](()=>{a=r,t(1,a)})}return o.$$set=r=>{"data"in r&&t(2,n=r.data)},o.$$.update=()=>{o.$$.dirty&4&&t(3,s={tooltip:{trigger:"item",formatter:r=>`
				<b>${r.seriesName}</b><br />
				Time spent (s): ${r.data[2]}<br />
				Date: ${r.data[1]}<br />
				Country: ${r.data[0]}<br /><br />
				Signed Up: <b>${r.data[3]?"YES":"NO"}</b><br />
				`},backgroundColor:"transparent",animation:!0,grid3D:{},xAxis3D:{type:"category",name:"Date",nameTextStyle:{fontSize:16,color:"#fff",align:"center"},nameGap:40,axisLabel:{textStyle:{color:"#aad8e6"}}},yAxis3D:{type:"category",name:"Country",nameTextStyle:{fontSize:16,color:"#fff",verticalAlign:"middle"},nameGap:30,axisLabel:{textStyle:{color:"#aad8e6"}}},zAxis3D:{type:"value",name:"Time spent (s)",nameTextStyle:{fontSize:16,color:"#fff",verticalAlign:"top"},nameGap:25,axisLabel:{textStyle:{color:"#aad8e6",formatter:(r,h)=>h===0?"":r}}},dataset:{dimensions:["Country","Date","Time spent (s)","Signed Up",{name:"Time spent (s)",type:"ordinal"}],source:n},series:[{name:"Landing Page Visit",type:"scatter3D",symbolSize:6,encode:{x:"Date",y:"Country",z:"Time spent (s)"},itemStyle:{color:r=>r.data[3]?"#FF4683":"#00b3f0"}}]}),o.$$.dirty&9&&c&&c.setOption(s)},[c,a,n,s,_,p]}class zt extends Be{constructor(e){super(),We(this,e,jt,Ht,Qe,{data:2})}}function ht(o,e,t){const s=o.slice();return s[8]=e[t],s}function mt(o,e){let t,s=e[8]+"",n,a;return{key:o,first:null,c(){t=d("option"),n=re(s),this.h()},l(c){t=f(c,"OPTION",{});var i=b(t);n=oe(i,s),i.forEach(v),this.h()},h(){t.__value=a=e[8],Ge(t,t.__value),this.first=t},m(c,i){N(c,t,i),l(t,n)},p(c,i){e=c,i&8&&s!==(s=e[8]+"")&&ce(n,s),i&8&&a!==(a=e[8])&&(t.__value=a,Ge(t,t.__value))},d(c){c&&v(t)}}}function qt(o){let e,t,s,n,a,c="All Countries",i=[],_=new Map,p,r,h,u,g="Only With Signup Outcome",w,I,y,x,D,k,A,X,C=vt(o[3]);const F=$=>$[8];for(let $=0;$<C.length;$+=1){let S=ht(o,C,$),T=F(S);_.set(T,i[$]=mt(T,S))}return D=new $t({props:{options:o[2]}}),{c(){e=d("div"),t=d("div"),s=d("div"),n=d("select"),a=d("option"),a.textContent=c;for(let $=0;$<i.length;$+=1)i[$].c();p=V(),r=d("div"),h=d("label"),u=d("span"),u.textContent=g,w=V(),I=d("input"),y=V(),x=d("div"),Q(D.$$.fragment),this.h()},l($){e=f($,"DIV",{class:!0});var S=b(e);t=f(S,"DIV",{class:!0});var T=b(t);s=f(T,"DIV",{});var H=b(s);n=f(H,"SELECT",{class:!0});var G=b(n);a=f(G,"OPTION",{"data-svelte-h":!0}),z(a)!=="svelte-19stldw"&&(a.textContent=c);for(let U=0;U<i.length;U+=1)i[U].l(G);G.forEach(v),H.forEach(v),p=E(T),r=f(T,"DIV",{class:!0});var Z=b(r);h=f(Z,"LABEL",{class:!0});var q=b(h);u=f(q,"SPAN",{class:!0,"data-svelte-h":!0}),z(u)!=="svelte-1i1x04x"&&(u.textContent=g),w=E(q),I=f(q,"INPUT",{type:!0,class:!0}),q.forEach(v),Z.forEach(v),T.forEach(v),y=E(S),x=f(S,"DIV",{class:!0});var be=b(x);B(D.$$.fragment,be),be.forEach(v),S.forEach(v),this.h()},h(){a.__value=!1,Ge(a,a.__value),m(n,"class","select select-sm max-sm:select-xs select-info w-full max-w-xs"),o[1]===void 0&&ot(()=>o[6].call(n)),m(u,"class","label-text mr-2 max-sm:text-xs text-right"),m(I,"type","checkbox"),m(I,"class","checkbox checkbox-info max-sm:checkbox-xs"),m(h,"class","cursor-pointer label"),m(r,"class","form-control"),m(t,"class","flex justify-between p-4 items-center"),m(x,"class","relative overflow-hidden grow flex"),m(e,"class","flex grow flex-col card")},m($,S){N($,e,S),l(e,t),l(t,s),l(s,n),l(n,a);for(let T=0;T<i.length;T+=1)i[T]&&i[T].m(n,null);Ye(n,o[1],!0),l(t,p),l(t,r),l(r,h),l(h,u),l(h,w),l(h,I),I.checked=o[0],l(e,y),l(e,x),W(D,x,null),k=!0,A||(X=[Ae(n,"change",o[6]),Ae(I,"change",o[7])],A=!0)},p($,[S]){S&8&&(C=vt($[3]),i=Tt(i,S,F,1,$,C,_,n,Lt,mt,null,ht)),S&10&&Ye(n,$[1]),S&1&&(I.checked=$[0]);const T={};S&4&&(T.options=$[2]),D.$set(T)},i($){k||(P(D.$$.fragment,$),k=!0)},o($){O(D.$$.fragment,$),k=!1},d($){$&&v(e);for(let S=0;S<i.length;S+=1)i[S].d();Y(D),A=!1,wt(X)}}}function Ut(o,e,t){let s,n,a,{data:c}=e,i=!1,_=!1;function p(){_=ct(this),t(1,_),t(3,n),t(4,c)}function r(){i=this.checked,t(0,i)}return o.$$set=h=>{"data"in h&&t(4,c=h.data)},o.$$.update=()=>{o.$$.dirty&19&&t(5,s=Object.entries(c.reduce((h,u)=>{if(i&&!u[3]||_&&u[0]!==_)return h;const g=u[1];return h[g]||(h[g]=0),h[g]++,h},{}))),o.$$.dirty&16&&t(3,n=Array.from(new Set(c.map(h=>h[0]))).sort()),o.$$.dirty&32&&t(2,a={animation:!1,tooltip:{trigger:"axis",position:h=>[h[0],"10%"]},toolbox:{feature:{restore:{}}},xAxis:{type:"category",boundaryGap:!1,data:s.map(h=>h[0]),axisLabel:{color:"#FFFFFF"}},yAxis:{type:"value",boundaryGap:[0,"100%"],name:"No. of Visits",nameTextStyle:{color:"#FFFFFF"},axisLabel:{color:"#FFFFFF"}},dataZoom:[{type:"inside",start:0,end:100},{start:0,end:100}],series:[{name:"No. of Visits",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(255, 70, 131)"},areaStyle:{color:new Rt.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 158, 68)"},{offset:1,color:"rgb(255, 70, 131)"}])},data:s}]})},[i,_,a,n,c,s,p,r]}class Gt extends Be{constructor(e){super(),We(this,e,Ut,qt,Qe,{data:4})}}function Qt(o){let e,t,s,n,a,c;return t=new zt({props:{data:o[1]?o[4]:o[3]}}),a=new Gt({props:{data:o[1]?o[4]:o[3]}}),{c(){e=d("div"),Q(t.$$.fragment),s=V(),n=d("div"),Q(a.$$.fragment),this.h()},l(i){e=f(i,"DIV",{class:!0});var _=b(e);B(t.$$.fragment,_),_.forEach(v),s=E(i),n=f(i,"DIV",{class:!0});var p=b(n);B(a.$$.fragment,p),p.forEach(v),this.h()},h(){m(e,"class","grow flex card overflow-hidden bg-base-300 basis-1/2"),m(n,"class","grow flex card overflow-hidden bg-base-300 basis-1/2")},m(i,_){N(i,e,_),W(t,e,null),N(i,s,_),N(i,n,_),W(a,n,null),c=!0},p(i,_){const p={};_&26&&(p.data=i[1]?i[4]:i[3]),t.$set(p);const r={};_&26&&(r.data=i[1]?i[4]:i[3]),a.$set(r)},i(i){c||(P(t.$$.fragment,i),P(a.$$.fragment,i),c=!0)},o(i){O(t.$$.fragment,i),O(a.$$.fragment,i),c=!1},d(i){i&&(v(e),v(s),v(n)),Y(t),Y(a)}}}function Bt(o){let e,t='<span class="loading loading-ring loading-lg"></span>',s,n,a='<span class="loading loading-ring loading-lg"></span>';return{c(){e=d("div"),e.innerHTML=t,s=V(),n=d("div"),n.innerHTML=a,this.h()},l(c){e=f(c,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-10yviux"&&(e.innerHTML=t),s=E(c),n=f(c,"DIV",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-10yviux"&&(n.innerHTML=a),this.h()},h(){m(e,"class","grow flex items-center justify-center bg-base-300 basis-1/2"),m(n,"class","grow flex items-center justify-center bg-base-300 basis-1/2")},m(c,i){N(c,e,i),N(c,s,i),N(c,n,i)},p:ge,i:ge,o:ge,d(c){c&&(v(e),v(s),v(n))}}}function Wt(o){let e,t,s,n="Landing Page Visits",a,c,i,_,p="All Visits",r,h="Unique Visits",u,g,w,I,y,x,D;const k=[Bt,Qt],A=[];function X(C,F){return C[2]?0:1}return w=X(o),I=A[w]=k[w](o),{c(){e=d("div"),t=d("div"),s=d("p"),s.textContent=n,a=V(),c=d("div"),i=d("select"),_=d("option"),_.textContent=p,r=d("option"),r.textContent=h,u=V(),g=d("div"),I.c(),this.h()},l(C){e=f(C,"DIV",{class:!0});var F=b(e);t=f(F,"DIV",{class:!0});var $=b(t);s=f($,"P",{"data-svelte-h":!0}),z(s)!=="svelte-vea0hu"&&(s.textContent=n),a=E($),c=f($,"DIV",{});var S=b(c);i=f(S,"SELECT",{class:!0});var T=b(i);_=f(T,"OPTION",{"data-svelte-h":!0}),z(_)!=="svelte-w2ewlg"&&(_.textContent=p),r=f(T,"OPTION",{"data-svelte-h":!0}),z(r)!=="svelte-1l0fgq9"&&(r.textContent=h),T.forEach(v),S.forEach(v),$.forEach(v),u=E(F),g=f(F,"DIV",{class:!0});var H=b(g);I.l(H),H.forEach(v),F.forEach(v),this.h()},h(){_.__value=!1,Ge(_,_.__value),r.__value=!0,Ge(r,r.__value),m(i,"class","select select-sm max-sm:select-xs select-info w-full max-w-xs"),o[1]===void 0&&ot(()=>o[5].call(i)),m(t,"class","flex bg-base-300 justify-between items-center p-4 card flex-row"),m(g,"class","flex grow gap-6 mt-6 max-sm:flex-col"),Me(g,"flex-col",o[0]),m(e,"class","grow flex flex-col")},m(C,F){N(C,e,F),l(e,t),l(t,s),l(t,a),l(t,c),l(c,i),l(i,_),l(i,r),Ye(i,o[1],!0),l(e,u),l(e,g),A[w].m(g,null),y=!0,x||(D=Ae(i,"change",o[5]),x=!0)},p(C,[F]){F&2&&Ye(i,C[1]);let $=w;w=X(C),w===$?A[w].p(C,F):(nt(),O(A[$],1,1,()=>{A[$]=null}),it(),I=A[w],I?I.p(C,F):(I=A[w]=k[w](C),I.c()),P(I,1),I.m(g,null)),(!y||F&1)&&Me(g,"flex-col",C[0])},i(C){y||(P(I),y=!0)},o(C){O(I),y=!1},d(C){C&&v(e),A[w].d(),x=!1,D()}}}function Yt(o,e,t){let s=!1,{mobileView:n=!1}=e,a=!0,c,i;const _=r=>{const h=new Date(r),u=String(h.getDate()).padStart(2,"0"),g=String(h.getMonth()+1).padStart(2,"0"),w=h.getFullYear();return`${u}/${g}/${w}`};at(async()=>{const r=await fetch("/api/reporter/stats/all-visits");if(!r.ok)return;const h=await r.json(),u=h.all,g=h.unique;t(3,c=u.map(w=>[w[0],_(w[1]),w[2],w[3]])),t(4,i=g.map(w=>[w[0],_(w[1]),w[2],w[3]])),t(2,a=!1)});function p(){s=ct(this),t(1,s)}return o.$$set=r=>{"mobileView"in r&&t(0,n=r.mobileView)},[n,s,a,c,i,p]}class Zt extends Be{constructor(e){super(),We(this,e,Yt,Wt,Qe,{mobileView:0})}}function Jt(o){let e,t;return e=new $t({props:{options:o[2]}}),{c(){Q(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,n){W(e,s,n),t=!0},p(s,n){const a={};n&4&&(a.options=s[2]),e.$set(a)},i(s){t||(P(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function Kt(o){let e,t='<span class="loading loading-ring loading-lg"></span>';return{c(){e=d("div"),e.innerHTML=t,this.h()},l(s){e=f(s,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-mw3q05"&&(e.innerHTML=t),this.h()},h(){m(e,"class","grow flex items-center justify-center"),Me(e,"h-72",o[0])},m(s,n){N(s,e,n)},p(s,n){n&1&&Me(e,"h-72",s[0])},i:ge,o:ge,d(s){s&&v(e)}}}function Xt(o){let e,t,s="Registration Funnel For Unique Sessions",n,a,c,i,_;const p=[Kt,Jt],r=[];function h(u,g){return u[1]?0:1}return c=h(o),i=r[c]=p[c](o),{c(){e=d("div"),t=d("p"),t.textContent=s,n=V(),a=d("div"),i.c(),this.h()},l(u){e=f(u,"DIV",{class:!0});var g=b(e);t=f(g,"P",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-gvudd"&&(t.textContent=s),n=E(g),a=f(g,"DIV",{class:!0});var w=b(a);i.l(w),w.forEach(v),g.forEach(v),this.h()},h(){m(t,"class","p-4"),Me(t,"text-xs",o[0]),m(a,"class","relative overflow-hidden grow flex"),m(e,"class","flex grow card bg-base-300")},m(u,g){N(u,e,g),l(e,t),l(e,n),l(e,a),r[c].m(a,null),_=!0},p(u,[g]){(!_||g&1)&&Me(t,"text-xs",u[0]);let w=c;c=h(u),c===w?r[c].p(u,g):(nt(),O(r[w],1,1,()=>{r[w]=null}),it(),i=r[c],i?i.p(u,g):(i=r[c]=p[c](u),i.c()),P(i,1),i.m(a,null))},i(u){_||(P(i),_=!0)},o(u){O(i),_=!1},d(u){u&&v(e),r[c].d()}}}function es(o,e,t){let s,n,a,{mobileView:c=!1}=e,i=!0;at(async()=>{const p=await fetch("/api/reporter/stats/route-visits");if(!p.ok)return;const r=await p.json();t(3,a=r.routes_visited),r.registrations,n=r.total_unique_visits,t(1,i=!1)});const _=p=>n===0?0:Math.floor(p*100/n);return o.$$set=p=>{"mobileView"in p&&t(0,c=p.mobileView)},o.$$.update=()=>{o.$$.dirty&9&&t(2,s={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Expected",type:"funnel",label:{formatter:"{b}",color:"#fff"},labelLine:{show:!1},itemStyle:{opacity:.6},tooltip:{show:!1},left:"5%",width:c?"65%":"80%",top:"0%",bottom:"7%",sort:"none",data:[{value:100,name:"Home"},{value:90,name:"Solution"},{value:80,name:"Features"},{value:70,name:"Pricing"},{value:60,name:"Register Interest"},{value:50,name:"Reviews"},{value:40,name:"Questions"},{value:30,name:"Login"},{value:20,name:"Signup"},{value:10,name:"Completed Signup"}]},{name:"Unique Session Interactions",type:"funnel",left:"5%",width:c?"65%":"80%",top:"0%",bottom:"7%",label:{position:"inside",formatter:"{c}%",color:"#fff"},labelLine:{show:!1},itemStyle:{opacity:.5,borderColor:"#fff",borderWidth:2},tooltip:{show:!0},sort:"none",data:[{value:_((a==null?void 0:a.home)??0),name:"Viewed Home"},{value:_((a==null?void 0:a.solution)??0),name:"Viewed Solution"},{value:_((a==null?void 0:a.features)??0),name:"Viewed Features"},{value:_((a==null?void 0:a.pricing)??0),name:"Viewed Pricing"},{value:_(a&&(a["register-interest"]??0)),name:"Viewed Register Interest"},{value:_((a==null?void 0:a.reviews)??0),name:"Viewed Reviews"},{value:_((a==null?void 0:a.questions)??0),name:"Viewed Questions"},{value:_((a==null?void 0:a.login)??0),name:"Viewed Login"},{value:_((a==null?void 0:a.signup)??0),name:"Viewed Signup"},{value:_((a==null?void 0:a.totalRegistrations)??0),name:"Completed Signup"}],z:100}]})},[c,i,s,a]}class kt extends Be{constructor(e){super(),We(this,e,es,Xt,Qe,{mobileView:0})}}function ts(o){let e,t,s,n="Total Customers",a,c,i,_,p,r,h,u,g,w="Mailing List Signups",I,y,x,D,k,A,X,C,F,$="No. of Reviews",S,T,H,G,Z,q,be,U,te,Ze="Average Review",Pe,de,pe=o[2].toFixed(1)+"",we,Oe,fe,se,Ne,J,le,Je="Questions Asked",He,ue,$e,je,ve,ae,ze,K,ne,Ke="Questions Answered",qe,he,xe,Ue,me,ie,Fe,ee,M;r=new _e({props:{icon:xt,height:24,class:"scale-125"}}),A=new _e({props:{icon:It,height:24,class:"scale-125"}}),q=new _e({props:{icon:Dt,height:24,class:"scale-125"}}),se=new _e({props:{icon:Vt,height:24,class:"scale-125"}}),ae=new _e({props:{icon:Et,height:24,class:"scale-125"}}),ie=new _e({props:{icon:yt,height:24,class:"scale-125"}});let L=o[1]&&gt(o);return{c(){e=d("div"),t=d("div"),s=d("div"),s.textContent=n,a=V(),c=d("div"),i=re(o[7]),_=V(),p=d("div"),Q(r.$$.fragment),h=V(),u=d("div"),g=d("div"),g.textContent=w,I=V(),y=d("div"),x=re(o[6]),D=V(),k=d("div"),Q(A.$$.fragment),X=V(),C=d("div"),F=d("div"),F.textContent=$,S=V(),T=d("div"),H=re(o[3]),G=V(),Z=d("div"),Q(q.$$.fragment),be=V(),U=d("div"),te=d("div"),te.textContent=Ze,Pe=V(),de=d("div"),we=re(pe),Oe=V(),fe=d("div"),Q(se.$$.fragment),Ne=V(),J=d("div"),le=d("div"),le.textContent=Je,He=V(),ue=d("div"),$e=re(o[4]),je=V(),ve=d("div"),Q(ae.$$.fragment),ze=V(),K=d("div"),ne=d("div"),ne.textContent=Ke,qe=V(),he=d("div"),xe=re(o[5]),Ue=V(),me=d("div"),Q(ie.$$.fragment),Fe=V(),L&&L.c(),ee=ut(),this.h()},l(R){e=f(R,"DIV",{class:!0});var j=b(e);t=f(j,"DIV",{class:!0});var Ie=b(t);s=f(Ie,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1ed4a7p"&&(s.textContent=n),a=E(Ie),c=f(Ie,"DIV",{class:!0});var De=b(c);i=oe(De,o[7]),De.forEach(v),_=E(Ie),p=f(Ie,"DIV",{class:!0});var Xe=b(p);B(r.$$.fragment,Xe),Xe.forEach(v),Ie.forEach(v),h=E(j),u=f(j,"DIV",{class:!0});var Ve=b(u);g=f(Ve,"DIV",{class:!0,"data-svelte-h":!0}),z(g)!=="svelte-xrqtig"&&(g.textContent=w),I=E(Ve),y=f(Ve,"DIV",{class:!0});var Ee=b(y);x=oe(Ee,o[6]),Ee.forEach(v),D=E(Ve),k=f(Ve,"DIV",{class:!0});var et=b(k);B(A.$$.fragment,et),et.forEach(v),Ve.forEach(v),X=E(j),C=f(j,"DIV",{class:!0});var ye=b(C);F=f(ye,"DIV",{class:!0,"data-svelte-h":!0}),z(F)!=="svelte-tlxl9z"&&(F.textContent=$),S=E(ye),T=f(ye,"DIV",{class:!0});var Ce=b(T);H=oe(Ce,o[3]),Ce.forEach(v),G=E(ye),Z=f(ye,"DIV",{class:!0});var tt=b(Z);B(q.$$.fragment,tt),tt.forEach(v),ye.forEach(v),be=E(j),U=f(j,"DIV",{class:!0});var ke=b(U);te=f(ke,"DIV",{class:!0,"data-svelte-h":!0}),z(te)!=="svelte-10xtzhz"&&(te.textContent=Ze),Pe=E(ke),de=f(ke,"DIV",{class:!0});var Se=b(de);we=oe(Se,pe),Se.forEach(v),Oe=E(ke),fe=f(ke,"DIV",{class:!0});var st=b(fe);B(se.$$.fragment,st),st.forEach(v),ke.forEach(v),Ne=E(j),J=f(j,"DIV",{class:!0});var Te=b(J);le=f(Te,"DIV",{class:!0,"data-svelte-h":!0}),z(le)!=="svelte-5iu6mr"&&(le.textContent=Je),He=E(Te),ue=f(Te,"DIV",{class:!0});var Le=b(ue);$e=oe(Le,o[4]),Le.forEach(v),je=E(Te),ve=f(Te,"DIV",{class:!0});var lt=b(ve);B(ae.$$.fragment,lt),lt.forEach(v),Te.forEach(v),ze=E(j),K=f(j,"DIV",{class:!0});var Re=b(K);ne=f(Re,"DIV",{class:!0,"data-svelte-h":!0}),z(ne)!=="svelte-tlrs4e"&&(ne.textContent=Ke),qe=E(Re),he=f(Re,"DIV",{class:!0});var dt=b(he);xe=oe(dt,o[5]),dt.forEach(v),Ue=E(Re),me=f(Re,"DIV",{class:!0});var ft=b(me);B(ie.$$.fragment,ft),ft.forEach(v),Re.forEach(v),j.forEach(v),Fe=E(R),L&&L.l(R),ee=ut(),this.h()},h(){m(s,"class","stat-title"),m(c,"class","stat-value"),m(p,"class","stat-figure text-secondary"),m(t,"class","stat card bg-base-300"),m(g,"class","stat-title"),m(y,"class","stat-value"),m(k,"class","stat-figure text-secondary"),m(u,"class","stat card bg-base-300"),m(F,"class","stat-title"),m(T,"class","stat-value"),m(Z,"class","stat-figure text-secondary"),m(C,"class","stat card bg-base-300"),m(te,"class","stat-title"),m(de,"class","stat-value"),m(fe,"class","stat-figure text-secondary"),m(U,"class","stat card bg-base-300"),m(le,"class","stat-title"),m(ue,"class","stat-value"),m(ve,"class","stat-figure text-secondary"),m(J,"class","stat card bg-base-300"),m(ne,"class","stat-title"),m(he,"class","stat-value"),m(me,"class","stat-figure text-secondary"),m(K,"class","stat card bg-base-300"),m(e,"class","sm:grid hidden grid-cols-2 lg:grid-cols-3 gap-4 items-stretch grow mb-6")},m(R,j){N(R,e,j),l(e,t),l(t,s),l(t,a),l(t,c),l(c,i),l(t,_),l(t,p),W(r,p,null),l(e,h),l(e,u),l(u,g),l(u,I),l(u,y),l(y,x),l(u,D),l(u,k),W(A,k,null),l(e,X),l(e,C),l(C,F),l(C,S),l(C,T),l(T,H),l(C,G),l(C,Z),W(q,Z,null),l(e,be),l(e,U),l(U,te),l(U,Pe),l(U,de),l(de,we),l(U,Oe),l(U,fe),W(se,fe,null),l(e,Ne),l(e,J),l(J,le),l(J,He),l(J,ue),l(ue,$e),l(J,je),l(J,ve),W(ae,ve,null),l(e,ze),l(e,K),l(K,ne),l(K,qe),l(K,he),l(he,xe),l(K,Ue),l(K,me),W(ie,me,null),N(R,Fe,j),L&&L.m(R,j),N(R,ee,j),M=!0},p(R,j){(!M||j&128)&&ce(i,R[7]),(!M||j&64)&&ce(x,R[6]),(!M||j&8)&&ce(H,R[3]),(!M||j&4)&&pe!==(pe=R[2].toFixed(1)+"")&&ce(we,pe),(!M||j&16)&&ce($e,R[4]),(!M||j&32)&&ce(xe,R[5]),R[1]?L?(L.p(R,j),j&2&&P(L,1)):(L=gt(R),L.c(),P(L,1),L.m(ee.parentNode,ee)):L&&(nt(),O(L,1,1,()=>{L=null}),it())},i(R){M||(P(r.$$.fragment,R),P(A.$$.fragment,R),P(q.$$.fragment,R),P(se.$$.fragment,R),P(ae.$$.fragment,R),P(ie.$$.fragment,R),P(L),M=!0)},o(R){O(r.$$.fragment,R),O(A.$$.fragment,R),O(q.$$.fragment,R),O(se.$$.fragment,R),O(ae.$$.fragment,R),O(ie.$$.fragment,R),O(L),M=!1},d(R){R&&(v(e),v(Fe),v(ee)),Y(r),Y(A),Y(q),Y(se),Y(ae),Y(ie),L&&L.d(R)}}}function ss(o){let e,t,s='<span class="loading loading-ring loading-lg"></span>',n=o[1]&&_t();return{c(){n&&n.c(),e=V(),t=d("div"),t.innerHTML=s,this.h()},l(a){n&&n.l(a),e=E(a),t=f(a,"DIV",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-1xub2lv"&&(t.innerHTML=s),this.h()},h(){m(t,"class","grow sm:flex items-center justify-center card bg-base-300 p-6 hidden mb-6")},m(a,c){n&&n.m(a,c),N(a,e,c),N(a,t,c)},p(a,c){a[1]?n||(n=_t(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ge,o:ge,d(a){a&&(v(e),v(t)),n&&n.d(a)}}}function gt(o){let e,t,s,n="Total Customers",a,c,i,_,p,r,h,u,g,w="Mailing List Signups",I,y,x,D,k,A,X,C,F,$="No. of Reviews",S,T,H,G,Z,q,be,U,te,Ze="Average Review",Pe,de,pe=o[2].toFixed(1)+"",we,Oe,fe,se,Ne,J,le,Je="Questions Asked",He,ue,$e,je,ve,ae,ze,K,ne,Ke="Questions Answered",qe,he,xe,Ue,me,ie,Fe,ee;return r=new _e({props:{icon:xt,height:24,class:"scale-125"}}),A=new _e({props:{icon:It,height:24,class:"scale-125"}}),q=new _e({props:{icon:Dt,height:24,class:"scale-125"}}),se=new _e({props:{icon:Vt,height:24,class:"scale-125"}}),ae=new _e({props:{icon:Et,height:24,class:"scale-125"}}),ie=new _e({props:{icon:yt,height:24,class:"scale-125"}}),{c(){e=d("div"),t=d("div"),s=d("div"),s.textContent=n,a=V(),c=d("div"),i=re(o[7]),_=V(),p=d("div"),Q(r.$$.fragment),h=V(),u=d("div"),g=d("div"),g.textContent=w,I=V(),y=d("div"),x=re(o[6]),D=V(),k=d("div"),Q(A.$$.fragment),X=V(),C=d("div"),F=d("div"),F.textContent=$,S=V(),T=d("div"),H=re(o[3]),G=V(),Z=d("div"),Q(q.$$.fragment),be=V(),U=d("div"),te=d("div"),te.textContent=Ze,Pe=V(),de=d("div"),we=re(pe),Oe=V(),fe=d("div"),Q(se.$$.fragment),Ne=V(),J=d("div"),le=d("div"),le.textContent=Je,He=V(),ue=d("div"),$e=re(o[4]),je=V(),ve=d("div"),Q(ae.$$.fragment),ze=V(),K=d("div"),ne=d("div"),ne.textContent=Ke,qe=V(),he=d("div"),xe=re(o[5]),Ue=V(),me=d("div"),Q(ie.$$.fragment),this.h()},l(M){e=f(M,"DIV",{class:!0});var L=b(e);t=f(L,"DIV",{class:!0});var R=b(t);s=f(R,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1ed4a7p"&&(s.textContent=n),a=E(R),c=f(R,"DIV",{class:!0});var j=b(c);i=oe(j,o[7]),j.forEach(v),_=E(R),p=f(R,"DIV",{class:!0});var Ie=b(p);B(r.$$.fragment,Ie),Ie.forEach(v),R.forEach(v),h=E(L),u=f(L,"DIV",{class:!0});var De=b(u);g=f(De,"DIV",{class:!0,"data-svelte-h":!0}),z(g)!=="svelte-xrqtig"&&(g.textContent=w),I=E(De),y=f(De,"DIV",{class:!0});var Xe=b(y);x=oe(Xe,o[6]),Xe.forEach(v),D=E(De),k=f(De,"DIV",{class:!0});var Ve=b(k);B(A.$$.fragment,Ve),Ve.forEach(v),De.forEach(v),X=E(L),C=f(L,"DIV",{class:!0});var Ee=b(C);F=f(Ee,"DIV",{class:!0,"data-svelte-h":!0}),z(F)!=="svelte-tlxl9z"&&(F.textContent=$),S=E(Ee),T=f(Ee,"DIV",{class:!0});var et=b(T);H=oe(et,o[3]),et.forEach(v),G=E(Ee),Z=f(Ee,"DIV",{class:!0});var ye=b(Z);B(q.$$.fragment,ye),ye.forEach(v),Ee.forEach(v),be=E(L),U=f(L,"DIV",{class:!0});var Ce=b(U);te=f(Ce,"DIV",{class:!0,"data-svelte-h":!0}),z(te)!=="svelte-10xtzhz"&&(te.textContent=Ze),Pe=E(Ce),de=f(Ce,"DIV",{class:!0});var tt=b(de);we=oe(tt,pe),tt.forEach(v),Oe=E(Ce),fe=f(Ce,"DIV",{class:!0});var ke=b(fe);B(se.$$.fragment,ke),ke.forEach(v),Ce.forEach(v),Ne=E(L),J=f(L,"DIV",{class:!0});var Se=b(J);le=f(Se,"DIV",{class:!0,"data-svelte-h":!0}),z(le)!=="svelte-5iu6mr"&&(le.textContent=Je),He=E(Se),ue=f(Se,"DIV",{class:!0});var st=b(ue);$e=oe(st,o[4]),st.forEach(v),je=E(Se),ve=f(Se,"DIV",{class:!0});var Te=b(ve);B(ae.$$.fragment,Te),Te.forEach(v),Se.forEach(v),ze=E(L),K=f(L,"DIV",{class:!0});var Le=b(K);ne=f(Le,"DIV",{class:!0,"data-svelte-h":!0}),z(ne)!=="svelte-tlrs4e"&&(ne.textContent=Ke),qe=E(Le),he=f(Le,"DIV",{class:!0});var lt=b(he);xe=oe(lt,o[5]),lt.forEach(v),Ue=E(Le),me=f(Le,"DIV",{class:!0});var Re=b(me);B(ie.$$.fragment,Re),Re.forEach(v),Le.forEach(v),L.forEach(v),this.h()},h(){m(s,"class","stat-title"),m(c,"class","stat-value"),m(p,"class","stat-figure text-secondary"),m(t,"class","stat card bg-base-300"),m(g,"class","stat-title"),m(y,"class","stat-value"),m(k,"class","stat-figure text-secondary"),m(u,"class","stat card bg-base-300"),m(F,"class","stat-title"),m(T,"class","stat-value"),m(Z,"class","stat-figure text-secondary"),m(C,"class","stat card bg-base-300"),m(te,"class","stat-title"),m(de,"class","stat-value"),m(fe,"class","stat-figure text-secondary"),m(U,"class","stat card bg-base-300"),m(le,"class","stat-title"),m(ue,"class","stat-value"),m(ve,"class","stat-figure text-secondary"),m(J,"class","stat card bg-base-300"),m(ne,"class","stat-title"),m(he,"class","stat-value"),m(me,"class","stat-figure text-secondary"),m(K,"class","stat card bg-base-300"),m(e,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch grow sm:hidden mb-6")},m(M,L){N(M,e,L),l(e,t),l(t,s),l(t,a),l(t,c),l(c,i),l(t,_),l(t,p),W(r,p,null),l(e,h),l(e,u),l(u,g),l(u,I),l(u,y),l(y,x),l(u,D),l(u,k),W(A,k,null),l(e,X),l(e,C),l(C,F),l(C,S),l(C,T),l(T,H),l(C,G),l(C,Z),W(q,Z,null),l(e,be),l(e,U),l(U,te),l(U,Pe),l(U,de),l(de,we),l(U,Oe),l(U,fe),W(se,fe,null),l(e,Ne),l(e,J),l(J,le),l(J,He),l(J,ue),l(ue,$e),l(J,je),l(J,ve),W(ae,ve,null),l(e,ze),l(e,K),l(K,ne),l(K,qe),l(K,he),l(he,xe),l(K,Ue),l(K,me),W(ie,me,null),ee=!0},p(M,L){(!ee||L&128)&&ce(i,M[7]),(!ee||L&64)&&ce(x,M[6]),(!ee||L&8)&&ce(H,M[3]),(!ee||L&4)&&pe!==(pe=M[2].toFixed(1)+"")&&ce(we,pe),(!ee||L&16)&&ce($e,M[4]),(!ee||L&32)&&ce(xe,M[5])},i(M){ee||(P(r.$$.fragment,M),P(A.$$.fragment,M),P(q.$$.fragment,M),P(se.$$.fragment,M),P(ae.$$.fragment,M),P(ie.$$.fragment,M),M&&(Fe||ot(()=>{Fe=St(e,Ft,{duration:800,easing:At}),Fe.start()})),ee=!0)},o(M){O(r.$$.fragment,M),O(A.$$.fragment,M),O(q.$$.fragment,M),O(se.$$.fragment,M),O(ae.$$.fragment,M),O(ie.$$.fragment,M),ee=!1},d(M){M&&v(e),Y(r),Y(A),Y(q),Y(se),Y(ae),Y(ie)}}}function _t(o){let e,t='<span class="loading loading-ring loading-lg"></span>';return{c(){e=d("div"),e.innerHTML=t,this.h()},l(s){e=f(s,"DIV",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-hp38pn"&&(e.innerHTML=t),this.h()},h(){m(e,"class","grow flex items-center justify-center card bg-base-300 p-6 sm:hidden mb-6")},m(s,n){N(s,e,n)},d(s){s&&v(e)}}}function ls(o){let e,t,s,n=o[1]?"Hide":"Show",a,c,i,_,p,r,h,u;const g=[ss,ts],w=[];function I(y,x){return y[0]?0:1}return _=I(o),p=w[_]=g[_](o),{c(){e=d("div"),t=d("div"),s=d("button"),a=re(n),c=re(" System Details"),i=V(),p.c(),this.h()},l(y){e=f(y,"DIV",{class:!0});var x=b(e);t=f(x,"DIV",{class:!0});var D=b(t);s=f(D,"BUTTON",{class:!0});var k=b(s);a=oe(k,n),c=oe(k," System Details"),k.forEach(v),D.forEach(v),i=E(x),p.l(x),x.forEach(v),this.h()},h(){m(s,"class","btn btn-xs btn-primary"),m(t,"class","sm:hidden flex justify-end grow mb-4"),m(e,"class","flex grow flex-col")},m(y,x){N(y,e,x),l(e,t),l(t,s),l(s,a),l(s,c),l(e,i),w[_].m(e,null),r=!0,h||(u=Ae(s,"click",o[8]),h=!0)},p(y,[x]){(!r||x&2)&&n!==(n=y[1]?"Hide":"Show")&&ce(a,n);let D=_;_=I(y),_===D?w[_].p(y,x):(nt(),O(w[D],1,1,()=>{w[D]=null}),it(),p=w[_],p?p.p(y,x):(p=w[_]=g[_](y),p.c()),P(p,1),p.m(e,null))},i(y){r||(P(p),r=!0)},o(y){O(p),r=!1},d(y){y&&v(e),w[_].d(),h=!1,u()}}}function as(o,e,t){let s=!0,n=!1,a,c,i,_,p,r;return at(async()=>{const u=await fetch("/api/reporter/stats/overall-details");if(!u.ok)return;const g=await u.json();t(4,i=g.questions_asked),t(5,_=g.questions_answered),t(6,p=g.mailing_list_signups),t(7,r=g.customer_users_in_system),t(3,c=g.total_reviews),t(2,a=parseFloat(g.average_review_rating)),t(0,s=!1)}),[s,n,a,c,i,_,p,r,()=>t(1,n=!n)]}class ns extends Be{constructor(e){super(),We(this,e,as,ls,Qe,{})}}function is(o){let e,t,s,n,a,c,i,_,p,r,h,u;return n=new Ct({}),h=new kt({props:{mobileView:o[1]}}),{c(){e=d("div"),t=d("div"),s=d("div"),Q(n.$$.fragment),a=V(),c=d("div"),i=V(),_=d("div"),p=V(),r=d("div"),Q(h.$$.fragment),this.h()},l(g){e=f(g,"DIV",{class:!0});var w=b(e);t=f(w,"DIV",{class:!0});var I=b(t);s=f(I,"DIV",{class:!0});var y=b(s);B(n.$$.fragment,y),y.forEach(v),a=E(I),c=f(I,"DIV",{class:!0}),b(c).forEach(v),i=E(I),_=f(I,"DIV",{class:!0}),b(_).forEach(v),p=E(I),r=f(I,"DIV",{class:!0});var x=b(r);B(h.$$.fragment,x),x.forEach(v),I.forEach(v),w.forEach(v),this.h()},h(){m(s,"class","h-96 flex grow sm:basis-1/2"),m(c,"class","max-sm:hidden w-6"),m(_,"class","h-6 sm:hidden"),m(r,"class","h-96 flex grow sm:basis-1/2"),m(t,"class","grow flex justify-between max-sm:flex-col"),m(e,"class","flex mb-6")},m(g,w){N(g,e,w),l(e,t),l(t,s),W(n,s,null),l(t,a),l(t,c),l(t,i),l(t,_),l(t,p),l(t,r),W(h,r,null),u=!0},p(g,w){const I={};w&2&&(I.mobileView=g[1]),h.$set(I)},i(g){u||(P(n.$$.fragment,g),P(h.$$.fragment,g),u=!0)},o(g){O(n.$$.fragment,g),O(h.$$.fragment,g),u=!1},d(g){g&&v(e),Y(n),Y(h)}}}function rs(o){let e,t,s,n,a,c,i,_,p,r;return n=new Ct({}),p=new kt({props:{mobileView:o[1]}}),{c(){e=d("div"),t=d("div"),s=d("div"),Q(n.$$.fragment),a=V(),c=d("div"),i=V(),_=d("div"),Q(p.$$.fragment),this.h()},l(h){e=f(h,"DIV",{class:!0});var u=b(e);t=f(u,"DIV",{class:!0});var g=b(t);s=f(g,"DIV",{class:!0});var w=b(s);B(n.$$.fragment,w),w.forEach(v),a=E(g),c=f(g,"DIV",{class:!0}),b(c).forEach(v),i=E(g),_=f(g,"DIV",{class:!0});var I=b(_);B(p.$$.fragment,I),I.forEach(v),g.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","h-96 flex grow"),m(c,"class","h-6"),m(_,"class","h-96 flex grow"),m(t,"class","grow flex flex-col"),m(e,"class","flex mb-6")},m(h,u){N(h,e,u),l(e,t),l(t,s),W(n,s,null),l(t,a),l(t,c),l(t,i),l(t,_),W(p,_,null),r=!0},p(h,u){const g={};u&2&&(g.mobileView=h[1]),p.$set(g)},i(h){r||(P(n.$$.fragment,h),P(p.$$.fragment,h),r=!0)},o(h){O(n.$$.fragment,h),O(p.$$.fragment,h),r=!1},d(h){h&&v(e),Y(n),Y(p)}}}function os(o){let e,t,s,n,a='<h1 class="text-2xl">Metrics</h1>',c,i,_,p,r,h,u,g,w,I,y,x,D,k,A;r=new ns({});const X=[rs,is],C=[];function F($,S){return $[2]?0:1}return u=F(o),g=C[u]=X[u](o),x=new Zt({props:{mobileView:o[2]}}),{c(){e=d("div"),t=d("div"),s=d("div"),n=d("div"),n.innerHTML=a,c=V(),i=d("div"),_=V(),p=d("div"),Q(r.$$.fragment),h=V(),g.c(),w=V(),I=d("div"),y=d("div"),Q(x.$$.fragment),this.h()},l($){e=f($,"DIV",{class:!0});var S=b(e);t=f(S,"DIV",{class:!0});var T=b(t);s=f(T,"DIV",{class:!0});var H=b(s);n=f(H,"DIV",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-1j437jj"&&(n.innerHTML=a),c=E(H),i=f(H,"DIV",{class:!0}),b(i).forEach(v),_=E(H),p=f(H,"DIV",{class:!0});var G=b(p);B(r.$$.fragment,G),h=E(G),g.l(G),w=E(G),I=f(G,"DIV",{class:!0});var Z=b(I);y=f(Z,"DIV",{class:!0});var q=b(y);B(x.$$.fragment,q),q.forEach(v),Z.forEach(v),G.forEach(v),H.forEach(v),T.forEach(v),S.forEach(v),this.h()},h(){m(n,"class","flex"),m(i,"class","divider my-2"),m(y,"class","height-details grow flex svelte-1ed3mt5"),Me(y,"height-details-mobile",o[2]),m(I,"class","flex"),m(p,"class","flex flex-col pt-4"),m(s,"class","card h-full w-full flex bg-base-100 shadow-xl p-6 overflow-y-auto"),m(t,"class","relative grow m-6"),m(e,"class","relative flex grow bg-base-200 md:brightness-100 overflow-x-hidden")},m($,S){N($,e,S),l(e,t),l(t,s),l(s,n),l(s,c),l(s,i),l(s,_),l(s,p),W(r,p,null),l(p,h),C[u].m(p,null),l(p,w),l(p,I),l(I,y),W(x,y,null),D=!0,k||(A=Ae(window,"resize",o[3]),k=!0)},p($,[S]){let T=u;u=F($),u===T?C[u].p($,S):(nt(),O(C[T],1,1,()=>{C[T]=null}),it(),g=C[u],g?g.p($,S):(g=C[u]=X[u]($),g.c()),P(g,1),g.m(p,w));const H={};S&4&&(H.mobileView=$[2]),x.$set(H),(!D||S&4)&&Me(y,"height-details-mobile",$[2])},i($){D||(P(r.$$.fragment,$),P(g),P(x.$$.fragment,$),D=!0)},o($){O(r.$$.fragment,$),O(g),O(x.$$.fragment,$),D=!1},d($){$&&v(e),Y(r),C[u].d(),Y(x),k=!1,A()}}}function cs(o,e,t){let s,n,a=screen.width;const c=(r,h)=>{for(let u=0;u<h.length;u++){let g=h[u];if(r>=g[0]&&r<=g[1])return!0}return!1},i=[[0,850]],_=[[0,475],[850,875]],p=()=>t(0,a=screen.width);return o.$$.update=()=>{o.$$.dirty&1&&t(2,s=c(a,i)),o.$$.dirty&1&&t(1,n=c(a,_))},[a,n,s,p]}class _s extends Be{constructor(e){super(),We(this,e,cs,os,Qe,{})}}export{_s as component};