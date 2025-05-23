import React from 'react'
import './Join.css'
// import JoinCard from '../../../component/joinCard/JoinCard'
import image1 from '/joincardImg1.png'
import image2 from '/joincardImg2.png'
import image3 from '/joincardImg3.png'
import image4 from '/joincardImg4.png'
import image5 from '/joincardImg5.png'
import JoinCard from '../../../components/joinCard/Joincard'

const Join = () => {
  return (
    <div className='join-container'>
        <div className="join-content">
            <h1 className="join-title">Why You Should Join?</h1>
            <p className="join-paragraph">Unlock the power of data to solve real-world problems 
            and launch a future-proof career.</p>
        </div>
        <div className="join-cards">
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
        </div>

    </div>
  )
}

export default Join