import Lottie from 'lottie-react';
import React from 'react';
import AboutVideo from './skills.json';
import Card from './Card';
import './About.css';

function About() {
  return (
    <div id='main' className='w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black p-3 overflow-hidden relative'>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-20"></div>
      
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-lg gap-2 flex-shrink-0 animate-fadeIn'>
        <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-8 animate-pulse-slow'>
          Skills I Know For Now
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 skill-grid animate-slideUp'>
          <Card source={"html5lg"}/>
          <Card source={"css"}/>
          <Card source={"icons8-bootstrap-logo-480"}/>
          <Card source={"icons8-tailwind-css-240"}/>
          <Card source={"icons8-c++-480"}/>
          <Card source={"icons8-python-480"}/>
          <Card source={"icons8-pandas-logo-480"}/>
          <Card source={"icons8-numpy-480"}/>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center animate-float'>
        <Lottie 
          animationData={AboutVideo} 
          className="w-full h-auto max-w-full hover-glow transition-transform duration-300" 
        />
      </div>
    </div>
  );
}

export default About;
