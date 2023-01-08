// Vencord f0240ec
// Standalone: true
// Platform: Universal
"use strict";var _=Object.create;var m=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var V=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty;var I=(e,n,r,o)=>{if(n&&typeof n=="object"||typeof n=="function")for(let d of f(n))!O.call(e,d)&&d!==r&&m(e,d,{get:()=>n[d],enumerable:!(o=l(n,d))||o.enumerable});return e};var u=(e,n,r)=>(r=e!=null?_(V(e)):{},I(n||!e||!e.__esModule?m(r,"default",{value:e,enumerable:!0}):r,e));function C(e,n=300){let r;return function(...o){clearTimeout(r),r=setTimeout(()=>{e(...o)},n)}}function g(e){let n={};for(let r in e)n[r]=e[r],n[e[r]]=r;return Object.freeze(n)}var c=g({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",GET_DESKTOP_CAPTURE_SOURCES:"VencordGetDesktopCaptureSources",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor",DOWNLOAD_VENCORD_CSS:"VencordDownloadVencordCss"});var t=u(require("electron")),S=require("fs"),T=require("path");var s=require("electron");function i(e){if(!(e in c))throw new Error(`Event ${e} not allowed.`)}var a={getVersions:()=>process.versions,ipc:{send(e,...n){i(e),s.ipcRenderer.send(e,...n)},sendSync(e,...n){return i(e),s.ipcRenderer.sendSync(e,...n)},on(e,n){i(e),s.ipcRenderer.on(e,n)},off(e,n){i(e),s.ipcRenderer.off(e,n)},invoke(e,...n){return i(e),s.ipcRenderer.invoke(e,...n)}}};if(t.default.desktopCapturer===void 0){let e=require.resolve("electron");delete require.cache[e].exports,require.cache[e].exports={...t.default,desktopCapturer:{getSources:n=>t.ipcRenderer.invoke(c.GET_DESKTOP_CAPTURE_SOURCES,n)}}}t.contextBridge.exposeInMainWorld("VencordNative",a);if(location.protocol!=="data:"){let n=function(r){let o=document.createElement("style");o.id="vencord-css-core",o.textContent=r,document.readyState==="complete"?document.documentElement.appendChild(o):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(o),{once:!0})};K=n,t.webFrame.executeJavaScript((0,S.readFileSync)((0,T.join)(__dirname,"renderer.js"),"utf-8"));let e=(0,T.join)(__dirname,"renderer.css");try{let r=(0,S.readFileSync)(e,"utf-8");n(r)}catch(r){if(r?.code!=="ENOENT")throw r;t.ipcRenderer.invoke(c.DOWNLOAD_VENCORD_CSS).then(n)}require(process.env.DISCORD_PRELOAD)}else t.contextBridge.exposeInMainWorld("setCss",C(e=>a.ipc.invoke(c.SET_QUICK_CSS,e))),t.contextBridge.exposeInMainWorld("getCurrentCss",()=>a.ipc.invoke(c.GET_QUICK_CSS)),t.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");var K;
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
