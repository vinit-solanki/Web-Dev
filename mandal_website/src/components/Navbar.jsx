import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/event24">Event 24</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar