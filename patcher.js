// Vencord 25d32ce
// Standalone: true
// Platform: Universal
"use strict";var qr=Object.create;var Te=Object.defineProperty;var Hr=Object.getOwnPropertyDescriptor;var br=Object.getOwnPropertyNames;var Yr=Object.getPrototypeOf,Qr=Object.prototype.hasOwnProperty;var P=(e,r)=>()=>(e&&(r=e(e=0)),r);var He=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of br(r))!Qr.call(e,i)&&i!==n&&Te(e,i,{get:()=>r[i],enumerable:!(t=Hr(r,i))||t.enumerable});return e};var Ee=(e,r,n)=>(n=e!=null?qr(Yr(e)):{},He(r||!e||!e.__esModule?Te(n,"default",{value:e,enumerable:!0}):n,e)),Xr=e=>He(Te({},"__esModule",{value:!0}),e);var f=P(()=>{"use strict"});function Jr(e){let r={};for(let n in e)r[n]=e[n],r[e[n]]=n;return Object.freeze(r)}var g,ve=P(()=>{"use strict";f();g=Jr({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor",DOWNLOAD_VENCORD_CSS:"VencordDownloadVencordCss"})});function M(e,r={}){return new Promise((n,t)=>{Ye.default.get(e,r,i=>{let{statusCode:c,statusMessage:s,headers:o}=i;if(c>=400)return void t(`${c}: ${s} - ${e}`);if(c>=300)return void n(M(o.location,r));let a=[];i.on("error",t),i.on("data",u=>a.push(u)),i.once("end",()=>n(Buffer.concat(a)))})})}var Ye,ge=P(()=>{"use strict";f();Ye=Ee(require("https"))});var ce,De=P(()=>{f();ce="25d32ce"});var Y,ze=P(()=>{f();Y="Vendicated/Vencord"});var $e,er=P(()=>{"use strict";f();De();ze();$e=`Vencord/${ce}${Y?` (https://github.com/${Y})`:""}`});async function ir(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js","renderer.css"].map(r=>new Promise(n=>{let t=(0,nr.createReadStream)((0,tr.join)(__dirname,r)),i=(0,rr.createHash)("sha1",{encoding:"hex"});t.once("end",()=>{i.end(),e[r]=i.read(),n()}),t.pipe(i)}))),e}function Q(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(r){return{ok:!1,error:r instanceof Error?{...r}:r}}}}var rr,nr,tr,ar=P(()=>{"use strict";f();rr=require("crypto"),nr=require("fs"),tr=require("path")});var nn={};async function cr(e){return M($r+e,{headers:{Accept:"application/vnd.github+json","User-Agent":$e}})}async function en(){if(!await ur())return[];let r=await cr(`/compare/${ce}...HEAD`);return JSON.parse(r.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function ur(){let e=await cr("/releases/latest"),r=JSON.parse(e.toString());return r.name.slice(r.name.lastIndexOf(" ")+1)===ce?!1:(r.assets.forEach(({name:t,browser_download_url:i})=>{["patcher.js","preload.js","renderer.js","renderer.css"].some(c=>t.startsWith(c))&&Re.push([t,i])}),!0)}async function rn(){return await Promise.all(Re.map(async([e,r])=>(0,or.writeFile)((0,sr.join)(__dirname,e),await M(r)))),Re=[],!0}var X,or,sr,$r,Re,fr=P(()=>{"use strict";f();er();ve();X=require("electron"),or=require("fs/promises"),sr=require("path");De();ze();ge();ar();$r=`https://api.github.com/repos/${Y}`,Re=[];X.ipcMain.handle(g.GET_HASHES,Q(ir));X.ipcMain.handle(g.GET_REPO,Q(()=>`https://github.com/${Y}`));X.ipcMain.handle(g.GET_UPDATES,Q(en));X.ipcMain.handle(g.UPDATE,Q(ur));X.ipcMain.handle(g.BUILD,Q(rn))});var Dn={};function Tn(e,r){let n=e.slice(4).split(".").map(Number),t=r.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(n[i]>t[i])return!0;if(n[i]<t[i])return!1}return!1}function Br(){try{let e=(0,x.dirname)(process.execPath),r=(0,x.basename)(e),n=(0,x.join)(e,".."),t=(0,S.readdirSync)(n).reduce((o,a)=>a.startsWith("app-")&&Tn(a,o)?a:o,r);if(t===r)return;let i=(0,x.join)(n,t,"resources"),c=(0,x.join)(i,"app.asar"),s=(0,x.join)(i,"_app.asar");if(!(0,S.existsSync)(c)||(0,S.statSync)(c).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,S.renameSync)(c,s),(0,S.mkdirSync)(c),(0,S.writeFileSync)((0,x.join)(c,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,S.writeFileSync)((0,x.join)(c,"index.js"),`require(${JSON.stringify((0,x.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function En(){try{let e=(0,x.join)(require.main.filename,"..","autoStart","win32.js"),{update:r}=require(e);require.cache[e].exports.update=function(){r.apply(this,arguments),Br()}}catch{let{quitAndInstall:e}=Z.autoUpdater;Z.autoUpdater.quitAndInstall=function(){Br(),e.call(this)}}}var Z,S,x,Mr,Fr=P(()=>{"use strict";f();Z=require("electron"),S=require("fs"),x=require("path"),{setAppUserModelId:Mr}=Z.app;Z.app.setAppUserModelId=function(e){Z.app.setAppUserModelId=Mr,Mr.call(this,e),En()}});f();f();function be(e,r,n){let t=r;if(r in e)return void n(e[t]);Object.defineProperty(e,r,{set(i){delete e[t],e[t]=i,n(i)},configurable:!0,enumerable:!1})}var w=Ee(require("electron")),Lr=require("fs"),N=require("path");f();f();ve();var Qe=require("electron"),Xe=require("fs/promises"),Je=require("path");ge();Qe.ipcMain.handleOnce(g.DOWNLOAD_VENCORD_CSS,async()=>{let e=await M("https://github.com/Vendicated/Vencord/releases/download/devbuild/renderer.css");return await(0,Xe.writeFile)((0,Je.join)(__dirname,"renderer.css"),e),e.toString("utf-8")});f();Promise.resolve().then(()=>fr());f();function lr(e,r=300){let n;return function(...t){clearTimeout(n),n=setTimeout(()=>{e(...t)},r)}}ve();f();var ue=class{constructor(r=1/0){this.maxSize=r}queue=[];promise;next(){let r=this.queue.shift();r?this.promise=Promise.resolve().then(r).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(r){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(r),this.run()}unshift(r){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(r),this.run()}get size(){return this.queue.length}};var I=require("electron"),ee=require("fs"),_=require("fs/promises"),gr=require("path");f();var hr="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";f();var pr=require("electron"),J=require("path"),Ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,J.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,J.join)(pr.app.getPath("userData"),"..","Vencord")),fe=(0,J.join)(Ge,"settings"),$=(0,J.join)(fe,"quickCss.css"),ke=(0,J.join)(fe,"settings.json"),vr=["https:","http:","steam:","spotify:"];(0,ee.mkdirSync)(fe,{recursive:!0});function mr(){return(0,_.readFile)($,"utf-8").catch(()=>"")}function Pe(){try{return(0,ee.readFileSync)(ke,"utf-8")}catch{return"{}"}}I.ipcMain.handle(g.OPEN_QUICKCSS,()=>I.shell.openPath($));I.ipcMain.handle(g.OPEN_EXTERNAL,(e,r)=>{try{var{protocol:n}=new URL(r)}catch{throw"Malformed URL"}if(!vr.includes(n))throw"Disallowed protocol.";I.shell.openExternal(r)});var tn=new ue,an=new ue;I.ipcMain.handle(g.GET_QUICK_CSS,()=>mr());I.ipcMain.handle(g.SET_QUICK_CSS,(e,r)=>tn.push(()=>(0,_.writeFile)($,r)));I.ipcMain.handle(g.GET_SETTINGS_DIR,()=>fe);I.ipcMain.on(g.GET_SETTINGS,e=>e.returnValue=Pe());I.ipcMain.handle(g.SET_SETTINGS,(e,r)=>{an.push(()=>(0,_.writeFile)(ke,r))});function dr(e){(0,_.open)($,"a+").then(r=>{r.close(),(0,ee.watch)($,{persistent:!1},lr(async()=>{e.webContents.postMessage(g.QUICK_CSS_UPDATE,await mr())},50))})}I.ipcMain.handle(g.OPEN_MONACO_EDITOR,async()=>{await new I.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,gr.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}).loadURL(`data:text/html;base64,${hr}`)});f();var Vr=require("electron");f();var Ir=require("module"),on=(0,Ir.createRequire)("/"),de,sn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{de=on("worker_threads").Worker}catch{}var cn=de?function(e,r,n,t,i){var c=!1,s=new de(e+sn,{eval:!0}).on("error",function(o){return i(o,null)}).on("message",function(o){return i(null,o)}).on("exit",function(o){o&&!c&&i(new Error("exited with code "+o),null)});return s.postMessage(n,t),s.terminate=function(){return c=!0,de.prototype.terminate.call(s)},s}:function(e,r,n,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var c=function(){};return{terminate:c,postMessage:c}},y=Uint8Array,B=Uint16Array,Ue=Uint32Array,Ve=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),We=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ar=new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wr=function(e,r){for(var n=new B(31),t=0;t<31;++t)n[t]=r+=1<<e[t-1];for(var i=new Ue(n[30]),t=1;t<30;++t)for(var c=n[t];c<n[t+1];++c)i[c]=c-n[t]<<5|t;return[n,i]},xr=wr(Ve,2),je=xr[0],un=xr[1];je[28]=258,un[258]=28;var Sr=wr(We,0),Tr=Sr[0],wt=Sr[1],Ie=new B(32768);for(h=0;h<32768;++h)O=(h&43690)>>>1|(h&21845)<<1,O=(O&52428)>>>2|(O&13107)<<2,O=(O&61680)>>>4|(O&3855)<<4,Ie[h]=((O&65280)>>>8|(O&255)<<8)>>>1;var O,h,re=function(e,r,n){for(var t=e.length,i=0,c=new B(r);i<t;++i)e[i]&&++c[e[i]-1];var s=new B(r);for(i=0;i<r;++i)s[i]=s[i-1]+c[i-1]<<1;var o;if(n){o=new B(1<<r);var a=15-r;for(i=0;i<t;++i)if(e[i])for(var u=i<<4|e[i],l=r-e[i],m=s[e[i]-1]++<<l,D=m|(1<<l)-1;m<=D;++m)o[Ie[m]>>>a]=u}else for(o=new B(t),i=0;i<t;++i)e[i]&&(o[i]=Ie[s[e[i]-1]++]>>>15-e[i]);return o},le=new y(288);for(h=0;h<144;++h)le[h]=8;var h;for(h=144;h<256;++h)le[h]=9;var h;for(h=256;h<280;++h)le[h]=7;var h;for(h=280;h<288;++h)le[h]=8;var h,Er=new y(32);for(h=0;h<32;++h)Er[h]=5;var h;var Dr=re(le,9,1);var zr=re(Er,5,1),Ce=function(e){for(var r=e[0],n=1;n<e.length;++n)e[n]>r&&(r=e[n]);return r},E=function(e,r,n){var t=r/8|0;return(e[t]|e[t+1]<<8)>>(r&7)&n},ye=function(e,r){var n=r/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(r&7)},Rr=function(e){return(e+7)/8|0},Ae=function(e,r,n){(r==null||r<0)&&(r=0),(n==null||n>e.length)&&(n=e.length);var t=new(e.BYTES_PER_ELEMENT==2?B:e.BYTES_PER_ELEMENT==4?Ue:y)(n-r);return t.set(e.subarray(r,n)),t};var Gr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(e,r,n){var t=new Error(r||Gr[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,A),!n)throw t;return t},kr=function(e,r,n){var t=e.length;if(!t||n&&n.f&&!n.l)return r||new y(0);var i=!r||n,c=!n||n.i;n||(n={}),r||(r=new y(t*3));var s=function(Ze){var Ke=r.length;if(Ze>Ke){var qe=new y(Math.max(Ke*2,Ze));qe.set(r),r=qe}},o=n.f||0,a=n.p||0,u=n.b||0,l=n.l,m=n.d,D=n.m,U=n.n,te=t*8;do{if(!l){o=E(e,a,1);var F=E(e,a+1,3);if(a+=3,F)if(F==1)l=Dr,m=zr,D=9,U=5;else if(F==2){var W=E(e,a,31)+257,K=E(e,a+10,15)+4,ie=W+E(e,a+5,31)+1;a+=14;for(var L=new y(ie),ae=new y(19),C=0;C<K;++C)ae[Ar[C]]=E(e,a+C*3,7);a+=K*3;for(var k=Ce(ae),he=(1<<k)-1,q=re(ae,k,1),C=0;C<ie;){var oe=q[E(e,a,he)];a+=oe&15;var d=oe>>>4;if(d<16)L[C++]=d;else{var H=0,pe=0;for(d==16?(pe=3+E(e,a,3),a+=2,H=L[C-1]):d==17?(pe=3+E(e,a,7),a+=3):d==18&&(pe=11+E(e,a,127),a+=7);pe--;)L[C++]=H}}var Fe=L.subarray(0,W),j=L.subarray(W);D=Ce(Fe),U=Ce(j),l=re(Fe,D,1),m=re(j,U,1)}else A(1);else{var d=Rr(a)+4,T=e[d-4]|e[d-3]<<8,V=d+T;if(V>t){c&&A(0);break}i&&s(u+T),r.set(e.subarray(d,V),u),n.b=u+=T,n.p=a=V*8,n.f=o;continue}if(a>te){c&&A(0);break}}i&&s(u+131072);for(var Zr=(1<<D)-1,Kr=(1<<U)-1,we=a;;we=a){var H=l[ye(e,a)&Zr],b=H>>>4;if(a+=H&15,a>te){c&&A(0);break}if(H||A(2),b<256)r[u++]=b;else if(b==256){we=a,l=null;break}else{var Le=b-254;if(b>264){var C=b-257,se=Ve[C];Le=E(e,a,(1<<se)-1)+je[C],a+=se}var xe=m[ye(e,a)&Kr],Se=xe>>>4;xe||A(3),a+=xe&15;var j=Tr[Se];if(Se>3){var se=We[Se];j+=ye(e,a)&(1<<se)-1,a+=se}if(a>te){c&&A(0);break}i&&s(u+131072);for(var _e=u+Le;u<_e;u+=4)r[u]=r[u-j],r[u+1]=r[u+1-j],r[u+2]=r[u+2-j],r[u+3]=r[u+3-j];u=_e}}n.l=l,n.p=we,n.b=u,n.f=o,l&&(o=1,n.m=D,n.d=m,n.n=U)}while(!o);return u==r.length?r:Ae(r,0,u)};var fn=new y(0);var ln=function(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n},Cr=function(e,r,n){for(var t=e(),i=e.toString(),c=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var o=t[s],a=c[s];if(typeof o=="function"){r+=";"+a+"=";var u=o.toString();if(o.prototype)if(u.indexOf("[native code]")!=-1){var l=u.indexOf(" ",8)+1;r+=u.slice(l,u.indexOf("(",l))}else{r+=u;for(var m in o.prototype)r+=";"+a+".prototype."+m+"="+o.prototype[m].toString()}else r+=u}else n[a]=o}return[r,n]},me=[],hn=function(e){var r=[];for(var n in e)e[n].buffer&&r.push((e[n]=new e[n].constructor(e[n])).buffer);return r},pn=function(e,r,n,t){var i;if(!me[n]){for(var c="",s={},o=e.length-1,a=0;a<o;++a)i=Cr(e[a],c,s),c=i[0],s=i[1];me[n]=Cr(e[o],c,s)}var u=ln({},me[n][1]);return cn(me[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+r.toString()+"}",n,u,hn(u),t)},vn=function(){return[y,B,Ue,Ve,We,Ar,je,Tr,Dr,zr,Ie,Gr,re,Ce,E,ye,Rr,Ae,A,kr,Me,Pr,Or]};var Pr=function(e){return postMessage(e,[e.buffer])},Or=function(e){return e&&e.size&&new y(e.size)},gn=function(e,r,n,t,i,c){var s=pn(n,t,i,function(o,a){s.terminate(),c(o,a)});return s.postMessage([e,r],r.consume?[e.buffer]:[]),function(){s.terminate()}};var R=function(e,r){return e[r]|e[r+1]<<8},z=function(e,r){return(e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)>>>0},Oe=function(e,r){return z(e,r)+z(e,r+4)*4294967296};function mn(e,r,n){return n||(n=r,r={}),typeof n!="function"&&A(7),gn(e,r,[vn],function(t){return Pr(Me(t.data[0],Or(t.data[1])))},1,n)}function Me(e,r){return kr(e,r)}var Ne=typeof TextDecoder<"u"&&new TextDecoder,dn=0;try{Ne.decode(fn,{stream:!0}),dn=1}catch{}var Cn=function(e){for(var r="",n=0;;){var t=e[n++],i=(t>127)+(t>223)+(t>239);if(n+i>e.length)return[r,Ae(e,n-1)];i?i==3?(t=((t&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,r+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?r+=String.fromCharCode((t&31)<<6|e[n++]&63):r+=String.fromCharCode((t&15)<<12|(e[n++]&63)<<6|e[n++]&63):r+=String.fromCharCode(t)}};function yn(e,r){if(r){for(var n="",t=0;t<e.length;t+=16384)n+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return n}else{if(Ne)return Ne.decode(e);var i=Cn(e),c=i[0],s=i[1];return s.length&&A(8),c}}var In=function(e,r){return r+30+R(e,r+26)+R(e,r+28)},An=function(e,r,n){var t=R(e,r+28),i=yn(e.subarray(r+46,r+46+t),!(R(e,r+8)&2048)),c=r+46+t,s=z(e,r+20),o=n&&s==4294967295?wn(e,c):[s,z(e,r+24),z(e,r+42)],a=o[0],u=o[1],l=o[2];return[R(e,r+10),a,u,i,c+R(e,r+30)+R(e,r+32),l]},wn=function(e,r){for(;R(e,r)!=1;r+=4+R(e,r+2));return[Oe(e,r+12),Oe(e,r+4),Oe(e,r+20)]};var yr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Nr(e,r,n){n||(n=r,r={}),typeof n!="function"&&A(7);var t=[],i=function(){for(var d=0;d<t.length;++d)t[d]()},c={},s=function(d,T){yr(function(){n(d,T)})};yr(function(){s=n});for(var o=e.length-22;z(e,o)!=101010256;--o)if(!o||e.length-o>65558)return s(A(13,0,1),null),i;var a=R(e,o+8);if(a){var u=a,l=z(e,o+16),m=l==4294967295||u==65535;if(m){var D=z(e,o-12);m=z(e,D)==101075792,m&&(u=a=z(e,D+32),l=z(e,D+48))}for(var U=r&&r.filter,te=function(d){var T=An(e,l,m),V=T[0],W=T[1],K=T[2],ie=T[3],L=T[4],ae=T[5],C=In(e,ae);l=L;var k=function(q,oe){q?(i(),s(q,null)):(oe&&(c[ie]=oe),--a||s(null,c))};if(!U||U({name:ie,size:W,originalSize:K,compression:V}))if(!V)k(null,Ae(e,C,C+W));else if(V==8){var he=e.subarray(C,C+W);if(W<32e4)try{k(null,Me(he,new y(K)))}catch(q){k(q,null)}else t.push(mn(he,{size:K},k))}else k(A(14,"unknown compression type "+V,1),null);else k(null,null)},F=0;F<u;++F)te(F)}else s(null,{});return i}var Wr=require("fs"),G=require("fs/promises"),ne=require("path");f();function Ur(e){function r(s,o,a,u){let l=0;return l+=s<<0,l+=o<<8,l+=a<<16,l+=u<<24>>>0,l}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,t=e[4]===2;if(!t&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=r(e[8],e[9],e[10],e[11]),o=r(e[12],e[13],e[14],e[15]),a=16+s+o;return e.subarray(a,e.length)}let c=12+r(e[8],e[9],e[10],e[11]);return e.subarray(c,e.length)}ge();var xn=(0,ne.join)(Ge,"ExtensionCache");async function Sn(e,r){return await(0,G.mkdir)(r,{recursive:!0}),new Promise((n,t)=>{Nr(e,(i,c)=>{if(i)return void t(i);Promise.all(Object.keys(c).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,G.mkdir)((0,ne.join)(r,s),{recursive:!0});let o=s.split("/"),a=o.pop(),u=o.join("/"),l=(0,ne.join)(r,u);u&&await(0,G.mkdir)(l,{recursive:!0}),await(0,G.writeFile)((0,ne.join)(l,a),c[s])})).then(()=>n()).catch(s=>{(0,G.rm)(r,{recursive:!0,force:!0}),t(s)})})})}async function jr(e){let r=(0,ne.join)(xn,`${e}`);try{await(0,G.access)(r,Wr.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await M(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Sn(Ur(i),r).catch(console.error)}Vr.session.defaultSession.loadExtension(r)}console.log("[Vencord] Starting up...");var _r=require.main.filename,zn=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Be=(0,N.join)((0,N.dirname)(_r),"..",zn),Rn=require((0,N.join)(Be,"package.json"));require.main.filename=(0,N.join)(Be,Rn.main);w.app.setAppPath(Be);if(process.argv.includes("--vanilla"))console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{if(process.platform==="win32"){Fr();let t=w.Menu.buildFromTemplate;w.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:c}=i[0];Array.isArray(c)&&c.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>w.app.quit()})}return t.call(this,i)}}let e={};try{e=JSON.parse(Pe())}catch{}class r extends w.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let c=i.webPreferences.preload;i.webPreferences.preload=(0,N.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless&&(i.frame=!1),process.env.DISCORD_PRELOAD=c,super(i),dr(this)}else super(i)}}Object.assign(r,w.default.BrowserWindow),Object.defineProperty(r,"name",{value:"BrowserWindow",configurable:!0});let n=require.resolve("electron");delete require.cache[n].exports,require.cache[n].exports={...w.default,BrowserWindow:r},be(global,"appSettings",t=>t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)),process.env.DATA_DIR=(0,N.join)(w.app.getPath("userData"),"..","Vencord"),w.default.app.whenReady().then(()=>{w.default.protocol.registerFileProtocol("vencord",({url:s},o)=>{let a=s.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":o((0,N.join)(__dirname,a));break;default:o({statusCode:403})}});try{e?.enableReactDevtools&&jr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(s=>console.error("[Vencord] Failed to install React Developer Tools",s))}catch{}let t=s=>{let o={};return s.split(";").forEach(a=>{let[u,...l]=a.trim().split(/\s+/g);u&&!Object.prototype.hasOwnProperty.call(o,u)&&(o[u]=l)}),o},i=s=>Object.entries(s).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; ");function c(s,o){if(o in s){let a=t(s[o][0]);for(let u of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[u]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),s[o]=[i(a)]}}w.default.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:s,resourceType:o},a)=>{s&&(o==="mainFrame"&&c(s,"content-security-policy"),o==="stylesheet"&&(s["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:s})})})}console.log("[Vencord] Loading original Discord app.asar");if((0,Lr.readFileSync)(_r,"utf-8").includes('require("../app.asar")')){console.warn("[Vencord] [--> WARNING <--] You have a legacy Vencord install. Please reinject");let e=require("module"),r=e._load;e._load=function(n){return n==="../app.asar"&&(e._load=r,arguments[0]=require.main.filename),r.apply(this,arguments)}}else require(require.main.filename);
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
