'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Project } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'

type Props = {
  projects: Project[]
}
const Projects = ({projects}:Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex flex-col justify-evenly text-left items-center max-w-full md:flex-row overflow-hidden
    mx-auto z-0'>
      <h3 className='absolute top-20 tracking-[15px] md:tracking-[20px] uppercase text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((prj,i)=>{
            return(<div className='w-screen flex flex-col flex-shrink-0 space-y-5 snap-center justify-center items-center md:p-20 p-8 h-screen' key={i}> 
                 <motion.div
                 initial={{
                    y:-100,
                    opacity:0
                 }}
                 whileInView={{
                    y:0,
                    opacity:1
                 }}
                 transition={{duration:1.2}}
                 viewport={{once:true}}
                 className='relative h-[140px] w-[260px] md:h-[200px] md:w-[400px]'>
                    <Image
                    src={prj.image?urlForImage(prj.image.asset).url():''}
                    alt='projectImage'
                    fill={true}
                    />
                 </motion.div>

                 <div className='space-y-4 md:space-y-6 px-0 md:px-10 max-w-6xl'>
                    <h3 className='text-2xl md:text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>Title:</span>&nbsp;{prj.title}
                    </h3>
                    <div className='flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 justify-center'>
                      <div className='flex justify-center space-x-4'>
                        {prj.technologies.map((tech)=>{
                          return(
                            <Image
                            src={tech.image?urlForImage(tech.image.asset).url():''}
                            alt='skills'
                            width={100} height={100}
                            className='w-6 h-6  object-cover md:w-8 md:h-8'
                            key={tech._id}
                            />
                          )
                        })}
                      </div>
                      <div className='flex justify-center'>
                      <Link href={prj.linkToBuild} target='_blank'>
                        <button className='heroButton border border-[#F7AB0A] text-gray-300'>View Project</button>
                      </Link>
                      </div>
                    </div>
                    <p className='text-base md:text-lg text-left overflow-y-scroll max-h-[24vh] scrollbar-thin scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[#F7AB0A]/80'>{prj.summary}</p>
                 </div>
            </div>)
            
        })}
      </div>
      <div className='w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects

