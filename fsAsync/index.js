const fs=require('fs');

// ----------- creating a file asynchronously ------------
// fs.writeFile("read.txt","today is good",
//     (err)=>{
//         console.log("created");

//     }
// );  //takes a callback function

//------------- appending a text to existing file -------
// fs.appendFile("read.txt"," . File again created",
//     ()=>{
//         console.log("completed");
//     }
// );

//---------- reading a file ----------------
// fs.readFile("read.txt",(err,data)=>{
//     console.log(data);
// }); // It's a raw data

//---------------- reading a file ---------------
// fs.readFile("read.txt", "utf-8",(err,data)=>{
//     console.log(data);
// });

