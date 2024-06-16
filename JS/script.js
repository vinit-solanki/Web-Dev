console.log("Vinit here!!")
"use strict";
const name="Vinit";
const email="vinit@gmail.com";
const password=123456;
console.log("Details:");
console.table([name,email,password]);
console.warn("Error!!");
// prompt("Enter a number");
let age=14;
if(age>=18){
    console.log("You are an Adult!");
}
let random=Math.random()
console.log("The random number is: ",random)
// const pwd=prompt("Enter your password:")
// if(pwd==password){
//     console.log("Login Successful!!");
// }
// if(pwd.length>6){
//     console.log("Password is too long...")
// }
// if(pwd.length<6){
//     console.log("Password is too short.");
// }
// if(pwd.indexOf(' ')==-1){
//     console.log("Password must not contain any space.");
// }
// else{
//     console.log("Enter valid password")
// }
const a=prompt("Enter 1st number:");
const b=prompt("Enter 2nd number:");
const n=prompt("Enter your choice:");
switch(n){
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        console.log(a/b);
        break;
    default:
        console.log("Invalid choice");
}
/*
.length->length of the dtring
.indexOf()-> returns the index of the first occurrence of the specified value in a string
.includes->returns true if substring is present in the string
.slice(inclu,exclu)-->returns the extracted substr
.toLowerCase()
.toUpperCase()
s.replace("existing","replacing") 
*/
console.log(true+true);