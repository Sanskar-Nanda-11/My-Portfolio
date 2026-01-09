import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-linear-to-r from-purple-700 to-blue-700 text-white py-5'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <h1 className='text-3xl font-bold italic mb-4 md:mb-0'> Sanskar Nanda </h1>
            <p className='text-sm text-center md:text-left'>&copy; 2026 Sanskar Nanda. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
