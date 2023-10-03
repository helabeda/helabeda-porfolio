import Reac, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import hela from "../../assets/Hela_abeda.png"
import { logos } from '../../Data'
import { motion } from "framer-motion";

import Dropdown from './Dropdown';


const Home = () => {
 
  const [text] = useTypewriter({
    words:['Hela Abeda', 'A Full-Stack JS Dev', 'A Front-End Dev', ' A Back-End Dev', 'A MERN Stack Dev'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className='section' id='home'>
        <div className='md:flex items-center justify-between'>
          <div>
            <div className='font-bold text-xs text-Teal mb-4'>
            {""}
              Hey There, <br/> Welcome to my portfolio . <br/>
            </div>
            <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
              I'm <br/>
              <span className='text-Teal font-bold'>
                {text}
              </span>
              <span  className='text-Teal font-bold'>
                <Cursor cursorStyle='|'/>
              </span>
            </div>
            <p className='text-sm leading-7 text-gray max-w-sm'>
            Full Stack Web Developer using the MERN Stack with good experience in designing and developing web.
            </p>
            <div className="mt-6">
              <a href='#contact'>
              <button className='px-6 py-3 font-bold text-white bg-Teal 
              rounded-lg mr-4 text-sm'>
                Hire me
              </button>
              </a>

                <div className='inline-flex'>
                  <Dropdown/>
                </div>
              
             

            </div>
          </div>
          <div className='md:w-[60%]'>
            <img src={hela} alt=""/>
          </div>
        </div>
        <div>
          <p className='text-center text-xl'>
          You can find me in these networks
          </p>
          <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-16 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-16" key={index}>
               <a href={logo.href} target="_blank" rel="noreferrer">
                  <img src={logo.logo} alt="" className="w-full object-cover"/>
               </a>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>

  )
}

export default Home