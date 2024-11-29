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
    // e.stopImmediatePropagation();
    console.log("main");
    main.style.backgroundColor = "pink";
    
},0)
section.addEventListener("click", (e)=> {
    // e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("section");
    section.style.backgroundColor = "Orange";
    
},0)
article.addEventListener("click", (e)=> {
    // e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("article");
    article.style.backgroundColor = "Green";
},0)
// e.stopImmediatePropagation(); stops the next elements running and stops bubbling
article.addEventListener("click",()=>{
    console.log("I am 2nd event");
})