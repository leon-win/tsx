const t=new Set(["Custom ESM Loaders is an experimental feature. This feature could change at any time","Custom ESM Loaders is an experimental feature and might change at any time","Import assertions are not a stable feature of the JavaScript language. Avoid relying on their current behavior and syntax as those might change in a future version of Node.js."]),{emit:n}=process;process.emit=function(e,a){if(!(e==="warning"&&t.has(a.message)))return Reflect.apply(n,this,arguments)};