import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
    initial={{ height: 0 }}
    whileInView={{ height: "auto" }}
    transition={{ duration: 1 }}
    className="bg-Teal p-10"
    >
    <div className="flex items-center justify-center text-white">
      <div>
        <div className="font-bold"> Developed with love by HA |  
        <small>  &copy; {(new Date().getFullYear())}</small>
      </div>
    </div>
    </div>
  </motion.div>
  )
}

export default Footer