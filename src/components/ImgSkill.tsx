'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { Skill } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
    directionLeft ?: boolean,
    skill: Skill
}
const ImgSkill = ({directionLeft,skill}: Props) => {
  return (
    <motion.div
    initial={{
        x: directionLeft ? -100 : 100,
        opacity : 0
    }}
    transition={{duration:1}}
    whileInView={{
        x:0,
        opacity:1
    }}
    className='group relative flex cursor-pointer h-12 w-12 md:h-24 md:w-24 xl:h-30 xl:w-30'>
      <Image 
        src={skill.image?urlForImage(skill.image.asset).url():''}
        alt='icon'
        width={200} height={200}
        className='h-12 w-12 md:h-24 md:w-24 rounded-full border border-gray-500 object-contain xl:h-30 xl:w-30 filter group-hover:grayscale
        transition duration-300 ease-in-out'/>
       
        <div className='flex justify-center items-center absolute h-12 w-12 md:h-24 md:w-24 xl:h-30 xl:w-30 opacity-0 group-hover:opacity-80 
        group-hover:bg-white transiton duration-300 ease-in-out rounded-full'>
            <p className='text-xl md:text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
       
    </motion.div>
  )
}

export default ImgSkill
