
import { use } from 'react';
import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Experiences from '@/components/Experience'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'
import pic from '../Images/gojo.jpg'
import { Skill, Social, Project, Experience, PageInfo } from '../../typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperience } from '@/utils/fetchExperience'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchProjects } from '@/utils/fetchProjects'


type Props = {};

const Home = ({}:Props) => {
  const pageInfo: PageInfo = use( fetchPageInfo());
  const experiences: Experience[] = use(fetchExperience());
  const skills: Skill[] = use(fetchSkills());
  const socials: Social[] = use(fetchSocials());
  const projects: Project[] = use(fetchProjects());
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
    
    <Header socials={socials}/>
   
    <section id='hero' className='snap-start'>
      <Hero pageInfo={pageInfo}/>
    </section>

    <section id='about' className='snap-center scroll-smooth'>
      <About pageInfo={pageInfo}/>
    </section>

    <section id='experience' className='snap-center scroll-smooth'>
      <Experiences experiences={experiences}/>
    </section>

    <section id='skills' className='snap-start scroll-smooth'>
      <Skills skills={skills}/>
    </section>

    <section id='projects' className='snap-start scroll-smooth'>
      <Projects projects={projects}/>
    </section>

    <section id='contactme' className='snap-center scroll-smooth'>
      <ContactMe/>
    </section>

    
    <footer className='sticky bottom-10 md:bottom-5 w-full cursor-pointer flex items-center justify-center'>
      <a href='#hero'>
        <div className='relative h-10 w-10'>
          <Image
          src={pic}
          alt='gotop'
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'/>
        </div>
      </a>
    </footer>
    

    </div>
  )
}

export default Home;


