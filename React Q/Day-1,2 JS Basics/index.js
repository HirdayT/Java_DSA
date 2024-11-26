let x = "designation";

let obj1 = {
    id: 1,
    ename: "john",
};
let obj2 = {
    ...obj1,//properties of 1 spreaded in two these are copy not original values
    company:"Google",
    salary:500000,
    //x : "Developor",//if use [] will provide the values inside the object instead of variable name
    [x] : "Developor",//if use [] will provide the values inside the object instead of variable name
};
console.log(obj2);
//=============================
//! Modules 
//! 1) 