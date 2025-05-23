import React from 'react'
import './WhoThisFor.css'
import whoThisForImg from '/whoThisForImg.png'
import whoThisForImg2 from '/whoThisForImg2.png'
const WhoThisFor = () => {
  return (
    
      
      <div className="WhoThisFor-container">

            <div className="who-this-for-img">
              <img src={whoThisForImg}alt="" />
            </div>
            <div className="who-this-for-content">
              <img src={whoThisForImg2} alt="" />
            </div>
      </div>
        
    
  )
}

export default WhoThisFor