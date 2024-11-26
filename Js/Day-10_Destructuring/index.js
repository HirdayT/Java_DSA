//Destructring = 
// let arr = [10,20,30,40,[100,200,300]];
// console.log(arr[4][2]);


// let arr2 = [100,200,3000,[10,40,["hello",["helloworld"],4000]]];
// console.log(arr2[3][2][1][0]);
// let x = arr2[3][2][1][0];
// console.log(x);
//===========================
// let []= for arr
// {} for object 
// let arr = [10,20,30,40];
// let [a,b,c,d]= arr;
// console.log(a,b,c,d);

// let arr1 =[100,210,30,["hii,670"]];
// let [q,w,e,[x,y]] = arr1 ;
// console.log(x);

// let arr2 = ["raj",1,["wipro",["developer"],50000],"abc"];
// let [h,i,[j,[k],l],m] = arr2;
// console.log(h,k,l);

//=====to skip in destructor


// let arr3 = [10,20,30,50];
// let [t, , , n] =arr3;
// console.log(t,n);


let arr4 = [10,["hello",60,["hi",[700,590,["Byeee"]]]]];
let        [ ,[a, ,[h, [,,[ w]]]]] = arr4;
console.log(a,h,w);


// let obj = {
//     id: 1,
//     title : "Laptop",
//     brand: "hp",
//     price: 70000,
// };
// let {title} = obj;
// console.log(title);


let obj1 = {
    id: 1,
    title : "Laptop",
    price: 70000,
    category: "Electronics",
    rating: {
      rate: 3.9,
    count: 120,
    },
};


let {title,category,rating:{count,rate} } = obj1 ;
console.log(title);
console.log(category);
console.log(count);



let obj5 = {
    id:2,
    ename:"raj",
    hobbies:["cricket", "football"],
    skills:{
        frontend:["html", "css", "js","react"],
        backend: ["node" , "java", "sql","mongo", "express"],
    },
};


let {ename,hobbies:[,b],skills:{frontend:[,,,y],backend:[,z]}} = obj5;
console.log(ename,x,y,z);



function test({id,name},x){
    console.log(id,ename),x;
}
test({id: 1,ename:"raj"},100);  







