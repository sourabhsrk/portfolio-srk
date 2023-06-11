'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

const Header = ({}: Props) => {
  return (
    <header className='sticky top-0 p-5 flex justify-between max-w-xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex items-center'>
       
        <SocialIcon url="https://twitter.com/" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url="https://github.com/sourabhsrk" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/sourabhsrk/" fgColor='gray' bgColor='transparent'/>
        <SocialIcon url="https://twitter.com/" fgColor='gray' bgColor='transparent'/>
      </motion.div>
      <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex items-center cursor-pointer text-gray-300'>

        <SocialIcon network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Work with me</p>
      </motion.div>
    </header>
  )
}

export default Header
