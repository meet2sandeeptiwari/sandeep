// const http = require("http");
// const fs = require("fs");

// const port = 3200;

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "text/html" });
//     console.log(req.url);
//     if (req.url == "/") {
//       resp.write(`
//             <form action="/submit" method="post">
//                 <input type="text" placeholder="enter the name" name="name" />
//                 <input type="text" placeholder="enter the email" name="email" />
//                 <button>Submit</button>
//             </form>
//      `);
//     }else if(req.url=="/submit"){
//         resp.write("<h2>data Submitted</h2>")
//     };
//     resp.end();
//   })
//   .listen(port, (req, resp) => {
//     console.log(`server is started at port ${port}`);
//   });

const http = require("http");
const port = process.argv[3];
const fs = require("fs");
const { chunk } = require("lodash");
const querystring = require("querystring");

console.log(port);

http
  .createServer((req, resp) => {
    if (req.url == "/") {
      fs.readFile("html/form.html", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/html" });
          resp.end("internal server error");
        } else {
          resp.writeHead(200, { "content-type": "text/html" });
          resp.write(data);
          resp.end();
        }
      });
    } else if (req.url == "/submit") {
      fs.readFile("html/submitpage.html", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/html" });
          console.error(error);
          resp.end("internal server error");
        } else {
          resp.writeHead(200, { "content-type": "text/html" });
          let dataBody = [];
          req.on("data", (chunk) => {
            dataBody.push(chunk);
          });
          req.on("end", () => {
            let rowData = Buffer.concat(dataBody).toString();
            let formData = querystring.parse(rowData);
            let objdata = JSON.stringify(formData);
            console.log(objdata);
            //   fs.writeFile("html/submitpage.html", objdata, (err) => {
            //     if (err) {
            //       console.log(err);
            //       return resp.end("error");
            //     }
            //     resp.end("saved succcessfully");
            //   });
            //   resp.end(`
            //             <h1>Form Submitted</h1>
            //             <h3>Name : ${formData.name}</h3>
            //             <h3>Email : ${formData.email}</h3>
            //     `);
            // });

            fs.writeFile("html/submitpage.html", objdata, (err) => {
              if (err) {
                console.log(err);
                return resp.end("error");
              } else {
                resp.end(`
                      <h1>Form Submitted</h1>
                      <h3>Name : ${formData.name}</h3>
                      <h3>Email : ${formData.email}</h3>
              `);
              }
            });
          });
        }
      });
    }
  })
  .listen(port, () => {
    console.log(`server is started at ${port}`);
  });
