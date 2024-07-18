const http=require('http');
const fs=require('fs');
var requests=require("requests");
//getting html file
const homeFile=fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal,orgVal)=>{
    let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=temperature.replace("{%location%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    temperature=temperature.replace("{%tempStatus%}",orgVal.weather[0].main);
    return temperature;

};

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
      requests(
        "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a19cb112564b9350d7ca63f1b234cf37 "
      )
      .on("data",function(chunk){
        const objdata=JSON.parse(chunk);
        const arrdata=[objdata];
        // console.log(arrdata[0].main.temp);
        const realTimeData=arrdata
        .map((val)=>
            replaceVal(homeFile,val))
        .join("");
        res.write(realTimeData);
        // res.sendFile(realTimeData);
        console.log(realTimeData);
      })
      .on("end",function(err){
        if(err) return console.log("connection closed",err);
        console.log("end");
        res.end()
      });
    }

});
server.listen(9000,"127.0.0.1");
