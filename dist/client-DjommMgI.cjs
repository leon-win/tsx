"use strict";var a=require("node:net"),f=require("./get-pipe-path-b8D5AZgV.cjs");const p=()=>new Promise(e=>{const s=f.getPipePath(process.ppid),n=a.createConnection(s,()=>{e(i=>{const t=Buffer.from(JSON.stringify(i)),r=Buffer.alloc(4);r.writeInt32BE(t.length,0),n.write(Buffer.concat([r,t]))})});n.on("error",()=>{e()}),n.unref()}),o={send:void 0},c=p();c.then(e=>{o.send=e},()=>{}),exports.connectingToServer=c,exports.parent=o;