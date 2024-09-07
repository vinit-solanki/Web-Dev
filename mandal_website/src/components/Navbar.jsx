import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className='fixed w-full '>
            <Link to="/home">Home</Link>
            <Link to="/about">Committie</Link>
            <Link to="/event24">Utsav'24</Link>
            <Link to="/donate">Donate us</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar