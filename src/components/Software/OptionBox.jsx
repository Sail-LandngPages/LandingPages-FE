import React from 'react';

const OptionBox = ({
  height = '250px',
  width = '270px',
  Icon,                      
  iconColor = '#333',        
  rotatedBgColor = '#f0f0f0',
  title,
  desc,
  borderTopColor = '#000',   
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col p-4 bg-[#f8f9fa] shadow-lg rounded-md ${className}`}
      style={{
        height,
        width,
        borderTop: `6px solid ${borderTopColor}`,
      }}
    >
      {Icon && (
        <div
          className="h-15 w-15 flex items-center justify-left transform rotate-4 mb-4 rounded-md"
          style={{ backgroundColor: rotatedBgColor }}
        >
          <div className="h-15 w-5 ml-[10px] mt-[15px] bg-white flex border-[#fff] border-2  rounded-[8px] ">
            <Icon className="text-4xl mt-2 shadow-lg" style={{ color: iconColor }} />
          </div>
        </div>
      )}

      {title && <h5 className="text-lg text-[#12245f] font-semibold mb-2">{title}</h5>}
      {desc && <p className="text-sm w-[200px] text-gray-600 ">{desc}</p>}
    </div>
  );
};

export default OptionBox;
