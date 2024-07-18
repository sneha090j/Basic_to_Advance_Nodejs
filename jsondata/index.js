const bioData={
    name:"sneha",
    age:26,
    college:"IERT"
}
const jsonData=JSON.stringify(bioData);
console.log(jsonData);


// stringify means object to json
//parse means json to object
const objdata=JSON.parse(jsonData);
console.log(objdata);