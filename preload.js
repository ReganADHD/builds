// Vencord f89027f
// Standalone: true
// Platform: Universal
"use strict";function E(e,n=300){let o;return function(..._){clearTimeout(o),o=setTimeout(()=>{e(..._)},n)}}var r=require("electron"),a=require("fs"),S=require("path");var s=require("electron");function t(e,...n){return s.ipcRenderer.invoke(e,...n)}function T(e,...n){return s.ipcRenderer.sendSync(e,...n)}var i={updater:{getUpdates:()=>t("VencordGetUpdates"),update:()=>t("VencordUpdate"),rebuild:()=>t("VencordBuild"),getRepo:()=>t("VencordGetRepo")},settings:{get:()=>T("VencordGetSettings"),set:e=>t("VencordSetSettings",e),getSettingsDir:()=>t("VencordGetSettingsDir")},quickCss:{get:()=>t("VencordGetQuickCss"),set:e=>t("VencordSetQuickCss",e),addChangeListener(e){s.ipcRenderer.on("VencordQuickCssUpdate",(n,o)=>e(o))},openFile:()=>t("VencordOpenQuickCss"),openEditor:()=>t("VencordOpenMonacoEditor")},native:{getVersions:()=>process.versions,openExternal:e=>t("VencordOpenExternal",e)},pluginHelpers:{OpenInApp:{resolveRedirect:e=>t("VencordOIAResolveRedirect",e)}}};r.contextBridge.exposeInMainWorld("VencordNative",i);if(location.protocol!=="data:"){let e=(0,S.join)(__dirname,"renderer.css"),n=document.createElement("style");n.id="vencord-css-core",n.textContent=(0,a.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(n):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(n),{once:!0}),process.env.DISCORD_PRELOAD&&(r.webFrame.executeJavaScript((0,a.readFileSync)((0,S.join)(__dirname,"renderer.js"),"utf-8")),require(process.env.DISCORD_PRELOAD))}else r.contextBridge.exposeInMainWorld("setCss",E(i.quickCss.set)),r.contextBridge.exposeInMainWorld("getCurrentCss",i.quickCss.get),r.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
