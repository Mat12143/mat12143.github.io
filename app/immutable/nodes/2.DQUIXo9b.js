import{a as _,t as u}from"../chunks/disclose-version.DWXqlfAb.js";import"../chunks/legacy.BuXcLzDG.js";import{aa as d,ag as F,A as O,ah as C,p as M,w as G,t as k,j as D,k as i,m as l,ai as Y,g as j,aj as H,s as f}from"../chunks/runtime.C3iTlSxJ.js";import{s as R}from"../chunks/render.B9KmUqWL.js";import{i as I}from"../chunks/lifecycle.ntSx4ZQE.js";import{p as A}from"../chunks/props.DK_gaeOG.js";function x(t,a,e,r){var s=t.__attributes??(t.__attributes={});d&&(s[a]=t.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&t.nodeName==="LINK")||s[a]!==(s[a]=e)&&(a==="style"&&"__styles"in t&&(t.__styles={}),a==="loading"&&(t[F]=e),e==null?t.removeAttribute(a):typeof e!="string"&&U(t).includes(a)?t[a]=e:t.setAttribute(a,e))}var L=new Map;function U(t){var a=L.get(t.nodeName);if(a)return a;L.set(t.nodeName,a=[]);for(var e,r=t,s=Element.prototype;s!==r;){e=C(r);for(var o in e)e[o].set&&a.push(o);r=O(r)}return a}function z(t,a,e){var r=t.__className,s=E(a);d&&t.className===s?t.__className=s:(r!==s||d&&t.className!==s)&&(a==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function E(t,a){return(t??"")+""}var J=u("<a><span></span></a>");function h(t,a){M(a,!1);let e=A(a,"link",8),r=A(a,"icon",8),s=Y(),o=r().replace("icon-[","").split("--")[1].replace("brand-","").replace("]",""),m=o.charAt(0).toUpperCase(),p=o.slice(1,o.length);G(s,m+p),I();var n=J(),c=i(n);l(n),k(()=>{x(n,"href",e()),x(n,"aria-label",`Contact me on ${j(s)??""}`),z(c,`${r()??""} bg-text w-8 h-8 hover:bg-primary`)}),_(t,n),D()}const K=""+new URL("../assets/Logo.TsaGJwIa.webp",import.meta.url).href;var S=u('<div class="flex flex-col lg:flex-row gap-5 items-center justify-center"><div class="flex flex-col justify-center items-center text-center lg:items-start lg:text-start"><h1 class="text-mono text-xl font-medium text-text font-mono pb-2">Hi, I am</h1> <h1 class="text-mono text-5xl font-semibold text-primary">Matteo Peretto</h1> <h1 class="text-mono text-xl font-medium text-text lg:max-w-[550px] max-w-[250px] pt-2 font-mono"> </h1> <div class="pt-5 flex gap-3"><!> <!> <!></div></div> <div><img alt="My logo" class="lg:max-w-[300px] max-w-[250px] rounded-md"></div></div>');function $(t,a){M(a,!1);const e=new Date("2005-08-30"),r=new Date,s=e.getFullYear(),o=e.getMonth(),m=e.getDate();let p=Y(r.getFullYear()-s);const n=new Date(r.getFullYear(),o,m);r<n&&H(p,-1),I();var c=S(),g=i(c),v=f(i(g),4),P=i(v);l(v);var w=f(v,2),y=i(w);h(y,{link:"https://t.me/Mat12143",icon:"icon-[tabler--brand-telegram]"});var b=f(y,2);h(b,{link:"mailto:perettomatteo5@gmail.com",icon:"icon-[tabler--mail]"});var T=f(b,2);h(T,{link:"https://github.com/Mat12143",icon:"icon-[tabler--brand-github]"}),l(w),l(g);var N=f(g,2),B=i(N);x(B,"src",K),l(N),l(c),k(()=>R(P,`A ${j(p)??""} years old guy that loves Linux, Networking, Programming & Technology.`)),_(t,c),D()}var q=u('<div class="flex flex-col w-full lg:h-screen lg:w-screen"><div class="flex flex-row w-full h-full justify-center items-center absolute z-0"><!></div></div>');function at(t){var a=q(),e=i(a),r=i(e);$(r,{}),l(e),l(a),_(t,a)}export{at as component};
