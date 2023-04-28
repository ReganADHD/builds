// Vencord 7b13b9a
// Standalone: true
// Platform: Universal
"use strict";var De=Object.create;var Wn=Object.defineProperty;var ze=Object.getOwnPropertyDescriptor;var Re=Object.getOwnPropertyNames;var Ge=Object.getPrototypeOf,ke=Object.prototype.hasOwnProperty;var N=(n,e)=>()=>(n&&(e=n(n=0)),e);var Oe=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Re(e))!ke.call(n,i)&&i!==t&&Wn(n,i,{get:()=>e[i],enumerable:!(r=ze(e,i))||r.enumerable});return n};var Pe=(n,e,t)=>(t=n!=null?De(Ge(n)):{},Oe(e||!n||!n.__esModule?Wn(t,"default",{value:n,enumerable:!0}):t,n));var c=N(()=>{"use strict"});var nn,yn=N(()=>{c();nn="7b13b9a"});var B,An=N(()=>{c();B="Vendicated/Vencord"});var Mn,Kn=N(()=>{"use strict";c();yn();An();Mn=`Vencord/${nn}${B?` (https://github.com/${B})`:""}`});function Ne(n){let e={};for(let t in n)e[t]=n[t],e[n[t]]=t;return Object.freeze(e)}var I,wn=N(()=>{"use strict";c();I=Ne({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function j(n,e={}){return new Promise((t,r)=>{Bn.default.get(n,e,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void r(`${o}: ${s} - ${n}`);if(o>=300)return void t(j(u.location,e));let a=[];i.on("error",r),i.on("data",f=>a.push(f)),i.once("end",()=>t(Buffer.concat(a)))})})}var Bn,xn=N(()=>{"use strict";c();Bn=Pe(require("https"))});function en(n){return async function(){try{return{ok:!0,value:await n(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var jn,_n=N(()=>{"use strict";c();jn=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"]});var Le={};async function Jn(n){return j(Ze+n,{headers:{Accept:"application/vnd.github+json","User-Agent":Mn}})}async function Ve(){if(!await Xn())return[];let e=await Jn(`/compare/${nn}...HEAD`);return JSON.parse(e.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function Xn(){let n=await Jn("/releases/latest"),e=JSON.parse(n.toString());return e.name.slice(e.name.lastIndexOf(" ")+1)===nn?!1:(e.assets.forEach(({name:r,browser_download_url:i})=>{jn.some(o=>r.startsWith(o))&&Sn.push([r,i])}),!0)}async function Ue(){return await Promise.all(Sn.map(async([n,e])=>(0,Hn.writeFile)((0,Yn.join)(__dirname,n),await j(e)))),Sn=[],!0}var tn,Hn,Yn,Ze,Sn,Qn=N(()=>{"use strict";c();Kn();wn();tn=require("electron"),Hn=require("fs/promises"),Yn=require("path");yn();An();xn();_n();Ze=`https://api.github.com/repos/${B}`,Sn=[];tn.ipcMain.handle(I.GET_REPO,en(()=>`https://github.com/${B}`));tn.ipcMain.handle(I.GET_UPDATES,en(Ve));tn.ipcMain.handle(I.UPDATE,en(Xn));tn.ipcMain.handle(I.BUILD,en(Ue))});c();var L=require("electron"),Se=require("path");c();c();Promise.resolve().then(()=>Qn());c();wn();c();var rn=class{constructor(e=1/0){this.maxSize=e}queue=[];promise;next(){let e=this.queue.shift();e?this.promise=Promise.resolve().then(e).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(e){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(e),this.run()}unshift(e){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(e),this.run()}get size(){return this.queue.length}};var y=require("electron"),on=require("fs"),H=require("fs/promises"),ne=require("path");c();var qn="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlZlbmNvcmQgUXVpY2tDU1MgRWRpdG9yPC90aXRsZT4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgZGF0YS1uYW1lPSJ2cy9lZGl0b3IvZWRpdG9yLm1haW4iCiAgICAgICAgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM0LjAvbWluL3ZzL2VkaXRvci9lZGl0b3IubWFpbi5taW4uY3NzIj4KICAgIDxzdHlsZT4KICAgICAgICBodG1sLAogICAgICAgIGJvZHksCiAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgbGVmdDogMDsKICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgICAgfQogICAgPC9zdHlsZT4KPC9oZWFkPgoKPGJvZHk+CiAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9sb2FkZXIubWluLmpzIj48L3NjcmlwdD4KCiAgICA8c2NyaXB0PgogICAgICAgIHJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgJ3ZzJzogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cycgfSB9KTsKICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgZ2V0Q3VycmVudENzcygpLnRoZW4oY3NzID0+IHsKICAgICAgICAgICAgICAgIHZhciBlZGl0b3IgPSBtb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyksIHsKICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3NzLAogICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnY3NzJywKICAgICAgICAgICAgICAgICAgICB0aGVtZTogZ2V0VGhlbWUoKSwKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+CiAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmxheW91dCgpOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0pOwoKCiAgICA8L3NjcmlwdD4KPC9ib2R5PgoKPC9odG1sPgo=";c();var bn=require("electron"),_=require("path"),Tn=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,_.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,_.join)(bn.app.getPath("userData"),"..","Vencord")),an=(0,_.join)(Tn,"settings"),cn=(0,_.join)(an,"quickCss.css"),En=(0,_.join)(an,"settings.json"),$n=["https:","http:","steam:","spotify:"];(0,on.mkdirSync)(an,{recursive:!0});function Fe(){return(0,H.readFile)(cn,"utf-8").catch(()=>"")}function ee(){try{return(0,on.readFileSync)(En,"utf-8")}catch{return"{}"}}function te(){try{return JSON.parse(ee())}catch{return{}}}y.ipcMain.handle(I.OPEN_QUICKCSS,()=>y.shell.openPath(cn));y.ipcMain.handle(I.OPEN_EXTERNAL,(n,e)=>{try{var{protocol:t}=new URL(e)}catch{throw"Malformed URL"}if(!$n.includes(t))throw"Disallowed protocol.";y.shell.openExternal(e)});var We=new rn,Me=new rn;y.ipcMain.handle(I.GET_QUICK_CSS,()=>Fe());y.ipcMain.handle(I.SET_QUICK_CSS,(n,e)=>We.push(()=>(0,H.writeFile)(cn,e)));y.ipcMain.handle(I.GET_SETTINGS_DIR,()=>an);y.ipcMain.on(I.GET_SETTINGS,n=>n.returnValue=ee());y.ipcMain.handle(I.SET_SETTINGS,(n,e)=>{Me.push(()=>(0,H.writeFile)(En,e))});y.ipcMain.handle(I.OPEN_MONACO_EDITOR,async()=>{await new y.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ne.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${qn}`)});c();var Ae=require("electron");c();var ae=require("module"),Ke=(0,ae.createRequire)("/"),hn,Be=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{hn=Ke("worker_threads").Worker}catch{}var je=hn?function(n,e,t,r,i){var o=!1,s=new hn(n+Be,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(t,r),s.terminate=function(){return o=!0,hn.prototype.terminate.call(s)},s}:function(n,e,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},C=Uint8Array,Z=Uint16Array,Rn=Uint32Array,Gn=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kn=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),oe=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),se=function(n,e){for(var t=new Z(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new Rn(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},ue=se(Gn,2),On=ue[0],_e=ue[1];On[28]=258,_e[258]=28;var fe=se(kn,0),ce=fe[0],Jt=fe[1],gn=new Z(32768);for(l=0;l<32768;++l)R=(l&43690)>>>1|(l&21845)<<1,R=(R&52428)>>>2|(R&13107)<<2,R=(R&61680)>>>4|(R&3855)<<4,gn[l]=((R&65280)>>>8|(R&255)<<8)>>>1;var R,l,Y=function(n,e,t){for(var r=n.length,i=0,o=new Z(e);i<r;++i)n[i]&&++o[n[i]-1];var s=new Z(e);for(i=0;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(t){u=new Z(1<<e);var a=15-e;for(i=0;i<r;++i)if(n[i])for(var f=i<<4|n[i],h=e-n[i],v=s[n[i]-1]++<<h,S=v|(1<<h)-1;v<=S;++v)u[gn[v]>>>a]=f}else for(u=new Z(r),i=0;i<r;++i)n[i]&&(u[i]=gn[s[n[i]-1]++]>>>15-n[i]);return u},sn=new C(288);for(l=0;l<144;++l)sn[l]=8;var l;for(l=144;l<256;++l)sn[l]=9;var l;for(l=256;l<280;++l)sn[l]=7;var l;for(l=280;l<288;++l)sn[l]=8;var l,le=new C(32);for(l=0;l<32;++l)le[l]=5;var l;var he=Y(sn,9,1);var ve=Y(le,5,1),vn=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},x=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},pn=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},pe=function(n){return(n+7)/8|0},mn=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n.BYTES_PER_ELEMENT==2?Z:n.BYTES_PER_ELEMENT==4?Rn:C)(t-e);return r.set(n.subarray(e,t)),r};var ge=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(n,e,t){var r=new Error(e||ge[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,A),!t)throw r;return r},me=function(n,e,t){var r=n.length;if(!r||t&&t.f&&!t.l)return e||new C(0);var i=!e||t,o=!t||t.i;t||(t={}),e||(e=new C(r*3));var s=function(Un){var Ln=e.length;if(Un>Ln){var Fn=new C(Math.max(Ln*2,Un));Fn.set(e),e=Fn}},u=t.f||0,a=t.p||0,f=t.b||0,h=t.l,v=t.d,S=t.m,G=t.n,X=r*8;do{if(!h){u=x(n,a,1);var V=x(n,a+1,3);if(a+=3,V)if(V==1)h=he,v=ve,S=9,G=5;else if(V==2){var O=x(n,a,31)+257,F=x(n,a+10,15)+4,Q=O+x(n,a+5,31)+1;a+=14;for(var U=new C(Q),q=new C(19),g=0;g<F;++g)q[oe[g]]=x(n,a+g*3,7);a+=F*3;for(var z=vn(q),un=(1<<z)-1,W=Y(q,z,1),g=0;g<Q;){var b=W[x(n,a,un)];a+=b&15;var p=b>>>4;if(p<16)U[g++]=p;else{var M=0,fn=0;for(p==16?(fn=3+x(n,a,3),a+=2,M=U[g-1]):p==17?(fn=3+x(n,a,7),a+=3):p==18&&(fn=11+x(n,a,127),a+=7);fn--;)U[g++]=M}}var Nn=U.subarray(0,O),P=U.subarray(O);S=vn(Nn),G=vn(P),h=Y(Nn,S,1),v=Y(P,G,1)}else A(1);else{var p=pe(a)+4,w=n[p-4]|n[p-3]<<8,k=p+w;if(k>r){o&&A(0);break}i&&s(f+w),e.set(n.subarray(p,k),f),t.b=f+=w,t.p=a=k*8,t.f=u;continue}if(a>X){o&&A(0);break}}i&&s(f+131072);for(var Te=(1<<S)-1,Ee=(1<<G)-1,dn=a;;dn=a){var M=h[pn(n,a)&Te],K=M>>>4;if(a+=M&15,a>X){o&&A(0);break}if(M||A(2),K<256)e[f++]=K;else if(K==256){dn=a,h=null;break}else{var Zn=K-254;if(K>264){var g=K-257,$=Gn[g];Zn=x(n,a,(1<<$)-1)+On[g],a+=$}var Cn=v[pn(n,a)&Ee],In=Cn>>>4;Cn||A(3),a+=Cn&15;var P=ce[In];if(In>3){var $=kn[In];P+=pn(n,a)&(1<<$)-1,a+=$}if(a>X){o&&A(0);break}i&&s(f+131072);for(var Vn=f+Zn;f<Vn;f+=4)e[f]=e[f-P],e[f+1]=e[f+1-P],e[f+2]=e[f+2-P],e[f+3]=e[f+3-P];f=Vn}}t.l=h,t.p=dn,t.b=f,t.f=u,h&&(u=1,t.m=S,t.d=v,t.n=G)}while(!u);return f==e.length?e:mn(e,0,f)};var He=new C(0);var Ye=function(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t},re=function(n,e,t){for(var r=n(),i=n.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var u=r[s],a=o[s];if(typeof u=="function"){e+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;e+=f.slice(h,f.indexOf("(",h))}else{e+=f;for(var v in u.prototype)e+=";"+a+".prototype."+v+"="+u.prototype[v].toString()}else e+=f}else t[a]=u}return[e,t]},ln=[],Je=function(n){var e=[];for(var t in n)n[t].buffer&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},Xe=function(n,e,t,r){var i;if(!ln[t]){for(var o="",s={},u=n.length-1,a=0;a<u;++a)i=re(n[a],o,s),o=i[0],s=i[1];ln[t]=re(n[u],o,s)}var f=Ye({},ln[t][1]);return je(ln[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,f,Je(f),r)},Qe=function(){return[C,Z,Rn,Gn,kn,oe,On,ce,he,ve,gn,ge,Y,vn,x,pn,pe,mn,A,me,Pn,de,Ce]};var de=function(n){return postMessage(n,[n.buffer])},Ce=function(n){return n&&n.size&&new C(n.size)},qe=function(n,e,t,r,i,o){var s=Xe(t,r,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([n,e],e.consume?[n.buffer]:[]),function(){s.terminate()}};var E=function(n,e){return n[e]|n[e+1]<<8},T=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Dn=function(n,e){return T(n,e)+T(n,e+4)*4294967296};function be(n,e,t){return t||(t=e,e={}),typeof t!="function"&&A(7),qe(n,e,[Qe],function(r){return de(Pn(r.data[0],Ce(r.data[1])))},1,t)}function Pn(n,e){return me(n,e)}var zn=typeof TextDecoder<"u"&&new TextDecoder,$e=0;try{zn.decode(He,{stream:!0}),$e=1}catch{}var nt=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,mn(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}};function et(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(zn)return zn.decode(n);var i=nt(n),o=i[0],s=i[1];return s.length&&A(8),o}}var tt=function(n,e){return e+30+E(n,e+26)+E(n,e+28)},rt=function(n,e,t){var r=E(n,e+28),i=et(n.subarray(e+46,e+46+r),!(E(n,e+8)&2048)),o=e+46+r,s=T(n,e+20),u=t&&s==4294967295?it(n,o):[s,T(n,e+24),T(n,e+42)],a=u[0],f=u[1],h=u[2];return[E(n,e+10),a,f,i,o+E(n,e+30)+E(n,e+32),h]},it=function(n,e){for(;E(n,e)!=1;e+=4+E(n,e+2));return[Dn(n,e+12),Dn(n,e+4),Dn(n,e+20)]};var ie=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function Ie(n,e,t){t||(t=e,e={}),typeof t!="function"&&A(7);var r=[],i=function(){for(var p=0;p<r.length;++p)r[p]()},o={},s=function(p,w){ie(function(){t(p,w)})};ie(function(){s=t});for(var u=n.length-22;T(n,u)!=101010256;--u)if(!u||n.length-u>65558)return s(A(13,0,1),null),i;var a=E(n,u+8);if(a){var f=a,h=T(n,u+16),v=h==4294967295||f==65535;if(v){var S=T(n,u-12);v=T(n,S)==101075792,v&&(f=a=T(n,S+32),h=T(n,S+48))}for(var G=e&&e.filter,X=function(p){var w=rt(n,h,v),k=w[0],O=w[1],F=w[2],Q=w[3],U=w[4],q=w[5],g=tt(n,q);h=U;var z=function(W,b){W?(i(),s(W,null)):(b&&(o[Q]=b),--a||s(null,o))};if(!G||G({name:Q,size:O,originalSize:F,compression:k}))if(!k)z(null,mn(n,g,g+O));else if(k==8){var un=n.subarray(g,g+O);if(O<32e4)try{z(null,Pn(un,new C(F)))}catch(W){z(W,null)}else r.push(be(un,{size:F},z))}else z(A(14,"unknown compression type "+k,1),null);else z(null,null)},V=0;V<f;++V)X(V)}else s(null,{});return i}var we=require("fs"),D=require("fs/promises"),J=require("path");c();function ye(n){function e(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(n[0]===80&&n[1]===75&&n[2]===3&&n[3]===4)return n;if(n[0]!==67||n[1]!==114||n[2]!==50||n[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=n[4]===3,r=n[4]===2;if(!r&&!t||n[5]||n[6]||n[7])throw new Error("Unexpected crx format version number.");if(r){let s=e(n[8],n[9],n[10],n[11]),u=e(n[12],n[13],n[14],n[15]),a=16+s+u;return n.subarray(a,n.length)}let o=12+e(n[8],n[9],n[10],n[11]);return n.subarray(o,n.length)}xn();var at=(0,J.join)(Tn,"ExtensionCache");async function ot(n,e){return await(0,D.mkdir)(e,{recursive:!0}),new Promise((t,r)=>{Ie(n,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,D.mkdir)((0,J.join)(e,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,J.join)(e,f);f&&await(0,D.mkdir)(h,{recursive:!0}),await(0,D.writeFile)((0,J.join)(h,a),o[s])})).then(()=>t()).catch(s=>{(0,D.rm)(e,{recursive:!0,force:!0}),r(s)})})})}async function xe(n){let e=(0,J.join)(at,`${n}`);try{await(0,D.access)(e,we.constants.F_OK)}catch{let r=n==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=32`,i=await j(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ot(ye(i),e).catch(console.error)}Ae.session.defaultSession.loadExtension(e)}L.app.whenReady().then(()=>{L.protocol.registerFileProtocol("vencord",({url:r},i)=>{let o=r.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,Se.join)(__dirname,o));break;default:i({statusCode:403})}});try{te().enableReactDevtools&&xe("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let n=r=>{let i={};return r.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},e=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let o=n(r[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[e(o)]}}L.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},o)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:r})}),L.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
