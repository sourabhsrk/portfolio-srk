'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import profile from '../Images/profile-1.jpeg'

type Props = {}
const ExpCard = ({}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 w-300 md:w-300 xl:w-300 flex-shrink-0
    snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{duration:1.2}}
        whileInView={{
            y:0,
            opacity: 1
        }}
        viewport={{once: true}}
        className='w-24 h-24 xl:w-[150px] xl:h-[150px]'
        >
            <Image 
            src={profile} 
            alt='profile'
            className='w-24 h-24 rounded-full object-cover object-center xl:w-[150px] xl:h-[150px]'/>
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Associate Consultant</h4>
            <p className='font-bold text-xl mt-1'>Capgemini</p>
            <div className='flex space-x-2 my-2'>Tech used</div>
            <p className='uppercase py-5 text-gray-300'>start date:.....End date:...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
            </ul>
        </div>
    </article>
  )
}

export default ExpCard
