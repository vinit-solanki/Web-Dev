import React from 'react'
import Project from './Project'
import './Project.css'

function Projects() {
  return (
    <div id='project-container' className='relative w-full h-screen bg-black flex flex-col items-center justify-center p-4'>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-20"></div>
      
      <div className='relative w-full h-screen flex flex-col md:flex-col items-center justify-center bg-black shadow-lg rounded-lg max-w-6xl mx-4 md:mx-8 gap-y-10'>
        <h1 id='projects-heading' className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse-slow'>
          Projects
        </h1>
        <div id='project' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-full gap-6 justify-center items-center project-grid animate-fadeIn'>
          <Project topImg={"currency_converter"} title="Currency Converter" github_id={"React.JS/currency_converter"}/>
          <Project topImg={"weather_app"} title="Real Time Weather Web App" github_id={"/weather_app"}/>
          <Project topImg={"fy"} title="Fragrance Yard Perfumes" github_id={"Mini-Projects/fregrance_yard"}/>
          <Project topImg={"netflix_ui"} title="Netflix.in Landing Pages" github_id={"Mini-Projects/project2"}/>
          <Project topImg={"lgg"} title="Linear Gradient Generator" github_id={"Mini-Projects/js-based-projects/gradient_generator.html"}/>
          <Project topImg={"todo"} title="Simple Todo List" github_id={"Mini-Projects/js-based-projects/"}/>
        </div>
      </div>
    </div>
  )
}

export default Projects
