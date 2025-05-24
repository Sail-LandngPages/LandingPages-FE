import React from 'react'
import './Learn.css'
import LearnCard from '../../../components/learnCard/LearnCard'
import learnImg1 from '/learnImg1.png'
import learnImg2 from '/learnImg2.png'
import learnImg3 from '/learnImg3.png'
import learnImg4 from '/learnImg4.png'
import learnImg5 from '/learnImg5.png'
import learnImg6 from '/learnImg6.png'

const Learn = () => {
  return (
    <div className='learn-container'>
        <div className="learn-text">
            <h1 className="learn-title">What You'll Learn</h1>
            <p className="learn-paragraph">Master the essential tools, techniques and mindset to turn raw <br /> data into powerful insights and career-ready projects</p>
        </div>
        <div className="learn-cards">
          
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
        </div>
    </div>
  )
}

export default Learn