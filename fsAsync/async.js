const fs=require('fs');
// difference between synchronous call and asynchronous call

// synchronous call
// const data= fs.readFileSync("read.txt","utf-8");
// console.log(data);

//asynchronous call
//  fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data);
//  })
//  console.log("after data");