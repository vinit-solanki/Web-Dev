import Lottie from 'lottie-react';
import React from 'react';
import AboutVideo from './skills.json';
import Card from './Card';
import './About.css';

function About() {
  return (
    <div id='main' className='w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-black p-3 mb-4 mt-1'>
        <div className='w-full flex flex-col items-center justify-center shadow-lg rounded-lg max-w-full gap-2 flex-shrink-0'>
         <h2 className='italic text-shadow-effect'>Skills I Know For Now</h2>
         <div className='grid grid-cols-4 gap-4 ml-7'>
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
        <Lottie animationData={AboutVideo} className="w-lg h-lg"/>
    </div>
  );
}

export default About;
