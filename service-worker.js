if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"doctork"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/Overview.f9265806.css",revision:null},{url:"/css/app.e6605dd8.css",revision:null},{url:"/index.html",revision:"b33784cfcca4b3bb942a339e602c0b50"},{url:"/js/Overview.d6f73986.js",revision:null},{url:"/js/about.b0ab601f.js",revision:null},{url:"/js/app.2aa9c3a1.js",revision:null},{url:"/js/chunk-vendors.b5e48428.js",revision:null},{url:"/manifest.json",revision:"1a4783bba7d304abb39e8e1a7b3b2745"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
