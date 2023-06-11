import React from 'react'
import ExpCard from './ExpCard'

type Props = {}

const Experience = ({}: Props) => {
  return (
    <div className='relative flex flex-col h-screen text-center overflow-y-auto  md:text-left md:flex-row 
    max-w-full px-10 justify-center mx-auto items-center space-y-10'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory pt-[6rem] md:pt-[15rem]'>
            <ExpCard/>
            <ExpCard/>
        </div>
    </div>
  )
}

export default Experience
