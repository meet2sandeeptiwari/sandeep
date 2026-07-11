// console.log("apple1");
// setTimeout(() => {
//   console.log("apple2");
// }, 2000);
// console.log("apple3");


// let a=20;
// let b=0;
// setTimeout(() => {
//   console.log("apple2");
//   b=120;
//   console.log(a+b);
// }, 2000);
// console.log("apple3");
// console.log(a+b);


const fs=require("fs");

//Asynchronous Operation Example
console.log("start script");
fs.readFile("text/peter.txt", "utf-8", (error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data+" welcome to the NON blocking operation");
    }
});


//Synchronous operation Example
const data=fs.readFileSync("text/peter.txt", "utf-8");
console.log(data+" welcome to the Blocking operatuion");



console.log("end script");