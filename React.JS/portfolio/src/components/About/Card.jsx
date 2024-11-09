import React from 'react'
import './About.css'

function Card({source}) {
  let path =`/assets/${source}.png`;
  return (
    <div 
      id='card' 
      style={{width:"100px", height:"100px"}} 
      className="skill-card p-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:transform hover:scale-110 transition-all duration-300"
    >
      <img 
        src={path} 
        alt={source} 
        className="w-full h-full object-contain skill-image"
      />
    </div>
  )
}

export default Card