const clock=document.getElementById('clock')
setInterval(function (){
    let date=new Date()
    // console.log(date.toLocaleTimeString());
    // let hours=date.getHours()
    // let minutes=date.getMinutes()
    // let seconds=date.getSeconds()
    // let ampm="AM"
    // if(hours>12){
    //     hours=hours-12
    //     ampm="PM"
    //     }
    // if(hours==0){
    //         hours=12
    //     }
    // clock.innerHTML=`${hours}:${minutes}:${seconds} ${ampm}`    
    clock.innerHTML=date.toLocaleTimeString();  
},1000)