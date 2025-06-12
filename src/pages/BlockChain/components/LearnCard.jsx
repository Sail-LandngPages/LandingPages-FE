import React, { useState, useRef } from 'react';
import icon from "../../../assets/images/svg/CaretDown.svg";

const LearnCard = ({ number, title, text, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
   
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
 
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  return (
    <div className='relative flex flex-col px-2 m-8'>
      <div className='flex justify-between'>
        <div className='flex gap-8'>
          <span className='sora text-6xl bold'>{number}</span>
          <h2 className='sora text-3xl bold w-[500px]'>{title}</h2>
        </div>

        <div className='w-[40%] flex justify-center items-center gap-8'>
          <p className='raleway text-[14px] mb-10'>{text}</p>
          <img
            className='bg-black rounded-[50%] w-[25px] h-[25px] cursor-pointer'
            src={icon}
            alt="dropdown icon"
            onClick={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      {isHovered && hoverImage && (
        <div className='mt-4 flex justify-end'>
          <img src={hoverImage} alt="preview" className='w-[500px] h-auto transition-opacity duration-300' />
        </div>
      )}
    </div>
  );
};

export default LearnCard;
