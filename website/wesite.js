const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "html", "home.html");
const filePathCss = path.join(__dirname, "html", "style.css");
const filePathHeader = path.join(__dirname, "html", "header.html");

console.log(filePath);

http
  .createServer((req, resp) => {
    ///=============
    let collectHeaderData = fs.readFileSync(filePathHeader, "utf-8");
    ///////==========
    let file = "home";
    if (req.url != "/") {
      file = req.url.substring(1);
    }
    const htmlPath = path.join(__dirname, "html", `${file}.html`);
    console.log("------------------" + "html" + file + ".html");

    ////========

    if (req.url != "/style.css") {
      fs.readFile(htmlPath, "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("internl server error");
          return false;
        }
        // console.log(collectHeaderData+""+data);
        resp.write(collectHeaderData + "" + data);
        resp.end();
      });
    } else if (req.url == "/style.css") {
      fs.readFile(filePathCss, "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("css not found");
          return false;
        }
        resp.writeHead(200, { "content-type": "text/css" });
        resp.write(data);
        resp.end();
      });
    }
  })
  .listen(3200);
