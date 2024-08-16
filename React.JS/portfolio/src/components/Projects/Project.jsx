import React from 'react'
import './Project.css'
function Project({ topImg, title, github_id }) {
    const img_path = `src/assets/${topImg}.png`;
    const github_path = `https://github.com/vinit-solanki/Web-Dev/tree/main/${github_id}`;
    return (
        <div id='border' className='flex flex-col max-w-sm rounded overflow-hidden shadow-lg '>
            <div className='w-full h-48 relative'>
                <img 
                    className='w-full h-full object-cover' 
                    src={img_path} 
                    alt={title}
                />
            </div>
            <div className='text-md flex flex-row gap-x-3 justify-between align-center px-3 py-2 text-white bg-white font-bold italic bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                {title}
                <a href={github_path}>
                    <img src="src/assets/icons8-github-24.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Project
