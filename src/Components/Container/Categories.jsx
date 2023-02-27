import React from 'react'
import { motion } from "framer-motion";

const Categories = ({icon, category, disc}) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
  return (
    <motion.div 
        variants={item}
        whileHover={{ scale: 1.1 }}
        className='flex items-center flex-col gap-4 bg-white
        p-8 rounded-md'>
        <div className='text-4xl'>{icon}</div>
        <div className='text-Teal font-bold'>{category}</div>
        <div className='text-gray'>{disc}</div>
    </motion.div>
  )
}

export default Categories