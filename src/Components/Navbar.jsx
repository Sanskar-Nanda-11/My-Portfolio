import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav className='navbar-with-logo'>
        <div className="logohead"> My Portfolio </div>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
