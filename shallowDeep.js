// let obj={
//     name:"peter"
// };

const { stringify } = require("node:querystring");

// console.log(obj);

// let user=obj;
// user.name="bruce";

// console.log(obj);
// console.log(user)

//////////////////////////////////////////////
// let x="Anil";
// let y=x;
// y="sidhu";
// console.log(x);
// console.log(y);



//////shallow copy////////////
//Example1
// let obj={
//     name:"peter"
// };

// console.log(obj);

// let user=Object.assign({}, obj)
// user.name="bruce";

// console.log(obj);
// console.log(user);



//Example2////
// let obj={
//     name:"peter"
// };
// let user={...obj};
// user.name="bruce";

// console.log(obj);
// console.log(user);



//Example3
// let obj={
//     name:"peter",
//     address:{
//         city:"Noida",
//         sate:"UP"
//     }
// };
// let user={...obj};
// user.name="John"
// user.address.city="Gurgaon"

// console.log(obj);
// console.log(user);


//////Deep copy////////////
//Example4
// let obj={
//     name:"peter",
//     address:{
//         city:"Noida",
//         sate:"UP"
//     }
// };
// let user=JSON.parse(JSON.stringify(obj))
// user.name="John"
// user.address.city="Gurgaon"

// console.log(obj);
// console.log(user);



// let obj={
//     name:"peter",
//     address:{
//         city:"Noida",
//         sate:"UP"
//     },
//     getData:function(){
//         return "all data is here";
//     }
// };
// let user=JSON.parse(JSON.stringify(obj))
// user.name="John"
// user.address.city="Gurgaon"

// console.log(obj);
// console.log(user);



// let obj={
//     name:"peter",
//     address:{
//         city:"Noida",
//         sate:"UP"
//     },
//     getData:function(){
//         return this.address.city;
//     }
// };
// let user=JSON.parse(JSON.stringify(obj))
// user.name="John"
// user.address.city="Gurgaon"

// console.log(obj);
// console.log(user.getData());  //output: TypeError: user.getData is not a function

// Kyun?
//////////////////////////// Step 1
// {
//     name: "Peter",
//     address: {...},
//     getData: function () {
//         return this.address.city;
//     }
// }
// Is object me 3 properties hain:
// name
// address
// getData (Function)


///////////////////Step 2
// Jab ye chalta hai
// JSON.stringify(obj)
// To JSON sirf data ko string me convert karta hai.
// Functions JSON ka part nahi hote.
// Isliye result banega:

// {
//   "name": "Peter",
//   "address": {
//     "city": "Noida",
//     "sate": "UP"
//   }
// }

// Dhyan do...
// getData gayab ho gaya.


// Step 3
// Ab
// JSON.parse(...)
// Dobara object banata hai.
// user
// ab hoga
// {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         sate: "UP"
//     }
// }
// Yahan getData() exist hi nahi karta.



// let obj = {
//     name: "Peter",
//     address: {
//         city: "Noida",
//         state: "UP"
//     },
//     getData: function () {
//         return this.address.city;
//     }
// };

// console.log(obj.getData());


////////////////////Lodash/////////

const lodash=require("lodash")
let obj={
    name:"peter",
    address:{
        city:"Noida",
        sate:"UP"
    },
    getData:function(){
        return this.address.city;
    }
};
//let user=JSON.parse(JSON.stringify(obj))
let user=lodash.cloneDeep(obj);
user.name="John"
user.address.city="Gurgaon"

console.log(obj);
console.log(user.getData());