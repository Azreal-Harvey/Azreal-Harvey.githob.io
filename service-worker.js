if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let b={};const n=e=>d(e,a),f={module:{uri:a},exports:b,require:n};i[a]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(r(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/05/23/个人介绍/index.html",revision:"c8e59d9161f3666c937a4dee62176da2"},{url:"2023/05/26/加密测试/index.html",revision:"afc8f3319a3107d0fed9c176504c15e8"},{url:"2023/05/26/网站运维备忘录/index.html",revision:"ba9920e30ccdb7dc9adf41a10db7a04f"},{url:"2023/05/27/pasco-议程记录/index.html",revision:"703b18cfdd3017d90b30b3b479efa5e2"},{url:"2023/05/29/8086第一次作业/index.html",revision:"97ec5db884166311ecb0e06df4d058a0"},{url:"2023/05/29/8086第一次作业/字母.png",revision:"d82db52a2425812c7865347620b73e08"},{url:"2023/05/29/8086第一次作业/运行前.png",revision:"8ad00ca04891c21b1413875fb07a220b"},{url:"2023/05/29/8086第一次作业/运行后.png",revision:"36307f008c7df9a342c0ab9d1e5347fb"},{url:"2023/05/29/8086第五章总结/index.html",revision:"3cb52b994b90d1fad58c9934ac4a245c"},{url:"2023/05/30/8086第二次作业/1.png",revision:"f97a1a5450828ff70cd1c96cf2b65ee8"},{url:"2023/05/30/8086第二次作业/2.1.png",revision:"8c1d90f44ecf04353daeeeb6b0de8012"},{url:"2023/05/30/8086第二次作业/2.2.png",revision:"c6b667c080574a63cb6a0fb36fd59a9c"},{url:"2023/05/30/8086第二次作业/2.3.png",revision:"85a8e4a3ad46b173d6ceebadab4e866b"},{url:"2023/05/30/8086第二次作业/3.1.png",revision:"e4e078fbcbca32c83ed124748e16f61e"},{url:"2023/05/30/8086第二次作业/3.2.png",revision:"c043ce86aafc588ad6ba8090ffd99d99"},{url:"2023/05/30/8086第二次作业/index.html",revision:"2854ddcf774d1e8577e5ca9957eda4b3"},{url:"2023/05/31/测试推送/index.html",revision:"2ea0f9f66916f426e5ce4c42ab3339da"},{url:"2023/05/31/网站使用指南/index.html",revision:"55e5b3f51eb30eeecee42ea87a95430e"},{url:"2023/06/03/codeforces-round-871总结/index.html",revision:"09043c1005df402df992dca325d3953e"},{url:"2023/06/07/8086第三次作业/index.html",revision:"f6aa8319c0c5b2fd317d7a1be38c178e"},{url:"2023/06/07/8086第三次作业/低电平.png",revision:"5e6b1d306b4c5325b03693b9cc8b65a3"},{url:"2023/06/07/8086第三次作业/冒泡.png",revision:"1b25677eed89b90b691b0c1e0b40dd14"},{url:"2023/06/07/8086第三次作业/排名.png",revision:"fc975b0e5b2e7fa48b1b6622a5ec78e5"},{url:"2023/06/07/8086第三次作业/高电平.png",revision:"00fd57484b533ebccaf98dc1203ed9b7"},{url:"2023/06/10/YOLO/index.html",revision:"fea0e664052a08f98aaa4a2ed32da335"},{url:"2023/06/18/更新日志/index.html",revision:"95e76db37450245e47305a646670f5d7"},{url:"2023/06/18/随便写点/index.html",revision:"700728fa10b492d844130c2949553bfd"},{url:"2023/07/08/vehicle-perspective-mirror/index.html",revision:"71bef9a321fd7814fe8f82be3d97b681"},{url:"404.html",revision:"797170fa2b30c11e256cea10ac99a201"},{url:"about/index.html",revision:"75f335e3909602f82fec5caed986c907"},{url:"archives/2023/05/index.html",revision:"af877b249eabbd0f6a0335d3c1677dce"},{url:"archives/2023/06/index.html",revision:"57d852350adc0369e7879918643c1d97"},{url:"archives/2023/07/index.html",revision:"2a2f0cb305fcfbfd8cf769d232b11e86"},{url:"archives/2023/index.html",revision:"d5674a7faf6b5d2b7323a3586157a60e"},{url:"archives/2023/page/2/index.html",revision:"e9c8646bb6859a8bfca536e0877ad911"},{url:"archives/index.html",revision:"6c4bc616d1efc8e201406d5c46b06387"},{url:"archives/page/2/index.html",revision:"f11f282f060b116a29c362a5c3d846b8"},{url:"categories/index.html",revision:"67d57547233fc9491e844d64b1f4f268"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"d2553c20b872328a80ba3c9f117ee38c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"cfef879e2f7e0007d8c0e411bdac8d8e"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"45a1be0bce9226e497c04d6a3ae790ce"},{url:"log/index.html",revision:"83f030043d39592f61fa70229542cd85"},{url:"messageboard/index.html",revision:"a9b1c241fad3c4128dc5edda0b3cc92a"},{url:"page/2/index.html",revision:"3fadc2c0bc091b1578f197df3017baec"},{url:"pasco/index.html",revision:"642a4bc7ef20a7c3fa19f8248b93571d"},{url:"tags/index.html",revision:"b6cbe3362d7818feb830da71ebca6a2e"},{url:"tags/pasco/index.html",revision:"65a5cc830cc624e92075bb347a5d0bfb"},{url:"tags/secret/index.html",revision:"9ea542185fcd07b3e798496df343158d"},{url:"tags/YOLO/index.html",revision:"522c369cc1d8f3ca785a3da3b4ffdd0c"},{url:"tags/超级棒棒糖/index.html",revision:"7ec756e73dfda81bb64ecd5572b5bab7"},{url:"tags/题解/index.html",revision:"d6dc51ab5de9bb69fe7d8c1cd3d70237"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
