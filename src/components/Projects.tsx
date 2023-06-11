import React from 'react'

type Props = {}
const Projects = ({}:Props) => {
    const projects= [1,2,3];
  return (
    <div className='h-screen relative flex flex-col justify-evenly text-left items-center max-w-full md:flex-row overflow-hidden
    mx-auto z-0'>
      <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20'>
        {projects.map((prj)=>{
            return(<div>
                Project{prj}   
            </div>)
            
        })}
      </div>
      <div className='w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12'></div>
    </div>
  )
}

export default Projects
