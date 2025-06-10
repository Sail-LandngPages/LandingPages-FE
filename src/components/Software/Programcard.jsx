import React from 'react'

const Programcard = ({ title, text, borderTop,Icon,IconColor }) => {
    
  return (
    <div  className="applytext w-full lg:w-[180px] h-[100px] text-center place-content-center shadow-lg rounded-[12px] mb-6  bg-[#fff]"
        style={{
            borderTop: `2px solid ${borderTop}`
        }}
    >
        {Icon && <Icon className='text-[18px] ml-43 lg:ml-20 mt-2' style={{color:IconColor}} />}
        {title && <h4 className='text-[15px] text-[#1d3793] font-bold'>{title}</h4>}
        {text && <p className='text-[12px]'>{text}</p> }

      
    </div>
  )
}

export default Programcard