import React from 'react'
import Navbar from './Navbar'
import img_hero from '/img_hero.png'
import github from '/github.png'
import linkedin from '/linkedin.png'
import facebook from '/facebook.png'
import instagram from '/Instagram-Logo.png'
import IT_Fresher_Resume_Template from '/IT_Fresher_Resume_Template.pdf'
const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h[550px] sm:min-h-[600px] flex flex-col items-center'>
      <div className='md-h-[550px] h-[550px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'></div>
      <Navbar />
      <main id="home" className=" flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10 ">
        <section className="flex-1 mr-28 md:text-left mt-10 md:mt-10 relative " data-aos='fade-up' data-aos-delay='500'>
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className=" text-4xl sm:text-4xl md:text-5xl font-bold text-white md-4">
              Sanskar Nanda
            </h1>
            <h2 className=" text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] md-2 ">

            </h2>
          </header>
        </section>
      </main>
    </div>
  )
}

export default Hero
