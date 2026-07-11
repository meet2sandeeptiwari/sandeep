const fs = require("fs");

// fs.writeFileSync("files/banana.txt", "this is the fruite");
// fs.unlinkSync("files/banana.txt");

// const data=process.argv;
// const str = data.slice(2).join(" ");
// fs.appendFileSync("files/apple.txt", str);

const operation = process.argv[2];
const name = process.argv[3];
const filename = "files/" + name + ".txt";
const content = process.argv.slice(4).join(" ");
const oldfilename=process.argv[3];
const newFilename=process.argv[4];
const oldFile="files/" + oldfilename + ".txt";
const newFile="files/" + newFilename + ".txt";
if (operation == "write") {
  fs.writeFileSync(filename, content);
} else if (operation == "drop" || operation == "delete") {
    fs.unlinkSync(filename)
}else if(operation ==="append"){
    fs.appendFileSync(filename, content);
}else if(operation=="rename"){
    fs.renameSync(oldFile, newFile);
}else if(operation=="read"){
   const fileContent= fs.readFileSync(oldFile, "utf-8");
   console.log(fileContent);
}else{
    console.log("operation not found");
}
