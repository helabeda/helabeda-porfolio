import React from 'react'
import { categories, comments, sliderSettings } from "../../Data";
import css from "../ScssStyle/Testimonials.module.scss";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from "../../utils/motion";
import Slider from "react-slick";
import '../../styles/global.scss'


const Testimonials = () => {
 
  return (
    <div className='section' id="testimonials">
    <motion.div
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="h2 font-bold leading-tight">People talk <span className="h2 font-bold leading-tight text-Teal">about me</span></span>
          <p style={{ marginTop: "2rem"}}>
            We strive to provide exceptional service and exceed expectations on every project. </p>
            <p style={{marginBottom: "2rem"}}>
            See what our clients have to say about their experiences working with us.
            </p>
        </div>
        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.div>
    </div>
  

  )
}

export default Testimonials