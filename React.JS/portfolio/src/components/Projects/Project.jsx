import React from 'react'
import './Project.css'

function Project({ topImg, title, github_id }) {
  return (
    <div id='border' className='border-2 p-4 rounded-lg flex flex-col items-center'>
      <img src={`./assets/${topImg}.png`} alt={title} className='w-full h-32 object-cover mb-4 rounded-md'/>
      <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
      <a href={`https://github.com/username/${github_id}`} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-300'>
        View on GitHub
      </a>
    </div>
  )
}

export default Project
