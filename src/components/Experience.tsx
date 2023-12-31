import React from 'react'
import ExpCard from './ExpCard'
import { Experience } from '../../typings'


type Props = {
  experiences: Experience[]
}

const Experience = ({experiences}: Props) => {
  return (
    <div className='relative flex flex-col h-screen text-center md:text-left md:flex-row md:overflow-hidden
    max-w-full md:px-10 px-4 justify-center mx-auto items-center space-y-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll overflow-hidden  snap-x snap-mandatory pt-[4rem] md:pt-[8rem]
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {experiences?.reverse().map((experience)=>{
            return(
              <ExpCard key={experience._id} experience={experience}/>
            )
          })}
        </div>
    </div>
  )
}

export default Experience
