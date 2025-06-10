import React from 'react'
import icon from "../../../assets/images/svg/CaretDown.svg"
const LearnCard = ({number, title, text}) => {
  

  return (
    <>
        <div className='flex justify-between px-2 m-8'>

            <div className='flex gap-8'>
            <span className='sora text-6xl bold'>{number}</span>
            <h2 className='sora text-3xl bold w-[500px]'>{title}</h2>
            </div>

            <div className='w-[50%] flex justify-center items-center'>
            <p className='raleway text-[14px]'>{text}</p>
            <img className='bg-black rounded-[50%] w-[25px] h-[25px]' src={icon} alt="a dropDown icon" />
            </div>
           
        </div>
    </>
  )
}

export default LearnCard