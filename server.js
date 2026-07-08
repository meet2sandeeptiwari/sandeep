const http=require("http");

data={
    name: "sandeep"
}

http.createServer((req,resp)=>{
    resp.write("sandeep kumar tiwari\n");
    resp.end(JSON.stringify(data));
}).listen(8000);

http.createServer((req,resp)=>{
    resp.write("sandeep\n");
    resp.end(JSON.stringify(data));
}).listen(8001);