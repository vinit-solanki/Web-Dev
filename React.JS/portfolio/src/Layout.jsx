import React from 'react'
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Projects from './components/Projects/Projects';
function Layout() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <LetsTalk/>
    <Footer/>
    </>
  )
}

export default Layout