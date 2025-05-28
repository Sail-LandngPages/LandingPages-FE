import React from 'react'
import './WhoThisFor.css'
import whoThisForImg from '/whoThisForImg.png'
import whoThisForImg2 from '/whoThisForImg2.png'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react'
const WhoThisFor = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const isBoxVisible = useInView(titleRef, { once: true, amount: 0.5 });
  const isParaVisible = useInView(paragraphRef, { once: true, amount: 0.5 });
   const animationStates = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, 
  };
  const animationState2 = {
    hidden:{opacity:0, scale:0},
    visible:{opacity:1, scale:1, transition:{duration:1}},
  };
  return (

    
      
      <div className="WhoThisFor-container">

            <div className="who-this-for-img">
              <motion.img src={whoThisForImg}alt="" 
              ref={titleRef}
              variants={animationStates}
              initial='hidden'
              animate={isBoxVisible ? 'visible':'hidden'}/>
            </div>
            
            <div className="who-this-for-content">
              <motion.img src={whoThisForImg2} alt=""
              ref={paragraphRef}
              variants={animationState2}
              initial='hidden'
              animate={isParaVisible ? 'visible':'hidden'} />
            </div>
      </div>
        
    
  )
}

export default WhoThisFor