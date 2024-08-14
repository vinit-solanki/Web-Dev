import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <div className='w-full p-2 bg-gray-600 text-3xl text-white text-center'>User: {userid}</div>
  )
}

export default User