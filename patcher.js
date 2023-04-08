// Vencord acc874c
// Standalone: true
// Platform: Universal
"use strict";var nr=Object.create;var De=Object.defineProperty;var rr=Object.getOwnPropertyDescriptor;var tr=Object.getOwnPropertyNames;var ir=Object.getPrototypeOf,ar=Object.prototype.hasOwnProperty;var I=(e,n)=>()=>(e&&(n=e(e=0)),n);var Xe=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of tr(n))!ar.call(e,i)&&i!==r&&De(e,i,{get:()=>n[i],enumerable:!(t=rr(n,i))||t.enumerable});return e};var Re=(e,n,r)=>(r=e!=null?nr(ir(e)):{},Xe(n||!e||!e.__esModule?De(r,"default",{value:e,enumerable:!0}):r,e)),Je=e=>Xe(De({},"__esModule",{value:!0}),e);var f=I(()=>{"use strict"});var ue,ze=I(()=>{f();ue="acc874c"});var Y,ke=I(()=>{f();Y="Vendicated/Vencord"});var $e,en=I(()=>{"use strict";f();ze();ke();$e=`Vencord/${ue}${Y?` (https://github.com/${Y})`:""}`});function or(e){let n={};for(let r in e)n[r]=e[r],n[e[r]]=r;return Object.freeze(n)}var y,Oe=I(()=>{"use strict";f();y=or({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function Q(e,n={}){return new Promise((r,t)=>{nn.default.get(e,n,i=>{let{statusCode:a,statusMessage:s,headers:c}=i;if(a>=400)return void t(`${a}: ${s} - ${e}`);if(a>=300)return void r(Q(c.location,n));let o=[];i.on("error",t),i.on("data",u=>o.push(u)),i.once("end",()=>r(Buffer.concat(o)))})})}var nn,Ge=I(()=>{"use strict";f();nn=Re(require("https"))});async function on(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js","renderer.css"].map(n=>new Promise(r=>{let t=(0,tn.createReadStream)((0,an.join)(__dirname,n)),i=(0,rn.createHash)("sha1",{encoding:"hex"});t.once("end",()=>{i.end(),e[n]=i.read(),r()}),t.pipe(i)}))),e}function X(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var rn,tn,an,sn=I(()=>{"use strict";f();rn=require("crypto"),tn=require("fs"),an=require("path")});var lr={};async function fn(e){return Q(sr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":$e}})}async function cr(){if(!await ln())return[];let n=await fn(`/compare/${ue}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function ln(){let e=await fn("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===ue?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{ur.some(a=>t.startsWith(a))&&Pe.push([t,i])}),!0)}async function fr(){return await Promise.all(Pe.map(async([e,n])=>(0,cn.writeFile)((0,un.join)(__dirname,e),await Q(n)))),Pe=[],!0}var J,cn,un,sr,Pe,ur,hn=I(()=>{"use strict";f();en();Oe();J=require("electron"),cn=require("fs/promises"),un=require("path");ze();ke();Ge();sn();sr=`https://api.github.com/repos/${Y}`,Pe=[];ur=["patcher.js","preload.js","renderer.js","renderer.css"];J.ipcMain.handle(y.GET_HASHES,X(on));J.ipcMain.handle(y.GET_REPO,X(()=>`https://github.com/${Y}`));J.ipcMain.handle(y.GET_UPDATES,X(cr));J.ipcMain.handle(y.UPDATE,X(ln));J.ipcMain.handle(y.BUILD,X(fr))});var pn=I(()=>{"use strict";f();Promise.resolve().then(()=>hn())});function vn(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}var gn=I(()=>{"use strict";f()});var fe,mn=I(()=>{"use strict";f();fe=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var dn,In=I(()=>{f();dn="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K"});var yn,$,Ne,le,ee,Ue,Cn,me,he=I(()=>{"use strict";f();yn=require("electron"),$=require("path"),Ne=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,$.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,$.join)(yn.app.getPath("userData"),"..","Vencord")),le=(0,$.join)(Ne,"settings"),ee=(0,$.join)(le,"quickCss.css"),Ue=(0,$.join)(le,"settings.json"),Cn=["https:","http:","steam:","spotify:"],me=process.argv.includes("--vanilla")});function wn(){return(0,M.readFile)(ee,"utf-8").catch(()=>"")}function xn(){try{return(0,ne.readFileSync)(Ue,"utf-8")}catch{return"{}"}}function de(){try{return JSON.parse(xn())}catch{return{}}}function Sn(e){(0,M.open)(ee,"a+").then(n=>{n.close(),(0,ne.watch)(ee,{persistent:!1},vn(async()=>{e.webContents.postMessage(y.QUICK_CSS_UPDATE,await wn())},50))})}var A,ne,M,An,hr,pr,Ve=I(()=>{"use strict";f();pn();gn();Oe();mn();A=require("electron"),ne=require("fs"),M=require("fs/promises"),An=require("path");In();he();(0,ne.mkdirSync)(le,{recursive:!0});A.ipcMain.handle(y.OPEN_QUICKCSS,()=>A.shell.openPath(ee));A.ipcMain.handle(y.OPEN_EXTERNAL,(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!Cn.includes(r))throw"Disallowed protocol.";A.shell.openExternal(n)});hr=new fe,pr=new fe;A.ipcMain.handle(y.GET_QUICK_CSS,()=>wn());A.ipcMain.handle(y.SET_QUICK_CSS,(e,n)=>hr.push(()=>(0,M.writeFile)(ee,n)));A.ipcMain.handle(y.GET_SETTINGS_DIR,()=>le);A.ipcMain.on(y.GET_SETTINGS,e=>e.returnValue=xn());A.ipcMain.handle(y.SET_SETTINGS,(e,n)=>{pr.push(()=>(0,M.writeFile)(Ue,n))});A.ipcMain.handle(y.OPEN_MONACO_EDITOR,async()=>{await new A.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,An.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${dn}`)})});function bn(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var Hn=I(()=>{"use strict";f()});var Ur={};function Pr(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function Yn(){try{let e=(0,x.dirname)(process.execPath),n=(0,x.basename)(e),r=(0,x.join)(e,".."),t=(0,S.readdirSync)(r).reduce((c,o)=>o.startsWith("app-")&&Pr(o,c)?o:c,n);if(t===n)return;let i=(0,x.join)(r,t,"resources"),a=(0,x.join)(i,"app.asar"),s=(0,x.join)(i,"_app.asar");if(!(0,S.existsSync)(a)||(0,S.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,S.renameSync)(a,s),(0,S.mkdirSync)(a),(0,S.writeFileSync)((0,x.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,S.writeFileSync)((0,x.join)(a,"index.js"),`require(${JSON.stringify((0,x.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function Nr(){try{let e=(0,x.join)(require.main.filename,"..","autoStart","win32.js"),{update:n}=require(e);require.cache[e].exports.update=function(){n.apply(this,arguments),Yn()}}catch{let{quitAndInstall:e}=F.autoUpdater;F.autoUpdater.quitAndInstall=function(){Yn(),e.call(this)}}}var F,S,x,qn,Qn=I(()=>{"use strict";f();F=require("electron"),S=require("fs"),x=require("path"),{setAppUserModelId:qn}=F.app;F.app.setAppUserModelId=function(e){F.app.setAppUserModelId=qn,qn.call(this,e),Nr()}});var Lr={};var z,L,Vr,Wr,Ke,_r,Xn=I(()=>{"use strict";f();Hn();z=Re(require("electron")),L=require("path");Ve();he();console.log("[Vencord] Starting up...");Vr=require.main.filename,Wr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Ke=(0,L.join)((0,L.dirname)(Vr),"..",Wr),_r=require((0,L.join)(Ke,"package.json"));require.main.filename=(0,L.join)(Ke,_r.main);z.app.setAppPath(Ke);if(me)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=de();if(process.platform==="win32"&&(Qn(),e.winCtrlQ)){let t=z.Menu.buildFromTemplate;z.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:a}=i[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>z.app.quit()})}return t.call(this,i)}}class n extends z.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let a=i.webPreferences.preload;i.webPreferences.preload=(0,L.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),process.env.DISCORD_PRELOAD=a,super(i),Sn(this)}else super(i)}}Object.assign(n,z.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...z.default,BrowserWindow:n},bn(global,"appSettings",t=>t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)),process.env.DATA_DIR=(0,L.join)(z.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});f();var K=require("electron"),Jn=require("path");Ve();he();f();var Fn=require("electron");f();var Dn=require("module"),vr=(0,Dn.createRequire)("/"),ye,gr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ye=vr("worker_threads").Worker}catch{}var mr=ye?function(e,n,r,t,i){var a=!1,s=new ye(e+gr,{eval:!0}).on("error",function(c){return i(c,null)}).on("message",function(c){return i(null,c)}).on("exit",function(c){c&&!a&&i(new Error("exited with code "+c),null)});return s.postMessage(r,t),s.terminate=function(){return a=!0,ye.prototype.terminate.call(s)},s}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},C=Uint8Array,_=Uint16Array,Le=Uint32Array,je=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Be=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rn=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zn=function(e,n){for(var r=new _(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new Le(r[30]),t=1;t<30;++t)for(var a=r[t];a<r[t+1];++a)i[a]=a-r[t]<<5|t;return[r,i]},kn=zn(je,2),Me=kn[0],dr=kn[1];Me[28]=258,dr[258]=28;var On=zn(Be,0),Gn=On[0],Et=On[1],we=new _(32768);for(l=0;l<32768;++l)P=(l&43690)>>>1|(l&21845)<<1,P=(P&52428)>>>2|(P&13107)<<2,P=(P&61680)>>>4|(P&3855)<<4,we[l]=((P&65280)>>>8|(P&255)<<8)>>>1;var P,l,re=function(e,n,r){for(var t=e.length,i=0,a=new _(n);i<t;++i)e[i]&&++a[e[i]-1];var s=new _(n);for(i=0;i<n;++i)s[i]=s[i-1]+a[i-1]<<1;var c;if(r){c=new _(1<<n);var o=15-n;for(i=0;i<t;++i)if(e[i])for(var u=i<<4|e[i],h=n-e[i],g=s[e[i]-1]++<<h,D=g|(1<<h)-1;g<=D;++g)c[we[g]>>>o]=u}else for(c=new _(t),i=0;i<t;++i)e[i]&&(c[i]=we[s[e[i]-1]++]>>>15-e[i]);return c},pe=new C(288);for(l=0;l<144;++l)pe[l]=8;var l;for(l=144;l<256;++l)pe[l]=9;var l;for(l=256;l<280;++l)pe[l]=7;var l;for(l=280;l<288;++l)pe[l]=8;var l,Pn=new C(32);for(l=0;l<32;++l)Pn[l]=5;var l;var Nn=re(pe,9,1);var Un=re(Pn,5,1),Ce=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},E=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},Ae=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Vn=function(e){return(e+7)/8|0},xe=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?_:e.BYTES_PER_ELEMENT==4?Le:C)(r-n);return t.set(e.subarray(n,r)),t};var Wn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(e,n,r){var t=new Error(n||Wn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,w),!r)throw t;return t},_n=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new C(0);var i=!n||r,a=!r||r.i;r||(r={}),n||(n=new C(t*3));var s=function(qe){var Ye=n.length;if(qe>Ye){var Qe=new C(Math.max(Ye*2,qe));Qe.set(n),n=Qe}},c=r.f||0,o=r.p||0,u=r.b||0,h=r.l,g=r.d,D=r.m,N=r.n,ie=t*8;do{if(!h){c=E(e,o,1);var j=E(e,o+1,3);if(o+=3,j)if(j==1)h=Nn,g=Un,D=9,N=5;else if(j==2){var V=E(e,o,31)+257,Z=E(e,o+10,15)+4,ae=V+E(e,o+5,31)+1;o+=14;for(var B=new C(ae),oe=new C(19),d=0;d<Z;++d)oe[Rn[d]]=E(e,o+d*3,7);o+=Z*3;for(var G=Ce(oe),ve=(1<<G)-1,b=re(oe,G,1),d=0;d<ae;){var se=b[E(e,o,ve)];o+=se&15;var m=se>>>4;if(m<16)B[d++]=m;else{var H=0,ge=0;for(m==16?(ge=3+E(e,o,3),o+=2,H=B[d-1]):m==17?(ge=3+E(e,o,7),o+=3):m==18&&(ge=11+E(e,o,127),o+=7);ge--;)B[d++]=H}}var Ze=B.subarray(0,V),W=B.subarray(V);D=Ce(Ze),N=Ce(W),h=re(Ze,D,1),g=re(W,N,1)}else w(1);else{var m=Vn(o)+4,T=e[m-4]|e[m-3]<<8,U=m+T;if(U>t){a&&w(0);break}i&&s(u+T),n.set(e.subarray(m,U),u),r.b=u+=T,r.p=o=U*8,r.f=c;continue}if(o>ie){a&&w(0);break}}i&&s(u+131072);for(var $n=(1<<D)-1,er=(1<<N)-1,Se=o;;Se=o){var H=h[Ae(e,o)&$n],q=H>>>4;if(o+=H&15,o>ie){a&&w(0);break}if(H||w(2),q<256)n[u++]=q;else if(q==256){Se=o,h=null;break}else{var be=q-254;if(q>264){var d=q-257,ce=je[d];be=E(e,o,(1<<ce)-1)+Me[d],o+=ce}var Te=g[Ae(e,o)&er],Ee=Te>>>4;Te||w(3),o+=Te&15;var W=Gn[Ee];if(Ee>3){var ce=Be[Ee];W+=Ae(e,o)&(1<<ce)-1,o+=ce}if(o>ie){a&&w(0);break}i&&s(u+131072);for(var He=u+be;u<He;u+=4)n[u]=n[u-W],n[u+1]=n[u+1-W],n[u+2]=n[u+2-W],n[u+3]=n[u+3-W];u=He}}r.l=h,r.p=Se,r.b=u,r.f=c,h&&(c=1,r.m=D,r.d=g,r.n=N)}while(!c);return u==n.length?n:xe(n,0,u)};var Ir=new C(0);var yr=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},Tn=function(e,n,r){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var c=t[s],o=a[s];if(typeof c=="function"){n+=";"+o+"=";var u=c.toString();if(c.prototype)if(u.indexOf("[native code]")!=-1){var h=u.indexOf(" ",8)+1;n+=u.slice(h,u.indexOf("(",h))}else{n+=u;for(var g in c.prototype)n+=";"+o+".prototype."+g+"="+c.prototype[g].toString()}else n+=u}else r[o]=c}return[n,r]},Ie=[],Cr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},Ar=function(e,n,r,t){var i;if(!Ie[r]){for(var a="",s={},c=e.length-1,o=0;o<c;++o)i=Tn(e[o],a,s),a=i[0],s=i[1];Ie[r]=Tn(e[c],a,s)}var u=yr({},Ie[r][1]);return mr(Ie[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,u,Cr(u),t)},wr=function(){return[C,_,Le,je,Be,Rn,Me,Gn,Nn,Un,we,Wn,re,Ce,E,Ae,Vn,xe,w,_n,Fe,Ln,jn]};var Ln=function(e){return postMessage(e,[e.buffer])},jn=function(e){return e&&e.size&&new C(e.size)},xr=function(e,n,r,t,i,a){var s=Ar(r,t,i,function(c,o){s.terminate(),a(c,o)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var k=function(e,n){return e[n]|e[n+1]<<8},R=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},We=function(e,n){return R(e,n)+R(e,n+4)*4294967296};function Sr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&w(7),xr(e,n,[wr],function(t){return Ln(Fe(t.data[0],jn(t.data[1])))},1,r)}function Fe(e,n){return _n(e,n)}var _e=typeof TextDecoder<"u"&&new TextDecoder,Tr=0;try{_e.decode(Ir,{stream:!0}),Tr=1}catch{}var Er=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,xe(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function Dr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(_e)return _e.decode(e);var i=Er(e),a=i[0],s=i[1];return s.length&&w(8),a}}var Rr=function(e,n){return n+30+k(e,n+26)+k(e,n+28)},zr=function(e,n,r){var t=k(e,n+28),i=Dr(e.subarray(n+46,n+46+t),!(k(e,n+8)&2048)),a=n+46+t,s=R(e,n+20),c=r&&s==4294967295?kr(e,a):[s,R(e,n+24),R(e,n+42)],o=c[0],u=c[1],h=c[2];return[k(e,n+10),o,u,i,a+k(e,n+30)+k(e,n+32),h]},kr=function(e,n){for(;k(e,n)!=1;n+=4+k(e,n+2));return[We(e,n+12),We(e,n+4),We(e,n+20)]};var En=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Bn(e,n,r){r||(r=n,n={}),typeof r!="function"&&w(7);var t=[],i=function(){for(var m=0;m<t.length;++m)t[m]()},a={},s=function(m,T){En(function(){r(m,T)})};En(function(){s=r});for(var c=e.length-22;R(e,c)!=101010256;--c)if(!c||e.length-c>65558)return s(w(13,0,1),null),i;var o=k(e,c+8);if(o){var u=o,h=R(e,c+16),g=h==4294967295||u==65535;if(g){var D=R(e,c-12);g=R(e,D)==101075792,g&&(u=o=R(e,D+32),h=R(e,D+48))}for(var N=n&&n.filter,ie=function(m){var T=zr(e,h,g),U=T[0],V=T[1],Z=T[2],ae=T[3],B=T[4],oe=T[5],d=Rr(e,oe);h=B;var G=function(b,se){b?(i(),s(b,null)):(se&&(a[ae]=se),--o||s(null,a))};if(!N||N({name:ae,size:V,originalSize:Z,compression:U}))if(!U)G(null,xe(e,d,d+V));else if(U==8){var ve=e.subarray(d,d+V);if(V<32e4)try{G(null,Fe(ve,new C(Z)))}catch(b){G(b,null)}else t.push(Sr(ve,{size:Z},G))}else G(w(14,"unknown compression type "+U,1),null);else G(null,null)},j=0;j<u;++j)ie(j)}else s(null,{});return i}var Kn=require("fs"),O=require("fs/promises"),te=require("path");he();f();function Mn(e){function n(s,c,o,u){let h=0;return h+=s<<0,h+=c<<8,h+=o<<16,h+=u<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=n(e[8],e[9],e[10],e[11]),c=n(e[12],e[13],e[14],e[15]),o=16+s+c;return e.subarray(o,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Ge();var Or=(0,te.join)(Ne,"ExtensionCache");async function Gr(e,n){return await(0,O.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{Bn(e,(i,a)=>{if(i)return void t(i);Promise.all(Object.keys(a).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,O.mkdir)((0,te.join)(n,s),{recursive:!0});let c=s.split("/"),o=c.pop(),u=c.join("/"),h=(0,te.join)(n,u);u&&await(0,O.mkdir)(h,{recursive:!0}),await(0,O.writeFile)((0,te.join)(h,o),a[s])})).then(()=>r()).catch(s=>{(0,O.rm)(n,{recursive:!0,force:!0}),t(s)})})})}async function Zn(e){let n=(0,te.join)(Or,`${e}`);try{await(0,O.access)(n,Kn.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Q(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Gr(Mn(i),n).catch(console.error)}Fn.session.defaultSession.loadExtension(n)}me||K.app.whenReady().then(()=>{K.protocol.registerFileProtocol("vencord",({url:t},i)=>{let a=t.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":case"main.js.map":i((0,Jn.join)(__dirname,a));break;default:i({statusCode:403})}});try{de().enableReactDevtools&&Zn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=t=>{let i={};return t.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=c)}),i},n=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let a=e(t[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[n(a)]}}K.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},a)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:t})}),K.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Xn();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
