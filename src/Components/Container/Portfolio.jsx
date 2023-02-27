import React from 'react'
import work1 from "../../assets/work 1.png"
import work2 from "../../assets/work 2.png"
import work3 from "../../assets/work3.png"

import {motion} from "framer-motion"
import { FadeIn } from '../../utils/motion'

const Portfolio = () => {
  return (
    <div className='section' id='portfolio'>
      <div className="text-center">
      <div className="sm:text-3xl text-2xl font-bold mb-5">
          My Creative <span className="text-Teal">Portfolio</span>
        </div>
      </div>
      <div className='container mx-auto mt-32'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={FadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
              {/* text */}
              <div>
                <h2 className='h2 font-bold leading-tight'>
                  My <span className="text-Teal">Lastest</span> <br/> Work.
                </h2>
                <p className='max-w-sm mb-16'>
                Please take a look at some of my recent projects 
                to get an idea of my capabilities. 
                I've worked on a variety of projects including e-commerce websites, personal portfolios ...<br/>
                <span className="text-Teal font-bold">Feel free to check them.</span>
                </p>
                <a href='https://github.com/helabeda' target="_blank" rel="noreferrer">
                <button className='btn btn-sm border border-solid rounded-lg
                border-gray'>
                  View all projects
                </button>
                </a>
              </div>
              {/* image */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full
                absolute z-10 transition-all duration-300'></div>
              {/*image*/}
              <img className='group-hover:scale-125 transition-all duration-500' src={work3} alt='College'/>
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-500 z-50'>
                <span className='text-white'>High School Management</span>
              </div>
              {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-700 z-50'>
                <span className='text-white'>ReactJs, NodeJs, Redux, ExpressJS, MongoDB</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={FadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'>
            {/*image*/}
            <div className='group relative overflow-hidden border-2
              border-white/50 rounded-xl'>
                {/*overlay*/}
                <div className='group-hover:bg-black/70 w-full h-full
                  absolute z-10 transition-all duration-300'></div>
                {/*image*/}
                <img className='group-hover:scale-125 transition-all duration-500' src={work2} alt=''/>
                {/*pretitle*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24
                  transition-all duration-500 z-50'>
                  <span className='text-white'>Internation Highway Website</span><br/>
                  <a href='https://international-highway.com' target="_blank" rel="noreferrer" >
                    <span className='text-white  hover:text-Teal hover:font-bold'>Live Demo</span></a>
                </div>
                {/*title*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14
                  transition-all duration-700 z-50'>
                  <span className='text-white'>ReactJs, NodeJs, Redux, ExpressJS, MongoDB</span>
                </div>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2
              border-white/50 rounded-xl'>
                {/*overlay*/}
                <div className='group-hover:bg-black/70 w-full h-full
                  absolute z-10 transition-all duration-300'></div>
                {/*image*/}
                <img className='group-hover:scale-125 transition-all duration-500' src={work1} alt=''/>
                {/*pretitle*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24
                  transition-all duration-500 z-50'>
                  <span className='text-white'>My Porfolio</span><br/>
                  <a href='https://my-portfolio-6m3sk1vue-helabeda.vercel.app' target="_blank" rel="noreferrer" >
                    <span className='text-white  hover:text-Teal hover:font-bold'>Live Demo</span></a>
                </div>
                {/*title*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14
                  transition-all duration-700 z-50'>
                  <span className='text-white'>ReactJs, NodeJs, Redux, ExpressJS, MongoDB</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio