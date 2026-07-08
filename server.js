const http=require("http");

data={
    name: "sandeep"
}

http.createServer((req,resp)=>{
    resp.write("anil sidhu\n");
    resp.end(JSON.stringify(data));
}).listen(8000);