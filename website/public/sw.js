if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),d={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-0f7cba1c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/177-b42c91dac5721b0c.js",revision:"b42c91dac5721b0c"},{url:"/_next/static/chunks/21-ccc23f70b5eb6dfa.js",revision:"ccc23f70b5eb6dfa"},{url:"/_next/static/chunks/238.2dc01279b88c7e7c.js",revision:"2dc01279b88c7e7c"},{url:"/_next/static/chunks/25.5c911b5af90b901a.js",revision:"5c911b5af90b901a"},{url:"/_next/static/chunks/297.087747b581883f67.js",revision:"087747b581883f67"},{url:"/_next/static/chunks/303.11f917987b020403.js",revision:"11f917987b020403"},{url:"/_next/static/chunks/343.00d2ed514c8f216d.js",revision:"00d2ed514c8f216d"},{url:"/_next/static/chunks/41-489e571133dbcb55.js",revision:"489e571133dbcb55"},{url:"/_next/static/chunks/460.ffd34f28b34d4e37.js",revision:"ffd34f28b34d4e37"},{url:"/_next/static/chunks/526.b08f7b6111e536fe.js",revision:"b08f7b6111e536fe"},{url:"/_next/static/chunks/537.f53489b4eb05e145.js",revision:"f53489b4eb05e145"},{url:"/_next/static/chunks/538.15dd3d1bcbf4439d.js",revision:"15dd3d1bcbf4439d"},{url:"/_next/static/chunks/55819d47.edb529dd677d346a.js",revision:"edb529dd677d346a"},{url:"/_next/static/chunks/607.2624cae1cc5fa9cd.js",revision:"2624cae1cc5fa9cd"},{url:"/_next/static/chunks/74.76fc17969985a5fe.js",revision:"76fc17969985a5fe"},{url:"/_next/static/chunks/893.d54c48622a2f2deb.js",revision:"d54c48622a2f2deb"},{url:"/_next/static/chunks/928-5615b5579a0adbba.js",revision:"5615b5579a0adbba"},{url:"/_next/static/chunks/996.fc61b7fca14a7bd5.js",revision:"fc61b7fca14a7bd5"},{url:"/_next/static/chunks/framework-0570a0933e3850e7.js",revision:"0570a0933e3850e7"},{url:"/_next/static/chunks/main-efefac73593dedbe.js",revision:"efefac73593dedbe"},{url:"/_next/static/chunks/pages/_app-56bdaf2ffb165d04.js",revision:"56bdaf2ffb165d04"},{url:"/_next/static/chunks/pages/_error-613642a4de95e14d.js",revision:"613642a4de95e14d"},{url:"/_next/static/chunks/pages/docs-a59fb578b1c67302.js",revision:"a59fb578b1c67302"},{url:"/_next/static/chunks/pages/home-ed94b45ffba3a816.js",revision:"ed94b45ffba3a816"},{url:"/_next/static/chunks/pages/index-584f5b22c407cf01.js",revision:"584f5b22c407cf01"},{url:"/_next/static/chunks/pages/snap-2a2e7597839b4760.js",revision:"2a2e7597839b4760"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-34276a9640718e8e.js",revision:"34276a9640718e8e"},{url:"/_next/static/css/089983860bde59bb.css",revision:"089983860bde59bb"},{url:"/_next/static/css/0990f60b3da422ff.css",revision:"0990f60b3da422ff"},{url:"/_next/static/css/2a7f5059d2c84de2.css",revision:"2a7f5059d2c84de2"},{url:"/_next/static/css/2b65b68cbdde9c20.css",revision:"2b65b68cbdde9c20"},{url:"/_next/static/css/8f4297209891ca4c.css",revision:"8f4297209891ca4c"},{url:"/_next/static/css/96104b01c7db573d.css",revision:"96104b01c7db573d"},{url:"/_next/static/css/a1151effbb434534.css",revision:"a1151effbb434534"},{url:"/_next/static/css/a5e49f1fd8d36e8f.css",revision:"a5e49f1fd8d36e8f"},{url:"/_next/static/css/bc3970900e1a7546.css",revision:"bc3970900e1a7546"},{url:"/_next/static/css/e259dd81afcc0770.css",revision:"e259dd81afcc0770"},{url:"/_next/static/dTEcc9htvjkP8hO1WdAUr/_buildManifest.js",revision:"deddbd7b066af9174568c74435155bb7"},{url:"/_next/static/dTEcc9htvjkP8hO1WdAUr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"04eb6136d9dc975f98a1f26dad3a18c2"},{url:"/android-chrome-512x512.png",revision:"5ba0786478ab465215d7156b8a623a5e"},{url:"/apple-touch-icon.png",revision:"9060e0a05ed9801bc5b539250957553b"},{url:"/favicon-16x16.png",revision:"7c8feca611e573887cbe1e7d4ab10259"},{url:"/favicon-32x32.png",revision:"a29a4e8cd9548bad4738130754e260e5"},{url:"/favicon.ico",revision:"4fb3df6ed391a3eda1b886aa150d1891"},{url:"/fonts/Slussen-Bold.woff2",revision:"e7763140521609dc25ea44f512606bd3"},{url:"/fonts/Slussen-Compressed-Black.woff2",revision:"03544e36539058c093dcd5dd9bb8196c"},{url:"/fonts/Slussen-Expanded-Black.woff2",revision:"ec68f3582a4274fb58287f7a85173047"},{url:"/fonts/Slussen-Medium.woff2",revision:"58b3bab2301a6332846956924fb2717b"},{url:"/fonts/Slussen-Regular.woff2",revision:"607dbd3e6823789222434856623059de"},{url:"/fonts/Slussen-Semibold.woff2",revision:"7b17a1bc6619610d74bc39355860c796"},{url:"/manifest.json",revision:"e8b501e9f3b68022ca64737b86338691"},{url:"/models/arm.glb",revision:"e2088db2700752eb8a6d38861b57ff39"},{url:"/models/arm2.glb",revision:"d38b4c53972c5a261b6c74eaeed2e0ee"},{url:"/mstile-144x144.png",revision:"33e7495d37ae7978f4efebcbaa3808ff"},{url:"/mstile-150x150.png",revision:"096242c965b38c65f90904363abb4994"},{url:"/mstile-310x150.png",revision:"f8064114d6d6b8b47492cdf74d83c47f"},{url:"/mstile-310x310.png",revision:"cd4ade9fda6af6f0193d044127ff159d"},{url:"/mstile-70x70.png",revision:"330d4b654cb6a8599badb81dccbda358"},{url:"/og.png",revision:"d3b8e28c1f60dfd2284ae4b1252f4819"},{url:"/robots.txt",revision:"a46d951abc26586688147ef3c6557498"},{url:"/safari-pinned-tab.svg",revision:"f6193529c7cdeb951a6feabbf2e6c94c"},{url:"/site.webmanifest",revision:"e8b501e9f3b68022ca64737b86338691"},{url:"/sitemap-0.xml",revision:"71d6cd59107c1168b39d78b45e4f07e7"},{url:"/sitemap.xml",revision:"6ff5716e0d2737c50e2ac4367969ae66"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));