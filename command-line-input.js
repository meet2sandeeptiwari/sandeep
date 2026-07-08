
const http=require("http");

const arg=process.argv;
const port=arg[3]
console.log(arg[3])
http.createServer((req, resp)=>{

    resp.write("teting input from cmd h")
    resp.end();

}).listen(port,()=>{
    console.log(`server is started at port ${port}`);
});