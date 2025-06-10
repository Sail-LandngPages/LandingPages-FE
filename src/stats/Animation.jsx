import React from 'react'
import { useEffect, useState } from 'react';

const Animation = ({ target, label,unit = '+' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // Animation duration in ms
      const increment = target / (duration / 16); // 60fps
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [target]);
  return (
    <div>
            <div className="flex flex-col items-center">
      <p className="text-2xl font-medium text-black sm:text-4xl">
        {unit === '%' ? `${count}%` : `${count}+`}
      </p>
      <p className="mt-2 text-sm font-medium text-gray-900">{label}</p>
    </div>
    </div>
  )
}

export default Animation