// const bt1=document.querySelector("#p1Btn")
// const bt2=document.querySelector("#p2Btn")
// const rst=document.querySelector("#resetBtn")
// let limit=parseInt(document.querySelector("#max-players").value)
// let scr1=parseInt(document.querySelector("#p1Score").innerHTML)
// let scr2=parseInt(document.querySelector("#p2Score").innerHTML)
// bt1.addEventListener('click',function (e){
//     if(scr1<limit){
//     // ++scr1;
//     console.log(scr1);    
//     document.querySelector("#p1Score").innerHTML=++scr1;
//     }
//     else if(scr1===limit||scr2===limit){
//         if(scr1>scr2){
//             document.querySelector("#p1Score").innerHTML=++scr1;
//             bt1.style.backgroundColor="green";
//             // alert("Player-1 Wins!!");
//             bt2.style.backgroundColor="red";
//         }
//         // else if(scr1===scr2){
//         //     bt1.style.backgroundColor="green";
//         //     bt2.style.backgroundColor="green";
//         // }
//         else{
//             bt1.style.backgroundColor="green";
//             // alert("Player-1 Wins!!");
//             bt2.style.backgroundColor="red";
//         }
//     }
// });
// bt2.addEventListener('click',function (e){
//     if(scr2<limit){
//         // ++scr1;
//         console.log(scr2);    
//         document.querySelector("#p2Score").innerHTML=++scr2;
//         }
//         else if(scr2===limit||scr1===limit){
//             if(scr1>scr2){
//                 document.querySelector("#p2Score").innerHTML=++scr2;
//                 bt1.style.backgroundColor="green";
//                 // alert("Player-1 Wins!!");
//                 bt2.style.backgroundColor="red";
//             }
//             //  if(scr1===scr2&&scr1!==limit&&scr2!==limit){
//             //     bt1.style.backgroundColor="green";
//             //     bt2.style.backgroundColor="green";
//             // }
//             else{
//                 bt2.style.backgroundColor="green";
//                 // alert("Player-1 Wins!!");
//                 bt1.style.backgroundColor="red";
//             }
//         }
// });
// rst.addEventListener('click',function (e){
//     scr1=0;
//     scr2=0;
//     console.log(scr1,scr2);       
//     document.querySelector("#p1Score").innerHTML=scr1;    
//     document.querySelector("#p2Score").innerHTML=scr2;
//     bt1.style.backgroundColor="burlywood"
//     bt2.style.backgroundColor="burlywood"
// });

const bt1 = document.querySelector("#p1Btn");
const bt2 = document.querySelector("#p2Btn");
const rst = document.querySelector("#resetBtn");
let limit = parseInt(document.querySelector("#max-players").value);
let scr1 = parseInt(document.querySelector("#p1Score").innerHTML);
let scr2 = parseInt(document.querySelector("#p2Score").innerHTML);

// Update limit when the dropdown value changes
document.querySelector("#max-players").addEventListener('change', function() {
    limit = parseInt(this.value);
    resetGame();
});

bt1.addEventListener('click', function(e) {
    if (scr1 < limit && scr2 < limit) {
        document.querySelector("#p1Score").innerHTML = ++scr1;
        checkWinner(); 
    }
});

bt2.addEventListener('click', function(e) {
    if (scr2 < limit && scr1 < limit) {
        document.querySelector("#p2Score").innerHTML = ++scr2;
        checkWinner();
    }
});

rst.addEventListener('click', function(e) {
    resetGame();
});

function resetGame() {
    scr1 = 0;
    scr2 = 0;
    document.querySelector("#p1Score").innerHTML = scr1;
    document.querySelector("#p2Score").innerHTML = scr2;
    bt1.style.backgroundColor = "burlywood";
    bt2.style.backgroundColor = "burlywood";
}

function checkWinner() {
    if (scr1 === limit || scr2 === limit) {
        if (scr1 > scr2) {
            bt1.style.backgroundColor = "green";
            bt2.style.backgroundColor = "red";
            // resetGame();
        } 
        else if (scr2 > scr1) {
            bt1.style.backgroundColor = "red";
            bt2.style.backgroundColor = "green";
            // resetGame();
        } 
        else {
            bt1.style.backgroundColor = "green";
            bt2.style.backgroundColor = "green";
            // resetGame();
        }
    }
}
