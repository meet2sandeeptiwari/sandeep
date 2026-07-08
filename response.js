const http= require("http");

const port=8002;

http.createServer((req, resp)=>{
    resp.setHeader("content-type", "text/html");
    resp.write(`
        <html>
        <head>form</head>
        <title>code step by step</title>
        <body>
            <h2>Hello how are you</h2>
            <h2> runing port: ${port} at date ${new Date()}
        </body>
        </html>
        `);
    resp.end();
    process.exit()

}).listen(port, ()=>{
    console.log(`server is started at port : ${port}`);
})