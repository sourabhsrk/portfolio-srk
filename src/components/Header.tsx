'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '../../typings'


type Props = {
  socials: Social[],

}

const Header = ({socials}: Props) => {

  

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
       
        { socials.map((social)=>{
          return(
          <SocialIcon 
          key={social._id}
          url={social.url} 
          fgColor='gray' 
          bgColor='transparent'
          />)
        }) }
    
      </motion.div>

      <div onClick={() => window.location.href = '#contactme'}>
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
      </div>
    </header>
  )
}

export default Header