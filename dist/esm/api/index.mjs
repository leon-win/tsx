import{r as s}from"../../register-DGMXNqQF.mjs";import{pathToFileURL as p}from"node:url";import"node:module";import"node:worker_threads";const m=(o,t,e)=>{const n=t.startsWith("file://")?t:p(t),r=new URL(o,n);return r.searchParams.set("tsx-namespace",e),r.toString()},c=(o,t)=>{if(!t||typeof t=="object"&&!t.parentURL)throw new Error("The current file path (import.meta.url) must be provided in the second argument of tsImport()");const e=typeof t=="string",n=e?t:t.parentURL,r=Date.now().toString(),a=m(o,n,r);return s({namespace:r,onImport:e?void 0:t.onImport}),import(a)};export{s as register,c as tsImport};