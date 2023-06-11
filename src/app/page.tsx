import About from '@/components/About'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
    <head>
      <title>SRK - Portfolio</title>
    </head>
    <Header/>
   
    <section className='snap-start'>
      <Hero/>
    </section>

    <section id='about' className='snap-center'>
      <About/>
    </section>

    <section id='experience' className='snap-center'>
      <Experience/>
    </section>

    <section id='skills' className='snap-start'>
      <Skills/>
    </section>

    <section id='projects' className='snap-start'>
      <Projects/>
    </section>

      {/* Contact me*/}
    
    </div>
  )
}
