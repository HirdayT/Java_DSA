//!Dom Events
onclick
ondblclick
onmouseenter
onmouseleave
onmousemove
onkeydown
onkeyup
onchange
onload
onscroll



//onclick
function clickfun(){
   console.log("single clicked");
}

//ondblclick
function clickdbl(){
   console.log("Double clicked");
}

//onmouseenter
function enter(){
   console.log("Mouse entered");
}


//onmouseleave
function leave(){
   console.log("Mouse left ");
   
}


//onmouse move
function move(){
   console.log("Mouse moved");
}


//onkeydown()
function down(){
   console.log("key pressed");
}
//onkeyup()
function up(){
   console.log("key released");
}

//onchange
function changeme(){
   console.log("changed");
}

//onsubmit 
//todo =>event of form tag
function formdata(event){
   event.preventDefault()//stop refreshing of the webpage
   let email = document.querySelector("#email");
   let password = document.querySelector("#password");
let user ={
   email:email.value,
   password:password.value,
};
   console.log(user);
}
//on load 
function webpageLoad(){
   console.log("Webpage loaded");
}

//Scroll
function paraScroll(){
   console.log("Paragraph scrolled");
   
}

