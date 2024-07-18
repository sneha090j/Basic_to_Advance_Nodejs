const fs=require('fs');
// -------------------- synchronously --------------
// ------------------ creating a folder ----------------
// fs.mkdirSync('thapa');  // creating a new folder

//----------------------  creating and writing in file ---------------
// fs.writeFileSync('thapa/bio.txt','sneha jaiswal is my name'); // creating a file named bio.txt

// -------- appending a text in file ---------------
// fs.appendFileSync("thapa/bio.txt"," . I am btech final year student"); // to append text after some text in bio.txt

// --------------reading a file (raw data)----------------
// const data=fs.readFileSync("thapa/bio.txt");//raw buffer
// console.log(data);

//-------------------- reading a file(encoding)-------------
// const data=fs.readFileSync("thapa/bio.txt","utf8");
// console.log(data);

//------------------ file rename ------------------
// fs.renameSync("thapa/bio.txt","thapa/myBio.txt");

//-------------------deleting a file -----------------
// fs.unlinkSync("thapa/myBio.txt");

// ------------------ deleting a folder ---------------
// fs.rmdirSync("thapa");

