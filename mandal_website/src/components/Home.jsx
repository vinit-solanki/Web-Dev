import React from 'react'
import { Link } from 'react-router-dom'
import myImage from '/src/assets/ganpati_big_photo.png'
function Home() {
  return (
    <div className='flex flex-row w-full h-screen overflow-hidden'>
      <div className="flex flex-col justify-evenly mt-9 items-center w-1/2 bg-yellow-500"> 
       <img src={myImage} alt="" height={325} width={325}/>
      <h1 style={{ fontFamily: 'serif', color: 'red', fontSize: '2rem', fontStyle: 'italic', fontWeight:'bold'}}>
        ॐ गण गणपतये नमः
      </h1>
      </div>
      <div className="flex justify-center items-center h-screen w-1/2 bg-red-500">  
      </div>
    </div>
  )
}

export default Home