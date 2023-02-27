import React from 'react'
import hela from "../../assets/hela_ab.jpg"
import CountUp from 'react-countup'
import { useInView } from "react-intersection-observer";
import { skills } from '../../Data'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className='section' id='about' ref={ref}>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div>
          <img src={hela} alt="me" className='p-4'/>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            About 
            <span className='text-Teal'> Me </span>
            <br/>
            <span className='text-sm text-slate-400'> Get To Know </span>
          </div>
          <p className='text-sm text-gray leading-7 mb-4'>
          As a MERN stack developer with experience in Full Stack JS development, 
          I bring a deep understanding of web development principles and the ability to create responsive, 
          user-friendly interfaces. I am versatile, autonomous, and value teamwork. 
          In my previous roles, I have developed a wide range of websites and applications.
          I am passionate about staying up to date 
          with the latest trends and best practices 
          in web development and am constantly seeking new challenges to push my skills to the next level.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-md mb-2 text-slate-400'>
                {inView ? <CountUp start={0} end={2} duration={3}/>:null}
              </div>
              <div className='text-sm text-gray leading-7 mb-4'>
                Years of <br/> Experience
              </div>
            </div>
            <div>
              <div className='text-md mb-2 text-slate-400'>
                {inView ? <CountUp start={0} end={3} duration={3}/> :null}
                  +
              </div>
              <div className='text-sm text-gray leading-7 mb-4'>
                Project <br/> Completed
              </div>
            </div>
            <div>
              <div className='text-md mb-2 text-slate-400'>
                {inView ? <CountUp start={0} end={4} duration={3}/> :null}
                  +
              </div>
              <div className='text-sm text-gray leading-7 mb-4'>
                Certificate <br/>
                In Dev
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-bold mt-32">My <span className='text-Teal'>Skills</span></div>
          <div className="mt-12 overflow-x-hidden w-full  relative">
            <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
              {skills.map((skill, index) => (
                <img src={skill.icon} key={index} alt="skills" className="w-full object-cover"/>
              ))}
            </div>
          </div>
         </div>
    </div>
  )
}

export default About