"use strict";var t=require("../../pkgroll_create-require-B-Pljx_-.cjs"),n=require("../../global-require-patch-BIDBwysJ.cjs"),q=require("node:path"),c=require("node:url");require("module"),require("node:module"),require("node:fs"),require("get-tsconfig"),require("../../index-CLWE53E9.cjs"),require("esbuild"),require("node:crypto"),require("node:os"),require("../../temporary-directory-B83uKxJF.cjs"),require("../../is-relative-path-pattern-Cr3_Gkbv.cjs"),require("../../client-DjommMgI.cjs"),require("node:net"),require("../../get-pipe-path-b8D5AZgV.cjs");const a=(r,e)=>{if(!e)throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");return(typeof e=="string"&&e.startsWith("file://")||e instanceof URL)&&(e=c.fileURLToPath(e)),q.resolve(q.dirname(e),r)},i=(r,e)=>{const u=a(r,e),s=n.register();try{return t.require(u)}finally{s()}},o=(r,e,u)=>{const s=a(r,e);return n.resolveFilename(s,module,!1,u)};o.paths=t.require.resolve.paths,i.resolve=o,i.main=t.require.main,i.extensions=t.require.extensions,i.cache=t.require.cache,exports.register=n.register,exports.require=i;