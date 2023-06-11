'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import ricon from '../Images/react-icon1.svg.png'

type Props = {
    directionLeft ?: boolean
}
const ImgSkill = ({directionLeft}: Props) => {
  return (
    <motion.div
    initial={{
        x: directionLeft ? -200 : 200,
        opacity : 0
    }}
    transition={{duration:1}}
    whileInView={{
        x:0,
        opacity:1
    }}
    className='group relative flex cursor-pointer h-24 w-24 xl:h-30 xl:w-30'>
      <Image 
        src={ricon}
        alt='icon'
        className='h-24 w-24 rounded-full border border-gray-500 object-contain xl:h-30 xl:w-30 filter group-hover:grayscale
        transition duration-300 ease-in-out'/>
       
        <div className='flex justify-center items-center absolute h-24 w-24 xl:h-30 xl:w-30 opacity-0 group-hover:opacity-80 
        group-hover:bg-white transiton duration-300 ease-in-out rounded-full'>
            <p className='text-3xl font-bold text-black opacity-100'>80%</p>
        </div>
       
    </motion.div>
  )
}

export default ImgSkill
