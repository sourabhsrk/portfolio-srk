import React from 'react'
import ExpCard from './ExpCard'
import { ExperienceCardType } from '../../typings'


type Props = {
  experiences: ExperienceCardType[]
}

const Experience = ({experiences}: Props) => {
  const sortedData = [...experiences].sort((a, b) => 
    new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );
  return (
    <div className='relative flex flex-col h-screen text-center md:text-left md:flex-row md:overflow-hidden
    max-w-full md:px-10 px-4 pt-28 justify-center items-center scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll overflow-hidden snap-x snap-mandatory
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          {sortedData.map((experience)=>{
            return(
              <ExpCard key={experience._id} experience={experience}/>
            )
          })}
        </div>
    </div>
  )
}

export default Experience
