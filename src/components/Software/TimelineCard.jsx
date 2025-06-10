import React from 'react'

const TimelineCard = ({ duration, title, text,TitleIcon, TextIcon,IconColor }) => {
    
  return (
    <div  className="applytext w-full lg:w-[275px] h-[120px] text-center place-content-center shadow-lg rounded-[12px] p-4 mb-6  bg-[#f9fafb]">
      

      {duration && (
        <div className="flex items-center gap-2 mb-2">
          <h4 className="text-[12px] text-gray-700 ">{duration}</h4>
        </div>
      )}

      {title && (
        <div className="flex items-center gap-2 mb-2">
          {TitleIcon && <TitleIcon className="text-[16px]" style={{ color: IconColor }} />}
          <h4 className="text-[15px] text-gray-700 font-bold">{title}</h4>
        </div>
      )}

      {text && (
        <div className="flex items-center gap-2">
          {TextIcon && <TextIcon className="text-[14px]" style={{ color: IconColor }} />}
          <p className="text-[12px] text-gray-700">{text}</p>
        </div>
      )}
      
    </div>
  )
}

export default TimelineCard