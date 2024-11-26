let str1 = 'Hello World';

let str2 = "Hello Universe";

let str3 = `Hello Galaxy`
// asdsf
// sdfdgs
// sdgsd`;//Backticks === Mulitiline string

console.log(str1 + " " + str2 + " " + str3); 
console.log(`${str1} ${str2} ${str3}`);//String interpolation${Variable_name}


let str = "Hello World";
console.log(str.length);//Property which returns the number of characters
console.log(str[0]);
console.log(str[6]);

//String methods
let str6 = "JavaScript";
//todo --> slice()
console.log(str6.slice(0,4));//using positive indexes
console.log(str6.slice(-10,-6));//Using negative indexes
console.log(str6.slice(-10,4));//Using negative indexes

//todo --> substring()
console.log(str6.substring(0,4));//Using positive index
console.log(str6.substring(-10,-6));//Negative index not possible
console.log(str6.substring(-10,4));//Negative index not possible

//todo --> substr(start index,length)
console.log(str6.substr(4,6));//substr(Starting index ,No. of characters from starting );


// 0 1 2 3 4 5 6 7 8 9  
// j a v a s c r i p t 
//-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 
//===================================================
//  Replace
let str7 = "Hi everyone , Hi to JavaScript";

// todo --> replace() Exchange only the first occurence in string
console.log(str7.replace("Hi","Welcome"));

//todo --> replaceALL() Exchange all occurences in the string;
console.log(str7.replaceAll("Hi","Welcome"));

//todo --> trim()
let str8 = "         React              "
console.log(str8);
//todo --> trimStart(); Remove white space from starting
console.log(str8.trimStart());//
// todo --> trimEnd(); Remove white spaces from end
console.log(str8.trimEnd());
// todo trim --> remove all from both start and end
console.log(str8.trim());
//todo --> toUppercase()
let str9 = "web development ";
console.log(str9.toUpperCase());
//todo --> tolowerCase()
let str10 = "HELLO"
console.log(str10.toLowerCase());


//================================
//todo  charCodeAt() returns ASCII code
let str11 = "MongoDB";
console.log(str11.charCodeAt(0));//77


//todo charAt(); returns Character
console.log(str11.charAt(0));//M


//todo --> split() convert String to Array
let str12 = "Welcome";
console.log(str12.split());//['Welcome']//takes the whole String as an single index of the array ;
console.log(str12.split(""));//['W', 'e', 'l', 'c', 'o', 'm', 'e'] |||||| makes Each character an literal of array
console.log(str12.split("l"));//'We', 'come']||||||||  Splits the String from the entered data set



//todo --> reverseVal() reverse the order of the data
let data ="Nitin";
// let val = data.split("");
// let reverseVal = val.reverse();
// let result = reverseVal.join("");
//todo --> join the the sepaarate literals into one object 
let result = data.split("").reverse().join("");

if(data == result){
    console.log("palindrome");
} else {
    console.log("Not Palindrome");   
}










