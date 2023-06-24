import React from 'react'
import ExpCard from './ExpCard'
import { Experience } from '../../typings'


type Props = {
  experiences: Experience[]
}

const Experience = ({experiences}: Props) => {
  return (
    <div className='relative flex flex-col h-screen text-center md:text-left md:flex-row 
    max-w-full px-10 justify-center mx-auto items-center space-y-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll overflow-hidden  snap-x snap-mandatory pt-[6rem] md:pt-[8rem]
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {experiences.map((experience)=>{
            return(
              <ExpCard key={experience._id} experience={experience}/>
            )
          })}
        </div>
    </div>
  )
}

export default Experience
