import React from 'react';
import Project from './Project';
import './Projects.css'; // Import the updated CSS file

function Projects() {
  return (
    <div className='project-container'>
      <div className='projects-wrapper'>
        <h1 className='projects-heading'>Projects</h1>
        <div className='projects-grid'>
          <Project topImg={"currency_converter"} title="Currency Converter" github_id={"React.JS/currency_converter"}/>
          <Project topImg={"weather_app"} title="Real Time Weather Web App" github_id={"/weather_app"}/>
          <Project topImg={"fy"} title="Fragrance Yard Perfumes" github_id={"Mini-Projects/fregrance_yard"}/>
          <Project topImg={"netflix_ui"} title="Netflix.in Landing Pages" github_id={"Mini-Projects/project2"}/>
          <Project topImg={"lgg"} title="Linear Gradient Generator" github_id={"Mini-Projects/js-based-projects/gradient_generator.html"}/>
          <Project topImg={"todo"} title="Simple Todo List" github_id={"Mini-Projects/js-based-projects/"}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
