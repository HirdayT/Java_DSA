//! Promise 
//3 promise keys 
// prototype
//state
// result


// then catch fullfilled
//Waiter = API -applicatioon programming interface helps the different application to provide their functionality differently
// let data = [{id : 1,ename:"John"},
//            {id: 2, ename:"wick"},
//         ];

//      let err = {message:"failed to fecth"}   ;


//      let p1 = new Promise((resolve, reject) => {
//         if(10 > 2 ){
//             resolve(data);
//         }else{
//             reject(err);
//         };
//      });
//      console.log(p1);


//      p1.then((result) => {
//         console.log("I am then ()", result);
//     });//if promise fullfilled
//      p1.catch((err) => {
//         console.log("I am catch()", err);
//      });//if promise rejected
//      p1.finally(()=> {
//         console.log("I am finally()");
//      });//always but not in pending 

     //json = javascript object notation way of data storing structure can be used to send and store 
    //  cannot use data from json in js directly
    let p1 = fetch("https://api.github.com/users");
    console.log(p1);

    p1.then((response) => {
        console.log(response);
        //another promise in response.json so use 
        let p2 = response.json();
        console.log(p2);
        p2.then((data) => {
            console.log(data); 
        });

        p2.catch((err) => {
            console.log(err);
    });

});





