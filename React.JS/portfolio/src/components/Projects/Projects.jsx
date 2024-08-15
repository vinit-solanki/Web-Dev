import React from 'react'
import Project from './Project'
function Projects() {
  return (
    <div className='w-full min-h-screen bg-black flex items-start justify-start p-2'>
        <div className='flex flex-col md:flex-col items-center justify-start bg-black shadow-lg rounded-lg max-w-6xl mx-4 md:mx-8 gap-y-10'>
            <h1 className='font-bold'>Projects</h1>
            <div className='grid grid-cols-3 max-w-full gap-4'>
                <Project topImg={"currency_converter"} title="Currency Converter"/>
                <Project topImg={"weather_app"} title="Real Time Weather Web App"/>
                <Project topImg={"fy"} title="Fragrance Yard Perfumes"/>
                <Project topImg={"netflix_ui"} title="Netflix.in Landing Pages"/>
                <Project topImg={"lgg"} title="Linear Gradient Generator"/>
                <Project topImg={"todo"} title="Simple Todo List"/>
            </div>
        </div>
    </div>
  )
}

export default Projects