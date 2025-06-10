import React from 'react'

const CardReason = ({image, text,bgColor}) => {
  return (
    <div className= {`${bgColor} w-[300px] h-[300px] rounded-2xl flex flex-col justify-center items-center text-[#fff]`}>
        <img  className='w-[200px]' src={image} alt="" />
        <p className='raleway w-72 text-center'>{text}</p>
    </div>
  )
}

export default CardReason