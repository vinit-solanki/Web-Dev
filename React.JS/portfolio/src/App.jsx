import React from 'react'
import './App.css';
import Header from './Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-black'>
      <Header />
      <main className='flex-1'>
        <section id="home" className='animate-fadeIn'>
          <Home />
        </section>
        <section id="about" className='animate-slideUp'>
          <About />
        </section>
        <section id="projects" className='animate-slideUp'>
          <Projects />
        </section>
        <section id="contact" className='animate-fadeIn'>
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App