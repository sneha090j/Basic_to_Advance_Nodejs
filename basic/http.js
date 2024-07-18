const http=require('http');// handle request and response on server
http.createServer((req,resp)=>{
    resp.write("<h1>hii this is sneha jaiswal</h1>");
    resp.end();
}).listen(4500);
