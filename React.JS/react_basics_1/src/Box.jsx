import React, { useState } from 'react';
function Box() {
    const GetRandomColor=()=>{
        const colors = [
            '#e57373', '#f06292', '#ba68c8', '#64b5f6', '#4fc3f7',
            '#4db6ac', '#81c784', '#dce775', '#ffb74d', '#ff8a65',
            '#a1887f', '#d7ccc8', '#c2185b', '#7b1fa2', '#512da8',
            '#303f9f', '#0288d1', '#0277bd', '#01579b', '#00695c'
          ];
          let random=Math.floor(Math.random()*colors.length);
          return colors[random];
        }
    const [color,setColor]=useState(GetRandomColor);
  return (
    <div onClick={()=>{setColor(GetRandomColor())}} style={{backgroundColor: color, 
        width: "50px",
        height: "50px",
        margin: "5px",
        padding: "1rem",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
    </div>
  )
}

export default Box