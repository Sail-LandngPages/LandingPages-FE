import React from 'react'
// import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Hero from './components/Hero'
import CardReason from './components/CardReason'
import crypto from '../../assets/images/svg/crypto.svg'
import btcElder from '../../assets/images/svg/btc-elder.svg'
import wallet from '../../assets/images/svg/wallet.svg'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const Blockchain = () => {
  return (
    <div className='relative overflow-hidden'>
      {/* Will add Animated background gradient */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-pulse-slow"></div>

      {/* I should add the Parallax Hero */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Hero />
      </motion.div>

      {/* Lemme add Text Section with fade-in */}
      <motion.div
        className='flex justify-center items-center mt-4 text-white'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className='raleway text-[48px] font-medium w-[50%]'
          variants={fadeInUp}
        >
          Why Learn Blockchain Development?
        </motion.p>

        <motion.p
          className='w-[400px]'
          variants={fadeInUp}
        >
          Learn blockchain development to gain in-demand skills, unlock global opportunities, and build secure, decentralized applications shaping the future of tech.
        </motion.p>
      </motion.div>

      {/* Tomorrow, ,ake sure u add each card 3D Tilt Cards with Motion */}
      <motion.div
        className='flex justify-center items-center mt-8 gap-[65px] flex-wrap'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            image: btcElder,
            text: "Global demand for blockchain skills across fintech, supply chain, healthcare & more",
            bgColor: "bg-[#133C8A] mb-2"
          },
          {
            image: wallet,
            text: "High-paying opportunities for smart contract developers and Web3 engineers",
            bgColor: "bg-[#E197A6] mb-2"
          },
          {
            image: crypto,
            text: "Innovation frontier — join a fast-growing community shaping the digital future",
            bgColor: "bg-[#5CBCB4] mb-2"
          }
        ].map((item, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.4}
            scale={1.05}
            transitionSpeed={500}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardReason image={item.image} text={item.text} bgColor={item.bgColor} />
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </div>
  )
}

export default Blockchain
