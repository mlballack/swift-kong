import{s as b,n as v,h as y}from"../chunks/scheduler.8f4337c7.js";import{S as k,i as g,g as d,s as m,h,j as H,c as _,x as p,f as c,k as x,a as u,y as C}from"../chunks/index.a13ebac9.js";import{p as w}from"../chunks/stores.eb580bc7.js";function E(f){let t,o="Error",n,s,r="Something went wrong";return{c(){t=d("h1"),t.textContent=o,n=m(),s=d("p"),s.textContent=r,this.h()},l(e){t=h(e,"H1",{class:!0,"data-svelte-h":!0}),p(t)!=="svelte-1o57tfj"&&(t.textContent=o),n=_(e),s=h(e,"P",{class:!0,"data-svelte-h":!0}),p(s)!=="svelte-tqo4fv"&&(s.textContent=r),this.h()},h(){x(t,"class","text-9xl font-bold"),x(s,"class","text-2xl font-semibold")},m(e,l){u(e,t,l),u(e,n,l),u(e,s,l)},d(e){e&&(c(t),c(n),c(s))}}}function P(f){let t,o="404",n,s,r="Page not found";return{c(){t=d("h1"),t.textContent=o,n=m(),s=d("p"),s.textContent=r,this.h()},l(e){t=h(e,"H1",{class:!0,"data-svelte-h":!0}),p(t)!=="svelte-2wyh3f"&&(t.textContent=o),n=_(e),s=h(e,"P",{class:!0,"data-svelte-h":!0}),p(s)!=="svelte-1d7i1k2"&&(s.textContent=r),this.h()},h(){x(t,"class","text-9xl font-bold text-outline"),x(s,"class","text-2xl font-semibold")},m(e,l){u(e,t,l),u(e,n,l),u(e,s,l)},d(e){e&&(c(t),c(n),c(s))}}}function S(f){let t,o,n,s='<a href="/" class="text-xl font-semibold border py-2 px-6 rounded-lg">Go Back Home</a>';function r(a,i){return a[0].status===404?P:E}let e=r(f),l=e(f);return{c(){t=d("div"),l.c(),o=m(),n=d("div"),n.innerHTML=s,this.h()},l(a){t=h(a,"DIV",{class:!0});var i=H(t);l.l(i),o=_(i),n=h(i,"DIV",{class:!0,"data-svelte-h":!0}),p(n)!=="svelte-9aox57"&&(n.innerHTML=s),i.forEach(c),this.h()},h(){x(n,"class","pt-10"),x(t,"class","pt-64 mx-auto w-64 text-center")},m(a,i){u(a,t,i),l.m(t,null),C(t,o),C(t,n)},p(a,[i]){e!==(e=r(a))&&(l.d(1),l=e(a),l&&(l.c(),l.m(t,o)))},i:v,o:v,d(a){a&&c(t),l.d()}}}function $(f,t,o){let n;return y(f,w,s=>o(0,n=s)),[n]}class I extends k{constructor(t){super(),g(this,t,$,S,b,{})}}export{I as component};
