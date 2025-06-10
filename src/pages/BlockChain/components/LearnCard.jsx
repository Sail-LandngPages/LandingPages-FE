import React from 'react'

const LearnCard = ({number, heading, text}) => {
  

  return (
    <>
        <div className=' bg-amber-600'>
            <span>{number}</span>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default LearnCard