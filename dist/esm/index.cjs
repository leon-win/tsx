"use strict";var j=require("node:worker_threads"),f=require("../node-features-CKvB621_.cjs"),J=require("../register-DUq1clC8.cjs"),l=require("node:url"),k=require("../index-CLWE53E9.cjs"),m=require("../is-relative-path-pattern-Cr3_Gkbv.cjs"),R=require("../client-DjommMgI.cjs"),w=require("node:path"),h=require("get-tsconfig"),q=require("node:fs");require("node:module"),require("esbuild"),require("node:crypto"),require("node:os"),require("../temporary-directory-B83uKxJF.cjs"),require("node:net"),require("../get-pipe-path-b8D5AZgV.cjs");const i={active:!0},M=async e=>{if(!e)throw new Error(`tsx must be loaded with --import instead of --loader
The --loader flag was deprecated in Node v20.6.0 and v18.19.0`);i.namespace=e.namespace,e.port&&(i.port=e.port,e.port.on("message",t=>{t==="deactivate"&&(i.active=!1,e.port.postMessage({type:"deactivated"}))}))},D=()=>"process.setSourceMapsEnabled(true);",g=new Map,A=async e=>{if(g.has(e))return g.get(e);if(!await q.promises.access(e).then(()=>!0,()=>!1)){g.set(e,void 0);return}const a=await q.promises.readFile(e,"utf8");try{const r=JSON.parse(a);return g.set(e,r),r}catch{throw new Error(`Error parsing: ${e}`)}},I=async e=>{let t=new URL("package.json",e);for(;!t.pathname.endsWith("/node_modules/package.json");){const a=l.fileURLToPath(t),r=await A(a);if(r)return r;const n=t;if(t=new URL("../package.json",t),t.pathname===n.pathname)break}},b=async e=>(await I(e))?.type??"commonjs",u=process.env.TSX_TSCONFIG_PATH?{path:w.resolve(process.env.TSX_TSCONFIG_PATH),config:h.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}:h.getTsconfig(),$=u&&h.createFilesMatcher(u),O=u&&h.createPathsMatcher(u),L=u?.config.compilerOptions?.allowJs??!1,S="file://",y=/\.([cm]?ts|[tj]sx)($|\?)/,C=/\.json(?:$|\?)/,W=e=>{const t=w.extname(e);if(t===".json")return"json";if(t===".mjs"||t===".mts")return"module";if(t===".cjs"||t===".cts")return"commonjs"},G=e=>{const t=W(e);if(t)return t;if(y.test(e))return b(e)},P="tsx-namespace=",_=e=>{const t=e.indexOf(P);if(t===-1)return;const a=e[t-1];if(a!=="?"&&a!=="&")return;const r=t+P.length,n=e.indexOf("&",r);return n===-1?e.slice(r):e.slice(r,n)},T=f.isFeatureSupported(f.importAttributes)?"importAttributes":"importAssertions",H=async(e,t,a)=>{if(!i.active||i.namespace&&i.namespace!==_(e))return a(e,t);if(i.port){const s=new URL(e);s.searchParams.delete("tsx-namespace"),i.port.postMessage({type:"load",url:s.toString()})}R.parent.send&&R.parent.send({type:"dependency",path:e}),C.test(e)&&(t[T]||(t[T]={}),t[T].type="json");const r=await a(e,t);if(!r.source)return r;const n=e.startsWith("file://")?l.fileURLToPath(e):e,p=r.source.toString();if(r.format==="json"||y.test(e)){const s=await k.transform(p,n,{tsconfigRaw:$?.(n)});return{format:"module",source:m.inlineSourceMap(s)}}if(r.format==="module"){const s=k.transformDynamicImport(n,p);s&&(r.source=m.inlineSourceMap(s))}return r},U=/\/(?:$|\?)/,E=async(e,t,a)=>{const r=await e(t,a);return!r.format&&r.url.startsWith(S)&&(r.format=await G(r.url)),r},X=[".js",".json",".ts",".tsx",".jsx"],v=async(e,t,a)=>{const[r,n]=e.split("?");let p;for(const s of X)try{return await E(a,r+s+(n?`?${n}`:""),t)}catch(o){if(p===void 0&&o instanceof Error){const{message:c}=o;o.message=o.message.replace(`${s}'`,"'"),o.stack=o.stack.replace(c,o.message),p=o}}throw p},F=async(e,t,a)=>{const r=U.test(e),n=r?"index":"/index",[p,s]=e.split("?");try{return await v(p+n+(s?`?${s}`:""),t,a)}catch(o){if(!r)try{return await v(e,t,a)}catch{}const c=o,{message:d}=c;throw c.message=c.message.replace(`${n.replace("/",w.sep)}'`,"'"),c.stack=c.stack.replace(d,c.message),c}},N=async(e,t,a,r)=>{if(!i.active)return a(e,t);let n=_(e);if(t.parentURL){const s=_(t.parentURL);s&&!n&&(n=s,e+=`${e.includes("?")?"&":"?"}${P}${s}`)}if(i.namespace&&i.namespace!==n)return a(e,t);if(U.test(e))return await F(e,t,a);const p=e.startsWith(S)||m.isRelativePathPattern.test(e);if(O&&!p&&!t.parentURL?.includes("/node_modules/")){const s=O(e);for(const o of s)try{return await N(l.pathToFileURL(o).toString(),t,a)}catch{}}if(y.test(t.parentURL)||L){const s=m.resolveTsPath(e);if(s)for(const o of s)try{return await E(a,o,t)}catch(c){const{code:d}=c;if(d!=="ERR_MODULE_NOT_FOUND"&&d!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw c}}try{return await E(a,e,t)}catch(s){if(s instanceof Error&&!r){const{code:o}=s;if(o==="ERR_UNSUPPORTED_DIR_IMPORT")try{return await F(e,t,a)}catch(c){if(c.code!=="ERR_PACKAGE_IMPORT_NOT_DEFINED")throw c}if(o==="ERR_MODULE_NOT_FOUND")try{return await v(e,t,a)}catch{}}throw s}};f.isFeatureSupported(f.moduleRegister)&&j.isMainThread&&J.register(),exports.globalPreload=D,exports.initialize=M,exports.load=H,exports.resolve=N;