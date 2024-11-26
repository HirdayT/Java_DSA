//! Document object model -DOM
//In Js everything is considered as an object 
// document.getElementById();
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


//


// let h1 = document.getElementById("head")
// console.log(h1);


let section = document.getElementsByClassName("container")

//! It is used to target multiple elements with the same class name and returns an HTMLCollection[];
//! HTML COLLECTION is an impure array;
console.log(section);
console.log(section[2]);
section.pop;//not possible as not a pure array

Array.isArray(section);
//todo Tells if the array is Pure or not ====Here section is not a pure array 
//todo  Array.isArray(section);To mkae an impure array ato a pure array we use 
//todo  ===>Array.from(section)

let pureArr = Array.from(section);
console.log(pureArr);



console.log(Array.isArray(pureArr));


pureArr.pop()
console.log(pureArr);



// todo If the Id name given as parameter have the wrong casing then the target will not be targeted and will give not null

let head = document.getElementById("head");
//! textContent 
console.log(head.textcontent);

let container = document.getElementsByClassName("container");
console.log(container[0].textContent);
console.log(container[1].textContent);
console.log(container[2].textContent);


//! document.getElementsByTagName()
let section01 = document.getElementsByTagName("section");
console.log(section01);
console.log(section01[1].textContent);


// let section02 = Arrayfrom(section01);
// Array.Arrayis(section01);

// ! document.querySelector(id,class,tagname)

let head55 = document.querySelector("#head");
//todo priority  can accept multiple value in query selector priority is  =>  is 'id' then 'class' then 'tag'
console.log(head55);

let container99 = document.querySelector(".container");
console.log(container99);


let elle = document.querySelector("p,#head,.container");
console.log(elle);


// ! document.querySelectorAll(id,class,tagname)
//it is used to target multiple elements and it returns NodeList[].
// NodeList is also an impure array 
//todo -> NodeList[] and HTML Collection[] both are impure array but the main difference is in NOdeList[] we can use only 1 array method i.e, forEach() but in HTML Collection we can not use any of the array method
 let containers = document.querySelectorAll("section");
 console.log(containers);
 console.log(Array.isArray(containers));

 containers.forEach((x) => {
    console.log(x.textContent);
 });


 
 
 
















