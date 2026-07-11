const fs = require("fs");
const { chunk } = require("lodash");
const querystring = require("querystring");

function userDataSubmit(req, resp) {
  let dataBody = [];
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });
  req.on("end", () => {
    const rawData = Buffer.concat(dataBody).toString();
    const formData = querystring.parse(rawData);
    const objdata = JSON.stringify(formData);
    const obj = JSON.parse(objdata);
    console.log(obj);
    resp.end(`
     <h1>Form Submitted</h1>
        <h3>Name : ${formData.name}</h3>
        <h3>Email : ${formData.email}</h3>
    `);
  });
}

module.exports = userDataSubmit;
