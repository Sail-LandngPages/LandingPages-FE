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
            <h1 className="hero-title"><span>Data</span> is the new gold! <br /> it's time to dig</h1>
            <p className="hero-paragraph">Are you ready to turn raw numbers into powerful insights? 
            The SAIL Data Science learning Track is your ticket to mastering data, analytics and AI whie working on real-world projects that make  you job-ready</p>
            
            <div className="hero-button">
              <button className="join-now">Join Now</button>
            </div>
        </div>
        <motion.div 
        className="hero-image" 
      animate={{ y: 100 }}
    transition={{ type: "spring", stiffness: 200 }}
    >
            <img src={hero_image} alt="" />
        </motion.div>
    </div>
  )
}

export default Hero