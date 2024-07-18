// The http.createServer() method includes request and response parameter which is supplied by Node.js.

// The request object can be used to get information about the current HTTP request.
//e.g., url,request,header and data.

const fs=require('fs');
const http=require("http");

const server=http.createServer((req,resp)=>{
   const data=fs.readFileSync(`${__dirname}/userapi/userapi.json`,"utf-8");

        const obj=JSON.parse(data);
    if(req.url=="/"){
    resp.end("hello from sneha");
}
else if(req.url=="/about"){
    resp.end("hello from about");
}
else if(req.url=="/api"){
    resp.writeHead(200,{"content-type":"application/json"});
        resp.end(obj[0].name);
    // resp.end(data);
}
else{
    resp.writeHead(200,{"content-type":"txt/html"})
    resp.end("404 error");
}
});
server.listen(1400,"127.0.0.1",()=>{
    console.log("listening");
});
