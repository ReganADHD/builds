// Vencord ed873ef
// Standalone: true
// Platform: Universal
"use strict";function u(e,n=300){let t;return function(...a){clearTimeout(t),t=setTimeout(()=>{e(...a)},n)}}function S(e){let n={};for(let t in e)n[t]=e[t],n[e[t]]=t;return Object.freeze(n)}var s=S({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"});var r=require("electron"),E=require("fs"),T=require("path");var o=require("electron");function c(e){if(!(e in s))throw new Error(`Event ${e} not allowed.`)}var i={getVersions:()=>process.versions,ipc:{send(e,...n){c(e),o.ipcRenderer.send(e,...n)},sendSync(e,...n){return c(e),o.ipcRenderer.sendSync(e,...n)},on(e,n){c(e),o.ipcRenderer.on(e,n)},off(e,n){c(e),o.ipcRenderer.off(e,n)},invoke(e,...n){return c(e),o.ipcRenderer.invoke(e,...n)}}};r.contextBridge.exposeInMainWorld("VencordNative",i);if(location.protocol!=="data:"){let n=function(a){let d=document.createElement("style");d.id="vencord-css-core",d.textContent=a,document.readyState==="complete"?document.documentElement.appendChild(d):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(d),{once:!0})};v=n,r.webFrame.executeJavaScript((0,E.readFileSync)((0,T.join)(__dirname,"renderer.js"),"utf-8"));let e=(0,T.join)(__dirname,"renderer.css"),t=(0,E.readFileSync)(e,"utf-8");n(t),require(process.env.DISCORD_PRELOAD)}else r.contextBridge.exposeInMainWorld("setCss",u(e=>i.ipc.invoke(s.SET_QUICK_CSS,e))),r.contextBridge.exposeInMainWorld("getCurrentCss",()=>i.ipc.invoke(s.GET_QUICK_CSS)),r.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");var v;
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
