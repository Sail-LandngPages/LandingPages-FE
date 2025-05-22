import React from 'react'
import './JoinCard.css'
const JoinCard = ({image,title,description}) => {
  return (
    
      <div className="joinCard">
        <div className="joinCard-image">
          <img src={image} alt="" />
        </div>
        <div className="joinCard-content">
          <h1 className="joinCard-title">{title}</h1>
          <p className="joinCard-paragraph">{description}</p>
        </div>
      </div>
    
  )
}

export default JoinCard