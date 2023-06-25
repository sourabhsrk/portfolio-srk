'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import { PageInfo } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'
import {  ArrowDownTrayIcon } from '@heroicons/react/24/solid'

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
       <BackgroundCircles/>
       <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' 
       src={pageInfo.heroImage?urlForImage(pageInfo.heroImage.asset).url():''} 
       alt='profile pic' 
       width={100} 
       height={100}
       priority={true}/> 
       <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-6 tracking-[15px]'>
           {pageInfo?.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl px-10 font-semibold'>
            <span className='mr-3'>
                <Typewriter 
                    words={[`Hi,I am ${pageInfo?.name}`,'I am web Developer','<Loves to Code/>',"<Designing Tomorrow's Web/>"]}
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
            <a href='#about'><button className='heroButton'>About</button></a>
            <a href='#experience'><button className='heroButton'>Experience</button></a>
            <a href='#skills'><button className='heroButton'>Skills</button></a>
            <a href='#projects'><button className='heroButton'>Projects</button></a>
        </div>
        <Link href='/React-Developer.pdf' target='_blank'><button className='heroButton border border-[#F7AB0A]/20 mt-8 animate-bounce'>Resume{" "}<ArrowDownTrayIcon className="h-4 w-4 inline" /></button></Link>
       </div>
      
    </div>
  )
}

export default Hero

