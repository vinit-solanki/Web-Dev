import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState('');
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/vinit-solanki')
    //     .then(resp=>resp.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[]);
  return (
    <div className='flex flex-col w-full justify-center align-center text-center m-4 bg-gray-600 text-white'>Github Followers: {data.followers}
    <img style={{width:'40px', height:'30px'}} src={data.avatar_url} className='flex justify-center align-center text-center' alt="" />
    </div>

  )
}

export default Github
export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/vinit-solanki');
    return response.json();
}