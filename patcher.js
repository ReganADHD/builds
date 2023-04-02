// Vencord 8378638
// Standalone: true
// Platform: Universal
"use strict";var Ln=Object.create;var xe=Object.defineProperty;var Zn=Object.getOwnPropertyDescriptor;var _n=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,bn=Object.prototype.hasOwnProperty;var P=(e,n)=>()=>(e&&(n=e(e=0)),n);var He=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of _n(n))!bn.call(e,i)&&i!==r&&xe(e,i,{get:()=>n[i],enumerable:!(t=Zn(n,i))||t.enumerable});return e};var Se=(e,n,r)=>(r=e!=null?Ln(Kn(e)):{},He(n||!e||!e.__esModule?xe(r,"default",{value:e,enumerable:!0}):r,e)),Hn=e=>He(xe({},"__esModule",{value:!0}),e);var f=P(()=>{"use strict"});var ce,Te=P(()=>{f();ce="8378638"});var q,Ee=P(()=>{f();q="Vendicated/Vencord"});var Ye,Qe=P(()=>{"use strict";f();Te();Ee();Ye=`Vencord/${ce}${q?` (https://github.com/${q})`:""}`});function qn(e){let n={};for(let r in e)n[r]=e[r],n[e[r]]=r;return Object.freeze(n)}var C,ze=P(()=>{"use strict";f();C=qn({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function Y(e,n={}){return new Promise((r,t)=>{Xe.default.get(e,n,i=>{let{statusCode:c,statusMessage:s,headers:o}=i;if(c>=400)return void t(`${c}: ${s} - ${e}`);if(c>=300)return void r(Y(o.location,n));let a=[];i.on("error",t),i.on("data",u=>a.push(u)),i.once("end",()=>r(Buffer.concat(a)))})})}var Xe,De=P(()=>{"use strict";f();Xe=Se(require("https"))});async function nn(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js","renderer.css"].map(n=>new Promise(r=>{let t=(0,$e.createReadStream)((0,en.join)(__dirname,n)),i=(0,Je.createHash)("sha1",{encoding:"hex"});t.once("end",()=>{i.end(),e[n]=i.read(),r()}),t.pipe(i)}))),e}function Q(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var Je,$e,en,rn=P(()=>{"use strict";f();Je=require("crypto"),$e=require("fs"),en=require("path")});var Jn={};async function on(e){return Y(Yn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Ye}})}async function Qn(){if(!await sn())return[];let n=await on(`/compare/${ce}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function sn(){let e=await on("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===ce?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{["patcher.js","preload.js","renderer.js","renderer.css"].some(c=>t.startsWith(c))&&Re.push([t,i])}),!0)}async function Xn(){return await Promise.all(Re.map(async([e,n])=>(0,tn.writeFile)((0,an.join)(__dirname,e),await Y(n)))),Re=[],!0}var X,tn,an,Yn,Re,cn=P(()=>{"use strict";f();Qe();ze();X=require("electron"),tn=require("fs/promises"),an=require("path");Te();Ee();De();rn();Yn=`https://api.github.com/repos/${q}`,Re=[];X.ipcMain.handle(C.GET_HASHES,Q(nn));X.ipcMain.handle(C.GET_REPO,Q(()=>`https://github.com/${q}`));X.ipcMain.handle(C.GET_UPDATES,Q(Qn));X.ipcMain.handle(C.UPDATE,Q(sn));X.ipcMain.handle(C.BUILD,Q(Xn))});var wr={};function Ir(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function jn(){try{let e=(0,x.dirname)(process.execPath),n=(0,x.basename)(e),r=(0,x.join)(e,".."),t=(0,S.readdirSync)(r).reduce((o,a)=>a.startsWith("app-")&&Ir(a,o)?a:o,n);if(t===n)return;let i=(0,x.join)(r,t,"resources"),c=(0,x.join)(i,"app.asar"),s=(0,x.join)(i,"_app.asar");if(!(0,S.existsSync)(c)||(0,S.statSync)(c).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,S.renameSync)(c,s),(0,S.mkdirSync)(c),(0,S.writeFileSync)((0,x.join)(c,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,S.writeFileSync)((0,x.join)(c,"index.js"),`require(${JSON.stringify((0,x.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function Ar(){try{let e=(0,x.join)(require.main.filename,"..","autoStart","win32.js"),{update:n}=require(e);require.cache[e].exports.update=function(){n.apply(this,arguments),jn()}}catch{let{quitAndInstall:e}=Z.autoUpdater;Z.autoUpdater.quitAndInstall=function(){jn(),e.call(this)}}}var Z,S,x,Vn,Bn=P(()=>{"use strict";f();Z=require("electron"),S=require("fs"),x=require("path"),{setAppUserModelId:Vn}=Z.app;Z.app.setAppUserModelId=function(e){Z.app.setAppUserModelId=Vn,Vn.call(this,e),Ar()}});f();f();function qe(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var y=Se(require("electron")),U=require("path");f();f();Promise.resolve().then(()=>cn());f();function un(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}ze();f();var ue=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}};var A=require("electron"),ee=require("fs"),L=require("fs/promises"),pn=require("path");f();var fn="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";f();var ln=require("electron"),J=require("path"),ke=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,J.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,J.join)(ln.app.getPath("userData"),"..","Vencord")),fe=(0,J.join)(ke,"settings"),$=(0,J.join)(fe,"quickCss.css"),Ge=(0,J.join)(fe,"settings.json"),hn=["https:","http:","steam:","spotify:"];(0,ee.mkdirSync)(fe,{recursive:!0});function vn(){return(0,L.readFile)($,"utf-8").catch(()=>"")}function Pe(){try{return(0,ee.readFileSync)(Ge,"utf-8")}catch{return"{}"}}A.ipcMain.handle(C.OPEN_QUICKCSS,()=>A.shell.openPath($));A.ipcMain.handle(C.OPEN_EXTERNAL,(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!hn.includes(r))throw"Disallowed protocol.";A.shell.openExternal(n)});var $n=new ue,er=new ue;A.ipcMain.handle(C.GET_QUICK_CSS,()=>vn());A.ipcMain.handle(C.SET_QUICK_CSS,(e,n)=>$n.push(()=>(0,L.writeFile)($,n)));A.ipcMain.handle(C.GET_SETTINGS_DIR,()=>fe);A.ipcMain.on(C.GET_SETTINGS,e=>e.returnValue=Pe());A.ipcMain.handle(C.SET_SETTINGS,(e,n)=>{er.push(()=>(0,L.writeFile)(Ge,n))});function gn(e){(0,L.open)($,"a+").then(n=>{n.close(),(0,ee.watch)($,{persistent:!1},un(async()=>{e.webContents.postMessage(C.QUICK_CSS_UPDATE,await vn())},50))})}A.ipcMain.handle(C.OPEN_MONACO_EDITOR,async()=>{await new A.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,pn.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${fn}`)});f();var Un=require("electron");f();var yn=require("module"),nr=(0,yn.createRequire)("/"),ge,rr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ge=nr("worker_threads").Worker}catch{}var tr=ge?function(e,n,r,t,i){var c=!1,s=new ge(e+rr,{eval:!0}).on("error",function(o){return i(o,null)}).on("message",function(o){return i(null,o)}).on("exit",function(o){o&&!c&&i(new Error("exited with code "+o),null)});return s.postMessage(r,t),s.terminate=function(){return c=!0,ge.prototype.terminate.call(s)},s}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var c=function(){};return{terminate:c,postMessage:c}},I=Uint8Array,B=Uint16Array,Oe=Uint32Array,We=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ve=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cn=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),In=function(e,n){for(var r=new B(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new Oe(r[30]),t=1;t<30;++t)for(var c=r[t];c<r[t+1];++c)i[c]=c-r[t]<<5|t;return[r,i]},An=In(We,2),je=An[0],ir=An[1];je[28]=258,ir[258]=28;var wn=In(Ve,0),xn=wn[0],vt=wn[1],ye=new B(32768);for(h=0;h<32768;++h)N=(h&43690)>>>1|(h&21845)<<1,N=(N&52428)>>>2|(N&13107)<<2,N=(N&61680)>>>4|(N&3855)<<4,ye[h]=((N&65280)>>>8|(N&255)<<8)>>>1;var N,h,ne=function(e,n,r){for(var t=e.length,i=0,c=new B(n);i<t;++i)e[i]&&++c[e[i]-1];var s=new B(n);for(i=0;i<n;++i)s[i]=s[i-1]+c[i-1]<<1;var o;if(r){o=new B(1<<n);var a=15-n;for(i=0;i<t;++i)if(e[i])for(var u=i<<4|e[i],l=n-e[i],g=s[e[i]-1]++<<l,z=g|(1<<l)-1;g<=z;++g)o[ye[g]>>>a]=u}else for(o=new B(t),i=0;i<t;++i)e[i]&&(o[i]=ye[s[e[i]-1]++]>>>15-e[i]);return o},le=new I(288);for(h=0;h<144;++h)le[h]=8;var h;for(h=144;h<256;++h)le[h]=9;var h;for(h=256;h<280;++h)le[h]=7;var h;for(h=280;h<288;++h)le[h]=8;var h,Sn=new I(32);for(h=0;h<32;++h)Sn[h]=5;var h;var Tn=ne(le,9,1);var En=ne(Sn,5,1),me=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},E=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},de=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},zn=function(e){return(e+7)/8|0},Ce=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?B:e.BYTES_PER_ELEMENT==4?Oe:I)(r-n);return t.set(e.subarray(n,r)),t};var Dn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(e,n,r){var t=new Error(n||Dn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,w),!r)throw t;return t},Rn=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new I(0);var i=!n||r,c=!r||r.i;r||(r={}),n||(n=new I(t*3));var s=function(_e){var Ke=n.length;if(_e>Ke){var be=new I(Math.max(Ke*2,_e));be.set(n),n=be}},o=r.f||0,a=r.p||0,u=r.b||0,l=r.l,g=r.d,z=r.m,O=r.n,te=t*8;do{if(!l){o=E(e,a,1);var M=E(e,a+1,3);if(a+=3,M)if(M==1)l=Tn,g=En,z=9,O=5;else if(M==2){var V=E(e,a,31)+257,_=E(e,a+10,15)+4,ie=V+E(e,a+5,31)+1;a+=14;for(var F=new I(ie),ae=new I(19),d=0;d<_;++d)ae[Cn[d]]=E(e,a+d*3,7);a+=_*3;for(var G=me(ae),he=(1<<G)-1,K=ne(ae,G,1),d=0;d<ie;){var oe=K[E(e,a,he)];a+=oe&15;var m=oe>>>4;if(m<16)F[d++]=m;else{var b=0,pe=0;for(m==16?(pe=3+E(e,a,3),a+=2,b=F[d-1]):m==17?(pe=3+E(e,a,7),a+=3):m==18&&(pe=11+E(e,a,127),a+=7);pe--;)F[d++]=b}}var Fe=F.subarray(0,V),j=F.subarray(V);z=me(Fe),O=me(j),l=ne(Fe,z,1),g=ne(j,O,1)}else w(1);else{var m=zn(a)+4,T=e[m-4]|e[m-3]<<8,W=m+T;if(W>t){c&&w(0);break}i&&s(u+T),n.set(e.subarray(m,W),u),r.b=u+=T,r.p=a=W*8,r.f=o;continue}if(a>te){c&&w(0);break}}i&&s(u+131072);for(var Mn=(1<<z)-1,Fn=(1<<O)-1,Ie=a;;Ie=a){var b=l[de(e,a)&Mn],H=b>>>4;if(a+=b&15,a>te){c&&w(0);break}if(b||w(2),H<256)n[u++]=H;else if(H==256){Ie=a,l=null;break}else{var Le=H-254;if(H>264){var d=H-257,se=We[d];Le=E(e,a,(1<<se)-1)+je[d],a+=se}var Ae=g[de(e,a)&Fn],we=Ae>>>4;Ae||w(3),a+=Ae&15;var j=xn[we];if(we>3){var se=Ve[we];j+=de(e,a)&(1<<se)-1,a+=se}if(a>te){c&&w(0);break}i&&s(u+131072);for(var Ze=u+Le;u<Ze;u+=4)n[u]=n[u-j],n[u+1]=n[u+1-j],n[u+2]=n[u+2-j],n[u+3]=n[u+3-j];u=Ze}}r.l=l,r.p=Ie,r.b=u,r.f=o,l&&(o=1,r.m=z,r.d=g,r.n=O)}while(!o);return u==n.length?n:Ce(n,0,u)};var ar=new I(0);var or=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},mn=function(e,n,r){for(var t=e(),i=e.toString(),c=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var o=t[s],a=c[s];if(typeof o=="function"){n+=";"+a+"=";var u=o.toString();if(o.prototype)if(u.indexOf("[native code]")!=-1){var l=u.indexOf(" ",8)+1;n+=u.slice(l,u.indexOf("(",l))}else{n+=u;for(var g in o.prototype)n+=";"+a+".prototype."+g+"="+o.prototype[g].toString()}else n+=u}else r[a]=o}return[n,r]},ve=[],sr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},cr=function(e,n,r,t){var i;if(!ve[r]){for(var c="",s={},o=e.length-1,a=0;a<o;++a)i=mn(e[a],c,s),c=i[0],s=i[1];ve[r]=mn(e[o],c,s)}var u=or({},ve[r][1]);return tr(ve[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,u,sr(u),t)},ur=function(){return[I,B,Oe,We,Ve,Cn,je,xn,Tn,En,ye,Dn,ne,me,E,de,zn,Ce,w,Rn,Be,kn,Gn]};var kn=function(e){return postMessage(e,[e.buffer])},Gn=function(e){return e&&e.size&&new I(e.size)},fr=function(e,n,r,t,i,c){var s=cr(r,t,i,function(o,a){s.terminate(),c(o,a)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var R=function(e,n){return e[n]|e[n+1]<<8},D=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ne=function(e,n){return D(e,n)+D(e,n+4)*4294967296};function lr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&w(7),fr(e,n,[ur],function(t){return kn(Be(t.data[0],Gn(t.data[1])))},1,r)}function Be(e,n){return Rn(e,n)}var Ue=typeof TextDecoder<"u"&&new TextDecoder,hr=0;try{Ue.decode(ar,{stream:!0}),hr=1}catch{}var pr=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,Ce(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function vr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(Ue)return Ue.decode(e);var i=pr(e),c=i[0],s=i[1];return s.length&&w(8),c}}var gr=function(e,n){return n+30+R(e,n+26)+R(e,n+28)},mr=function(e,n,r){var t=R(e,n+28),i=vr(e.subarray(n+46,n+46+t),!(R(e,n+8)&2048)),c=n+46+t,s=D(e,n+20),o=r&&s==4294967295?dr(e,c):[s,D(e,n+24),D(e,n+42)],a=o[0],u=o[1],l=o[2];return[R(e,n+10),a,u,i,c+R(e,n+30)+R(e,n+32),l]},dr=function(e,n){for(;R(e,n)!=1;n+=4+R(e,n+2));return[Ne(e,n+12),Ne(e,n+4),Ne(e,n+20)]};var dn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Pn(e,n,r){r||(r=n,n={}),typeof r!="function"&&w(7);var t=[],i=function(){for(var m=0;m<t.length;++m)t[m]()},c={},s=function(m,T){dn(function(){r(m,T)})};dn(function(){s=r});for(var o=e.length-22;D(e,o)!=101010256;--o)if(!o||e.length-o>65558)return s(w(13,0,1),null),i;var a=R(e,o+8);if(a){var u=a,l=D(e,o+16),g=l==4294967295||u==65535;if(g){var z=D(e,o-12);g=D(e,z)==101075792,g&&(u=a=D(e,z+32),l=D(e,z+48))}for(var O=n&&n.filter,te=function(m){var T=mr(e,l,g),W=T[0],V=T[1],_=T[2],ie=T[3],F=T[4],ae=T[5],d=gr(e,ae);l=F;var G=function(K,oe){K?(i(),s(K,null)):(oe&&(c[ie]=oe),--a||s(null,c))};if(!O||O({name:ie,size:V,originalSize:_,compression:W}))if(!W)G(null,Ce(e,d,d+V));else if(W==8){var he=e.subarray(d,d+V);if(V<32e4)try{G(null,Be(he,new I(_)))}catch(K){G(K,null)}else t.push(lr(he,{size:_},G))}else G(w(14,"unknown compression type "+W,1),null);else G(null,null)},M=0;M<u;++M)te(M)}else s(null,{});return i}var On=require("fs"),k=require("fs/promises"),re=require("path");f();function Nn(e){function n(s,o,a,u){let l=0;return l+=s<<0,l+=o<<8,l+=a<<16,l+=u<<24>>>0,l}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=n(e[8],e[9],e[10],e[11]),o=n(e[12],e[13],e[14],e[15]),a=16+s+o;return e.subarray(a,e.length)}let c=12+n(e[8],e[9],e[10],e[11]);return e.subarray(c,e.length)}De();var yr=(0,re.join)(ke,"ExtensionCache");async function Cr(e,n){return await(0,k.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{Pn(e,(i,c)=>{if(i)return void t(i);Promise.all(Object.keys(c).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,k.mkdir)((0,re.join)(n,s),{recursive:!0});let o=s.split("/"),a=o.pop(),u=o.join("/"),l=(0,re.join)(n,u);u&&await(0,k.mkdir)(l,{recursive:!0}),await(0,k.writeFile)((0,re.join)(l,a),c[s])})).then(()=>r()).catch(s=>{(0,k.rm)(n,{recursive:!0,force:!0}),t(s)})})})}async function Wn(e){let n=(0,re.join)(yr,`${e}`);try{await(0,k.access)(n,On.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Y(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Cr(Nn(i),n).catch(console.error)}Un.session.defaultSession.loadExtension(n)}console.log("[Vencord] Starting up...");var xr=require.main.filename,Sr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Me=(0,U.join)((0,U.dirname)(xr),"..",Sr),Tr=require((0,U.join)(Me,"package.json"));require.main.filename=(0,U.join)(Me,Tr.main);y.app.setAppPath(Me);if(process.argv.includes("--vanilla"))console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e={};try{e=JSON.parse(Pe())}catch{}if(process.platform==="win32"&&(Bn(),e.winCtrlQ)){let t=y.Menu.buildFromTemplate;y.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:c}=i[0];Array.isArray(c)&&c.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>y.app.quit()})}return t.call(this,i)}}class n extends y.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let c=i.webPreferences.preload;i.webPreferences.preload=(0,U.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),process.env.DISCORD_PRELOAD=c,super(i),gn(this)}else super(i)}}Object.assign(n,y.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...y.default,BrowserWindow:n},qe(global,"appSettings",t=>t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)),process.env.DATA_DIR=(0,U.join)(y.app.getPath("userData"),"..","Vencord"),y.app.whenReady().then(()=>{y.protocol.registerFileProtocol("vencord",({url:s},o)=>{let a=s.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":o((0,U.join)(__dirname,a));break;default:o({statusCode:403})}});try{e?.enableReactDevtools&&Wn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(s=>console.error("[Vencord] Failed to install React Developer Tools",s))}catch{}let t=s=>{let o={};return s.split(";").forEach(a=>{let[u,...l]=a.trim().split(/\s+/g);u&&!Object.prototype.hasOwnProperty.call(o,u)&&(o[u]=l)}),o},i=s=>Object.entries(s).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; ");function c(s,o){if(o in s){let a=t(s[o][0]);for(let u of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[u]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),s[o]=[i(a)]}}y.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:s,resourceType:o},a)=>{s&&(o==="mainFrame"&&c(s,"content-security-policy"),o==="stylesheet"&&(s["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:s})}),y.session.defaultSession.webRequest.onHeadersReceived=()=>{}})}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename);
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
