import React from 'react'
import './About.css'
function Card({source}) {
let path =`/assets/${source}.png`;
  return (
<div id='card' className="p-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img src={path} alt="" />
</div>

  )
}

export default Card