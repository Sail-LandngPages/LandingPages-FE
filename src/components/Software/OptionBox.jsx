import React from 'react';

const OptionBox = ({
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
      className={`flex flex-col p-4 shadow-lg rounded-md ${className}`}
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
          <div className="h-15 w-5 ml-[10px] mt-[15px] bg-[#fff] flex   rounded-[8px]"
          style={{backgroundColor:bgcolor}}
          >

              <Icon className="text- mt-4 ml-0.5 " style={{ color: iconColor,  }} />
            </div>
        )
      )}

      {title && <h5 className="text-lg text-[#1d3793] font-semibold mb-2">{title}</h5>}
      {title2 && <h5 className="text-sm text-[#fff] font-semibold mt-4 mb-2">{title2}</h5>}
      {desc && <p className="text-sm w-[200px] text-gray-600">{desc}</p>}
      {text && <p className="text-[12px] w-[200px] lg:w-[140px] md:w-[180px]  text-[#e0e0e0]">{text}</p>}

      
    </div>
  );
};
export default OptionBox;
