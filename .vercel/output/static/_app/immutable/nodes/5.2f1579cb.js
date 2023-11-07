import{s as re,i as Se,n as j,o as Qe}from"../chunks/scheduler.8f4337c7.js";import{S as ae,i as se,g as h,s as w,m as ve,r as R,H as Ye,h as v,j as p,c as I,n as ge,f as u,x as B,u as z,F as Ze,k as m,l as et,a as C,y as c,v as F,o as pe,d as D,p as We,t as A,b as Xe,w as N,D as tt,e as Ge}from"../chunks/index.a13ebac9.js";import{H as rt}from"../chunks/Head.66fccfbc.js";import{e as Oe}from"../chunks/each.e59479a4.js";import{c as Ue,a as Ee}from"../chunks/SocialIcon.840d01aa.js";import{A as at,T as st}from"../chunks/Author.4eb1209a.js";import{i as lt}from"../chunks/theme.42052b0a.js";function qe(n,t,a){const e=n.slice();return e[2]=t[a],e}function Re(n){let t,a,e,r;return{c(){t=h("div"),a=h("img"),this.h()},l(s){t=v(s,"DIV",{class:!0});var l=p(t);a=v(l,"IMG",{alt:!0,src:!0,class:!0}),l.forEach(u),this.h()},h(){m(a,"alt",e=n[0].title),Se(a.src,r=n[0].image)||m(a,"src",r),m(a,"class","object-cover object-center w-full h-auto"),m(t,"class","w-full pb-6")},m(s,l){C(s,t,l),c(t,a)},p(s,l){l&1&&e!==(e=s[0].title)&&m(a,"alt",e),l&1&&!Se(a.src,r=s[0].image)&&m(a,"src",r)},d(s){s&&u(t)}}}function ze(n){let t,a,e="Tags",r,s,l,o=Oe(n[0].tags),i=[];for(let d=0;d<o.length;d+=1)i[d]=Fe(qe(n,o,d));const x=d=>A(i[d],1,1,()=>{i[d]=null});return{c(){t=h("div"),a=h("h2"),a.textContent=e,r=w(),s=h("div");for(let d=0;d<i.length;d+=1)i[d].c();this.h()},l(d){t=v(d,"DIV",{class:!0});var f=p(t);a=v(f,"H2",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-6kj4vf"&&(a.textContent=e),r=I(f),s=v(f,"DIV",{class:!0});var g=p(s);for(let b=0;b<i.length;b+=1)i[b].l(g);g.forEach(u),f.forEach(u),this.h()},h(){m(a,"class","text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"),m(s,"class","flex flex-wrap"),m(t,"class","py-4 xl:py-8")},m(d,f){C(d,t,f),c(t,a),c(t,r),c(t,s);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(s,null);l=!0},p(d,f){if(f&1){o=Oe(d[0].tags);let g;for(g=0;g<o.length;g+=1){const b=qe(d,o,g);i[g]?(i[g].p(b,f),D(i[g],1)):(i[g]=Fe(b),i[g].c(),D(i[g],1),i[g].m(s,null))}for(We(),g=o.length;g<i.length;g+=1)x(g);Xe()}},i(d){if(!l){for(let f=0;f<o.length;f+=1)D(i[f]);l=!0}},o(d){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)A(i[f]);l=!1},d(d){d&&u(t),tt(i,d)}}}function Fe(n){let t,a;return t=new st({props:{text:n[2]}}),{c(){R(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,r){F(t,e,r),a=!0},p(e,r){const s={};r&1&&(s.text=e[2]),t.$set(s)},i(e){a||(D(t.$$.fragment,e),a=!0)},o(e){A(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function Ne(n){let t,a,e=n[0].prev&&Je(n),r=n[0].next&&Ke(n);return{c(){t=h("div"),e&&e.c(),a=w(),r&&r.c(),this.h()},l(s){t=v(s,"DIV",{class:!0});var l=p(t);e&&e.l(l),a=I(l),r&&r.l(l),l.forEach(u),this.h()},h(){m(t,"class","flex justify-between py-4 xl:block xl:space-y-8 xl:py-8")},m(s,l){C(s,t,l),e&&e.m(t,null),c(t,a),r&&r.m(t,null)},p(s,l){s[0].prev?e?e.p(s,l):(e=Je(s),e.c(),e.m(t,a)):e&&(e.d(1),e=null),s[0].next?r?r.p(s,l):(r=Ke(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},d(s){s&&u(t),e&&e.d(),r&&r.d()}}}function Je(n){let t,a,e="Previous Article",r,s,l,o=n[0].prev.title+"",i,x;return{c(){t=h("div"),a=h("h2"),a.textContent=e,r=w(),s=h("div"),l=h("a"),i=ve(o),this.h()},l(d){t=v(d,"DIV",{});var f=p(t);a=v(f,"H2",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-1iyrkzh"&&(a.textContent=e),r=I(f),s=v(f,"DIV",{class:!0});var g=p(s);l=v(g,"A",{href:!0});var b=p(l);i=ge(b,o),b.forEach(u),g.forEach(u),f.forEach(u),this.h()},h(){m(a,"class","text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"),m(l,"href",x=`/blog/${n[0].prev.slug}`),m(s,"class","text-primary-500 hover:text-primary-600 dark:hover:text-primary-400")},m(d,f){C(d,t,f),c(t,a),c(t,r),c(t,s),c(s,l),c(l,i)},p(d,f){f&1&&o!==(o=d[0].prev.title+"")&&pe(i,o),f&1&&x!==(x=`/blog/${d[0].prev.slug}`)&&m(l,"href",x)},d(d){d&&u(t)}}}function Ke(n){let t,a,e="Next Article",r,s,l,o=n[0].next.title+"",i,x;return{c(){t=h("div"),a=h("h2"),a.textContent=e,r=w(),s=h("div"),l=h("a"),i=ve(o),this.h()},l(d){t=v(d,"DIV",{});var f=p(t);a=v(f,"H2",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-d18sdx"&&(a.textContent=e),r=I(f),s=v(f,"DIV",{class:!0});var g=p(s);l=v(g,"A",{href:!0});var b=p(l);i=ge(b,o),b.forEach(u),g.forEach(u),f.forEach(u),this.h()},h(){m(a,"class","text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"),m(l,"href",x=`/blog/${n[0].next.slug}`),m(s,"class","text-primary-500 hover:text-primary-600 dark:hover:text-primary-400")},m(d,f){C(d,t,f),c(t,a),c(t,r),c(t,s),c(s,l),c(l,i)},p(d,f){f&1&&o!==(o=d[0].next.title+"")&&pe(i,o),f&1&&x!==(x=`/blog/${d[0].next.slug}`)&&m(l,"href",x)},d(d){d&&u(t)}}}function it(n){let t,a,e,r,s,l,o,i,x=n[0].title+"",d,f,g,b,P,De="Published on",_e,J,S,Z=new Date(n[0].date).toLocaleDateString(Ue.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})+"",le,ie,xe,V,G,O,we="Authors",ee,K,Q,L,be,W,X,te,ne=n[0].content+"",ye,H,T,oe,$e,U,Ie='<a href="/blog" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">← Back to the blog</a>',M,$=n[0].image&&Re(n);L=new at({props:{author:n[1].name,avatar:n[1].avatar,twitter:n[1].twitter}});let y=n[0].tags&&ze(n),k=(n[0].next||n[0].prev)&&Ne(n);return{c(){t=h("div"),a=h("article"),e=h("div"),r=h("header"),$&&$.c(),s=w(),l=h("div"),o=h("div"),i=h("h1"),d=ve(x),f=w(),g=h("dl"),b=h("div"),P=h("dt"),P.textContent=De,_e=w(),J=h("dd"),S=h("time"),le=ve(Z),xe=w(),V=h("div"),G=h("dl"),O=h("dt"),O.textContent=we,ee=h("dd"),K=h("ul"),Q=h("li"),R(L.$$.fragment),be=w(),W=h("div"),X=h("div"),te=new Ye(!1),ye=w(),H=h("footer"),T=h("div"),y&&y.c(),oe=w(),k&&k.c(),$e=w(),U=h("div"),U.innerHTML=Ie,this.h()},l(_){t=v(_,"DIV",{class:!0});var E=p(t);a=v(E,"ARTICLE",{});var q=p(a);e=v(q,"DIV",{class:!0});var ce=p(e);r=v(ce,"HEADER",{class:!0});var de=p(r);$&&$.l(de),s=I(de),l=v(de,"DIV",{class:!0});var ue=p(l);o=v(ue,"DIV",{});var Ae=p(o);i=v(Ae,"H1",{class:!0});var Ce=p(i);d=ge(Ce,x),Ce.forEach(u),Ae.forEach(u),f=I(ue),g=v(ue,"DL",{class:!0});var Ve=p(g);b=v(Ve,"DIV",{});var fe=p(b);P=v(fe,"DT",{class:!0,"data-svelte-h":!0}),B(P)!=="svelte-dxm560"&&(P.textContent=De),_e=I(fe),J=v(fe,"DD",{class:!0});var Te=p(J);S=v(Te,"TIME",{datetime:!0});var Le=p(S);le=ge(Le,Z),Le.forEach(u),Te.forEach(u),fe.forEach(u),Ve.forEach(u),ue.forEach(u),de.forEach(u),xe=I(ce),V=v(ce,"DIV",{class:!0,style:!0});var Y=p(V);G=v(Y,"DL",{class:!0});var ke=p(G);O=v(ke,"DT",{class:!0,"data-svelte-h":!0}),B(O)!=="svelte-bmkghj"&&(O.textContent=we),ee=v(ke,"DD",{});var He=p(ee);K=v(He,"UL",{class:!0});var Me=p(K);Q=v(Me,"LI",{class:!0});var je=p(Q);z(L.$$.fragment,je),je.forEach(u),Me.forEach(u),He.forEach(u),ke.forEach(u),be=I(Y),W=v(Y,"DIV",{class:!0});var Be=p(W);X=v(Be,"DIV",{class:!0});var Pe=p(X);te=Ze(Pe,!1),Pe.forEach(u),Be.forEach(u),ye=I(Y),H=v(Y,"FOOTER",{class:!0});var me=p(H);T=v(me,"DIV",{class:!0});var he=p(T);y&&y.l(he),oe=I(he),k&&k.l(he),he.forEach(u),$e=I(me),U=v(me,"DIV",{class:!0,"data-svelte-h":!0}),B(U)!=="svelte-1s1jwq5"&&(U.innerHTML=Ie),me.forEach(u),Y.forEach(u),ce.forEach(u),q.forEach(u),E.forEach(u),this.h()},h(){m(i,"class","text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"),m(P,"class","sr-only"),m(S,"datetime",ie=n[0].date),m(J,"class","text-base font-medium leading-6 text-gray-500 dark:text-gray-400"),m(g,"class","space-y-10"),m(l,"class","space-y-1 text-center"),m(r,"class","pt-6 xl:pb-6"),m(O,"class","sr-only"),m(Q,"class","flex items-center space-x-2"),m(K,"class","flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"),m(G,"class","pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"),te.a=null,m(X,"class","prose max-w-none pt-10 pb-8 dark:prose-dark"),m(W,"class","divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"),m(T,"class","divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"),m(U,"class","pt-4 xl:pt-8"),m(H,"class",""),m(V,"class","divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"),et(V,"grid-template-rows","auto 1fr"),m(e,"class","xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"),m(t,"class","mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0")},m(_,E){C(_,t,E),c(t,a),c(a,e),c(e,r),$&&$.m(r,null),c(r,s),c(r,l),c(l,o),c(o,i),c(i,d),c(l,f),c(l,g),c(g,b),c(b,P),c(b,_e),c(b,J),c(J,S),c(S,le),c(e,xe),c(e,V),c(V,G),c(G,O),c(G,ee),c(ee,K),c(K,Q),F(L,Q,null),c(V,be),c(V,W),c(W,X),te.m(ne,X),c(V,ye),c(V,H),c(H,T),y&&y.m(T,null),c(T,oe),k&&k.m(T,null),c(H,$e),c(H,U),M=!0},p(_,[E]){_[0].image?$?$.p(_,E):($=Re(_),$.c(),$.m(r,s)):$&&($.d(1),$=null),(!M||E&1)&&x!==(x=_[0].title+"")&&pe(d,x),(!M||E&1)&&Z!==(Z=new Date(_[0].date).toLocaleDateString(Ue.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})+"")&&pe(le,Z),(!M||E&1&&ie!==(ie=_[0].date))&&m(S,"datetime",ie);const q={};E&2&&(q.author=_[1].name),E&2&&(q.avatar=_[1].avatar),E&2&&(q.twitter=_[1].twitter),L.$set(q),(!M||E&1)&&ne!==(ne=_[0].content+"")&&te.p(ne),_[0].tags?y?(y.p(_,E),E&1&&D(y,1)):(y=ze(_),y.c(),D(y,1),y.m(T,oe)):y&&(We(),A(y,1,1,()=>{y=null}),Xe()),_[0].next||_[0].prev?k?k.p(_,E):(k=Ne(_),k.c(),k.m(T,null)):k&&(k.d(1),k=null)},i(_){M||(D(L.$$.fragment,_),D(y),M=!0)},o(_){A(L.$$.fragment,_),A(y),M=!1},d(_){_&&u(t),$&&$.d(),N(L),y&&y.d(),k&&k.d()}}}function nt(n,t,a){let{post:e}=t,{author:r}=t;return n.$$set=s=>{"post"in s&&a(0,e=s.post),"author"in s&&a(1,r=s.author)},[e,r]}class ot extends ae{constructor(t){super(),se(this,t,nt,it,re,{post:0,author:1})}}function ct(n){let t,a='<div id="giscus-loading" class="flex flex-col items-center"><h4>Loading Giscus Discussion</h4></div> <div id="giscus" class="giscus"></div>';return{c(){t=h("div"),t.innerHTML=a,this.h()},l(e){t=v(e,"DIV",{id:!0,"data-svelte-h":!0}),B(t)!=="svelte-f0ask8"&&(t.innerHTML=a),this.h()},h(){m(t,"id","giscus-container")},m(e,r){C(e,t,r)},p:j,i:j,o:j,d(e){e&&u(t)}}}function dt(n,t,a){let{config:e={}}=t;return Qe(()=>{const r=document.createElement("script");r.src="https://giscus.app/client.js",r.setAttribute("data-repo",e.repo),r.setAttribute("data-repo-id",e.repoId),r.setAttribute("data-category",e.category??""),r.setAttribute("data-category-id",e.categoryId),r.setAttribute("data-mapping",e.mapping),r.setAttribute("data-reactions-enabled",e.reactionsEnabled),r.setAttribute("data-input-position",e.inputPosition??"bottom"),r.setAttribute("data-theme",e.theme??"preferred_color_scheme"),r.setAttribute("data-lang",e.lang??"en"),r.setAttribute("data-loading",e.loading??""),r.setAttribute("data-strict",e.dataStrict??"0"),r.setAttribute("crossorigin","anonymous"),r.setAttribute("async","true"),setTimeout(()=>{var o;const s=new MutationObserver(()=>{var i;(i=document.getElementById("giscus-loading"))==null||i.remove(),s.disconnect()}),l=document.getElementById("giscus");l&&s.observe(l,{childList:!0}),(o=document.getElementById("giscus-container"))==null||o.appendChild(r)},1e3)}),n.$$set=r=>{"config"in r&&a(0,e=r.config)},[e]}class ut extends ae{constructor(t){super(),se(this,t,dt,ct,re,{config:0})}}function ft(n){let t,a='<div id="utterances-loading" class="flex flex-col items-center"><h4>Loading Utternaces Discussion</h4></div> <div id="utterances" class="utterances-frame relative"></div>';return{c(){t=h("div"),t.innerHTML=a,this.h()},l(e){t=v(e,"DIV",{id:!0,"data-svelte-h":!0}),B(t)!=="svelte-lmz0w8"&&(t.innerHTML=a),this.h()},h(){m(t,"id","utterances-container")},m(e,r){C(e,t,r)},p:j,i:j,o:j,d(e){e&&u(t)}}}function mt(n,t,a){let{config:e={}}=t,r=lt()?e.darkTheme:e.theme;return Qe(()=>{const s=document.createElement("script");s.src="https://utteranc.es/client.js",s.setAttribute("repo",e.repo),s.setAttribute("issue-term",e.issueTerm??"pathname"),s.setAttribute("label",e.label??""),s.setAttribute("theme",r??"preferred-color-scheme"),s.setAttribute("crossorigin","anonymous"),s.setAttribute("async","true"),setTimeout(()=>{var i;const l=new MutationObserver(()=>{var x;(x=document.getElementById("utterances-loading"))==null||x.remove(),l.disconnect()}),o=document.getElementById("utterances");o&&l.observe(o,{childList:!0}),(i=document.getElementById("utterances-container"))==null||i.appendChild(s)},1e3)}),n.$$set=s=>{"config"in s&&a(0,e=s.config)},[e]}class ht extends ae{constructor(t){super(),se(this,t,mt,ft,re,{config:0})}}function vt(n){let t,a,e,r;const s=[pt,gt],l=[];function o(i,x){return i[0]==="giscus"?0:i[0]==="utterances"?1:-1}return~(a=o(n))&&(e=l[a]=s[a](n)),{c(){t=h("div"),e&&e.c(),this.h()},l(i){t=v(i,"DIV",{class:!0});var x=p(t);e&&e.l(x),x.forEach(u),this.h()},h(){m(t,"class","pt-6 pb-6 text-center text-gray-700 dark:text-gray-300 border-t")},m(i,x){C(i,t,x),~a&&l[a].m(t,null),r=!0},p:j,i(i){r||(D(e),r=!0)},o(i){A(e),r=!1},d(i){i&&u(t),~a&&l[a].d()}}}function gt(n){let t,a;return t=new ht({props:{config:Ee.utterances}}),{c(){R(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,r){F(t,e,r),a=!0},i(e){a||(D(t.$$.fragment,e),a=!0)},o(e){A(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function pt(n){let t,a;return t=new ut({props:{config:Ee.giscus}}),{c(){R(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,r){F(t,e,r),a=!0},i(e){a||(D(t.$$.fragment,e),a=!0)},o(e){A(t.$$.fragment,e),a=!1},d(e){N(t,e)}}}function _t(n){let t,a,e=n[0]&&vt(n);return{c(){e&&e.c(),t=Ge()},l(r){e&&e.l(r),t=Ge()},m(r,s){e&&e.m(r,s),C(r,t,s),a=!0},p(r,[s]){r[0]&&e.p(r,s)},i(r){a||(D(e),a=!0)},o(r){A(e),a=!1},d(r){r&&u(t),e&&e.d(r)}}}function xt(n){return[Ee.provider]}class bt extends ae{constructor(t){super(),se(this,t,xt,_t,re,{})}}function yt(n){let t,a,e,r,s,l;return t=new rt({props:{title:n[0].title}}),e=new ot({props:{post:n[0],author:n[1]}}),s=new bt({}),{c(){R(t.$$.fragment),a=w(),R(e.$$.fragment),r=w(),R(s.$$.fragment)},l(o){z(t.$$.fragment,o),a=I(o),z(e.$$.fragment,o),r=I(o),z(s.$$.fragment,o)},m(o,i){F(t,o,i),C(o,a,i),F(e,o,i),C(o,r,i),F(s,o,i),l=!0},p:j,i(o){l||(D(t.$$.fragment,o),D(e.$$.fragment,o),D(s.$$.fragment,o),l=!0)},o(o){A(t.$$.fragment,o),A(e.$$.fragment,o),A(s.$$.fragment,o),l=!1},d(o){o&&(u(a),u(r)),N(t,o),N(e,o),N(s,o)}}}function $t(n,t,a){let{data:e}=t;const r=e.post,s=e.author;return n.$$set=l=>{"data"in l&&a(2,e=l.data)},[r,s,e]}class Vt extends ae{constructor(t){super(),se(this,t,$t,yt,re,{data:2})}}export{Vt as component};
