import React from 'react'

const Application = ({icon, text}) => {
  return (
    <div className='flex items-center'>
        <img className='w-[30px]' src={icon} alt="" />
        <p className='ml-4'>{text}</p>
    </div>
  )
}

export default Application