import Lottie from 'lottie-react';
import React from 'react';
import AboutVideo from './skills.json';
import Card from './Card';
import './About.css';

function About() {
  return (
    <div id='main' className='w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black p-3 overflow-hidden'>
      <div className='w-full md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-lg gap-2 flex-shrink-0'>
        <h2 className='italic text-shadow-effect mb-4'>Skills I Know For Now</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
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
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <Lottie animationData={AboutVideo} className="w-full h-auto max-w-full" />
      </div>
    </div>
  );
}

export default About;
