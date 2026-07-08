const http = require("http");

const { log, error } = require("console");

const port = 8004;

http
  .createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    // console.log(req);
    // console.log(req.headers);
    //  console.log(req.headers.host);
    //  console.log(req.url);
    //console.log(req.method);

    if (req.url == "/") {
      resp.write(`<h2>hello</h2>`);
    } else if (req.url == "/login") {
      resp.write(`<h2>hello login</h2>`);
    } else if (req.url == "/test") {
      resp.write(`<h2>hello test</h2>`);
    } else {
      resp.write(`<h2>other page</h2>`);
    }

    resp.end();
  })
  .listen(port, () => {
    log(`server is started at port ${port}`);
  })
  .on("error", (err) => {
    error(err.message);
  });
