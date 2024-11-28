let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

// on keyword is not present
btn.addEventListener("click",()=>{
    console.log("ButtonClicked");
    h1.style.backgroundColor = "red";
    h1.style.color ="white";
})

// let color = document.querySelector("div");
// color.array.forEach(div => {
    
// });
// color.addEventListener("mouseenter",()=>{
//     color.style.backgroundColor="violet";
// });
//SOLUtion
let divs = document.querySelectorAll("div");
divs.forEach((ele)=>{
    console.log(ele);


    ele.addEventListener("mouseenter",()=>{
        ele.style.backgroundColor = ele.textContent;
    });

    ele.addEventListener("mouseleave",()=>{
        // ele.style.backgroundColor = "black";
        ele.style.backgroundColor = "transparent";
    });

    

});
//adevent listener 3rd argument = usecapture