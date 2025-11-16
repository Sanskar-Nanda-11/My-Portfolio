import React from 'react'
import './Navbar.css'


const Navbar = ({ links }) => {
  return (
    <div>
      <nav className='navbar-with-logo'>
        <div className="logohead"><a href="#">My Portfolio</a></div>
        <ul className='nav-links'>
          {links.map((links, index) => (
            <li key={index}><a href="#">{links.name}</a></li>
          ))}
          {/* <li><a href="http://">Home</a></li>
            <li><a href="http://">About</a></li>
            <li><a href="http://">Contact</a></li>
            <li><a href="http://">Resume</a></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
