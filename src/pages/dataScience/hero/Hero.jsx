import React from 'react'
import './Hero.css'
import hero_image from '/dataScienceHeroImage.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div 
      className='hero-container'
      >
        <div className="hero-text">
            <motion.h1 
            className="hero-title"
            initial={{opacity:0, scale: 0.1 }}
            animate={{opacity:1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 , duration:5}}>
              <span>Data</span> is the new gold! <br /> it's time to dig</motion.h1>
            <motion.p 
            className="hero-paragraph"
              initial={{ x: -100,  }}
              animate={{ x:0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 , duration:5}}>
                Are you ready to turn raw numbers into powerful insights? 
            The SAIL Data Science learning Track is your ticket to mastering data, analytics and AI whie working on real-world projects that make  you job-ready</motion.p>
            
            <div className="hero-button">
              <motion.button
               className="join-now"
               initial={{ y: 100,  }}
               animate={{ y:0 }}
               transition={{duration:5, type: "spring", stiffness: 400, damping: 10 }}>
                Join Now</motion.button>
            </div>
        </div>
            <motion.img 
             initial={{ opacity: 0, scale: 0.1 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{duration:1}} src={hero_image} alt="" />
        </div>
  )
}

export default Hero