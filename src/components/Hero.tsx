'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profile from '../Images/profile-1.jpeg'
import Link from 'next/link'

type Props = {}

const Hero = ({}: Props) => {
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
       <BackgroundCircles/>
       <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={profile} alt='profile pic'/> 
       <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-6 tracking-[15px]'>
            Frontend Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl px-10 font-semibold'>
            <span className='mr-3'>
                <Typewriter 
                    words={['Hi,I am Sourabh Ranakoti','I am Developer','<Loves to Code/>']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    cursorColor='red'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </span>
        </h1>
        <div className='pt-10'>
            <Link href='#about'><button className='heroButton'>About</button></Link>
            <Link href='#experience'><button className='heroButton'>Experience</button></Link>
            <Link href='#skills'><button className='heroButton'>Skills</button></Link>
            <Link href='#projects'><button className='heroButton'>Projects</button></Link>
        </div>
       </div>
      
    </div>
  )
}

export default Hero
