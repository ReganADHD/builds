// Vencord a35b417
// Standalone: true
// Platform: Universal
"use strict";var De=Object.create;var Ln=Object.defineProperty;var ze=Object.getOwnPropertyDescriptor;var Re=Object.getOwnPropertyNames;var ke=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty;var U=(n,e)=>()=>(n&&(e=n(n=0)),e);var Ne=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Re(e))!Ge.call(n,i)&&i!==t&&Ln(n,i,{get:()=>e[i],enumerable:!(r=ze(e,i))||r.enumerable});return n};var Ve=(n,e,t)=>(t=n!=null?De(ke(n)):{},Ne(e||!n||!n.__esModule?Ln(t,"default",{value:n,enumerable:!0}):t,n));var c=U(()=>{"use strict"});var nn,dn=U(()=>{c();nn="a35b417"});var B,yn=U(()=>{c();B="Vendicated/Vencord"});var Kn,Fn=U(()=>{"use strict";c();dn();yn();Kn=`Vencord/${nn}${B?` (https://github.com/${B})`:""}`});function Ue(n){let e={};for(let t in n)e[t]=n[t],e[n[t]]=t;return Object.freeze(e)}var A,wn=U(()=>{"use strict";c();A=Ue({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function j(n,e={}){return new Promise((t,r)=>{Bn.default.get(n,e,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void r(`${o}: ${s} - ${n}`);if(o>=300)return void t(j(u.location,e));let a=[];i.on("error",r),i.on("data",f=>a.push(f)),i.once("end",()=>t(Buffer.concat(a)))})})}var Bn,xn=U(()=>{"use strict";c();Bn=Ve(require("https"))});function en(n){return async function(){try{return{ok:!0,value:await n(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var jn,_n=U(()=>{"use strict";c();jn=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"]});var Pe={};async function Hn(n){return j(Oe+n,{headers:{Accept:"application/vnd.github+json","User-Agent":Kn}})}async function Ze(){if(!await Jn())return[];let e=await Hn(`/compare/${nn}...HEAD`);return JSON.parse(e.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function Jn(){let n=await Hn("/releases/latest"),e=JSON.parse(n.toString());return e.name.slice(e.name.lastIndexOf(" ")+1)===nn?!1:(e.assets.forEach(({name:r,browser_download_url:i})=>{jn.some(o=>r.startsWith(o))&&Sn.push([r,i])}),!0)}async function Me(){return await Promise.all(Sn.map(async([n,e])=>(0,Xn.writeFile)((0,Yn.join)(__dirname,n),await j(e)))),Sn=[],!0}var tn,Xn,Yn,Oe,Sn,Qn=U(()=>{"use strict";c();Fn();wn();tn=require("electron"),Xn=require("fs/promises"),Yn=require("path");dn();yn();xn();_n();Oe=`https://api.github.com/repos/${B}`,Sn=[];tn.ipcMain.handle(A.GET_REPO,en(()=>`https://github.com/${B}`));tn.ipcMain.handle(A.GET_UPDATES,en(Ze));tn.ipcMain.handle(A.UPDATE,en(Jn));tn.ipcMain.handle(A.BUILD,en(Me))});c();var P=require("electron"),Se=require("path");c();c();Promise.resolve().then(()=>Qn());c();wn();c();var rn=class{constructor(e=1/0){this.maxSize=e}queue=[];promise;next(){let e=this.queue.shift();e?this.promise=Promise.resolve().then(e).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(e){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(e),this.run()}unshift(e){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(e),this.run()}get size(){return this.queue.length}};var d=require("electron"),on=require("fs"),X=require("fs/promises"),ne=require("path");c();var qn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLXdCM3hmTDk4aFdnMWJwa1ZZU3lMMGpzL0p4OXM3RnNEZzlhWU82bk9NU0pUZ1B1ay9QRnF4WFFKS0tTVWp0ZVpqZVlyZmdvOU5GQk9BMXI5SHdEdVp3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM3LjEvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLUErNlN2UEdrSU45UmYwbVVYbVc0eGg3ckR2QUxYZi9mMFZ0T1VpSGxEVVNQa251MmtjZnoxS3pMcE9KeUwycE8rblpTMTNoaElqTHFWZ2lRRXhMSnJ3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";c();var bn=require("electron"),_=require("path"),Tn=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,_.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,_.join)(bn.app.getPath("userData"),"..","Vencord")),an=(0,_.join)(Tn,"settings"),cn=(0,_.join)(an,"quickCss.css"),En=(0,_.join)(an,"settings.json"),$n=["https:","http:","steam:","spotify:"];(0,on.mkdirSync)(an,{recursive:!0});function We(){return(0,X.readFile)(cn,"utf-8").catch(()=>"")}function ee(){try{return(0,on.readFileSync)(En,"utf-8")}catch{return"{}"}}function te(){try{return JSON.parse(ee())}catch{return{}}}d.ipcMain.handle(A.OPEN_QUICKCSS,()=>d.shell.openPath(cn));d.ipcMain.handle(A.OPEN_EXTERNAL,(n,e)=>{try{var{protocol:t}=new URL(e)}catch{throw"Malformed URL"}if(!$n.includes(t))throw"Disallowed protocol.";d.shell.openExternal(e)});var Le=new rn,Ke=new rn;d.ipcMain.handle(A.GET_QUICK_CSS,()=>We());d.ipcMain.handle(A.SET_QUICK_CSS,(n,e)=>Le.push(()=>(0,X.writeFile)(cn,e)));d.ipcMain.handle(A.GET_SETTINGS_DIR,()=>an);d.ipcMain.on(A.GET_SETTINGS,n=>n.returnValue=ee());d.ipcMain.handle(A.SET_SETTINGS,(n,e)=>{Ke.push(()=>(0,X.writeFile)(En,e))});d.ipcMain.handle(A.OPEN_MONACO_EDITOR,async()=>{await new d.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ne.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${qn}`)});c();var ye=require("electron");c();var ae=require("module"),Fe=(0,ae.createRequire)("/"),hn,Be=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{hn=Fe("worker_threads").Worker}catch{}var je=hn?function(n,e,t,r,i){var o=!1,s=new hn(n+Be,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(t,r),s.terminate=function(){return o=!0,hn.prototype.terminate.call(s)},s}:function(n,e,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},C=Uint8Array,O=Uint16Array,Rn=Uint32Array,kn=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gn=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),oe=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),se=function(n,e){for(var t=new O(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new Rn(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},ue=se(kn,2),Nn=ue[0],_e=ue[1];Nn[28]=258,_e[258]=28;var fe=se(Gn,0),ce=fe[0],Ht=fe[1],pn=new O(32768);for(l=0;l<32768;++l)R=(l&43690)>>>1|(l&21845)<<1,R=(R&52428)>>>2|(R&13107)<<2,R=(R&61680)>>>4|(R&3855)<<4,pn[l]=((R&65280)>>>8|(R&255)<<8)>>>1;var R,l,Y=function(n,e,t){for(var r=n.length,i=0,o=new O(e);i<r;++i)n[i]&&++o[n[i]-1];var s=new O(e);for(i=0;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(t){u=new O(1<<e);var a=15-e;for(i=0;i<r;++i)if(n[i])for(var f=i<<4|n[i],h=e-n[i],g=s[n[i]-1]++<<h,S=g|(1<<h)-1;g<=S;++g)u[pn[g]>>>a]=f}else for(u=new O(r),i=0;i<r;++i)n[i]&&(u[i]=pn[s[n[i]-1]++]>>>15-n[i]);return u},sn=new C(288);for(l=0;l<144;++l)sn[l]=8;var l;for(l=144;l<256;++l)sn[l]=9;var l;for(l=256;l<280;++l)sn[l]=7;var l;for(l=280;l<288;++l)sn[l]=8;var l,le=new C(32);for(l=0;l<32;++l)le[l]=5;var l;var he=Y(sn,9,1);var ge=Y(le,5,1),gn=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},x=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},vn=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},ve=function(n){return(n+7)/8|0},In=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n.BYTES_PER_ELEMENT==2?O:n.BYTES_PER_ELEMENT==4?Rn:C)(t-e);return r.set(n.subarray(e,t)),r};var pe=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(n,e,t){var r=new Error(e||pe[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,y),!t)throw r;return r},Ie=function(n,e,t){var r=n.length;if(!r||t&&t.f&&!t.l)return e||new C(0);var i=!e||t,o=!t||t.i;t||(t={}),e||(e=new C(r*3));var s=function(Mn){var Pn=e.length;if(Mn>Pn){var Wn=new C(Math.max(Pn*2,Mn));Wn.set(e),e=Wn}},u=t.f||0,a=t.p||0,f=t.b||0,h=t.l,g=t.d,S=t.m,k=t.n,J=r*8;do{if(!h){u=x(n,a,1);var Z=x(n,a+1,3);if(a+=3,Z)if(Z==1)h=he,g=ge,S=9,k=5;else if(Z==2){var N=x(n,a,31)+257,W=x(n,a+10,15)+4,Q=N+x(n,a+5,31)+1;a+=14;for(var M=new C(Q),q=new C(19),p=0;p<W;++p)q[oe[p]]=x(n,a+p*3,7);a+=W*3;for(var z=gn(q),un=(1<<z)-1,L=Y(q,z,1),p=0;p<Q;){var b=L[x(n,a,un)];a+=b&15;var v=b>>>4;if(v<16)M[p++]=v;else{var K=0,fn=0;for(v==16?(fn=3+x(n,a,3),a+=2,K=M[p-1]):v==17?(fn=3+x(n,a,7),a+=3):v==18&&(fn=11+x(n,a,127),a+=7);fn--;)M[p++]=K}}var Un=M.subarray(0,N),V=M.subarray(N);S=gn(Un),k=gn(V),h=Y(Un,S,1),g=Y(V,k,1)}else y(1);else{var v=ve(a)+4,w=n[v-4]|n[v-3]<<8,G=v+w;if(G>r){o&&y(0);break}i&&s(f+w),e.set(n.subarray(v,G),f),t.b=f+=w,t.p=a=G*8,t.f=u;continue}if(a>J){o&&y(0);break}}i&&s(f+131072);for(var Te=(1<<S)-1,Ee=(1<<k)-1,mn=a;;mn=a){var K=h[vn(n,a)&Te],F=K>>>4;if(a+=K&15,a>J){o&&y(0);break}if(K||y(2),F<256)e[f++]=F;else if(F==256){mn=a,h=null;break}else{var On=F-254;if(F>264){var p=F-257,$=kn[p];On=x(n,a,(1<<$)-1)+Nn[p],a+=$}var Cn=g[vn(n,a)&Ee],An=Cn>>>4;Cn||y(3),a+=Cn&15;var V=ce[An];if(An>3){var $=Gn[An];V+=vn(n,a)&(1<<$)-1,a+=$}if(a>J){o&&y(0);break}i&&s(f+131072);for(var Zn=f+On;f<Zn;f+=4)e[f]=e[f-V],e[f+1]=e[f+1-V],e[f+2]=e[f+2-V],e[f+3]=e[f+3-V];f=Zn}}t.l=h,t.p=mn,t.b=f,t.f=u,h&&(u=1,t.m=S,t.d=g,t.n=k)}while(!u);return f==e.length?e:In(e,0,f)};var Xe=new C(0);var Ye=function(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t},re=function(n,e,t){for(var r=n(),i=n.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var u=r[s],a=o[s];if(typeof u=="function"){e+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;e+=f.slice(h,f.indexOf("(",h))}else{e+=f;for(var g in u.prototype)e+=";"+a+".prototype."+g+"="+u.prototype[g].toString()}else e+=f}else t[a]=u}return[e,t]},ln=[],He=function(n){var e=[];for(var t in n)n[t].buffer&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},Je=function(n,e,t,r){var i;if(!ln[t]){for(var o="",s={},u=n.length-1,a=0;a<u;++a)i=re(n[a],o,s),o=i[0],s=i[1];ln[t]=re(n[u],o,s)}var f=Ye({},ln[t][1]);return je(ln[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,f,He(f),r)},Qe=function(){return[C,O,Rn,kn,Gn,oe,Nn,ce,he,ge,pn,pe,Y,gn,x,vn,ve,In,y,Ie,Vn,me,Ce]};var me=function(n){return postMessage(n,[n.buffer])},Ce=function(n){return n&&n.size&&new C(n.size)},qe=function(n,e,t,r,i,o){var s=Je(t,r,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([n,e],e.consume?[n.buffer]:[]),function(){s.terminate()}};var E=function(n,e){return n[e]|n[e+1]<<8},T=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Dn=function(n,e){return T(n,e)+T(n,e+4)*4294967296};function be(n,e,t){return t||(t=e,e={}),typeof t!="function"&&y(7),qe(n,e,[Qe],function(r){return me(Vn(r.data[0],Ce(r.data[1])))},1,t)}function Vn(n,e){return Ie(n,e)}var zn=typeof TextDecoder<"u"&&new TextDecoder,$e=0;try{zn.decode(Xe,{stream:!0}),$e=1}catch{}var nt=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,In(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}};function et(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(zn)return zn.decode(n);var i=nt(n),o=i[0],s=i[1];return s.length&&y(8),o}}var tt=function(n,e){return e+30+E(n,e+26)+E(n,e+28)},rt=function(n,e,t){var r=E(n,e+28),i=et(n.subarray(e+46,e+46+r),!(E(n,e+8)&2048)),o=e+46+r,s=T(n,e+20),u=t&&s==4294967295?it(n,o):[s,T(n,e+24),T(n,e+42)],a=u[0],f=u[1],h=u[2];return[E(n,e+10),a,f,i,o+E(n,e+30)+E(n,e+32),h]},it=function(n,e){for(;E(n,e)!=1;e+=4+E(n,e+2));return[Dn(n,e+12),Dn(n,e+4),Dn(n,e+20)]};var ie=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function Ae(n,e,t){t||(t=e,e={}),typeof t!="function"&&y(7);var r=[],i=function(){for(var v=0;v<r.length;++v)r[v]()},o={},s=function(v,w){ie(function(){t(v,w)})};ie(function(){s=t});for(var u=n.length-22;T(n,u)!=101010256;--u)if(!u||n.length-u>65558)return s(y(13,0,1),null),i;var a=E(n,u+8);if(a){var f=a,h=T(n,u+16),g=h==4294967295||f==65535;if(g){var S=T(n,u-12);g=T(n,S)==101075792,g&&(f=a=T(n,S+32),h=T(n,S+48))}for(var k=e&&e.filter,J=function(v){var w=rt(n,h,g),G=w[0],N=w[1],W=w[2],Q=w[3],M=w[4],q=w[5],p=tt(n,q);h=M;var z=function(L,b){L?(i(),s(L,null)):(b&&(o[Q]=b),--a||s(null,o))};if(!k||k({name:Q,size:N,originalSize:W,compression:G}))if(!G)z(null,In(n,p,p+N));else if(G==8){var un=n.subarray(p,p+N);if(N<32e4)try{z(null,Vn(un,new C(W)))}catch(L){z(L,null)}else r.push(be(un,{size:W},z))}else z(y(14,"unknown compression type "+G,1),null);else z(null,null)},Z=0;Z<f;++Z)J(Z)}else s(null,{});return i}var we=require("fs"),D=require("fs/promises"),H=require("path");c();function de(n){function e(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(n[0]===80&&n[1]===75&&n[2]===3&&n[3]===4)return n;if(n[0]!==67||n[1]!==114||n[2]!==50||n[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=n[4]===3,r=n[4]===2;if(!r&&!t||n[5]||n[6]||n[7])throw new Error("Unexpected crx format version number.");if(r){let s=e(n[8],n[9],n[10],n[11]),u=e(n[12],n[13],n[14],n[15]),a=16+s+u;return n.subarray(a,n.length)}let o=12+e(n[8],n[9],n[10],n[11]);return n.subarray(o,n.length)}xn();var at=(0,H.join)(Tn,"ExtensionCache");async function ot(n,e){return await(0,D.mkdir)(e,{recursive:!0}),new Promise((t,r)=>{Ae(n,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,D.mkdir)((0,H.join)(e,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,H.join)(e,f);f&&await(0,D.mkdir)(h,{recursive:!0}),await(0,D.writeFile)((0,H.join)(h,a),o[s])})).then(()=>t()).catch(s=>{(0,D.rm)(e,{recursive:!0,force:!0}),r(s)})})})}async function xe(n){let e=(0,H.join)(at,`${n}`);try{await(0,D.access)(e,we.constants.F_OK)}catch{let r=n==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=32`,i=await j(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ot(de(i),e).catch(console.error)}ye.session.defaultSession.loadExtension(e)}P.app.whenReady().then(()=>{P.protocol.registerFileProtocol("vencord",({url:r},i)=>{let o=r.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,Se.join)(__dirname,o));break;default:i({statusCode:403})}});try{te().enableReactDevtools&&xe("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let n=r=>{let i={};return r.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},e=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let o=n(r[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[e(o)]}}P.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},o)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:r})}),P.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
