const http=require("http");
const userForm =require("./userForm");
const userDataSubmit= require("./userDataSubmit");

http.createServer((req,resp)=>{
    resp.writeHead(200, {'content-type':'text/html'});
    if(req.url=="/"){
        userForm(req,resp);
    }else if(req.url=="/submit"){
        userDataSubmit(req, resp);
    }
}).listen(3200, ()=>{
    console.log("server is started at port 3200");
})