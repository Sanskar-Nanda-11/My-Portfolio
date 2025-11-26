import React, { useState } from 'react'
import { FiMenu, Fix } from 'react-icons/fi'

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false)
    const Navabarlinks = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Skils', link: '#skills' },
        { id: 4, name: 'My Projects', link: '#projects' }
    ]
    return (
        <header className='fixed top-0 left-0 w-full z-0 text-white' data-aos='fade-up' data-aos-delay='500'>
            <div className='container mx-auto flex items-center justify-between p-5'>
                {/*LOGO*/}
                <a href="#home" className='text-4xl font-bold italic text-white'> Sanskar Nanda </a>
                {/* Mobile Menu toggle  */}
                <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!IsOpen)}>
                    <FiMenu className='w-8 h-8 text-white' />
                </button>
                {/* Desktop Navigation */}
                <nav className="hidden  md:flex items-center space-x-7">
                    {Navabarlinks.map((Link)=>(
                        <a key={link.id} href={link.link }></a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
