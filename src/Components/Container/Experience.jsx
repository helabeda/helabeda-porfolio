import React from 'react'
import {motion} from 'framer-motion'
import { workExp } from "../../Data";
import { fadeIn,staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import css from "../ScssStyle/Experience.module.scss";
import '../../styles/global.scss'
import  Categories from "./Categories"
import { categories} from "../../Data";

const Experience = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className='section' id='experience'>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter innerWidth  ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My <span className='text-Teal'>Work</span> Experience</span>
        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
          </motion.div>
        </div>
        </div>
      </motion.div>

      <div className="text-center mt-20">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          What <span className="text-Teal">I Do</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
        "I offer several popular services to our clients, 
        but if you require something different, 
        i can create a customized offer to suit your needs."
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible" 
        className='grid md:grid-cols-3 sm:grid-cols-3 mt-12 gap-8'>
        {categories.map((categorie, id)=>{
          return <Categories key={id} {... categorie}/>
        })}
      </motion.div>



    </div>
   
    
  )
}

export default Experience