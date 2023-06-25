'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { PageInfo } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
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
    max-w-7xl md:px-10 px-4 justify-center mx-auto items-center md:space-y-10 space-y-5'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
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
        className='h-48 w-48 md:h-[400px] md:w-[500px] xl:w-[700px] xl:h-[500px]'
        >
        <Image
            src={pageInfo.profilePic?urlForImage(pageInfo.profilePic.asset).url():''}
            alt='profile'
            className=' flex-shrink-0 h-48 w-48 rounded-full object-cover md:rounded-lg md:h-[400px] md:w-[500px] xl:w-[700px] xl:h-[500px]'
            width={1000} height={1000}
        />
      </motion.div>
      <div className='space-y-4 md:space-y-8 px-0 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-semibold'>Here is a{" "} 
        <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background</h4>
        <p className='text-sm md:text-base xl:text-lg'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}

export default About
