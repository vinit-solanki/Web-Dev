import React from 'react';
import './Header.css';

function Header() {
  return (
    <div id='header' className='fixed top-0 left-0 w-full bg-black text-white shadow-md z-50'>
      <div className='flex items-center justify-between p-4 md:px-6'>
        <div className='flex items-center'>
          <h2 className='text-xl font-bold'>
            Vinit Solanki<span className='text-red-500'>.</span>
          </h2>
        </div>
        <div className='flex items-center space-x-7'>
          <a href="#home" className='text-gray-400 hover:text-white'>Home</a>
          <a href="#about" className='text-gray-400 hover:text-white'>About</a>
          <a href="#projects" className='text-gray-400 hover:text-white'>Projects</a>
          <a href="#contact" className='text-gray-400 hover:text-white'>Contact</a>
        </div>
        <div>
          <button className='bg-transparent text-white border border-white p-2 rounded'>
            Let's talk
          </button>
        </div>
      </div>
      <div className='gradient-border'></div>
    </div>
  );
}

export default Header;
