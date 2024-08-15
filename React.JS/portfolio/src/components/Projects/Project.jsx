import React from 'react'
import './Project.css'
function Project({ topImg, title }) {
    const img_path = `src/assets/${topImg}.png`;
    return (
        <div id='border' className='flex flex-col max-w-sm rounded overflow-hidden shadow-lg p-0 '>
            <div className='w-full h-48 relative'>
                <img 
                    className='w-full h-full object-cover' 
                    src={img_path} 
                    alt={title}
                />
            </div>
            <div className='text-xl flex justify-center align-center px-3 pt-2'>
                {title}
            </div>
        </div>
    )
}

export default Project
