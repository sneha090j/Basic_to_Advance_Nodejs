const os=require('os');
console.log(os.arch()); // to know os bit 32/64

const freememory=os.freemem();
// console.log(freememory);
console.log(`Free memory is : ${freememory/1024/1024/1024}`);// in gb

const totalmemory=os.totalmem();
console.log(` Total memory is : ${totalmemory/1024/1024/1024}`);//in gb

console.log("HostName of OS: "+ os.hostname());
console.log(os.platform());
console.log(os.type());