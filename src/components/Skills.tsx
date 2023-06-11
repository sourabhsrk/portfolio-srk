'use client'
import React from 'react'
import { motion } from "framer-motion"
import ImgSkill from './ImgSkill'

type Props = {}
const Skills = ({}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex flex-col justify-center text-center items-center mx-auto md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 xl:space-y-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h4 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h4>
      <div className='grid grid-cols-4 gap-5'>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
        <ImgSkill/>
      </div>
    </motion.div>
  )
}

export default Skills
