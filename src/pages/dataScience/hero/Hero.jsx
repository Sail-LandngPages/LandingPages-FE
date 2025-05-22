import React from 'react'
import './Hero.css'
import hero_image from '/dataScienceHeroImage.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
            <h1 className="hero-title"><span>Data</span> is the new gold! <br /> it's time to dig</h1>
            <p className="hero-paragraph">Are you ready to turn raw numbers into powerful insights? <br />
            The SAIL Data Science learning Track is your ticket to mastering <br />data, analytics and AI whie working on real-world projects that make <br /> you job-ready</p>
            <button className="join-now">Join Now</button>
        </div>
        <div className="hero-image">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero