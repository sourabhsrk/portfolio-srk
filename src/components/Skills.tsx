'use client'
import React from 'react'
import { motion } from "framer-motion"
import ImgSkill from './ImgSkill'
import { Skill } from '../../typings'


type Props = {
  skills: Skill[]
}
const Skills = ({skills}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex flex-col justify-center text-center items-center mx-auto md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 xl:space-y-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h4 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h4>
      <div className='grid grid-cols-3 md:grid-cols-4 gap-5 pt-24 w-fit'>
        {skills?.slice(0,skills.length/2).map((skill)=>{
          return(
            <ImgSkill key={skill._id} skill={skill} />
          )
        })}
         {skills?.slice(skills.length/2,skills.length).map((skill)=>{
          return(
            <ImgSkill key={skill._id} skill={skill} directionLeft/>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Skills
