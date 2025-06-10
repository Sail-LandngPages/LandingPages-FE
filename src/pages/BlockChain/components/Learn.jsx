import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import calendar from "../../../assets/images/svg/Calendar.svg"

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

const Learn = () => {
  return (
    <motion.div
      className='px-[2rem] mt-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className='flex w-full justify-between items-center flex-wrap gap-6'>

        {/* Left Section */}
        <motion.div variants={fadeIn} className='max-w-[600px]'>
          <TypeAnimation
            sequence={[
              'Program Highlights',
              1000
            ]}
            wrapper="p"
            cursor={false}
            className='text-center bg-[#FBB404] rounded-full text-[15px] px-2 text-white raleway w-[200px]'
            speed={35}
            omitDeletionAnimation
            repeat={0}
          />

          <TypeAnimation
            sequence={[
              'WHAT YOU WILL LEARN',
              1000
            ]}
            wrapper="h2"
            cursor={false}
            className='font-bold text-[40px] raleway text-[#133C8A] mt-2'
            speed={35}
            omitDeletionAnimation
            repeat={0}
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className='flex items-center gap-4'
          variants={fadeIn}
        >
          <motion.img
            src={calendar}
            alt="calendar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          />
          <div>
            <TypeAnimation
              sequence={[
                'Program duration',
                1000
              ]}
              wrapper="h3"
              cursor={false}
              className='sora text-[28px] font-medium'
              speed={35}
              omitDeletionAnimation
              repeat={0}
            />

            <TypeAnimation
              sequence={[
                '12 Weeks | Blended (Online + In-Hub Sessions)',
                1000
              ]}
              wrapper="p"
              cursor={false}
              className='sora text-[16px]'
              speed={35}
              omitDeletionAnimation
              repeat={0}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Learn