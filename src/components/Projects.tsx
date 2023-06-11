'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import prjimg from '../Images/Newsapp.png'

type Props = {}
const Projects = ({}:Props) => {
    const projects= [1,2,3];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex flex-col justify-evenly text-left items-center max-w-full md:flex-row overflow-hidden
    mx-auto z-0'>
      <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20'>
        {projects.map((prj,i)=>{
            return(<div className='w-screen flex flex-col flex-shrink-0 space-y-5 snap-center justify-center items-center p-20 h-screen'> 
                 <motion.div
                 initial={{
                    y:-300,
                    opacity:0
                 }}
                 whileInView={{
                    y:0,
                    opacity:1
                 }}
                 transition={{duration:1.2}}
                 viewport={{once:true}}
                 className='h-[200px] w-[400px]'>
                    <Image
                    src={prjimg}
                    alt='projectImage'
                    className='h-[200px] w-[400px]'/>
                 </motion.div>

                 <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h3 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>Case study {i+1} of {projects.length}:</span>Latest News App
                    </h3>
                    <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quos soluta nobis pariatur magni, impedit magnam. 
                        A, architecto vero. Vitae quod et sit modi officia animi odit dolores corporis cum dolore quidem sequi eum, omnis 
                        ea ratione nostrum assumenda earum? Laudantium adipisci, reiciendis delectus totam, voluptatibus suscipit asperiores, 
                        ipsam tempore cumque ab esse nam temporibus. Odio optio recusandae adipisci quae, molestiae aut qui fuga illo! Quam 
                        sapiente voluptates numquam exercitationem facilis totam? Minima nemo animi, unde ea sequi modi tempora.</p>
                 </div>
            </div>)
            
        })}
      </div>
      <div className='w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
