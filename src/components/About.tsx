'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import profile from '../Images/profile-1.jpeg'

type Props = {}

const About = ({}: Props) => {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    transition={{
        duration: 1.5
    }}
    whileInView={{
        opacity: 1
    }}
    
    className='relative flex flex-col h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-center mx-auto items-center space-y-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.div
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.5
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{
            once: true
        }}
        className='h-56 w-56 md:h-95 md:w-64 xl:w-[400px] xl:h-[500px]'
        >
        <Image
            src={profile}
            alt='profile'
            className=' -mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 xl:w-[400px] xl:h-[500px]'
        />
      </motion.div>
      <div className='space-y-8 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, perspiciatis pariatur. Magni, atque repellat, quasi quo pariatur soluta nobis quae, nemo non iure neque quisquam ex autem libero? Consequuntur, nobis.</p>
      </div>
    </motion.div>
  )
}

export default About
