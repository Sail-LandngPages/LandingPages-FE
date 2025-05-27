import React from 'react'
import './Learn.css'
import LearnCard from '../../../components/learnCard/LearnCard'
import learnImg1 from '/learnImg1.png'
import learnImg2 from '/learnImg2.png'
import learnImg3 from '/learnImg3.png'
import learnImg4 from '/learnImg4.png'
import learnImg5 from '/learnImg5.png'
import learnImg6 from '/learnImg6.png'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react'

const Learn = () => {

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
    <div className='learn-container'>
        <div className="learn-text">
            <motion.h1 className="learn-title"
            ref={titleRef}
            variants={animationStates}
            initial='hidden'
            animate={isBoxVisible ? 'visible':'hidden'}>What You'll Learn</motion.h1>

            <motion.p className="learn-paragraph"
            ref={paragraphRef}
            variants={animationState2}
            initial='hidden'
            animate={isParaVisible ? 'visible':'hidden'}>Master the essential tools, techniques and mindset to turn raw <br /> data into powerful insights and career-ready projects</motion.p>
        </div>

        <motion.div className="learn-cards"
         ref={box1Ref}
            variants={animationState3}
            initial='hidden'
            animate={isBox1Visible ? 'visible':'hidden'}>
          
            <LearnCard title = 'Data Analytics & Visualization'
                        description = 'Transform numbers into clear , impactful visuals using Excel, PowerBI, and Tableau'
                        image = {learnImg1}/>
            <LearnCard title = 'Python for Data Science'
                        description = 'Write powerful, readable code to analyze and automate your data workflow'
                        image = {learnImg2}/>
            <LearnCard title = 'Statistics & Machine Learning'
                        description = 'Learn the math and models behind predictions, trends, and smart systems'
                        image = {learnImg3}/>
            <LearnCard title = 'Intro to Artificial Intelligence'
                        description = 'Explore how machines mimic human thinking-from basics to breakthrough'
                        image = {learnImg4}/>
            <LearnCard title = 'SQL & Big Data'
                        description = 'Query, manage and make sense of massive datasets with real-world tools'
                        image = {learnImg5}/>
            <LearnCard title = 'How to Build a Data Science Portfolio That Stands out'
                        description = 'Showcase your skills with polished industry-ready projects that turns heads'
                        image = {learnImg6}/>
        </motion.div>
    </div>
  )
}

export default Learn