import React from 'react'

function Card({source}) {
let path =`src/assets/${source}.png`;
  return (
<div class="p-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img src={path} alt="" />
</div>

  )
}

export default Card