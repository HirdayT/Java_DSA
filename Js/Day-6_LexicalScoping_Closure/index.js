//Example -1)

// function Father(){
//     var mother = 50000;
//     var car = "BMW";
//     console.log(money,car);
//     function Child(){
//         var savings = 500;
//         console.log(savings+money);
//     }
//     Child(); 
// }
// Father();


//Example -2)
function Father(){
        var money = 50000;
        var car = "BMW";
        console.log(money,car);
        function Child(){
            var savings = 500;
            console.log(savings+money);
        }
        return Child; 
    }
    let x = Father();
    x();
