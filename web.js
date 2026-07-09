const http = require("http");
const fs = require("fs");

const port = 9001;

http
  .createServer((req, resp) => {
    fs.readFile("./html/web.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);

        resp.writeHead(500, {
          "Content-Type": "text/html",
        });

        return resp.end("<h1>Internal Server Error</h1>");
      }

      resp.writeHead(200, {
        "Content-Type": "text/html",
      });

      resp.end(data);
    });
  })
  .listen(port, () => {
    console.log("Server started");
  });
