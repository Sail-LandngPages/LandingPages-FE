import React from 'react'
import './Apply.css'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react'
const Apply = () => {

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const box1Ref = useRef(null);
  const isBoxVisible = useInView(titleRef, { once: true, amount: 0.5 });
  const isParaVisible = useInView(paragraphRef, { once: true, amount: 0.5 });
  const isBox1Visible = useInView(box1Ref, { once: true,amount:.1 });
  const animationStates = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, 
  };
  const animationState2 = {
    hidden:{opacity:0, scale:0},
    visible:{opacity:1, scale:1, transition:{duration:1}},
  };
  const animationState3 = {
      hidden:{opacity:0, scale:0},
      visible:{opacity:1, scale:1, transition:{duration:1}},
    };
  return (
    <div className='apply-container'>
        <motion.h1
         ref={titleRef}
            variants={animationStates}
            initial='hidden'
            animate={isBoxVisible ? 'visible':'hidden'}>How to Apply?</motion.h1>

        <motion.p
        ref={paragraphRef}
            variants={animationState2}
            initial='hidden'
            animate={isParaVisible ? 'visible':'hidden'}>Hit the <span>APPLY NOW</span> button and start your journey in <span>Data Science & AI today</span> <br />No more over thinking-just take the leap!</motion.p>

        <motion.button 
        ref={box1Ref}
            variants={animationState3}
            initial='hidden'
            animate={isBox1Visible ? 'visible':'hidden'}>Apply Now</motion.button>
    </div>
  )
}

export default Apply