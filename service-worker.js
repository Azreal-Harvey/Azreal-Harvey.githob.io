if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const f=e=>d(e,a),b={module:{uri:a},exports:n,require:f};i[a]=Promise.all(c.map((e=>b[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/05/23/个人介绍/index.html",revision:"2cc8ba1188d9b4843f14a5863e4f0a65"},{url:"2023/05/26/加密测试/index.html",revision:"085806e7f9099e2960548757f811c0e6"},{url:"2023/05/26/网站运维备忘录/index.html",revision:"beff6398c60f88c7e42a8e47af49a3b7"},{url:"2023/05/27/pasco-议程记录/index.html",revision:"3b7f52a7596dc61fb050fd512555ec47"},{url:"2023/05/29/8086第一次作业/index.html",revision:"0e72deffdae1408c61594bf25246ed53"},{url:"2023/05/29/8086第一次作业/字母.png",revision:"d82db52a2425812c7865347620b73e08"},{url:"2023/05/29/8086第一次作业/运行前.png",revision:"8ad00ca04891c21b1413875fb07a220b"},{url:"2023/05/29/8086第一次作业/运行后.png",revision:"36307f008c7df9a342c0ab9d1e5347fb"},{url:"2023/05/29/8086第五章总结/index.html",revision:"2777776c60f51a58e6c38b8987138cce"},{url:"2023/05/30/8086第二次作业/1.png",revision:"f97a1a5450828ff70cd1c96cf2b65ee8"},{url:"2023/05/30/8086第二次作业/2.1.png",revision:"8c1d90f44ecf04353daeeeb6b0de8012"},{url:"2023/05/30/8086第二次作业/2.2.png",revision:"c6b667c080574a63cb6a0fb36fd59a9c"},{url:"2023/05/30/8086第二次作业/2.3.png",revision:"85a8e4a3ad46b173d6ceebadab4e866b"},{url:"2023/05/30/8086第二次作业/3.1.png",revision:"e4e078fbcbca32c83ed124748e16f61e"},{url:"2023/05/30/8086第二次作业/3.2.png",revision:"c043ce86aafc588ad6ba8090ffd99d99"},{url:"2023/05/30/8086第二次作业/index.html",revision:"f2f7ca648e30e672e1afe5985babf9e1"},{url:"2023/05/31/测试推送/index.html",revision:"d3c6e9c602ce046384cc2036ac1b564e"},{url:"2023/05/31/网站使用指南/index.html",revision:"d35920e4810d6734746104bf28caadc3"},{url:"2023/06/03/codeforces-round-871总结/index.html",revision:"65e4363a1e1a3acb00fdf14e6da169e7"},{url:"2023/06/07/8086第三次作业/index.html",revision:"40cd36296910e62ef938bc5857f6c638"},{url:"2023/06/07/8086第三次作业/低电平.png",revision:"5e6b1d306b4c5325b03693b9cc8b65a3"},{url:"2023/06/07/8086第三次作业/冒泡.png",revision:"1b25677eed89b90b691b0c1e0b40dd14"},{url:"2023/06/07/8086第三次作业/排名.png",revision:"fc975b0e5b2e7fa48b1b6622a5ec78e5"},{url:"2023/06/07/8086第三次作业/高电平.png",revision:"00fd57484b533ebccaf98dc1203ed9b7"},{url:"2023/06/10/YOLO/index.html",revision:"49a4137028b635df274f2d0287270cb0"},{url:"2023/06/18/更新日志/index.html",revision:"21a24ce6eb528c90dc5db99f0d645398"},{url:"2023/06/18/随便写点/index.html",revision:"b755a635f54e7d12d2784bf3e93f90ae"},{url:"2023/07/08/vehicle-perspective-mirror/index.html",revision:"53d9557b21f4269344a4b315b1c90d13"},{url:"404.html",revision:"18ab1aa6fcc6a85fc3fda66c5b91182d"},{url:"about/index.html",revision:"9a9a845d046d1781da210c2d6a8d72ad"},{url:"archives/2023/05/index.html",revision:"7fc6082656b7ec6d0033e1d3f8bd5e56"},{url:"archives/2023/06/index.html",revision:"3dffabed341d3b6ca02d37f98603035f"},{url:"archives/2023/07/index.html",revision:"35377a179099ab03a6f6d9caa86089fb"},{url:"archives/2023/index.html",revision:"e4dbe87ca11831c96a7f6670911fdf81"},{url:"archives/2023/page/2/index.html",revision:"0ad85a3644e6bcd3da7163be69e189d5"},{url:"archives/index.html",revision:"656bdf6b24198b5c40bd8ece630fb2af"},{url:"archives/page/2/index.html",revision:"c4cca38a107c6a76e4b0f036d7deaaf3"},{url:"categories/index.html",revision:"5276db37481d0e941437959d0a8980a6"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"d2553c20b872328a80ba3c9f117ee38c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"a3de472b4428b8f1e7f4e2a48027d2de"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"75914f5ed3ff2157e7215954857fff1e"},{url:"log/index.html",revision:"a4780d7227ad391af1146efe238108ba"},{url:"messageboard/index.html",revision:"dd78b8242e449c64707835490b76d181"},{url:"page/2/index.html",revision:"3dc6944e53d58eb0b14e92507b5abbc2"},{url:"pasco/index.html",revision:"e8fbf69d847314112ea8692aa310be8e"},{url:"tags/index.html",revision:"bcd582b03462d1cf114cccfbc2f560a3"},{url:"tags/pasco/index.html",revision:"435bd092844644cd3beef8f43514289f"},{url:"tags/secret/index.html",revision:"f95c85bf9b02620a6ef2fdeb6dc89837"},{url:"tags/YOLO/index.html",revision:"bed14d81063b427ced48bb2665401acc"},{url:"tags/超级棒棒糖/index.html",revision:"d220a35b4c22c231fadc0ca1852871f2"},{url:"tags/题解/index.html",revision:"3f8c016ce90a8755458ad9767122a6a4"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
