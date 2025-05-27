import React from 'react'
import './Join.css'
import image1 from '/joincardImg1.png'
import image2 from '/joincardImg2.png'
import image3 from '/joincardImg3.png'
import image4 from '/joincardImg4.png'
import image5 from '/joincardImg5.png'
import JoinCard from '../../../components/joinCard/Joincard'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react'


const Join = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const box1Ref = useRef(null);
  const isBoxVisible = useInView(titleRef, { once: true, amount: 0.5 });
  const isParaVisible = useInView(paragraphRef, { once: true, amount: 0.5 });
  const isBox1Visible = useInView(box1Ref, { once: true, amount: 0.5 });
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
    <div className='join-container'>
        <div className="join-content">
            <motion.h1
            className="join-title"
            ref={titleRef}
            variants={animationStates}
            initial='hidden'
            animate={isBoxVisible ? 'visible':'hidden'}>
              Why You Should Join?</motion.h1>
              
            <motion.p className="join-paragraph"
            ref={paragraphRef}
            variants={animationState2}
            initial='hidden'
            animate={isParaVisible ? 'visible':'hidden'}>Unlock the power of data to solve real-world problems 
            and launch a future-proof career.</motion.p>
        </div>
        <motion.div className="join-cards"
         ref={box1Ref}
            variants={animationState3}
            initial='hidden'
            animate={isBox1Visible ? 'visible':'hidden'}>
            <JoinCard  
            image={image1}
            title = 'Learn by doing'
            description = 'Work on hands-on projects with real data sets '/>
            <JoinCard 
            image={image2}
            title = 'Zero Experience? No Problem!'
            description = 'This program is beginner-friendly'/>
            <JoinCard 
            image={image3}
            title = 'Top-Tier Mentors'
            description = 'Get trained by data pros and AI experts'/>
            <JoinCard 
            image={image4}
            title = '100% Scholarship Availiable'
            description = 'Limited slots, so apply ASAP!'/>
            <JoinCard 
            image={image5}
            title = 'Zero Experience? No Problem!'
            description = 'This program is beginner-friendly'/>
        </motion.div>

    </div>
  )
}

export default Join