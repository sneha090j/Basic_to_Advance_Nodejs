const fs=require('fs');
console.log("code step by step");// console is global as it doesn't need to import
fs.writeFileSync("hello.txt","code step by step");// fs is non-global as it need to require
fs.writeFileSync("hello2.txt","sneha jaiswal");
console.log(">>",__dirname);// global to check directory name
console.log(">>",__filename); // to check file name
