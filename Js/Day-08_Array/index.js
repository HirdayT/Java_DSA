// ==========HOF===================
// 1)-foreach()
// 2)-map()
// 3)-find();
// 4)-FileSystemEntry();
// 5)-reduce();

// let arr = [10,20,30,40,50]
// console.log(arr.at(3));

console.log(arr.at(200));//ud

console.log(arr.includes(20));//true
console.log(arr.includes(200));//false

console.log(arr.toString());//array to String
console.log(arr.join("+"));



let a = [100,200,300];
let b = [400,500,600];


console.log(b.concat(a,b));
console.log(a.concat(a,b,["hello",500,5000]));






let x = arr.forEach((ele,i,arr) => {
 console.log(ele,i,arr);
 return " i am for each";
});


let y = arr.map((ele,i,arr) => {
    console.log(ele,i,arr);
    return " i am for Map";
   });
   //Find will only go to the pattern marching location will not iterate till end

   
let arr2 = [20,10,30,40,10,50,20,20,60];
let val = arr2.find((ele,i,arr) => {
    console.log(ele,i,arr);
    return ele ==50;
});
console.log(val1);


//map only returns true false value

// let val1 = arr2.filter((ele,i,arr)=> {
//     // console.log(ele,i,arr);
    
//     return ele == 50 ; 
// });
// console.log(val1);

let arr = {10,20,30,40,50};
let val1 = arr.reduce((acc,ele)=> {
    console.log(acc,ele);
    return acc +ele;
    
    // return ele == 50 ; 
},500);
console.log(x);
