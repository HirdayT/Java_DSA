//Event BUbble/Event Propagation
// process in which the event trvales through our dom TreeWalker
// when event travels from target to rooot = BUBBLING
// if opposite direction = Capturing phase


// 0= false bubbling from inner to source
// 1= true capturing will execute top to bottom

let main = document.querySelector("main")
let section = document.querySelector("section")
let article= document.querySelector("article")


main.addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("main");
    main.style.backgroundColor = "pink";
    
},1)
section.addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("section");
    section.style.backgroundColor = "Orange";
    
},1)
article.addEventListener("click", (e)=> {
    e.stopPropagation();
    console.log("article");
    article.style.backgroundColor = "Green";
},1)