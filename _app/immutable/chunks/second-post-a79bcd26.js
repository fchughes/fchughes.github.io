import{S as F,i as J,s as P,k as v,l as h,_ as L,n as g,b as u,C,h as o,q as m,m as E,r as _,J as c,T as Y,u as Z,F as H,x as I,y as R,z as j,N as ee,R as V,f as A,t as B,A as D,Q as W,a as q,c as w}from"./index-178364ec.js";import{M as te}from"./mdsvex-19c38258.js";function se(i){let e,r;return{c(){e=v("img"),this.h()},l(n){e=h(n,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){L(e.src,r=i[0])||g(e,"src",r),g(e,"alt",i[1]),g(e,"loading","lazy")},m(n,a){u(n,e,a)},p(n,[a]){a&1&&!L(e.src,r=n[0])&&g(e,"src",r),a&2&&g(e,"alt",n[1])},i:C,o:C,d(n){n&&o(e)}}}function ne(i,e,r){let{src:n}=e,{alt:a}=e;return i.$$set=s=>{"src"in s&&r(0,n=s.src),"alt"in s&&r(1,a=s.alt)},[n,a]}class ae extends F{constructor(e){super(),J(this,e,ne,se,P,{src:0,alt:1})}}function re(i){let e,r,n,a;return{c(){e=v("button"),r=m(i[0])},l(s){e=h(s,"BUTTON",{});var l=E(e);r=_(l,i[0]),l.forEach(o)},m(s,l){u(s,e,l),c(e,r),n||(a=Y(e,"click",i[1]),n=!0)},p(s,[l]){l&1&&Z(r,s[0])},i:C,o:C,d(s){s&&o(e),n=!1,a()}}}function le(i,e,r){let n=0;return[n,()=>r(0,n+=1)]}class ie extends F{constructor(e){super(),J(this,e,le,re,P,{})}}function oe(i){let e,r,n,a,s,l,S,N,b,O,z,M,d,y,p,G,T,$,k;return d=new ae({props:{src:"favicon.png",alt:"Svelte"}}),$=new ie({}),{c(){e=v("h2"),r=m("Svelte"),n=q(),a=v("p"),s=m("Media inside the "),l=v("strong"),S=m("static"),N=m(" folder is served from "),b=v("code"),O=m("/"),z=m("."),M=q(),I(d.$$.fragment),y=q(),p=v("h2"),G=m("Counter"),T=q(),I($.$$.fragment),this.h()},l(t){e=h(t,"H2",{id:!0});var f=E(e);r=_(f,"Svelte"),f.forEach(o),n=w(t),a=h(t,"P",{});var x=E(a);s=_(x,"Media inside the "),l=h(x,"STRONG",{});var Q=E(l);S=_(Q,"static"),Q.forEach(o),N=_(x," folder is served from "),b=h(x,"CODE",{});var U=E(b);O=_(U,"/"),U.forEach(o),z=_(x,"."),x.forEach(o),M=w(t),R(d.$$.fragment,t),y=w(t),p=h(t,"H2",{id:!0});var K=E(p);G=_(K,"Counter"),K.forEach(o),T=w(t),R($.$$.fragment,t),this.h()},h(){g(e,"id","svelte"),g(p,"id","counter")},m(t,f){u(t,e,f),c(e,r),u(t,n,f),u(t,a,f),c(a,s),c(a,l),c(l,S),c(a,N),c(a,b),c(b,O),c(a,z),u(t,M,f),j(d,t,f),u(t,y,f),u(t,p,f),c(p,G),u(t,T,f),j($,t,f),k=!0},p:C,i(t){k||(A(d.$$.fragment,t),A($.$$.fragment,t),k=!0)},o(t){B(d.$$.fragment,t),B($.$$.fragment,t),k=!1},d(t){t&&o(e),t&&o(n),t&&o(a),t&&o(M),D(d,t),t&&o(y),t&&o(p),t&&o(T),D($,t)}}}function fe(i){let e,r;const n=[i[0],X];let a={$$slots:{default:[oe]},$$scope:{ctx:i}};for(let s=0;s<n.length;s+=1)a=H(a,n[s]);return e=new te({props:a}),{c(){I(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,l){j(e,s,l),r=!0},p(s,[l]){const S=l&1?ee(n,[l&1&&V(s[0]),l&0&&V(X)]):{};l&2&&(S.$$scope={dirty:l,ctx:s}),e.$set(S)},i(s){r||(A(e.$$.fragment,s),r=!0)},o(s){B(e.$$.fragment,s),r=!1},d(s){D(e,s)}}}const X={title:"Second",description:"Second post.",date:"2023-7-13",categories:["sveltekit","svelte"],published:!0};function ce(i,e,r){return i.$$set=n=>{r(0,e=H(H({},e),W(n)))},e=W(e),[e]}class _e extends F{constructor(e){super(),J(this,e,ce,fe,P,{})}}export{_e as default,X as metadata};