import React from 'react'

const HowtoApplyCard = ({DescTitle,DescText, DescIcon, bgColor }) => {
  return (
    <div>
        <div className="flex flex-row gap-5 mt-7 mb-10">
                    <div className='h-[40px]  mt-1 pt-2 rounded-full text-white'
                        style={{backgroundColor: bgColor}}
                     >
                        {DescIcon && <h2 className='w-[10px]'>{DescIcon}</h2> }
                    </div>
        
                    <div>
                        {DescTitle && <h4 className='text-white font-bold'>{DescTitle}</h4> }
                        {DescText && <p className='text-[#c3d0f0]'>{DescText}</p> }
                    </div>
                </div>
    </div>
  )
}

export default HowtoApplyCard