import React from 'react';
import './Project.css';

function Project({ topImg, title, github_id }) {
  return (
    <div id='border' className='flex flex-col border-2 rounded-lg items-center shadow-lg bg-gray-800 text-white'>
      <div className='w-full'>
        <img src={`./assets/${topImg}.png`} alt={title} className='w-full h-40 object-cover rounded-t-md' />
      </div>
      <div className='flex flex-row w-full justify-between items-center px-3 py-2 bg-gray-700'>
        <h3 className='text-md font-semibold'>{title}</h3>
        <a href={`https://github.com/username/${github_id}`} target="_blank" rel="noopener noreferrer">
          <img src="assets/icons8-github-24.png" alt="GitHub" className='w-6 h-6'/>
        </a>
      </div>
    </div>
  );
}

export default Project;
