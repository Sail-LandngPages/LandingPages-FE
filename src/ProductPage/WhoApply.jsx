import React from 'react'
import africaman from '../assets/images/africaman.png'
import g from '../assets/images/Outline.png'
import p from '../assets/images/copy.png'
import h from '../assets/images/user.png'
import '../styles/tailwind.css'
import { motion } from "framer-motion";

const WhoApply = () => {
  return (
    <div className='bg-[#FAFAFA]'>
    {/* Top wave */}
    <motion.div 
      className='-mb-30'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#133C8A" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,149.3C640,128,800,96,960,96C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </motion.div>
  
    {/* Main content */}
    <div className="w-full bg-[#133C8A] text-white overflow-hidden mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        {/* Left side with image - animated */}
        <motion.div 
          className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0 order-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="rounded-lg p-1 w-80 h-90 flex items-center justify-center">
            <motion.img 
              src={africaman} 
              alt="" 
              width={340} 
              height={340} 
              className='rounded-lg'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
  
        {/* Right side with content - animated */}
        <motion.div 
          className="w-full md:w-2/3 md:pl-8 order-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.button 
              className="flex rounded-full w-30 mb-2 bg-[#FBB404] hover:bg-[#FBB404]/90 gap-2 items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="inline-block text-white text-sm font-medium px-2 py-1">Audience</span>
            </motion.button>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Who Should Apply?
            </motion.h2>
            
            <motion.p 
              className="text-sm md:text-base mt-2 text-blue-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              No prior design experience is needed—just a passion for creating great experiences!
            </motion.p>
          </motion.div>
  
          <div className="space-y-7">
            {/* Item 1 */}
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                <img src={g} alt="" width={16}/>
              </div>
              <div>
                <p className="font-medium">
                  Women and young professionals eager to <br /> build a career in product design.
                </p>
              </div>
            </motion.div>
  
            {/* Item 2 */}
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                <img src={p} alt="" width={16} />
              </div>
              <div>
                <p className="font-medium">Creatives, problem-solvers, and tech <br />enthusiasts interested in UX/UI.</p>
              </div>
            </motion.div>
  
            {/* Item 3 */}
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                <img src={h} alt="" width={16} />
              </div>
              <div>
                <p className="font-medium">You…Definitely YOU</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  
    {/* Bottom wave */}
    <motion.div 
      className='-mt-5'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#133C8A" fillOpacity="1" d="M0,256L80,261.3C160,267,320,277,480,245.3C640,213,800,139,960,106.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </motion.div>
  </div>
  )
}

export default WhoApply