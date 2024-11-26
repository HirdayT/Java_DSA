// let x = test (10,20);
// console.log(x);

// let z = (function(){
//     var a = 10;
//     var b = 20;
//     return a+b;
// })()
// console.log(z);


//Array literal 
// var arr1 = [10]

// // Array constructor
// var arr2 = new Array(10);


// console.log(arr1);//empty
// console.log(arr2);//[empty*10]

//Array is heterogenous in nature
var arr = [10,"hello",true,function(){},{},undefined,null]


var arr1 = [10,20,30,40,50];
//          0  1  2  3  4

// console.log(arr[0]);//10
console.log(arr[1]);//20
//IS array an method or property


console.log(arr1.length);
console.log("Original array",arr1);



// Returns th elast element  from th earray and returns it.
console.log(arr1.pop());

// appends new elements to th eend of the array ,and returns the new length of the array.
arr1.push("hello") ;
console.log(arr1);



//Inserts new elements at the start of an array , and returns the new length of thearray
arr1.unshift("Welcome")
console.log(arr1);

//removes the first elemetn from an array and return it ,if the array is empty ,undefined is returned and the array is not modified .
arr1.shift();
console.log(arr1);



//------------SLICE--------------

var arr3 = [10,20,30,40,50]
//          0   1  2  3  4 

let x  = arr3.slice(1,4);
console.log(x);
console.log(arr3);



// -----------SPLICE------------


var arr4 = [100,200,300,400,500];
arr4.splice(1,3,"hello","world");
console.log(arr4);













