import{S as M,i as N,s as U,a as S,k as v,Y as X,h as u,c as O,l as g,m as k,n as m,b as w,J as p,X as L,O as Y,q as j,r as y,u as q}from"../chunks/index.da3d1cc8.js";import{f as T}from"../chunks/utils.9a66bb98.js";import{t as A}from"../chunks/config.525fb511.js";async function B({fetch:c}){return{posts:await(await c("api/posts")).json()}}const R=Object.freeze(Object.defineProperty({__proto__:null,load:B},Symbol.toStringTag,{value:"Module"}));function D(c,s,a){const o=c.slice();return o[1]=s[a],o}function J(c){let s,a,o=c[1].title+"",n,f,l,e,r=T(c[1].date)+"",t,d,_,E=c[1].description+"",b,P;return{c(){s=v("li"),a=v("a"),n=j(o),l=S(),e=v("p"),t=j(r),d=S(),_=v("p"),b=j(E),P=S(),this.h()},l(h){s=g(h,"LI",{class:!0});var i=k(s);a=g(i,"A",{href:!0,class:!0});var z=k(a);n=y(z,o),z.forEach(u),l=O(i),e=g(i,"P",{class:!0});var C=k(e);t=y(C,r),C.forEach(u),d=O(i),_=g(i,"P",{class:!0});var I=k(_);b=y(I,E),I.forEach(u),P=O(i),i.forEach(u),this.h()},h(){m(a,"href",f=c[1].slug),m(a,"class","title svelte-1tkp6cl"),m(e,"class","date svelte-1tkp6cl"),m(_,"class","description svelte-1tkp6cl"),m(s,"class","post svelte-1tkp6cl")},m(h,i){w(h,s,i),p(s,a),p(a,n),p(s,l),p(s,e),p(e,t),p(s,d),p(s,_),p(_,b),p(s,P)},p(h,i){i&1&&o!==(o=h[1].title+"")&&q(n,o),i&1&&f!==(f=h[1].slug)&&m(a,"href",f),i&1&&r!==(r=T(h[1].date)+"")&&q(t,r),i&1&&E!==(E=h[1].description+"")&&q(b,E)},d(h){h&&u(s)}}}function F(c){let s,a,o,n;document.title=s=A;let f=c[0].posts,l=[];for(let e=0;e<f.length;e+=1)l[e]=J(D(c,f,e));return{c(){a=S(),o=v("section"),n=v("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){X("svelte-fbczdu",document.head).forEach(u),a=O(e),o=g(e,"SECTION",{});var t=k(o);n=g(t,"UL",{class:!0});var d=k(n);for(let _=0;_<l.length;_+=1)l[_].l(d);d.forEach(u),t.forEach(u),this.h()},h(){m(n,"class","posts svelte-1tkp6cl")},m(e,r){w(e,a,r),w(e,o,r),p(o,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(e,[r]){if(r&0&&s!==(s=A)&&(document.title=s),r&1){f=e[0].posts;let t;for(t=0;t<f.length;t+=1){const d=D(e,f,t);l[t]?l[t].p(d,r):(l[t]=J(d),l[t].c(),l[t].m(n,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=f.length}},i:L,o:L,d(e){e&&u(a),e&&u(o),Y(l,e)}}}function G(c,s,a){let{data:o}=s;return c.$$set=n=>{"data"in n&&a(0,o=n.data)},[o]}class V extends M{constructor(s){super(),N(this,s,G,F,U,{data:0})}}export{V as component,R as universal};
