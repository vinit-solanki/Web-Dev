import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Donate from './components/Donate';
import Contact from './components/Contact';
import Event24 from './components/Event24';
import Events from './components/Events';
import Loader from './Loader';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><Home /></>
    },
    {
      path:"/home", 
      element:<><Navbar /><Home /></>
    },
    {
      path:"/about", 
      element:<><Navbar /><About /></>
    },
    {
      path:"/donate", 
      element:<><Navbar /><Donate /></>
    },
    {
      path:"event24",
      element:<><Navbar/><Event24/></>
    },
    {
      path:"events",
      element:<><Navbar/><Events/></>
    },
    {
      path:"/contact", 
      element:<><Navbar /><Contact /></>
    },
  ])
  return (
    <>
    {/* <Loader/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App