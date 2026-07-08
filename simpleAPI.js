const http = require("http");

const port=8002;

const userData = [
  {
    name: "Anil",
    age: 30,
    email: "anil@test.com",
  },
  {
    name: "Sam",
    age: 30,
    email: "sam@test.com",
  },
  {
    name: "Peter",
    age: 30,
    email: "peter@test.com",
  },
];

http.createServer((req, resp) => {
    resp.setHeader("content-type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(port,()=>{
    console.log(`server started  at port ${port}`)
}).on("error", (err)=>{
    console.log(err.message);
})
