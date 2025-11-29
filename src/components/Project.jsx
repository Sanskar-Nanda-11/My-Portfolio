import React from 'react'
import project_photo1 from '/project_photo1.png'
import project_photo2 from '/project_photo2.png'
import project_photo3 from '/project_photo3.png'

const ProjectCard=({image,title,description,link})=>{
    return(
        <article className=' relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group '>
            <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 '></div>
        </article>
    )
}
const Project = () => {
  return (
    <div>
      
    </div>
  )
}

export default Project
