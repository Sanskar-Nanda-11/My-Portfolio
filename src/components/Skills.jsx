import React from 'react'
import React_logo from '/react.png'
import Tailwind_logo from '/png-transparent-tailwind-css-hd-logo.png'
import Java from '/java.png'
import Spring_Boot from '/spring_boot_logo.png'
import img_hero from '/img_hero.png'

const skillData = [
  {id:1 , image:React_logo , title:'React JS' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quidem.'},
  {id:2 , image:Tailwind_logo , title:'Tailwind' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quidem.'},
  {id:3 , image:Java , title:'Java' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quidem.'},
  {id:4 , image:Spring_Boot , title:'Spring Boot' , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quidem.'}
];

const SkillBox=({image,title,description})=>(
  <article className='bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300'>
    <figure className='flex justify-center md-4 '>
      <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20 ' />
    </figure>
    <header>
      <h3 className=' text-lg sm:text-xl font-semibold md-2 '>{title}</h3>
    </header>
    <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
  </article>
)
const Skills = () => {
  return (
    <section id="skills" className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10'>
      <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50  top-10 sm:top-28 left-1/2 transform -translate-x-1/2 '></div> 
      <img src={img_hero} alt="Left picture" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto  sm:w-32 opacity-70 ' />
      <div data-aos='fade-up' data-aos-delay='300' className="relative z-20 text-center space-y-6 sm:space-y-16">
        <header>
          <h1 className=" text-3xl sm:text-4xl font-bold ">
            My Experise <br /> and <span className="text-purple-400"> Skils </span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium cumque illo eos dolorem recusandae totam atque distinctio ab aut.
             </p>
        </header>
        <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 '>
          {skillData.map((Skill)=>(
            <SkillBox key={Skill.id} image={Skill.image} title={Skill.title} description={Skill.description}/>
          ))}
        </section>
      </div>
      <img src={img_hero} alt="Right Picture" className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70'/>
    </section>
  )
}

export default Skills
