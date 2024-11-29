// // WIll take string as an argument to 
// let h1 = document.createElement("h1");
// //todo innerHTML will give functionality of the inner html 
// h1.innerHTML="<mark>Hello worlds</mark>"

// //inplace of text Content we can use h1.innerHTML

// //todo textContent will give name instead of the funcitonality
// // h1.textContent="<mark>Hello worlds</mark>"

// console.log(h1);
// document.body.appendChild(h1)
let data = [10,20,30,40];
data.map(() =>{ 

    //!Creating ELements
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h1 = document.createElement("h1");
    let btn = document.createElement("button");
    
    //! adding text content
    h1.textContent = "John";
    //! Setting attributes
    div.setAttribute("id","card");
    img.setAttribute("src","fakepath");
    
    //!Appending to an element is an child
    div.append(img,h1);
    
    console.log(div);
    
    //! Appending to a Body
    document.body.append(div);
});
    
    
    


