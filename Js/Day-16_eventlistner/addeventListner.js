let btn = document.querySelector("button");
let h1 = document.querySelector(h1);


btn.addEventListener("click",()=>{
    console.log("ButtonClicked");
    h1.style.backgroundColor = "red";
    h1.style.color ="white";
    
})