//! Modules
//1)-->Default export
//2)-->named export

//named export
export function display(){
    console.log("I am display function");
}

export function add(n1,n2){
    return n1+n2;
}
//! .default exports
function substract (n1,n2){
    return n1-n2;
}
export default substract ;
