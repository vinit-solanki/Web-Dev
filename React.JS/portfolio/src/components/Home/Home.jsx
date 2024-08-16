import React from 'react';
import Lottie from 'lottie-react';
import homeAnimation from './Home.json'; // Adjust the path as needed

function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center ">
      {/* Padding-top to account for the fixed header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between bg-black shadow-lg rounded-lg max-w-6xl mx-4 md:mx-8">
        {/* Lottie Animation */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2 flex justify-center items-center">
          <Lottie 
            animationData={homeAnimation} 
            loop={true} 
            autoplay={true} 
            className="max-w-xs md:max-w-md max-h-xs md:max-h-md"
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white md:w-1/2 md:ml-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">Hi, I'm Vinit Solanki</h1>
          <p className="text-sm md:text-base leading-relaxed md:leading-relaxed mx-2 md:mx-0">
            I am currently pursuing a B.E. in Artificial Intelligence and Data Science from VESIT, Mumbai, where I am in my 3rd year. With a keen interest in front-end development, I am passionate about creating visually appealing and user-friendly interfaces. I am adaptive, hard-working, and committed to my growth and the success of my projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
