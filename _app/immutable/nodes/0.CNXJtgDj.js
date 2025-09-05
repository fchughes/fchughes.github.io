import"../chunks/DsnmJJEf.js";import{a$ as _t,b0 as ht,ar as pt,b as et,h as g,a as O,e as at,f as rt,g as gt,i as bt,k as I,U as yt,p as st,b1 as kt,E as nt,b2 as $t,ap as wt,aq as Et,d as H,s as J,a2 as ot,j as Nt,an as St,b3 as xt,b4 as Tt,aH as Ct,w as j,b5 as At,au as it,a7 as Mt,at as Ft,_ as w,ak as R,b6 as zt,R as b,Z as C,Q as A,N as p,Y as B,S as y,al as D,K as T,J as q,aJ as It,b7 as Ot,P as N,O as K,X as Pt}from"../chunks/BUPh_ox9.js";import{w as Wt,s as ct}from"../chunks/B9DBXlUn.js";import"../chunks/Cq0iswnC.js";import{e as qt,f as Z,g as jt,d as Lt,s as Rt}from"../chunks/r2XfJ5Wp.js";import{i as lt}from"../chunks/D7Qsvpre.js";import{i as Bt}from"../chunks/9_XOUwki.js";import{l as P,p as E,s as ft,a as Dt,b as Ut}from"../chunks/BRxezosE.js";import{a as Q,e as Gt,i as Ht}from"../chunks/-tF6gCY-.js";import{t as Jt}from"../chunks/i3RHpDmf.js";function Kt(e,t,s){g&&O();var a=e,n=yt,o,i,l=null,c=_t()?ht:pt;function r(){o&&st(o),l!==null&&(l.lastChild.remove(),a.before(l),l=null),o=i}et(()=>{if(c(n,n=t())){var m=a,d=bt();d&&(l=document.createDocumentFragment(),l.append(m=at())),i=rt(()=>s(m)),d?gt.add_callback(r):r()}}),g&&(a=I)}function U(e,t,s,a,n){g&&O();var o=t.$$slots?.[s],i=!1;o===!0&&(o=t.children,i=!0),o===void 0||o(e,i?()=>a:a)}function Zt(e,t,s,a,n,o){let i=g;g&&O();var l,c,r=null;g&&I.nodeType===kt&&(r=I,O());var m=g?I:e,d;et(()=>{const v=t()||null;var _=$t;v!==l&&(d&&(v===null?st(d,()=>{d=null,c=null}):v===c?Nt(d):(St(d),Z(!1))),v&&v!==c&&(d=rt(()=>{if(r=g?r:document.createElementNS(_,v),wt(r,r),a){g&&qt(v)&&r.append(document.createComment(""));var f=g?Et(r):r.appendChild(at());g&&(f===null?H(!1):J(f)),a(r,f)}ot.nodes_end=r,m.before(r)})),l=v,l&&(c=l),Z(!0))},nt),i&&(H(!0),J(m))}const Qt=()=>performance.now(),k={tick:e=>requestAnimationFrame(e),now:()=>Qt(),tasks:new Set};function ut(){const e=k.now();k.tasks.forEach(t=>{t.c(e)||(k.tasks.delete(t),t.f())}),k.tasks.size!==0&&k.tick(ut)}function Vt(e){let t;return k.tasks.size===0&&k.tick(ut),{promise:new Promise(s=>{k.tasks.add(t={c:e,f:s})}),abort(){k.tasks.delete(t)}}}function V(e,t){it(()=>{e.dispatchEvent(new CustomEvent(t))})}function Xt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function X(e){const t={},s=e.split(";");for(const a of s){const[n,o]=a.split(":");if(!n||o===void 0)break;const i=Xt(n.trim());t[i]=o.trim()}return t}const Yt=e=>e;function L(e,t,s,a){var n=(e&At)!==0,o="in",i,l=t.inert,c=t.style.overflow,r,m;function d(){return it(()=>i??=s()(t,a?.()??{},{direction:o}))}var v={is_global:n,in(){t.inert=l,r?.abort(),V(t,"introstart"),r=dt(t,d(),m,1,()=>{V(t,"introend"),r?.abort(),r=i=void 0,t.style.overflow=c})},out(h){{h?.(),i=void 0;return}},stop:()=>{r?.abort()}},_=ot;if((_.transitions??=[]).push(v),jt){var f=n;if(!f){for(var u=_.parent;u&&(u.f&nt)!==0;)for(;(u=u.parent)&&(u.f&xt)===0;);f=!u||(u.f&Tt)!==0}f&&Ct(()=>{j(()=>v.in())})}}function dt(e,t,s,a,n){if(Mt(t)){var o,i=!1;return Ft(()=>{if(!i){var u=t({direction:"in"});o=dt(e,u,s,a,n)}}),{abort:()=>{i=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(!t?.duration)return n(),{abort:w,deactivate:w,reset:w,t:()=>a};const{delay:l=0,css:c,tick:r,easing:m=Yt}=t;var d=[];if(r&&r(0,1),c){var v=X(c(0,1));d.push(v,v)}var _=()=>1-a,f=e.animate(d,{duration:l,fill:"forwards"});return f.onfinish=()=>{f.cancel();var u=1-a,h=a-u,$=t.duration*Math.abs(h),M=[];if($>0){var S=!1;if(c)for(var F=Math.ceil($/16.666666666666668),x=0;x<=F;x+=1){var W=u+h*m(x/F),G=X(c(W,1-W));M.push(G),S||=G.overflow==="hidden"}S&&(e.style.overflow="hidden"),_=()=>{var z=f.currentTime;return u+h*m(z/$)},r&&Vt(()=>{if(f.playState!=="running")return!1;var z=_();return r(z,1-z),!0})}f=e.animate(M,{duration:$,fill:"forwards"}),f.onfinish=()=>{_=()=>a,r?.(a,1-a),n()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=w)},deactivate:()=>{n=w},reset:()=>{},t:()=>_()}}const te=!0;async function ee({url:e}){return{url:e.pathname}}const Ae=Object.freeze(Object.defineProperty({__proto__:null,load:ee,prerender:te},Symbol.toStringTag,{value:"Module"})),ae=e=>e;function re(e){const t=e-1;return t*t*t+1}function Y(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function se(e,{delay:t=0,duration:s=400,easing:a=ae}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:a,css:o=>`opacity: ${o*n}`}}function tt(e,{delay:t=0,duration:s=400,easing:a=re,x:n=0,y:o=0,opacity:i=0}={}){const l=getComputedStyle(e),c=+l.opacity,r=l.transform==="none"?"":l.transform,m=c*(1-i),[d,v]=Y(n),[_,f]=Y(o);return{delay:t,duration:s,easing:a,css:(u,h)=>`
			transform: ${r} translate(${(1-u)*d}${v}, ${(1-u)*_}${f});
			opacity: ${c-m*h}`}}/**
 * @license lucide-svelte v0.542.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ne={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var oe=zt("<svg><!><!></svg>");function vt(e,t){const s=P(t,["children","$$slots","$$events","$$legacy"]),a=P(s,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);R(t,!1);let n=E(t,"name",8,void 0),o=E(t,"color",8,"currentColor"),i=E(t,"size",8,24),l=E(t,"strokeWidth",8,2),c=E(t,"absoluteStrokeWidth",8,!1),r=E(t,"iconNode",24,()=>[]);const m=(...f)=>f.filter((u,h,$)=>!!u&&$.indexOf(u)===h).join(" ");lt();var d=oe();Q(d,(f,u)=>({...ne,...a,width:i(),height:i(),stroke:o(),"stroke-width":f,class:u}),[()=>(T(c()),T(l()),T(i()),j(()=>c()?Number(l())*24/Number(i()):l())),()=>(T(n()),T(s),j(()=>m("lucide-icon","lucide",n()?`lucide-${n()}`:"",s.class)))]);var v=b(d);Gt(v,1,r,Ht,(f,u)=>{var h=It(()=>Ot(q(u),2));let $=()=>q(h)[0],M=()=>q(h)[1];var S=C(),F=A(S);Zt(F,$,!0,(x,W)=>{Q(x,()=>({...M()}))}),p(f,S)});var _=B(v);U(_,t,"default",{}),y(d),p(e,d),D()}function ie(e,t){const s=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];vt(e,ft({name:"moon"},()=>s,{get iconNode(){return a},children:(n,o)=>{var i=C(),l=A(i);U(l,t,"default",{}),p(n,i)},$$slots:{default:!0}}))}function ce(e,t){const s=P(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.542.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];vt(e,ft({name:"sun"},()=>s,{get iconNode(){return a},children:(n,o)=>{var i=C(),l=A(i);U(l,t,"default",{}),p(n,i)},$$slots:{default:!0}}))}const le=localStorage.getItem("color-scheme"),mt=Wt(le??"dark");function fe(){mt.update(e=>{const t=e==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",t),localStorage.setItem("color-scheme",t),t})}var ue=N('<div class="svelte-114mtci"><!> <span>Light</span></div>'),de=N('<div class="svelte-114mtci"><!> <span>Dark</span></div>'),ve=N('<button aria-label="Toggle theme" class="svelte-114mtci"><!></button>');function me(e){const[t,s]=Dt(),a=()=>Ut(mt,"$theme",t);var n=ve();n.__click=function(...c){fe?.apply(this,c)};var o=b(n);{var i=c=>{var r=ue(),m=b(r);ce(m,{}),K(2),y(r),L(1,r,()=>tt,()=>({y:10})),p(c,r)},l=c=>{var r=de(),m=b(r);ie(m,{}),K(2),y(r),L(1,r,()=>tt,()=>({y:-10})),p(c,r)};Bt(o,c=>{a()==="dark"?c(i):c(l,!1)})}y(n),p(e,n),s()}Lt(["click"]);var _e=N('<nav class="svelte-scea26"><a href="/" class="title svelte-scea26"><b> </b></a> <ul class="links svelte-scea26"><li><a href="/contact" class="svelte-scea26">Who</a></li> <li><a href="/about" class="svelte-scea26">What</a></li> <li><a href="/rss.xml" target="_blank" class="svelte-scea26">RSS</a></li></ul> <!></nav>');function he(e,t){R(t,!1),lt();var s=_e(),a=b(s),n=b(a),o=b(n,!0);y(n),y(a);var i=B(a,4);me(i),y(s),Pt(()=>Rt(o,Jt)),p(e,s),D()}var pe=N('<div class="transition svelte-vcdv4c"><!></div>');function ge(e,t){var s=C(),a=A(s);Kt(a,()=>t.url,n=>{var o=pe(),i=b(o);ct(i,()=>t.children??w),y(o),L(1,o,()=>se),p(n,o)}),p(e,s)}var be=N('<div class="layout svelte-1sq3us8"><!> <main class="svelte-1sq3us8"><!></main></div>');function Me(e,t){R(t,!0);var s=be(),a=b(s);he(a,{});var n=B(a,2),o=b(n);ge(o,{get url(){return t.data.url},children:(i,l)=>{var c=C(),r=A(c);ct(r,()=>t.children??w),p(i,c)}}),y(n),y(s),p(e,s),D()}export{Me as component,Ae as universal};
