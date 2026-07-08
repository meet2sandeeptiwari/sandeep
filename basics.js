const fs =require("fs");
const os=require("os");

const {log, warn,table,time,timeEnd}=require("console")

// table([
//     {name:"sandeep"},
//     {name:"kumar"}
// ]);


console.log("hello befor the start execution of function");
function demo() {
  console.log("Function Start");

  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  console.log("Function End");
}

console.time("sumFunction");

demo();

console.timeEnd("sumFunction");
console.log("after execution of function");