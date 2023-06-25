'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Experience } from '../../typings'
import { urlForImage } from '../../sanity/lib/image'


type Props = {
    experience: Experience
}
const ExpCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 w-[350px] md:w-[500px] xl:w-[700px] flex-shrink-0
    snap-center p-4 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
        className=' w-32 h-32  w-xl:w-[150px] xl:h-[150px] '
        >
            <Image 
            src={urlForImage(experience?.companyImage.asset).url()} 
            alt='profile'
            width={100} height={100}
            className='w-32 h-32 rounded-full object-contain object-center xl:w-[150px] xl:h-[150px]'/>
        </motion.div>
        <div className='px-0 md:px-10 overflow-y-scroll md:overflow-auto scrollbar-thin scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[#F7AB0A]/80'>
            <h4 className='text-3xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2 justify-center md:justify-start'>
                {experience.technologies.map((tech)=>{
                    return(
                        <Image
                        src={tech.image?urlForImage(tech.image.asset).url():''}
                        alt='skills'
                        width={100} height={100}
                        className='w-8 h-8  object-cover'
                        key={tech._id}
                        />
                    )
                })}
            </div>
            <p className='uppercase py-2 text-gray-300'>
                {new Date(experience.dateStarted).toLocaleDateString('en-US',{
                    month: 'short',
                    year: 'numeric'
                })} -{" "}
                {experience.isCurrentlyWorkingHere?"Present":
                 new Date(experience.dateEnded).toLocaleDateString('en-US',{
                    month: 'short',
                    year: 'numeric'
                 })
                }
            </p>
            <ul className='list-disc space-y-2 md:space-y-4 ml-5 text-base h-52 md:h-60'>
                {experience.points.map((point,i)=>{
                    return(
                        <li key={i}>{point}</li>
                    )
                })}
            </ul>
        </div>
    </article>
  )
}

export default ExpCard
