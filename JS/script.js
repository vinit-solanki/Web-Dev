// console.log("Vinit here!!")
// "use strict";
// const name="Vinit";
// const email="vinit@gmail.com";
// const password=123456;
// console.log("Details:");
// console.table([name,email,password]);
// console.warn("Error!!");
// // prompt("Enter a number");
// let age=14;
// if(age>=18){
//     console.log("You are an Adult!");
// }
// let random=Math.random()
// console.log("The random number is: ",random)
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
// const a=prompt("Enter 1st number:");
// const b=prompt("Enter 2nd number:");
// const n=prompt("Enter your choice:");
// switch(n){
//     case 1:
//         console.log(a+b);
//         break;
//     case 2:
//         console.log(a-b);
//         break;
//     case 3:
//         console.log(a*b);
//         break;
//     case 4:
//         console.log(a/b);
//         break;
//     default:
//         console.log("Invalid choice");
// }
/*
.length->length of the dtring
.indexOf()-> returns the index of the first occurrence of the specified value in a string
.includes->returns true if substring is present in the string
.slice(inclu,exclu)-->returns the extracted substr
.toLowerCase()
.toUpperCase()
s.replace("existing","replacing") 
*/
// console.log(true+true);
// console.log(true+false);
// console.log(false+false);
// console.log(false-true);

// console.log(NaN===NaN); //false
// console.log(Number.NaN===NaN);
// console.log(null===undefined); //false
// console.log(isNaN(NaN));

// const colors=['violet','indigo','blue','green','yellow','orange','red']
// colors[0]
// for (let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }
// colors.push("white")
// for (let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }

// // Tic-Tack-Toc Game
// const gameBoard = [['X', 'O', 'X'], [null, 'X', null], ['X', 'O', 'X']];
// let ans1 = false, ans2 = false;

// // Checking rows
// for (let i = 0; i < gameBoard.length; i++) {
//     let xs = 0, os = 0;
//     for (let j = 0; j < gameBoard[i].length; j++) {
//         if (gameBoard[i][j] === 'X') {
//             xs++;
//         }
//         if (gameBoard[i][j] === 'O') {
//             os++;
//         }
//     }
//     if (xs === 3) ans1 = true;
//     if (os === 3) ans2 = true;
// }

// // Checking columns
// for (let i = 0; i < gameBoard[0].length; i++) {
//     let xs = 0, os = 0;
//     for (let j = 0; j < gameBoard.length; j++) {
//         if (gameBoard[j][i] === 'X') {
//             xs++;
//         }
//         if (gameBoard[j][i] === 'O') {
//             os++;
//         }
//     }
//     if (xs === 3) ans1 = true;
//     if (os === 3) ans2 = true;
// }

// // Checking main diagonal
// let xs = 0, os = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i][i] === 'X') {
//         xs++;
//     }
//     if (gameBoard[i][i] === 'O') {
//         os++;
//     }
// }
// if (xs === 3) ans1 = true;
// if (os === 3) ans2 = true;

// // Checking anti-diagonal
// xs = 0, os = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i][gameBoard.length - 1 - i] === 'X') {
//         xs++;
//     }
//     if (gameBoard[i][gameBoard.length - 1 - i] === 'O') {
//         os++;
//     }
// }
// if (xs === 3) ans1 = true;
// if (os === 3) ans2 = true;

// console.log(ans1);
// console.log(ans2);

// function sum(a,b){
//     return a+b;
// }
// let a=10,b=20;
// let funcExp=sum(a,b);
// console.log(`The sum of ${a} and ${b} is : ${funcExp}`);

// colors.forEach(function(ele,indx,arr){
//     console.log(`${ele} - ${indx}`);
// });
 
// colors.map((ele,idx,colors)=>{
//     console.log(`${ele} - ${idx}`);
// });

// // map vs forEach
// nums=[1,2,3,4,5,6]
// const op1=nums.forEach(function(ele,idx,nums){
//     console.log(ele*2);
// });
// const op2=nums.map(function(ele,idx,nums){
//     return ele*2;
// });
// console.log(op2);

// nums.splice(0,0,0)
// console.log(nums)

// nums.splice(nums.length,0,7)
// console.log(nums);  

// const mnths=["Jan","Mar","Apr",
//     "June","July"
// ];
// // mnths.push("Dec");
// mnths.splice(mnths.length,0,"Nov","Dec")
// const idx0=mnths.indexOf("Jan")
// mnths.splice(idx0,1,"January")
// const idx1=mnths.indexOf("Mar")
// mnths.splice(idx1,0,"February")
// console.log(mnths);

// nums.push(0);
// console.log(nums);

// let updatednums=nums.filter((ele)=>{
//     return ele === 0;
// });
// console.log(updatednums);

// const products=[
//     {name:"FaceWash",price:120},
//     {name:"Phone-Case",price:145},
//     {name:"Chain",price:46},
//     {name:"Tie",price:60},
// ];
// // Products greater then 50 and less than 120 
// const flteProduct=products.filter((ele)=>{
//     if(ele.price>=50&&ele.price<=120)
//     return ele.name
// });
// console.log(flteProduct);

// products.sort((a,b)=>a.price-b.price);
// console.log(products);

// // sq of even no.s
// const evensqs=nums.map(
//     (ele)=>{return ele%2===0?ele*ele:undefined}
// ).filter((currEle)=>currEle===!undefined);
// console.log(evensqs);

// for(let i=0;i<=4;i++){
//     let row='';
//     for(let j=0;j<=i;j++){
//         row+='*';
//     }
//     console.log(row);
// }

// Strings:
let naam=Array.from("Vinit Solanki");
let naamMap=naam.map((curr,idx)=>{
    return `${curr} - ${idx}`;
});
console.log(naamMap);
names=["John","Kane","Leean"]
let mr=names.map((names)=>`Mr. ${names}`);
console.log(names);
console.log(mr);
// String methods:
/*
.indexOf(searchString,position)
.lastIndexOf(searchString,position)
.search(regexp)
.slice(start,end)
.charAt(index from 0 or Last indexing)
.at()->returns the character at specified index
*/