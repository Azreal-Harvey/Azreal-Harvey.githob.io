if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let b={};const n=e=>c(e,a),s={module:{uri:a},exports:b,require:n};i[a]=Promise.all(d.map((e=>s[e]||n(e)))).then((e=>(r(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/05/23/个人介绍/index.html",revision:"4614205386bf5cefef2b4bf8197ed0df"},{url:"2023/05/24/更新日志/index.html",revision:"00774e5dc146abf5fbd6375d899ea024"},{url:"2023/05/24/随便写点/index.html",revision:"9013e9eb8c261e2fe69eeaa9db75cc64"},{url:"2023/05/26/加密测试/index.html",revision:"16e6356b4dbaeda1b9841f42277c53b6"},{url:"2023/05/26/网站运维备忘录/index.html",revision:"f37bb13473b1c18aee14e6191cf636d8"},{url:"2023/05/27/pasco-议程记录/index.html",revision:"053d6c7c658e4629244832679217fdb2"},{url:"2023/05/29/8086第一次作业/index.html",revision:"3e10d9e4134b38a172f73a04c29a1001"},{url:"2023/05/29/8086第一次作业/字母.png",revision:"d82db52a2425812c7865347620b73e08"},{url:"2023/05/29/8086第一次作业/运行前.png",revision:"8ad00ca04891c21b1413875fb07a220b"},{url:"2023/05/29/8086第一次作业/运行后.png",revision:"36307f008c7df9a342c0ab9d1e5347fb"},{url:"2023/05/29/8086第五章总结/index.html",revision:"358fc67fbb69e7e9bfe06812ade7cc10"},{url:"2023/05/30/8086第二次作业/1.png",revision:"f97a1a5450828ff70cd1c96cf2b65ee8"},{url:"2023/05/30/8086第二次作业/2.1.png",revision:"8c1d90f44ecf04353daeeeb6b0de8012"},{url:"2023/05/30/8086第二次作业/2.2.png",revision:"c6b667c080574a63cb6a0fb36fd59a9c"},{url:"2023/05/30/8086第二次作业/2.3.png",revision:"85a8e4a3ad46b173d6ceebadab4e866b"},{url:"2023/05/30/8086第二次作业/3.1.png",revision:"e4e078fbcbca32c83ed124748e16f61e"},{url:"2023/05/30/8086第二次作业/3.2.png",revision:"c043ce86aafc588ad6ba8090ffd99d99"},{url:"2023/05/30/8086第二次作业/index.html",revision:"5b6f1535b2b7a5ec0e2057f509fcec13"},{url:"2023/05/31/测试推送/index.html",revision:"89260fb119bd38b60f60cfede753b28c"},{url:"2023/05/31/网站使用指南/index.html",revision:"9b9c1a295ebc87fc9b7a2f145a7b8288"},{url:"2023/06/03/codeforces-round-871总结/index.html",revision:"90a4cc95fd56065a26915e85b39dd092"},{url:"2023/06/07/8086第三次作业/index.html",revision:"9acdd0b8beaa6c5f65a72aeee2623074"},{url:"2023/06/07/8086第三次作业/低电平.png",revision:"5e6b1d306b4c5325b03693b9cc8b65a3"},{url:"2023/06/07/8086第三次作业/冒泡.png",revision:"1b25677eed89b90b691b0c1e0b40dd14"},{url:"2023/06/07/8086第三次作业/排名.png",revision:"fc975b0e5b2e7fa48b1b6622a5ec78e5"},{url:"2023/06/07/8086第三次作业/高电平.png",revision:"00fd57484b533ebccaf98dc1203ed9b7"},{url:"2023/06/10/YOLO/index.html",revision:"a6ee52fa0bdd395d1801efabef0e72d0"},{url:"404.html",revision:"8f4ce3b4cc4f8392803f04193cddf354"},{url:"about/index.html",revision:"f428c508d0810d02e8958b8881c5d5c1"},{url:"archives/2023/05/index.html",revision:"1452a2616fd5638ee26c0f76c7c43950"},{url:"archives/2023/05/page/2/index.html",revision:"35c497b4cc16bf0b4b24ec6643da248e"},{url:"archives/2023/06/index.html",revision:"597de7f57693a77537a6106071814a06"},{url:"archives/2023/index.html",revision:"9f14c261ea8a42a462835ccdc0cdae5b"},{url:"archives/2023/page/2/index.html",revision:"58b27c977472cd95e57b9c34f3cecaf8"},{url:"archives/index.html",revision:"351cf6aaff7f21dbdb0d68a24f9d8a9a"},{url:"archives/page/2/index.html",revision:"7825cc351e892a7aa3dbf6ee28663e60"},{url:"categories/index.html",revision:"9fd39ac103d24d2d8067053b2343764e"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"d2553c20b872328a80ba3c9f117ee38c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"105097e1ef62c273e374c0b34165d86d"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"851ed98becadb7b748d2618c876d7d8b"},{url:"log/index.html",revision:"4fd1f92bf4c46efeade3fc9ce5cbaee6"},{url:"messageboard/index.html",revision:"405c563a3675e431cf856aa335e892d3"},{url:"page/2/index.html",revision:"a5acfd55d2bcc411057c1b4ddec50ec9"},{url:"pasco/index.html",revision:"002110a37ab67ecbfc9ba6328a73dc27"},{url:"tags/index.html",revision:"b548e7e8049660a2fa049ec5d10e0bed"},{url:"tags/pasco/index.html",revision:"b6c01ad3612ecb6771fff9ab12b13cd9"},{url:"tags/secret/index.html",revision:"5527f06f9ad313d98ad6b3e94c297735"},{url:"tags/YOLO/index.html",revision:"1402ce25c3779b071278a7b32ae0ba78"},{url:"tags/超级棒棒糖/index.html",revision:"c67144a0f820c3ad000ea3fc5b7dc97a"},{url:"tags/题解/index.html",revision:"97b7c87b93aa6dbb9b447a533a2a4b73"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
