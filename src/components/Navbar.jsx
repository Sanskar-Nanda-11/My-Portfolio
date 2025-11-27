import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

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
                    {Navabarlinks.map((Link) => (
                        <a key={Link.id} href={Link.link} className='hover:text-gray-200 text-lg'>
                            {Link.name}
                        </a>
                    ))}
                    <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg'>
                         {" "} Contact {" "} 

                    </button>
                </nav>
            </div>
            {/* Mobile Navigation */}
            <div className={`${IsOpen ? ' block ' : ' hidden '} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>

            </div>
            {/* Close Button */}
            <button className="absolute top-5 right-5 text-white " onClick={() => setIsOpen(false)}>
                 <FiX className="w-8 h-8" />
                 </button>
                 {/* Mobile Navigation */}
                 {Navabarlinks.map((Link)=>(
                    <a key={Link.id} href={Link.link} className=" text-lg text-white hover:text-gray-300" onClick={()=>setIsOpen(false)}>{Link.name}</a>
                 ))}
                 {/* Contact Button */}
                 <button className=" inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg"> Contact </button>
        </header>
    )
}

export default Navbar
