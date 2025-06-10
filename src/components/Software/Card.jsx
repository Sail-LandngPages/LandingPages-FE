

import React from 'react';

const Card = ({
 
  title,
  desc,
  text,
  
}) => {
  return (
    <div>

        <div className="applytext w-[150px] lg:w-[180px] h-[100px] text-center place-content-center shadow-lg  bg-[#fff] ">
            
                {title && <h5 className="text-lg  text-[#1d3793] font-bold mb-2">{title}</h5>}
                {text && <h5 className="text-lg text-[#fbb404] font-bold mb-2">{text}</h5>}
                {desc && <p className="text-sm  text-gray-600">{desc}</p>}

        </div>

     
      
    </div>
  );
};
export default Card;
