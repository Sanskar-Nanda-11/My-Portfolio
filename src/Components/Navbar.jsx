import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className='navbar-with-logo'>
        <div className="logohead"> My Portfolio </div>
        <ul className='nav-links'>
            <li><a href="http://">Home</a></li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contact</a></li>
            <li><a href="http://">Resume</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
