import React from 'react'
import { motion } from 'framer-motion'
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
    <div>
      <Hero />

      {/* Animated Text Section */}
      <motion.div
        className='flex justify-center items-center mt-4'
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

      {/* Animated Cards */}
      <motion.div
        className='flex justify-center items-center mt-4 gap-[65px]'
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
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardReason image={item.image} text={item.text} bgColor={item.bgColor} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Blockchain
