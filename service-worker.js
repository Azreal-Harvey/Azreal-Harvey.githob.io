if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let a={};const b=e=>c(e,f),n={module:{uri:f},exports:a,require:b};i[f]=Promise.all(d.map((e=>n[e]||b(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/05/23/个人介绍/index.html",revision:"da678fce160dfd2076e8f92fe132454a"},{url:"2023/05/26/加密测试/index.html",revision:"4e349473180b9f6f5b0fa1bb60de6c65"},{url:"2023/05/26/网站运维备忘录/index.html",revision:"98dabaa2e9c098d8df74210968ef4613"},{url:"2023/05/27/pasco-议程记录/index.html",revision:"6ed0a23f9c2e77accffc1a096a9a7895"},{url:"2023/05/29/8086第一次作业/index.html",revision:"3dee3d8b7382612bcc1060917d6b84c4"},{url:"2023/05/29/8086第一次作业/字母.png",revision:"d82db52a2425812c7865347620b73e08"},{url:"2023/05/29/8086第一次作业/运行前.png",revision:"8ad00ca04891c21b1413875fb07a220b"},{url:"2023/05/29/8086第一次作业/运行后.png",revision:"36307f008c7df9a342c0ab9d1e5347fb"},{url:"2023/05/29/8086第五章总结/index.html",revision:"966f191d0350e4345bd8d26291953b14"},{url:"2023/05/30/8086第二次作业/1.png",revision:"f97a1a5450828ff70cd1c96cf2b65ee8"},{url:"2023/05/30/8086第二次作业/2.1.png",revision:"8c1d90f44ecf04353daeeeb6b0de8012"},{url:"2023/05/30/8086第二次作业/2.2.png",revision:"c6b667c080574a63cb6a0fb36fd59a9c"},{url:"2023/05/30/8086第二次作业/2.3.png",revision:"85a8e4a3ad46b173d6ceebadab4e866b"},{url:"2023/05/30/8086第二次作业/3.1.png",revision:"e4e078fbcbca32c83ed124748e16f61e"},{url:"2023/05/30/8086第二次作业/3.2.png",revision:"c043ce86aafc588ad6ba8090ffd99d99"},{url:"2023/05/30/8086第二次作业/index.html",revision:"d2b5492afd444c0b7ac683767becd79c"},{url:"2023/05/31/测试推送/index.html",revision:"7d565018d13b00d653e87f7bba31ee5a"},{url:"2023/05/31/网站使用指南/index.html",revision:"b2f3f68b469a972e89fb335c104e81ec"},{url:"2023/06/03/codeforces-round-871总结/index.html",revision:"fb928d964397115ed06721495fdb8be2"},{url:"2023/06/07/8086第三次作业/index.html",revision:"faeeaae8f80a77edee075c479ea4645d"},{url:"2023/06/07/8086第三次作业/低电平.png",revision:"5e6b1d306b4c5325b03693b9cc8b65a3"},{url:"2023/06/07/8086第三次作业/冒泡.png",revision:"1b25677eed89b90b691b0c1e0b40dd14"},{url:"2023/06/07/8086第三次作业/排名.png",revision:"fc975b0e5b2e7fa48b1b6622a5ec78e5"},{url:"2023/06/07/8086第三次作业/高电平.png",revision:"00fd57484b533ebccaf98dc1203ed9b7"},{url:"2023/06/10/YOLO/index.html",revision:"6834fa22d8f8d9973eca4fc3f13d1f0f"},{url:"2023/06/18/更新日志/index.html",revision:"824c6e51007cca9f1b033c195c43182b"},{url:"2023/06/18/随便写点/index.html",revision:"6642dd5b554cc5cb77fde36fcf277b7d"},{url:"2023/07/08/vehicle-perspective-mirror/index.html",revision:"7e3161e8b1f5dc77f4bf521bf8f60f84"},{url:"404.html",revision:"fb58a6a53986ce1822343b8152d47ee8"},{url:"about/index.html",revision:"ec6e30af8e332dd302d6c1b3873be0af"},{url:"archives/2023/05/index.html",revision:"ac40ca3b8fce6353be9ac5e520ba0f18"},{url:"archives/2023/06/index.html",revision:"ca1c5f602411b3b475af5f37fea0bce2"},{url:"archives/2023/07/index.html",revision:"3e8e86c68af8869a4277f0c441201a18"},{url:"archives/2023/index.html",revision:"da9fc73e4bfcfd26bf1cb6ddf04d3ef5"},{url:"archives/2023/page/2/index.html",revision:"a6f7fffba0f0af4a3270cd663c8fe31e"},{url:"archives/index.html",revision:"aa56547dd6c97977dd5684d36c6ea968"},{url:"archives/page/2/index.html",revision:"c9e6df4b6cf16fdb17d80989ad0d1115"},{url:"categories/index.html",revision:"a5a07f18daf41986cfb3239994e8d976"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"d2553c20b872328a80ba3c9f117ee38c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"9d2b96c037380977e42f03a52721ac5f"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"25f3261b5c92691b45c7e14df89b46b3"},{url:"log/index.html",revision:"61891848012cc5a2fd06c018a0fccf5e"},{url:"messageboard/index.html",revision:"6155ce9ec056b6fb92c9ca83abfa3f2f"},{url:"page/2/index.html",revision:"e371e2da6ed070cbe6f015250ece793f"},{url:"pasco/index.html",revision:"13c185e1fa8c7151de26aa98980cc3d9"},{url:"tags/index.html",revision:"beaab51560d6655b7f743f1d5c9850fe"},{url:"tags/pasco/index.html",revision:"1d9c09a28b09daec7d0799813e4f139e"},{url:"tags/secret/index.html",revision:"94623a273b9e80b717b3e5809cbeb892"},{url:"tags/YOLO/index.html",revision:"6c05dcb2d19dbf912d92d39bfccc3622"},{url:"tags/超级棒棒糖/index.html",revision:"9b67458f858794214eb6134c81df9bd0"},{url:"tags/题解/index.html",revision:"107eb8b6fb2b0ea319d594bc7d041f24"},{url:"webpushr-sw.js",revision:"f6f7ff6d6b7b7b652cb92a25eb2cef5b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
