import React from 'react'
import './LearnCard.css'
import learn_img from  '/learnImg1.png'
const LearnCard = ({title, description,image}) => {
  return (
    <div className='learn-card-container'>
        <div className="learn-card-text">
            <h1 className="learn-card-title">
            {title}
            </h1>
            <p className="learn-card-paragraph">
                {description}
            </p>
        </div>
        <div className="learn-card-image-div">
            <img className="learn-card-image" src={image} alt="" />
        </div>
    </div>
  )
}

export default LearnCard