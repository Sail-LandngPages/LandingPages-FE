
import React from 'react';

const ApplyCard = ({
  height ,
  width ,
  backgroundColor = '#f8f9fa',
  Icon,                      
  iconColor = '#333',        
  rotatedBgColor = '#f0f0f0',
  title,
  title2,
  desc,
  text,
  borderTopColor,   
  border,
  className = '',
  showRotatedBg,
  bgcolor,
}) => {
  return (
    <div
        className={`flex flex-row gap-4 px-2 py-4 shadow-lg rounded-md ${className}`}
        style={{
            backgroundColor,
            borderTop: `6px solid ${borderTopColor}`,
            border: `1px solid ${border}`,
        }}
        >
            {Icon && (
            showRotatedBg ? (
            <div
                className="h-15 w-15 flex items-center justify-left transform rotate-4 mb-4 rounded-md"
                style={{ backgroundColor: rotatedBgColor }}
            >
                <div className="h-15 w-5 ml-[10px] mt-[15px] bg-white flex border-[#fff] border-2  rounded-[8px] ">
                <Icon className="text-4xl mt-2 " style={{ color: iconColor }} />
                </div>
            </div>
            ) : (
            <div className="h-15 w-5 ml-[10px] mt-[8px] bg-[#fff] flex   rounded-[8px]"
            style={{backgroundColor:bgcolor}}
            >

                <Icon className="text- mt-4 ml-0.5 " style={{ color: iconColor,  }} />
                </div>
            )
        )}

        <div className="applytext">
                {title && <h5 className="text-lg text-[#1d3793] font-bold mb-2">{title}</h5>}
                {text && <h5 className="text-lg text-[#fbb404] font-bold mb-2">{text}</h5>}
                {desc && <p className="text-sm w-[200px] text-gray-600">{desc}</p>}

        </div>

     
      
    </div>
  );
};
export default ApplyCard;
