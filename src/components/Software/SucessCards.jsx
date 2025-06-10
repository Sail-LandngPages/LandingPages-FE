import { div, span, style } from 'framer-motion/client'
import React from 'react'

const SucessCards = ({bgColor, testimony, DescIcon, DescTitle, DescText, rating=5}) => {
  return (
    <div className='bg-[#457cd7] mb-10 w-[224px] h-[368px] p-5 border-2 border-solid border-[#99b8f1] rounded-[12px]'>

        <div>
        {
            [...Array(5)].map((_,i)=>(
                <span key={i} className={`text-[30px] ${i<rating ? 'text-yellow-400' : 'text-gray-500' }`}>
                    &#9733;
                </span>
            ))
        }
        </div>


        {
            testimony && ( <p className='mt-5 text-[#d1def7]'>"{testimony}"</p> )
        }

        <div className="flex flex-row gap-5 mt-7">
            <div className='h-[40px] mt-1 pt-3 rounded-full text-white'
                style={{backgroundColor: bgColor}}
             >
                {DescIcon && <DescIcon/>}
            </div>

            <div>
                {DescTitle && <h4 className='text-white font-bold'>{DescTitle}</h4> }
                {DescText && <p className='text-[#c3d0f0]'>{DescText}</p> }
            </div>
        </div>
        

    </div>

    
  )

  
}

export default SucessCards