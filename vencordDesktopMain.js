// Vencord 2e00210
// Standalone: true
// Platform: Universal
"use strict";var ke=Object.create;var Mn=Object.defineProperty;var Oe=Object.getOwnPropertyDescriptor;var Ve=Object.getOwnPropertyNames;var Ue=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty;var O=(n,e)=>()=>(n&&(e=n(n=0)),e);var Ze=(n,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ve(e))!Pe.call(n,i)&&i!==r&&Mn(n,i,{get:()=>e[i],enumerable:!(t=Oe(e,i))||t.enumerable});return n};var We=(n,e,r)=>(r=n!=null?ke(Ue(n)):{},Ze(e||!n||!n.__esModule?Mn(r,"default",{value:n,enumerable:!0}):r,n));var c=O(()=>{"use strict"});var $,wn=O(()=>{c();$="2e00210"});var K,xn=O(()=>{c();K="Vendicated/Vencord"});var Kn,jn=O(()=>{"use strict";c();wn();xn();Kn=`Vencord/${$}${K?` (https://github.com/${K})`:""}`});var ln=O(()=>{"use strict";c()});function j(n,e={}){return new Promise((r,t)=>{_n.default.get(n,e,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void t(`${o}: ${s} - ${n}`);if(o>=300)return void r(j(u.location,e));let a=[];i.on("error",t),i.on("data",f=>a.push(f)),i.once("end",()=>r(Buffer.concat(a)))})})}var _n,Sn=O(()=>{"use strict";c();_n=We(require("https"))});function nn(n){return async function(){try{return{ok:!0,value:await n(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var Bn,Yn=O(()=>{"use strict";c();Bn=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"]});var Ke={};async function bn(n){return j(Le+n,{headers:{Accept:"application/vnd.github+json","User-Agent":Kn}})}async function Fe(){if(!await Qn())return[];let e=await bn(`/compare/${$}...HEAD`);return JSON.parse(e.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function Qn(){let n=await bn("/releases/latest"),e=JSON.parse(n.toString());return e.name.slice(e.name.lastIndexOf(" ")+1)===$?!1:(e.assets.forEach(({name:t,browser_download_url:i})=>{Bn.some(o=>t.startsWith(o))&&Tn.push([t,i])}),!0)}async function Me(){return await Promise.all(Tn.map(async([n,e])=>(0,Hn.writeFile)((0,Jn.join)(__dirname,n),await j(e)))),Tn=[],!0}var en,Hn,Jn,Le,Tn,qn=O(()=>{"use strict";c();jn();ln();en=require("electron"),Hn=require("fs/promises"),Jn=require("path");wn();xn();Sn();Yn();Le=`https://api.github.com/repos/${K}`,Tn=[];en.ipcMain.handle("VencordGetRepo",nn(()=>`https://github.com/${K}`));en.ipcMain.handle("VencordGetUpdates",nn(Fe));en.ipcMain.handle("VencordUpdate",nn(Qn));en.ipcMain.handle("VencordBuild",nn(Me))});c();var Z=require("electron"),ze=require("path");c();c();Promise.resolve().then(()=>qn());c();ln();var tn=require("electron"),$n=require("fs/promises"),ne=require("https"),rn=require("path"),je=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function ee(n){return new Promise((e,r)=>{let t=(0,ne.request)(new URL(n),{method:"HEAD"},i=>{e(i.headers.location?ee(i.headers.location):n)});t.on("error",r),t.end()})}tn.ipcMain.handle("VencordOIAResolveRedirect",async(n,e)=>je.test(e)?ee(e):e);tn.ipcMain.handle("VencordVMReadRecording",async(n,e)=>{e=(0,rn.normalize)(e);let r=(0,rn.basename)(e),t=(0,rn.normalize)(tn.app.getPath("userData")+"/");if(console.log(r,t,e),r!=="recording.ogg"||!e.startsWith(t))return null;try{let i=await(0,$n.readFile)(e);return new Uint8Array(i.buffer)}catch{return null}});c();ln();c();var an=class{constructor(e=1/0){this.maxSize=e}queue=[];promise;next(){let e=this.queue.shift();e?this.promise=Promise.resolve().then(e).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(e){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(e),this.run()}unshift(e){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(e),this.run()}get size(){return this.queue.length}};var A=require("electron"),sn=require("fs"),B=require("fs/promises"),ae=require("path");c();var re="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";c();var te=require("electron"),_=require("path"),En=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,_.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,_.join)(te.app.getPath("userData"),"..","Vencord")),on=(0,_.join)(En,"settings"),hn=(0,_.join)(on,"quickCss.css"),Dn=(0,_.join)(on,"settings.json"),ie=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];(0,sn.mkdirSync)(on,{recursive:!0});function _e(){return(0,B.readFile)(hn,"utf-8").catch(()=>"")}function oe(){try{return(0,sn.readFileSync)(Dn,"utf-8")}catch{return"{}"}}function se(){try{return JSON.parse(oe())}catch{return{}}}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(hn));A.ipcMain.handle("VencordOpenExternal",(n,e)=>{try{var{protocol:r}=new URL(e)}catch{throw"Malformed URL"}if(!ie.includes(r))throw"Disallowed protocol.";A.shell.openExternal(e)});var Be=new an,Ye=new an;A.ipcMain.handle("VencordGetQuickCss",()=>_e());A.ipcMain.handle("VencordSetQuickCss",(n,e)=>Be.push(()=>(0,B.writeFile)(hn,e)));A.ipcMain.handle("VencordGetSettingsDir",()=>on);A.ipcMain.on("VencordGetSettings",n=>n.returnValue=oe());A.ipcMain.handle("VencordSetSettings",(n,e)=>{Ye.push(()=>(0,B.writeFile)(Dn,e))});A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{await new A.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ae.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${re}`)});c();var Ee=require("electron");c();var ce=require("module"),Xe=(0,ce.createRequire)("/"),vn,He=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{vn=Xe("worker_threads").Worker}catch{}var Je=vn?function(n,e,r,t,i){var o=!1,s=new vn(n+He,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(r,t),s.terminate=function(){return o=!0,vn.prototype.terminate.call(s)},s}:function(n,e,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},I=Uint8Array,V=Uint16Array,Gn=Uint32Array,Nn=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kn=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),le=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),he=function(n,e){for(var r=new V(31),t=0;t<31;++t)r[t]=e+=1<<n[t-1];for(var i=new Gn(r[30]),t=1;t<30;++t)for(var o=r[t];o<r[t+1];++o)i[o]=o-r[t]<<5|t;return[r,i]},ge=he(Nn,2),On=ge[0],be=ge[1];On[28]=258,be[258]=28;var ve=he(kn,0),pe=ve[0],rt=ve[1],Cn=new V(32768);for(l=0;l<32768;++l)R=(l&43690)>>>1|(l&21845)<<1,R=(R&52428)>>>2|(R&13107)<<2,R=(R&61680)>>>4|(R&3855)<<4,Cn[l]=((R&65280)>>>8|(R&255)<<8)>>>1;var R,l,Y=function(n,e,r){for(var t=n.length,i=0,o=new V(e);i<t;++i)n[i]&&++o[n[i]-1];var s=new V(e);for(i=0;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(r){u=new V(1<<e);var a=15-e;for(i=0;i<t;++i)if(n[i])for(var f=i<<4|n[i],h=e-n[i],g=s[n[i]-1]++<<h,x=g|(1<<h)-1;g<=x;++g)u[Cn[g]>>>a]=f}else for(u=new V(t),i=0;i<t;++i)n[i]&&(u[i]=Cn[s[n[i]-1]++]>>>15-n[i]);return u},un=new I(288);for(l=0;l<144;++l)un[l]=8;var l;for(l=144;l<256;++l)un[l]=9;var l;for(l=256;l<280;++l)un[l]=7;var l;for(l=280;l<288;++l)un[l]=8;var l,me=new I(32);for(l=0;l<32;++l)me[l]=5;var l;var Ce=Y(un,9,1);var Ie=Y(me,5,1),pn=function(n){for(var e=n[0],r=1;r<n.length;++r)n[r]>e&&(e=n[r]);return e},w=function(n,e,r){var t=e/8|0;return(n[t]|n[t+1]<<8)>>(e&7)&r},mn=function(n,e){var r=e/8|0;return(n[r]|n[r+1]<<8|n[r+2]<<16)>>(e&7)},Ae=function(n){return(n+7)/8|0},In=function(n,e,r){(e==null||e<0)&&(e=0),(r==null||r>n.length)&&(r=n.length);var t=new(n.BYTES_PER_ELEMENT==2?V:n.BYTES_PER_ELEMENT==4?Gn:I)(r-e);return t.set(n.subarray(e,r)),t};var de=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],d=function(n,e,r){var t=new Error(e||de[n]);if(t.code=n,Error.captureStackTrace&&Error.captureStackTrace(t,d),!r)throw t;return t},ye=function(n,e,r){var t=n.length;if(!t||r&&r.f&&!r.l)return e||new I(0);var i=!e||r,o=!r||r.i;r||(r={}),e||(e=new I(t*3));var s=function(Wn){var Ln=e.length;if(Wn>Ln){var Fn=new I(Math.max(Ln*2,Wn));Fn.set(e),e=Fn}},u=r.f||0,a=r.p||0,f=r.b||0,h=r.l,g=r.d,x=r.m,z=r.n,H=t*8;do{if(!h){u=w(n,a,1);var U=w(n,a+1,3);if(a+=3,U)if(U==1)h=Ce,g=Ie,x=9,z=5;else if(U==2){var N=w(n,a,31)+257,W=w(n,a+10,15)+4,J=N+w(n,a+5,31)+1;a+=14;for(var P=new I(J),b=new I(19),p=0;p<W;++p)b[le[p]]=w(n,a+p*3,7);a+=W*3;for(var D=pn(b),fn=(1<<D)-1,L=Y(b,D,1),p=0;p<J;){var Q=L[w(n,a,fn)];a+=Q&15;var v=Q>>>4;if(v<16)P[p++]=v;else{var F=0,cn=0;for(v==16?(cn=3+w(n,a,3),a+=2,F=P[p-1]):v==17?(cn=3+w(n,a,7),a+=3):v==18&&(cn=11+w(n,a,127),a+=7);cn--;)P[p++]=F}}var Un=P.subarray(0,N),k=P.subarray(N);x=pn(Un),z=pn(k),h=Y(Un,x,1),g=Y(k,z,1)}else d(1);else{var v=Ae(a)+4,y=n[v-4]|n[v-3]<<8,G=v+y;if(G>t){o&&d(0);break}i&&s(f+y),e.set(n.subarray(v,G),f),r.b=f+=y,r.p=a=G*8,r.f=u;continue}if(a>H){o&&d(0);break}}i&&s(f+131072);for(var Ge=(1<<x)-1,Ne=(1<<z)-1,An=a;;An=a){var F=h[mn(n,a)&Ge],M=F>>>4;if(a+=F&15,a>H){o&&d(0);break}if(F||d(2),M<256)e[f++]=M;else if(M==256){An=a,h=null;break}else{var Pn=M-254;if(M>264){var p=M-257,q=Nn[p];Pn=w(n,a,(1<<q)-1)+On[p],a+=q}var dn=g[mn(n,a)&Ne],yn=dn>>>4;dn||d(3),a+=dn&15;var k=pe[yn];if(yn>3){var q=kn[yn];k+=mn(n,a)&(1<<q)-1,a+=q}if(a>H){o&&d(0);break}i&&s(f+131072);for(var Zn=f+Pn;f<Zn;f+=4)e[f]=e[f-k],e[f+1]=e[f+1-k],e[f+2]=e[f+2-k],e[f+3]=e[f+3-k];f=Zn}}r.l=h,r.p=An,r.b=f,r.f=u,h&&(u=1,r.m=x,r.d=g,r.n=z)}while(!u);return f==e.length?e:In(e,0,f)};var Qe=new I(0);var qe=function(n,e){var r={};for(var t in n)r[t]=n[t];for(var t in e)r[t]=e[t];return r},ue=function(n,e,r){for(var t=n(),i=n.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var u=t[s],a=o[s];if(typeof u=="function"){e+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;e+=f.slice(h,f.indexOf("(",h))}else{e+=f;for(var g in u.prototype)e+=";"+a+".prototype."+g+"="+u.prototype[g].toString()}else e+=f}else r[a]=u}return[e,r]},gn=[],$e=function(n){var e=[];for(var r in n)n[r].buffer&&e.push((n[r]=new n[r].constructor(n[r])).buffer);return e},nr=function(n,e,r,t){var i;if(!gn[r]){for(var o="",s={},u=n.length-1,a=0;a<u;++a)i=ue(n[a],o,s),o=i[0],s=i[1];gn[r]=ue(n[u],o,s)}var f=qe({},gn[r][1]);return Je(gn[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",r,f,$e(f),t)},er=function(){return[I,V,Gn,Nn,kn,le,On,pe,Ce,Ie,Cn,de,Y,pn,w,mn,Ae,In,d,ye,Vn,we,xe]};var we=function(n){return postMessage(n,[n.buffer])},xe=function(n){return n&&n.size&&new I(n.size)},rr=function(n,e,r,t,i,o){var s=nr(r,t,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([n,e],e.consume?[n.buffer]:[]),function(){s.terminate()}};var T=function(n,e){return n[e]|n[e+1]<<8},S=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Rn=function(n,e){return S(n,e)+S(n,e+4)*4294967296};function tr(n,e,r){return r||(r=e,e={}),typeof r!="function"&&d(7),rr(n,e,[er],function(t){return we(Vn(t.data[0],xe(t.data[1])))},1,r)}function Vn(n,e){return ye(n,e)}var zn=typeof TextDecoder<"u"&&new TextDecoder,ir=0;try{zn.decode(Qe,{stream:!0}),ir=1}catch{}var ar=function(n){for(var e="",r=0;;){var t=n[r++],i=(t>127)+(t>223)+(t>239);if(r+i>n.length)return[e,In(n,r-1)];i?i==3?(t=((t&15)<<18|(n[r++]&63)<<12|(n[r++]&63)<<6|n[r++]&63)-65536,e+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?e+=String.fromCharCode((t&31)<<6|n[r++]&63):e+=String.fromCharCode((t&15)<<12|(n[r++]&63)<<6|n[r++]&63):e+=String.fromCharCode(t)}};function or(n,e){if(e){for(var r="",t=0;t<n.length;t+=16384)r+=String.fromCharCode.apply(null,n.subarray(t,t+16384));return r}else{if(zn)return zn.decode(n);var i=ar(n),o=i[0],s=i[1];return s.length&&d(8),o}}var sr=function(n,e){return e+30+T(n,e+26)+T(n,e+28)},ur=function(n,e,r){var t=T(n,e+28),i=or(n.subarray(e+46,e+46+t),!(T(n,e+8)&2048)),o=e+46+t,s=S(n,e+20),u=r&&s==4294967295?fr(n,o):[s,S(n,e+24),S(n,e+42)],a=u[0],f=u[1],h=u[2];return[T(n,e+10),a,f,i,o+T(n,e+30)+T(n,e+32),h]},fr=function(n,e){for(;T(n,e)!=1;e+=4+T(n,e+2));return[Rn(n,e+12),Rn(n,e+4),Rn(n,e+20)]};var fe=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function Se(n,e,r){r||(r=e,e={}),typeof r!="function"&&d(7);var t=[],i=function(){for(var v=0;v<t.length;++v)t[v]()},o={},s=function(v,y){fe(function(){r(v,y)})};fe(function(){s=r});for(var u=n.length-22;S(n,u)!=101010256;--u)if(!u||n.length-u>65558)return s(d(13,0,1),null),i;var a=T(n,u+8);if(a){var f=a,h=S(n,u+16),g=h==4294967295||f==65535;if(g){var x=S(n,u-12);g=S(n,x)==101075792,g&&(f=a=S(n,x+32),h=S(n,x+48))}for(var z=e&&e.filter,H=function(v){var y=ur(n,h,g),G=y[0],N=y[1],W=y[2],J=y[3],P=y[4],b=y[5],p=sr(n,b);h=P;var D=function(L,Q){L?(i(),s(L,null)):(Q&&(o[J]=Q),--a||s(null,o))};if(!z||z({name:J,size:N,originalSize:W,compression:G}))if(!G)D(null,In(n,p,p+N));else if(G==8){var fn=n.subarray(p,p+N);if(N<32e4)try{D(null,Vn(fn,new I(W)))}catch(L){D(L,null)}else t.push(tr(fn,{size:W},D))}else D(d(14,"unknown compression type "+G,1),null);else D(null,null)},U=0;U<f;++U)H(U)}else s(null,{});return i}var De=require("fs"),E=require("fs/promises"),X=require("path");c();function Te(n){function e(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(n[0]===80&&n[1]===75&&n[2]===3&&n[3]===4)return n;if(n[0]!==67||n[1]!==114||n[2]!==50||n[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=n[4]===3,t=n[4]===2;if(!t&&!r||n[5]||n[6]||n[7])throw new Error("Unexpected crx format version number.");if(t){let s=e(n[8],n[9],n[10],n[11]),u=e(n[12],n[13],n[14],n[15]),a=16+s+u;return n.subarray(a,n.length)}let o=12+e(n[8],n[9],n[10],n[11]);return n.subarray(o,n.length)}Sn();var cr=(0,X.join)(En,"ExtensionCache");async function lr(n,e){return await(0,E.mkdir)(e,{recursive:!0}),new Promise((r,t)=>{Se(n,(i,o)=>{if(i)return void t(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,E.mkdir)((0,X.join)(e,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,X.join)(e,f);f&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,X.join)(h,a),o[s])})).then(()=>r()).catch(s=>{(0,E.rm)(e,{recursive:!0,force:!0}),t(s)})})})}async function Re(n){let e=(0,X.join)(cr,`${n}`);try{await(0,E.access)(e,De.constants.F_OK)}catch{let t=n==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=32`,i=await j(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await lr(Te(i),e).catch(console.error)}Ee.session.defaultSession.loadExtension(e)}Z.app.whenReady().then(()=>{Z.protocol.registerFileProtocol("vencord",({url:t},i)=>{let o=t.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,ze.join)(__dirname,o));break;default:i({statusCode:403})}});try{se().enableReactDevtools&&Re("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let n=t=>{let i={};return t.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},e=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let o=n(t[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[e(o)]}}Z.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},o)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:t})}),Z.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
