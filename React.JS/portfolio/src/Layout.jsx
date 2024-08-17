import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './index.css';
function Layout() {
  return (
    <div className='w-full h-screen'>
      <Header />
      <div id="home" className='w-full h-screen'>
        <Home />
      </div>
      <div id="about" className='w-full h-screen'>
        <About />
      </div>
      <div id="projects" className='w-full h-screen'>
        <Projects />
      </div>
      <div id="contact" className='w-full h-screen'>
        <Contact />
      </div >
      <Footer />
    </div>
  );
}

export default Layout;
