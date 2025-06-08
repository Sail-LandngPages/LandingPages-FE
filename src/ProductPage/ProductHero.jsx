import React from 'react'
import man from '../assets/images/designing.png'
import star from '../assets/images/star.png'
import { motion } from "framer-motion";

const ProductHero = () => {
  return (
    <div>
        <div className="min-h-screen bg-[#FAFAFA] p-4 md:p-8 lg:p-16 relative overflow-hidden">
        
      
      
      <motion.div
        className="absolute lg:top-[40%] lg:right-[12%] w-20 h-20 rounded-full bg-[#D29DAC] opacity-50 bottom-[29%] right-[8%] md:right-[20%] md:top-[58%]"
        animate={{ rotate: -360 }} // Rotates in opposite direction
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute lg:top-[50%] lg:right-[13%] w-25 h-15 rounded-full bg-[#DED8E1] opacity-50 bottom-[20%] right-[6%] md:right-[20%] md:top-[65%]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Ease-in-out animations (breathing/pulsing effect) */}
      <motion.div
        className="absolute lg:top-[76%] lg:right-[9%] w-45 h-20 md:top-[85%] md:right-[25%] rounded-full bg-[#FFD9E3] opacity-70 bottom-14 right-[15%]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.85, 0.7]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute lg:top-[77%] lg:right-[24%] md:top-[86%] md:left-[18%] w-67 h-19 rounded-full bg-[#FFECF0] opacity-50 bottom-14 "
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute lg:top-[70%] lg:right-[49.6%] md:left-[10%] md:bottom-[15%] w-14 h-16 rounded-full bg-[#FFECF0] opacity-60 bottom-40 "
        animate={{
          y: ["0%", "-5%", "0%"],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute lg:top-[70%] lg:right-[35%] md:right-[60%] md:top-[80%] w-47 h-15 rounded-full bg-[#FFDAD6] opacity-60 bottom-[14%] right-[39%]"
        animate={{
          x: ["0%", "3%", "0%"],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute lg:top-[37%] lg:right-[38%] w-55 h-55 rounded-[2rem] bg-[#F4F0EF] opacity-50 bottom-[23%] right-20%"
        animate={{
          scale: [1, 1.02, 1],
          borderRadius: ["2rem", "2.5rem", "2rem"]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

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
            <button className="bg-[#FBB404] text-white px-4 py-2 rounded-full flex items-center hover:bg-[#133C8A]">
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
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Master Product Design <br />& UI/UX with US.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-600 mb-10 leading-relaxed justify-center opacity-70"
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
            className="flex flex-wrap gap-4"
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
          <div className="relative rounded-2xl overflow-hidden -ml-14 ">
            <img
              src={man}
              alt="Product Designer"
              height={480}
              className="lg:ml-20 mt-13 ml-9  lg:w-100 sm:justify-center md:justify-center md:ml-35"
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