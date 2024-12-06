//Example -1)

// function Father(){
//     var mother = 50000;
//     var car = "BMW";
//     console.log(money,car);
//     function Child(){
//         var savings = 500;
//         console.log(savings+money);
//     }
//     Child(); 
// }
// Father();


//Example -2)
// function Father(){
//         var money = 50000;
//         var car = "BMW";
//         console.log(money,car);
//         function Child(){
//             var savings = 500;
//             console.log(savings+money);
//         }
//          Child(); 
//     }
//     let x = Father();
//     x();

//! IIFE - Immediately invoked function expression
// The function is executed immediately upon definition. It is often used to create a private scope and avoid polluting the global namespace.
//todo=> syntax: (f(){})()
(function(){
    console.log("I am IIFE");
})();

(function(){
    console.log("I am immediate invoked function expression ");
})();

//!Arrow function
let a = ()=> {
    console.log("I am arrow function");
}
a();

//IF have only one line of code ignore '{}'
let b = () => console.log("this is a one line arrow invoked function without'{}' ");
b();

//IF no paramter ignore '()' and provide '_'
let c  = _ => console.log("This is an no paramter one liner function");
c();

//IF have only one paramter can ignore '()'
let d = n1 => console.log("this is " +n1);
d(90);

//IF have more than one parameter use '()'
let e = (n1,n2)=> {console.log(`This is ${n1}`,n2);
console.log(`This is ${n2}`);
    };
e(30,40);

//! Explicit Return
let f = (n1,n2) => {return n1 +n2};
const h1 = f(10,20);
console.log(h1);



//! Implicit return
let g = (n1,n2) => {n1+n2};
const h2 = f(30,20);
console.log(h2);

function test(a,b){
    return a+b;
}
let x = test(10,20);
console.log(x);



let z = (function(){
    var a = 10;
    var b = 40;
    return a+b;
})();
console.log(z);



