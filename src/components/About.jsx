import React from 'react'
import img_about from '/img_about.png'
import img_about1 from '/img_about1.png'
import img_about2 from '/img_about2.png'

const About = () => {
  return (
    <section id='about' className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6">
        <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
            <figure data-aos='fade-right' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 relative'>
                <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradiant-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full '></div>
                <img src={img_about} alt="" />
            </figure>
        </div>
    </section>
  )
}

export default About
