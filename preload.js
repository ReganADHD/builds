// Vencord b0c41d5
// Standalone: true
// Platform: Universal
"use strict";var _=Object.create;var E=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var g=(e,r,n,d)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of l(r))!V.call(e,i)&&i!==n&&E(e,i,{get:()=>r[i],enumerable:!(d=f(r,i))||d.enumerable});return e};var S=(e,r,n)=>(n=e!=null?_(I(e)):{},g(r||!e||!e.__esModule?E(n,"default",{value:e,enumerable:!0}):n,e));function u(e,r=300){let n;return function(...d){clearTimeout(n),n=setTimeout(()=>{e(...d)},r)}}function k(e){let r={};for(let n in e)r[n]=e[n],r[e[n]]=n;return Object.freeze(r)}var t=k({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",GET_DESKTOP_CAPTURE_SOURCES:"VencordGetDesktopCaptureSources",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"});var o=S(require("electron")),m=require("fs"),C=require("path");var s=require("electron");function c(e){if(!(e in t))throw new Error(`Event ${e} not allowed.`)}var a={getVersions:()=>process.versions,ipc:{send(e,...r){c(e),s.ipcRenderer.send(e,...r)},sendSync(e,...r){return c(e),s.ipcRenderer.sendSync(e,...r)},on(e,r){c(e),s.ipcRenderer.on(e,r)},off(e,r){c(e),s.ipcRenderer.off(e,r)},invoke(e,...r){return c(e),s.ipcRenderer.invoke(e,...r)}}};if(o.default.desktopCapturer===void 0){let e=require.resolve("electron");delete require.cache[e].exports,require.cache[e].exports={...o.default,desktopCapturer:{getSources:r=>o.ipcRenderer.invoke(t.GET_DESKTOP_CAPTURE_SOURCES,r)}}}o.contextBridge.exposeInMainWorld("VencordNative",a);location.protocol!=="data:"?(o.webFrame.executeJavaScript((0,m.readFileSync)((0,C.join)(__dirname,"renderer.js"),"utf-8")),require(process.env.DISCORD_PRELOAD)):(o.contextBridge.exposeInMainWorld("setCss",u(e=>a.ipc.invoke(t.SET_QUICK_CSS,e))),o.contextBridge.exposeInMainWorld("getCurrentCss",()=>a.ipc.invoke(t.GET_QUICK_CSS)),o.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark"));
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
