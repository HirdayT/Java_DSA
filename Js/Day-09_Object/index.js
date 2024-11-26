
// //Object Literals
// let user1 ={
//  id: 1,
//  name: 'raj',
//  company: "TCS",
//  salary: 50000,
//  phoneNo: 788969329,
//  AdhaarNo:9832769398,
// };
// console.log(user1);
// // Read
// console.log(user1.name);//raj
// console.log(user1.salary);

// //Update
// user1.salary = 70000
// console.log(user1);

// console.log(user1.pancard);//ud

// user1.car = "Nano"//Adding new Key
// console.log("user1");


// //Delete
// delete user1.AdhaarNo
// console.log(user1);

// //Object Constructor
// let obj = new Object ()
// obj.id = 1;
// obj.ename = "raj";
// console.log(obj);


// //Object methods
// let obj = {
//     id:1,
//     title:"Asus Rog",
//     price:70000,
//     color:"black"
// }
// // Object.keys();
// console.log(Object.keys(obj));
// // Object.values();
// console.log(Object.values(obj));

// //Object entries
// let x = Object.entries(obj);
// console.log(x);

// //Object fromEntries()
// let y = Object.fromEntries(x);
// console.log(y);


// let arr = [10,20,30,40];
// //for in
// for(let i in arr){
//     console.log(i);
// }

// //for of
// for(let i of arr){
//     console.log(i);
// }

// //only possible way to iterate an object
// for(let i in obj ){
//     console.log(obj[i]);
// }

let x = "color"
let product  ={
    id:1,
    title:"car",
    price:900000,
    [x]:"black",
};
//[] To access a variable 
// to call a variable as color
console.log(product);