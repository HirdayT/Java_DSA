//!Return type function 
// function calculate(){
//     var n1 =10;
//     let n2 = 20;
//     const n3 = 30;
//     let sum = n1 + n2 + n3 ;
//     console.log(sum);
//     return sum;
// }
// var x = calculate();
// console.log(x);

// let z = calculate;
// console.log(z);
// let q = z();
// console.log(q);


//Parameterized function
// function sum(x,y){
//     console.log(x,y);
//     return x+y;
// }
// let z = sum(10,20);
// console.log(z);


//WHat is the alternative of rest array == arguments
//Diff between arguments and ...xrest array 
//!Rest Paramterized function
// function test(a,b,...x){
//     console.log(a,b);
//     console.log(x);
// }

// test(10,20,30,40,50,60);

//Nested function


function Parent(){
    console.log("I am parent function");
    console.log(arguments);

    function child(){
        console.log("I am child function");
    }

}
let x = Parent();
console.log(x);
// console.log(x());
Parent()()// js currying

