import React from 'react'
import man from '../assets/images/Artman.png'
import star from '../assets/images/star.png'
import { motion } from "framer-motion";

const ProductHero = () => {
  return (
    <div>
        <div className=" bg-[#FAFAFA] p-4 md:p-8 lg:p-16 relative overflow-hidden">
        
      

      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Content */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Yellow pill button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button className=" ml-8 lg:ml-0 md:ml-54  bg-[#FBB404] text-white px-4 py-2 rounded-full flex items-center hover:bg-[#133C8A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Think in colours and Experience?
            </button>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="lg:text-5xl text-3xl md:text-4xl md:text-center font-bold mb-6 tracking-tight  sm:text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Master Product Design <br />& UI/UX with US.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-600 mb-10 md:text-center lg:text-left leading-relaxed text-center sm:text-justify opacity-70 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The SAIL Product Design Learning Track is your gateway to mastering UI/UX design,
            user research, and design thinking to create impactful digital experiences. Whether you’re a
            beginner or looking to sharpen your skills, this program equips you with hands-on
            training and industry mentorship to help you succeed in the growing field of product design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 lg:items-start lg:-ml-64 justify-center sm:justify-start md:items-center md:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a
              href="#apply"
              className="bg-[#133C8A] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Apply now
            </a>
            <a
              href="#learn"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-[#FBB404] transition-colors"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="order-2 lg:order-2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden lg:-ml-14 ">
            <img
              src={man}
              alt="Product Designer"
              height={480}
              className="lg:ml-20 lg:mt-13   lg:w-100 sm:justify-center md:justify-center md:ml-35"
            />
          </div>
        </motion.div>
      </div>
    </div>
            {/* Decorative sparkle */}
            <div className="absolute top-[10%] left-[5%]">
            </div>
           <div >
        <img src={star} alt="" className='lg:ml-132 mb-3 w-22 h-22 hidden '/>
      </div>
          </div>
        </div>
          
  )
}

export default ProductHero