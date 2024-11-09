import React from 'react';
import './Project.css';

function Project({ topImg, title, github_id }) {
  return (
    <div className='project-card flex flex-col border-2 rounded-lg items-center shadow-lg bg-gray-800/80 backdrop-blur-sm text-white transform transition-all duration-300'>
      <div className='w-full overflow-hidden'>
        <img 
          src={`./assets/${topImg}.png`} 
          alt={title} 
          className='w-full h-40 object-cover rounded-t-md project-image transition-transform duration-300' 
        />
      </div>
      <div className='flex flex-row w-full justify-between items-center px-4 py-3 bg-gray-700/90'>
        <h3 className='text-md font-semibold hover:text-blue-400 transition-colors duration-300'>{title}</h3>
        <a 
          href={`https://github.com/username/${github_id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-icon-wrapper"
        >
          <img 
            src="assets/icons8-github-24.png" 
            alt="GitHub" 
            className='w-6 h-6 transition-transform duration-300 hover:scale-110'
          />
        </a>
      </div>
    </div>
  );
}

export default Project;
