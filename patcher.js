// Vencord 645749b
// Standalone: true
// Platform: Universal
"use strict";var ir=Object.create;var Ne=Object.defineProperty;var ar=Object.getOwnPropertyDescriptor;var or=Object.getOwnPropertyNames;var sr=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty;var v=(e,n)=>()=>(e&&(n=e(e=0)),n);var Qe=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of or(n))!cr.call(e,i)&&i!==r&&Ne(e,i,{get:()=>n[i],enumerable:!(t=ar(n,i))||t.enumerable});return e};var ze=(e,n,r)=>(r=e!=null?ir(sr(e)):{},Qe(n||!e||!e.__esModule?Ne(r,"default",{value:e,enumerable:!0}):r,e)),$e=e=>Qe(Ne({},"__esModule",{value:!0}),e);var l=v(()=>{"use strict"});var oe,Oe=v(()=>{l();oe="645749b"});var Y,Ge=v(()=>{l();Y="Vendicated/Vencord"});var en,nn=v(()=>{"use strict";l();Oe();Ge();en=`Vencord/${oe}${Y?` (https://github.com/${Y})`:""}`});var Ie=v(()=>{"use strict";l()});function q(e,n={}){return new Promise((r,t)=>{rn.default.get(e,n,i=>{let{statusCode:a,statusMessage:s,headers:c}=i;if(a>=400)return void t(`${a}: ${s} - ${e}`);if(a>=300)return void r(q(c.location,n));let o=[];i.on("error",t),i.on("data",u=>o.push(u)),i.once("end",()=>r(Buffer.concat(o)))})})}var rn,ke=v(()=>{"use strict";l();rn=ze(require("https"))});function se(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var tn,an=v(()=>{"use strict";l();tn=["patcher.js","preload.js","renderer.js","renderer.css"]});var hr={};async function un(e){return q(ur+e,{headers:{Accept:"application/vnd.github+json","User-Agent":en}})}async function lr(){if(!await ln())return[];let n=await un(`/compare/${oe}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function ln(){let e=await un("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===oe?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{tn.some(a=>t.startsWith(a))&&Pe.push([t,i])}),!0)}async function fr(){return await Promise.all(Pe.map(async([e,n])=>(0,sn.writeFile)((0,cn.join)(__dirname,e),await q(n)))),Pe=[],!0}var ce,sn,cn,ur,Pe,fn=v(()=>{"use strict";l();nn();Ie();ce=require("electron"),sn=require("fs/promises"),cn=require("path");Oe();Ge();ke();an();ur=`https://api.github.com/repos/${Y}`,Pe=[];ce.ipcMain.handle("VencordGetRepo",se(()=>`https://github.com/${Y}`));ce.ipcMain.handle("VencordGetUpdates",se(lr));ce.ipcMain.handle("VencordUpdate",se(ln));ce.ipcMain.handle("VencordBuild",se(fr))});var hn=v(()=>{"use strict";l();Promise.resolve().then(()=>fn())});function vn(e){return new Promise((n,r)=>{let t=(0,pn.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?vn(i.headers.location):e)});t.on("error",r),t.end()})}var le,gn,pn,ue,gr,mn=v(()=>{"use strict";l();Ie();le=require("electron"),gn=require("fs/promises"),pn=require("https"),ue=require("path"),gr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;le.ipcMain.handle("VencordOIAResolveRedirect",async(e,n)=>gr.test(n)?vn(n):n);le.ipcMain.handle("VencordVMReadRecording",async(e,n)=>{n=(0,ue.normalize)(n);let r=(0,ue.basename)(n),t=(0,ue.normalize)(le.app.getPath("userData")+"/");if(console.log(r,t,n),r!=="recording.ogg"||!n.startsWith(t))return null;try{let i=await(0,gn.readFile)(n);return new Uint8Array(i.buffer)}catch{return null}})});function In(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}var Cn=v(()=>{"use strict";l()});var fe,An=v(()=>{"use strict";l();fe=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var dn,yn=v(()=>{l();dn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});var wn,X,Ue,he,J,Ve,xn,Ce,ge=v(()=>{"use strict";l();wn=require("electron"),X=require("path"),Ue=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,X.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,X.join)(wn.app.getPath("userData"),"..","Vencord")),he=(0,X.join)(Ue,"settings"),J=(0,X.join)(he,"quickCss.css"),Ve=(0,X.join)(he,"settings.json"),xn=["https:","http:","steam:","spotify:","com.epicgames.launcher:"],Ce=process.argv.includes("--vanilla")});function Tn(){return(0,M.readFile)(J,"utf-8").catch(()=>"")}function Dn(){try{return(0,Q.readFileSync)(Ve,"utf-8")}catch{return"{}"}}function Ae(){try{return JSON.parse(Dn())}catch{return{}}}function En(e){(0,M.open)(J,"a+").then(n=>{n.close(),(0,Q.watch)(J,{persistent:!1},In(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Tn())},50))})}var d,Q,M,Sn,pr,vr,We=v(()=>{"use strict";l();hn();mn();Cn();Ie();An();d=require("electron"),Q=require("fs"),M=require("fs/promises"),Sn=require("path");yn();ge();(0,Q.mkdirSync)(he,{recursive:!0});d.ipcMain.handle("VencordOpenQuickCss",()=>d.shell.openPath(J));d.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!xn.includes(r))throw"Disallowed protocol.";d.shell.openExternal(n)});pr=new fe,vr=new fe;d.ipcMain.handle("VencordGetQuickCss",()=>Tn());d.ipcMain.handle("VencordSetQuickCss",(e,n)=>pr.push(()=>(0,M.writeFile)(J,n)));d.ipcMain.handle("VencordGetSettingsDir",()=>he);d.ipcMain.on("VencordGetSettings",e=>e.returnValue=Dn());d.ipcMain.handle("VencordSetSettings",(e,n)=>{vr.push(()=>(0,M.writeFile)(Ve,n))});d.ipcMain.handle("VencordOpenMonacoEditor",async()=>{await new d.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,Sn.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${dn}`)})});function qn(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var Xn=v(()=>{"use strict";l()});var Wr={};function Ur(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function Qn(){try{let e=(0,w.dirname)(process.execPath),n=(0,w.basename)(e),r=(0,w.join)(e,".."),t=(0,x.readdirSync)(r).reduce((c,o)=>o.startsWith("app-")&&Ur(o,c)?o:c,n);if(t===n)return;let i=(0,w.join)(r,t,"resources"),a=(0,w.join)(i,"app.asar"),s=(0,w.join)(i,"_app.asar");if(!(0,x.existsSync)(a)||(0,x.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,x.renameSync)(a,s),(0,x.mkdirSync)(a),(0,x.writeFileSync)((0,w.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,x.writeFileSync)((0,w.join)(a,"index.js"),`require(${JSON.stringify((0,w.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function Vr(){try{let e=(0,w.join)(require.main.filename,"..","autoStart","win32.js"),{update:n}=require(e);require.cache[e].exports.update=function(){n.apply(this,arguments),Qn()}}catch{let{quitAndInstall:e}=F.autoUpdater;F.autoUpdater.quitAndInstall=function(){Qn(),e.call(this)}}}var F,x,w,Jn,$n=v(()=>{"use strict";l();F=require("electron"),x=require("fs"),w=require("path"),{setAppUserModelId:Jn}=F.app;F.app.setAppUserModelId=function(e){F.app.setAppUserModelId=Jn,Jn.call(this,e),Vr()}});var Mr={};var R,_,_r,Lr,Be,Zr,er=v(()=>{"use strict";l();Xn();R=ze(require("electron")),_=require("path");We();ge();console.log("[Vencord] Starting up...");_r=require.main.filename,Lr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Be=(0,_.join)((0,_.dirname)(_r),"..",Lr),Zr=require((0,_.join)(Be,"package.json"));require.main.filename=(0,_.join)(Be,Zr.main);R.app.setAppPath(Be);if(Ce)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=Ae();if(process.platform==="win32"&&($n(),e.winCtrlQ)){let t=R.Menu.buildFromTemplate;R.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:a}=i[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>R.app.quit()})}return t.call(this,i)}}class n extends R.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let a=i.webPreferences.preload;i.webPreferences.preload=(0,_.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),e.macosTranslucency&&process.platform==="darwin"&&(i.backgroundColor="#00000000",i.vibrancy="sidebar"),process.env.DISCORD_PRELOAD=a,super(i),En(this)}else super(i)}}Object.assign(n,R.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...R.default,BrowserWindow:n},qn(global,"appSettings",t=>{t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(t.set("MIN_WIDTH",0),t.set("MIN_HEIGHT",0)):(t.set("MIN_WIDTH",940),t.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,_.join)(R.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});l();var j=require("electron"),nr=require("path");We();ge();l();var bn=require("electron");l();var zn=require("module"),mr=(0,zn.createRequire)("/"),ye,Ir=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ye=mr("worker_threads").Worker}catch{}var Cr=ye?function(e,n,r,t,i){var a=!1,s=new ye(e+Ir,{eval:!0}).on("error",function(c){return i(c,null)}).on("message",function(c){return i(null,c)}).on("exit",function(c){c&&!a&&i(new Error("exited with code "+c),null)});return s.postMessage(r,t),s.terminate=function(){return a=!0,ye.prototype.terminate.call(s)},s}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},A=Uint8Array,W=Uint16Array,Ze=Uint32Array,Me=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fe=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),On=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gn=function(e,n){for(var r=new W(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new Ze(r[30]),t=1;t<30;++t)for(var a=r[t];a<r[t+1];++a)i[a]=a-r[t]<<5|t;return[r,i]},kn=Gn(Me,2),je=kn[0],Ar=kn[1];je[28]=258,Ar[258]=28;var Pn=Gn(Fe,0),Un=Pn[0],Ot=Pn[1],Se=new W(32768);for(f=0;f<32768;++f)G=(f&43690)>>>1|(f&21845)<<1,G=(G&52428)>>>2|(G&13107)<<2,G=(G&61680)>>>4|(G&3855)<<4,Se[f]=((G&65280)>>>8|(G&255)<<8)>>>1;var G,f,$=function(e,n,r){for(var t=e.length,i=0,a=new W(n);i<t;++i)e[i]&&++a[e[i]-1];var s=new W(n);for(i=0;i<n;++i)s[i]=s[i-1]+a[i-1]<<1;var c;if(r){c=new W(1<<n);var o=15-n;for(i=0;i<t;++i)if(e[i])for(var u=i<<4|e[i],h=n-e[i],m=s[e[i]-1]++<<h,D=m|(1<<h)-1;m<=D;++m)c[Se[m]>>>o]=u}else for(c=new W(t),i=0;i<t;++i)e[i]&&(c[i]=Se[s[e[i]-1]++]>>>15-e[i]);return c},pe=new A(288);for(f=0;f<144;++f)pe[f]=8;var f;for(f=144;f<256;++f)pe[f]=9;var f;for(f=256;f<280;++f)pe[f]=7;var f;for(f=280;f<288;++f)pe[f]=8;var f,Vn=new A(32);for(f=0;f<32;++f)Vn[f]=5;var f;var Wn=$(pe,9,1);var _n=$(Vn,5,1),we=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},T=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},xe=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Ln=function(e){return(e+7)/8|0},Te=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?W:e.BYTES_PER_ELEMENT==4?Ze:A)(r-n);return t.set(e.subarray(n,r)),t};var Zn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,n,r){var t=new Error(n||Zn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,y),!r)throw t;return t},Mn=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new A(0);var i=!n||r,a=!r||r.i;r||(r={}),n||(n=new A(t*3));var s=function(qe){var Xe=n.length;if(qe>Xe){var Je=new A(Math.max(Xe*2,qe));Je.set(n),n=Je}},c=r.f||0,o=r.p||0,u=r.b||0,h=r.l,m=r.d,D=r.m,k=r.n,ne=t*8;do{if(!h){c=T(e,o,1);var L=T(e,o+1,3);if(o+=3,L)if(L==1)h=Wn,m=_n,D=9,k=5;else if(L==2){var U=T(e,o,31)+257,K=T(e,o+10,15)+4,re=U+T(e,o+5,31)+1;o+=14;for(var Z=new A(re),te=new A(19),C=0;C<K;++C)te[On[C]]=T(e,o+C*3,7);o+=K*3;for(var O=we(te),ve=(1<<O)-1,B=$(te,O,1),C=0;C<re;){var ie=B[T(e,o,ve)];o+=ie&15;var I=ie>>>4;if(I<16)Z[C++]=I;else{var b=0,me=0;for(I==16?(me=3+T(e,o,3),o+=2,b=Z[C-1]):I==17?(me=3+T(e,o,7),o+=3):I==18&&(me=11+T(e,o,127),o+=7);me--;)Z[C++]=b}}var be=Z.subarray(0,U),V=Z.subarray(U);D=we(be),k=we(V),h=$(be,D,1),m=$(V,k,1)}else y(1);else{var I=Ln(o)+4,S=e[I-4]|e[I-3]<<8,P=I+S;if(P>t){a&&y(0);break}i&&s(u+S),n.set(e.subarray(I,P),u),r.b=u+=S,r.p=o=P*8,r.f=c;continue}if(o>ne){a&&y(0);break}}i&&s(u+131072);for(var rr=(1<<D)-1,tr=(1<<k)-1,De=o;;De=o){var b=h[xe(e,o)&rr],H=b>>>4;if(o+=b&15,o>ne){a&&y(0);break}if(b||y(2),H<256)n[u++]=H;else if(H==256){De=o,h=null;break}else{var He=H-254;if(H>264){var C=H-257,ae=Me[C];He=T(e,o,(1<<ae)-1)+je[C],o+=ae}var Ee=m[xe(e,o)&tr],Re=Ee>>>4;Ee||y(3),o+=Ee&15;var V=Un[Re];if(Re>3){var ae=Fe[Re];V+=xe(e,o)&(1<<ae)-1,o+=ae}if(o>ne){a&&y(0);break}i&&s(u+131072);for(var Ye=u+He;u<Ye;u+=4)n[u]=n[u-V],n[u+1]=n[u+1-V],n[u+2]=n[u+2-V],n[u+3]=n[u+3-V];u=Ye}}r.l=h,r.p=De,r.b=u,r.f=c,h&&(c=1,r.m=D,r.d=m,r.n=k)}while(!c);return u==n.length?n:Te(n,0,u)};var dr=new A(0);var yr=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},Rn=function(e,n,r){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var c=t[s],o=a[s];if(typeof c=="function"){n+=";"+o+"=";var u=c.toString();if(c.prototype)if(u.indexOf("[native code]")!=-1){var h=u.indexOf(" ",8)+1;n+=u.slice(h,u.indexOf("(",h))}else{n+=u;for(var m in c.prototype)n+=";"+o+".prototype."+m+"="+c.prototype[m].toString()}else n+=u}else r[o]=c}return[n,r]},de=[],wr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},xr=function(e,n,r,t){var i;if(!de[r]){for(var a="",s={},c=e.length-1,o=0;o<c;++o)i=Rn(e[o],a,s),a=i[0],s=i[1];de[r]=Rn(e[c],a,s)}var u=yr({},de[r][1]);return Cr(de[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,u,wr(u),t)},Sr=function(){return[A,W,Ze,Me,Fe,On,je,Un,Wn,_n,Se,Zn,$,we,T,xe,Ln,Te,y,Mn,Ke,Fn,jn]};var Fn=function(e){return postMessage(e,[e.buffer])},jn=function(e){return e&&e.size&&new A(e.size)},Tr=function(e,n,r,t,i,a){var s=xr(r,t,i,function(c,o){s.terminate(),a(c,o)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var N=function(e,n){return e[n]|e[n+1]<<8},E=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},_e=function(e,n){return E(e,n)+E(e,n+4)*4294967296};function Dr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&y(7),Tr(e,n,[Sr],function(t){return Fn(Ke(t.data[0],jn(t.data[1])))},1,r)}function Ke(e,n){return Mn(e,n)}var Le=typeof TextDecoder<"u"&&new TextDecoder,Er=0;try{Le.decode(dr,{stream:!0}),Er=1}catch{}var Rr=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,Te(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function Nr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(Le)return Le.decode(e);var i=Rr(e),a=i[0],s=i[1];return s.length&&y(8),a}}var zr=function(e,n){return n+30+N(e,n+26)+N(e,n+28)},Or=function(e,n,r){var t=N(e,n+28),i=Nr(e.subarray(n+46,n+46+t),!(N(e,n+8)&2048)),a=n+46+t,s=E(e,n+20),c=r&&s==4294967295?Gr(e,a):[s,E(e,n+24),E(e,n+42)],o=c[0],u=c[1],h=c[2];return[N(e,n+10),o,u,i,a+N(e,n+30)+N(e,n+32),h]},Gr=function(e,n){for(;N(e,n)!=1;n+=4+N(e,n+2));return[_e(e,n+12),_e(e,n+4),_e(e,n+20)]};var Nn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Kn(e,n,r){r||(r=n,n={}),typeof r!="function"&&y(7);var t=[],i=function(){for(var I=0;I<t.length;++I)t[I]()},a={},s=function(I,S){Nn(function(){r(I,S)})};Nn(function(){s=r});for(var c=e.length-22;E(e,c)!=101010256;--c)if(!c||e.length-c>65558)return s(y(13,0,1),null),i;var o=N(e,c+8);if(o){var u=o,h=E(e,c+16),m=h==4294967295||u==65535;if(m){var D=E(e,c-12);m=E(e,D)==101075792,m&&(u=o=E(e,D+32),h=E(e,D+48))}for(var k=n&&n.filter,ne=function(I){var S=Or(e,h,m),P=S[0],U=S[1],K=S[2],re=S[3],Z=S[4],te=S[5],C=zr(e,te);h=Z;var O=function(B,ie){B?(i(),s(B,null)):(ie&&(a[re]=ie),--o||s(null,a))};if(!k||k({name:re,size:U,originalSize:K,compression:P}))if(!P)O(null,Te(e,C,C+U));else if(P==8){var ve=e.subarray(C,C+U);if(U<32e4)try{O(null,Ke(ve,new A(K)))}catch(B){O(B,null)}else t.push(Dr(ve,{size:K},O))}else O(y(14,"unknown compression type "+P,1),null);else O(null,null)},L=0;L<u;++L)ne(L)}else s(null,{});return i}var Hn=require("fs"),z=require("fs/promises"),ee=require("path");ge();l();function Bn(e){function n(s,c,o,u){let h=0;return h+=s<<0,h+=c<<8,h+=o<<16,h+=u<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=n(e[8],e[9],e[10],e[11]),c=n(e[12],e[13],e[14],e[15]),o=16+s+c;return e.subarray(o,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}ke();var kr=(0,ee.join)(Ue,"ExtensionCache");async function Pr(e,n){return await(0,z.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{Kn(e,(i,a)=>{if(i)return void t(i);Promise.all(Object.keys(a).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,z.mkdir)((0,ee.join)(n,s),{recursive:!0});let c=s.split("/"),o=c.pop(),u=c.join("/"),h=(0,ee.join)(n,u);u&&await(0,z.mkdir)(h,{recursive:!0}),await(0,z.writeFile)((0,ee.join)(h,o),a[s])})).then(()=>r()).catch(s=>{(0,z.rm)(n,{recursive:!0,force:!0}),t(s)})})})}async function Yn(e){let n=(0,ee.join)(kr,`${e}`);try{await(0,z.access)(n,Hn.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await q(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Pr(Bn(i),n).catch(console.error)}bn.session.defaultSession.loadExtension(n)}Ce||j.app.whenReady().then(()=>{j.protocol.registerFileProtocol("vencord",({url:t},i)=>{let a=t.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,nr.join)(__dirname,a));break;default:i({statusCode:403})}});try{Ae().enableReactDevtools&&Yn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=t=>{let i={};return t.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=c)}),i},n=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let a=e(t[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[n(a)]}}j.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},a)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:t})}),j.session.defaultSession.webRequest.onHeadersReceived=()=>{}});er();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
