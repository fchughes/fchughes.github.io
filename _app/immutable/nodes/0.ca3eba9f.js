import{C as Ae,D as fe,S as W,i as O,s as S,E as F,F as y,G as ve,e as R,H as pe,m as g,h,I as X,b as E,J as d,K as G,L as J,M as K,N as Z,g as k,d as b,O as Ie,P as _e,Q as H,y as V,z as w,A as D,R as $e,B as P,k as p,l as $,n as v,T as Me,v as ke,f as be,U as Te,a as C,q,c as L,r as B,V as te,W as le,X as ye}from"../chunks/index.da3d1cc8.js";import{w as ze}from"../chunks/index.a0eae2a6.js";import{t as Ce}from"../chunks/config.525fb511.js";const Le=!0;async function Ve({url:o}){return{url:o.pathname}}const mt=Object.freeze(Object.defineProperty({__proto__:null,load:Ve,prerender:Le},Symbol.toStringTag,{value:"Module"}));function we(o){const e=o-1;return e*e*e+1}function De(o,{delay:e=0,duration:n=400,easing:l=Ae}={}){const t=+getComputedStyle(o).opacity;return{delay:e,duration:n,easing:l,css:s=>`opacity: ${s*t}`}}function Ee(o,{delay:e=0,duration:n=400,easing:l=we,x:t=0,y:s=0,opacity:a=0}={}){const c=getComputedStyle(o),r=+c.opacity,f=c.transform==="none"?"":c.transform,_=r*(1-a),[i,u]=fe(t),[m,A]=fe(s);return{delay:e,duration:n,easing:l,css:(U,T)=>`
			transform: ${f} translate(${(1-U)*i}${u}, ${(1-U)*m}${A});
			opacity: ${r-_*T}`}}const me={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function he(o,e,n){const l=o.slice();return l[9]=e[n][0],l[10]=e[n][1],l}function ee(o){let e,n=[o[10]],l={};for(let t=0;t<n.length;t+=1)l=y(l,n[t]);return{c(){e=ve(o[9]),this.h()},l(t){e=pe(t,o[9],{}),g(e).forEach(h),this.h()},h(){X(e,l)},m(t,s){E(t,e,s)},p(t,s){X(e,l=Z(n,[s&16&&t[10]]))},d(t){t&&h(e)}}}function de(o){let e=o[9],n,l=o[9]&&ee(o);return{c(){l&&l.c(),n=R()},l(t){l&&l.l(t),n=R()},m(t,s){l&&l.m(t,s),E(t,n,s)},p(t,s){t[9]?e?S(e,t[9])?(l.d(1),l=ee(t),e=t[9],l.c(),l.m(n.parentNode,n)):l.p(t,s):(l=ee(t),e=t[9],l.c(),l.m(n.parentNode,n)):e&&(l.d(1),l=null,e=t[9])},d(t){t&&h(n),l&&l.d(t)}}}function Pe(o){let e,n,l,t,s=o[4],a=[];for(let i=0;i<s.length;i+=1)a[i]=de(he(o,s,i));const c=o[8].default,r=F(c,o,o[7],null);let f=[me,o[5],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":o[3]},{class:l=`lucide-icon lucide lucide-${o[0]} ${o[6].class??""}`}],_={};for(let i=0;i<f.length;i+=1)_=y(_,f[i]);return{c(){e=ve("svg");for(let i=0;i<a.length;i+=1)a[i].c();n=R(),r&&r.c(),this.h()},l(i){e=pe(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var u=g(e);for(let m=0;m<a.length;m+=1)a[m].l(u);n=R(),r&&r.l(u),u.forEach(h),this.h()},h(){X(e,_)},m(i,u){E(i,e,u);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(e,null);d(e,n),r&&r.m(e,null),t=!0},p(i,[u]){if(u&16){s=i[4];let m;for(m=0;m<s.length;m+=1){const A=he(i,s,m);a[m]?a[m].p(A,u):(a[m]=de(A),a[m].c(),a[m].m(e,n))}for(;m<a.length;m+=1)a[m].d(1);a.length=s.length}r&&r.p&&(!t||u&128)&&G(r,c,i,i[7],t?K(c,i[7],u,null):J(i[7]),null),X(e,_=Z(f,[me,u&32&&i[5],(!t||u&4)&&{width:i[2]},(!t||u&4)&&{height:i[2]},(!t||u&2)&&{stroke:i[1]},(!t||u&8)&&{"stroke-width":i[3]},(!t||u&65&&l!==(l=`lucide-icon lucide lucide-${i[0]} ${i[6].class??""}`))&&{class:l}]))},i(i){t||(k(r,i),t=!0)},o(i){b(r,i),t=!1},d(i){i&&h(e),Ie(a,i),r&&r.d(i)}}}function We(o,e,n){const l=["name","color","size","strokeWidth","iconNode"];let t=_e(e,l),{$$slots:s={},$$scope:a}=e,{name:c}=e,{color:r="currentColor"}=e,{size:f=24}=e,{strokeWidth:_=2}=e,{iconNode:i}=e;return o.$$set=u=>{n(6,e=y(y({},e),H(u))),n(5,t=_e(e,l)),"name"in u&&n(0,c=u.name),"color"in u&&n(1,r=u.color),"size"in u&&n(2,f=u.size),"strokeWidth"in u&&n(3,_=u.strokeWidth),"iconNode"in u&&n(4,i=u.iconNode),"$$scope"in u&&n(7,a=u.$$scope)},e=H(e),[c,r,f,_,i,t,e,a,s]}class Oe extends W{constructor(e){super(),O(this,e,We,Pe,S,{name:0,color:1,size:2,strokeWidth:3,iconNode:4})}}const Ne=Oe;function Ue(o){let e;const n=o[2].default,l=F(n,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&G(l,n,t,t[3],e?K(n,t[3],s,null):J(t[3]),null)},i(t){e||(k(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function je(o){let e,n;const l=[{name:"moon"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[Ue]},$$scope:{ctx:o}};for(let s=0;s<l.length;s+=1)t=y(t,l[s]);return e=new Ne({props:t}),{c(){V(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){D(e,s,a),n=!0},p(s,[a]){const c=a&3?Z(l,[l[0],a&2&&$e(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){P(e,s)}}}function qe(o,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["path",{d:"M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return o.$$set=a=>{n(1,e=y(y({},e),H(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=H(e),[s,e,l,t]}class Be extends W{constructor(e){super(),O(this,e,qe,je,S,{})}}const Re=Be;function He(o){let e;const n=o[2].default,l=F(n,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&G(l,n,t,t[3],e?K(n,t[3],s,null):J(t[3]),null)},i(t){e||(k(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function Fe(o){let e,n;const l=[{name:"sun"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[He]},$$scope:{ctx:o}};for(let s=0;s<l.length;s+=1)t=y(t,l[s]);return e=new Ne({props:t}),{c(){V(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){D(e,s,a),n=!0},p(s,[a]){const c=a&3?Z(l,[l[0],a&2&&$e(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),n=!1},d(s){P(e,s)}}}function Ge(o,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return o.$$set=a=>{n(1,e=y(y({},e),H(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=H(e),[s,e,l,t]}class Je extends W{constructor(e){super(),O(this,e,Ge,Fe,S,{})}}const Ke=Je,Qe=localStorage.getItem("color-scheme"),Se=ze(Qe??"dark");function Xe(){Se.update(o=>{const e=o==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function Ze(o){let e,n,l,t,s,a,c;return n=new Re({}),{c(){e=p("div"),V(n.$$.fragment),l=C(),t=p("span"),s=q("Dark"),this.h()},l(r){e=$(r,"DIV",{class:!0});var f=g(e);w(n.$$.fragment,f),l=L(f),t=$(f,"SPAN",{});var _=g(t);s=B(_,"Dark"),_.forEach(h),f.forEach(h),this.h()},h(){v(e,"class","svelte-114mtci")},m(r,f){E(r,e,f),D(n,e,null),d(e,l),d(e,t),d(t,s),c=!0},i(r){c||(k(n.$$.fragment,r),a||te(()=>{a=le(e,Ee,{y:-10}),a.start()}),c=!0)},o(r){b(n.$$.fragment,r),c=!1},d(r){r&&h(e),P(n)}}}function Ye(o){let e,n,l,t,s,a,c;return n=new Ke({}),{c(){e=p("div"),V(n.$$.fragment),l=C(),t=p("span"),s=q("Light"),this.h()},l(r){e=$(r,"DIV",{class:!0});var f=g(e);w(n.$$.fragment,f),l=L(f),t=$(f,"SPAN",{});var _=g(t);s=B(_,"Light"),_.forEach(h),f.forEach(h),this.h()},h(){v(e,"class","svelte-114mtci")},m(r,f){E(r,e,f),D(n,e,null),d(e,l),d(e,t),d(t,s),c=!0},i(r){c||(k(n.$$.fragment,r),a||te(()=>{a=le(e,Ee,{y:10}),a.start()}),c=!0)},o(r){b(n.$$.fragment,r),c=!1},d(r){r&&h(e),P(n)}}}function xe(o){let e,n,l,t,s,a;const c=[Ye,Ze],r=[];function f(_,i){return _[0]==="dark"?0:1}return n=f(o),l=r[n]=c[n](o),{c(){e=p("button"),l.c(),this.h()},l(_){e=$(_,"BUTTON",{"aria-label":!0,class:!0});var i=g(e);l.l(i),i.forEach(h),this.h()},h(){v(e,"aria-label","Toggle theme"),v(e,"class","svelte-114mtci")},m(_,i){E(_,e,i),r[n].m(e,null),t=!0,s||(a=Me(e,"click",Xe),s=!0)},p(_,[i]){let u=n;n=f(_),n!==u&&(ke(),b(r[u],1,1,()=>{r[u]=null}),be(),l=r[n],l||(l=r[n]=c[n](_),l.c()),k(l,1),l.m(e,null))},i(_){t||(k(l),t=!0)},o(_){b(l),t=!1},d(_){_&&h(e),r[n].d(),s=!1,a()}}}function et(o,e,n){let l;return Te(o,Se,t=>n(0,l=t)),[l]}class tt extends W{constructor(e){super(),O(this,e,et,xe,S,{})}}function lt(o){let e,n,l,t=Ce+"",s,a,c,r,f,_,i,u,m,A,U,T,I,Y,x,z,Q;return z=new tt({}),{c(){e=p("nav"),n=p("a"),l=p("b"),s=q(t),a=C(),c=p("ul"),r=p("li"),f=p("a"),_=q("About"),i=C(),u=p("li"),m=p("a"),A=q("Contact"),U=C(),T=p("li"),I=p("a"),Y=q("RSS"),x=C(),V(z.$$.fragment),this.h()},l(N){e=$(N,"NAV",{class:!0});var M=g(e);n=$(M,"A",{href:!0,class:!0});var se=g(n);l=$(se,"B",{});var ne=g(l);s=B(ne,t),ne.forEach(h),se.forEach(h),a=L(M),c=$(M,"UL",{class:!0});var j=g(c);r=$(j,"LI",{});var ae=g(r);f=$(ae,"A",{href:!0,class:!0});var oe=g(f);_=B(oe,"About"),oe.forEach(h),ae.forEach(h),i=L(j),u=$(j,"LI",{});var re=g(u);m=$(re,"A",{href:!0,class:!0});var ce=g(m);A=B(ce,"Contact"),ce.forEach(h),re.forEach(h),U=L(j),T=$(j,"LI",{});var ie=g(T);I=$(ie,"A",{href:!0,target:!0,class:!0});var ue=g(I);Y=B(ue,"RSS"),ue.forEach(h),ie.forEach(h),j.forEach(h),x=L(M),w(z.$$.fragment,M),M.forEach(h),this.h()},h(){v(n,"href","/"),v(n,"class","title svelte-scea26"),v(f,"href","/about"),v(f,"class","svelte-scea26"),v(m,"href","/contact"),v(m,"class","svelte-scea26"),v(I,"href","/rss.xml"),v(I,"target","_blank"),v(I,"class","svelte-scea26"),v(c,"class","links svelte-scea26"),v(e,"class","svelte-scea26")},m(N,M){E(N,e,M),d(e,n),d(n,l),d(l,s),d(e,a),d(e,c),d(c,r),d(r,f),d(f,_),d(c,i),d(c,u),d(u,m),d(m,A),d(c,U),d(c,T),d(T,I),d(I,Y),d(e,x),D(z,e,null),Q=!0},p:ye,i(N){Q||(k(z.$$.fragment,N),Q=!0)},o(N){b(z.$$.fragment,N),Q=!1},d(N){N&&h(e),P(z)}}}class st extends W{constructor(e){super(),O(this,e,null,lt,S,{})}}function ge(o){let e,n,l;const t=o[2].default,s=F(t,o,o[1],null);return{c(){e=p("div"),s&&s.c(),this.h()},l(a){e=$(a,"DIV",{class:!0});var c=g(e);s&&s.l(c),c.forEach(h),this.h()},h(){v(e,"class","transition svelte-vcdv4c")},m(a,c){E(a,e,c),s&&s.m(e,null),l=!0},p(a,c){s&&s.p&&(!l||c&2)&&G(s,t,a,a[1],l?K(t,a[1],c,null):J(a[1]),null)},i(a){l||(k(s,a),n||te(()=>{n=le(e,De,{}),n.start()}),l=!0)},o(a){b(s,a),l=!1},d(a){a&&h(e),s&&s.d(a)}}}function nt(o){let e=o[0],n,l,t=ge(o);return{c(){t.c(),n=R()},l(s){t.l(s),n=R()},m(s,a){t.m(s,a),E(s,n,a),l=!0},p(s,[a]){a&1&&S(e,e=s[0])?(ke(),b(t,1,1,ye),be(),t=ge(s),t.c(),k(t,1),t.m(n.parentNode,n)):t.p(s,a)},i(s){l||(k(t),l=!0)},o(s){b(t),l=!1},d(s){s&&h(n),t.d(s)}}}function at(o,e,n){let{$$slots:l={},$$scope:t}=e,{url:s}=e;return o.$$set=a=>{"url"in a&&n(0,s=a.url),"$$scope"in a&&n(1,t=a.$$scope)},[s,t,l]}class ot extends W{constructor(e){super(),O(this,e,at,nt,S,{url:0})}}function rt(o){let e;const n=o[1].default,l=F(n,o,o[2],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&4)&&G(l,n,t,t[2],e?K(n,t[2],s,null):J(t[2]),null)},i(t){e||(k(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function ct(o){let e,n,l,t,s,a;return n=new st({}),s=new ot({props:{url:o[0].url,$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){e=p("div"),V(n.$$.fragment),l=C(),t=p("main"),V(s.$$.fragment),this.h()},l(c){e=$(c,"DIV",{class:!0});var r=g(e);w(n.$$.fragment,r),l=L(r),t=$(r,"MAIN",{class:!0});var f=g(t);w(s.$$.fragment,f),f.forEach(h),r.forEach(h),this.h()},h(){v(t,"class","svelte-1sq3us8"),v(e,"class","layout svelte-1sq3us8")},m(c,r){E(c,e,r),D(n,e,null),d(e,l),d(e,t),D(s,t,null),a=!0},p(c,[r]){const f={};r&1&&(f.url=c[0].url),r&4&&(f.$$scope={dirty:r,ctx:c}),s.$set(f)},i(c){a||(k(n.$$.fragment,c),k(s.$$.fragment,c),a=!0)},o(c){b(n.$$.fragment,c),b(s.$$.fragment,c),a=!1},d(c){c&&h(e),P(n),P(s)}}}function it(o,e,n){let{$$slots:l={},$$scope:t}=e,{data:s}=e;return o.$$set=a=>{"data"in a&&n(0,s=a.data),"$$scope"in a&&n(2,t=a.$$scope)},[s,l,t]}class ht extends W{constructor(e){super(),O(this,e,it,ct,S,{data:0})}}export{ht as component,mt as universal};
