import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Hero from './components/Hero'
import CardReason from './components/CardReason'
import crypto from '../../assets/images/svg/crypto.svg'
import btcElder from '../../assets/images/svg/btc-elder.svg'
import wallet from '../../assets/images/svg/wallet.svg'
import Learn from './components/Learn'
import LearnCard from './components/LearnCard'
import previewImg from "../../assets/images/svg/previewImage.svg"
import previewImg2 from "../../assets/images/svg/previewImage2.svg"
import previewImg3 from "../../assets/images/svg/previewImage3.svg"
import previewImg4 from "../../assets/images/svg/previewImage4.svg"
import previewImg5 from "../../assets/images/svg/previewImage5.svg"
import Application from './components/Application'
import earthImg from "../../assets/images/svg/earth.svg"
import YouIcon from "../../assets/images/svg/YouI.svg"
import Swap from "../../assets/images/svg/Swap.svg"
import Swap2 from "../../assets/images/svg/Swap2.svg"
import Swap3 from "../../assets/images/svg/Swap3.svg"
import Swap4 from "../../assets/images/svg/Swap4.svg"


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
      <div className="absolute top-0 left-0 w-full h-full z-[-1] animate-pulse-slow"></div>

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
  className="flex flex-col md:flex-row justify-center items-center mt-4 px-4 text-white gap-6 text-center md:text-left"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.p
    className="raleway text-[32px] md:text-[48px] font-medium w-full md:w-1/2 text-black"
    variants={fadeInUp}
  >
    Why Learn Blockchain Development?
  </motion.p>

  <motion.p
    className="w-full md:w-[400px] text-[#5D5D5D]"
    variants={fadeInUp}
  >
    Learn blockchain development to gain in-demand skills, unlock global opportunities, and build secure, decentralized applications shaping the future of tech.
  </motion.p>
</motion.div>


      {/* Tomorrow, make sure u add each card 3D Tilt Cards with Motion */}
      <motion.div
        className='flex justify-center items-center mt-8 mb-12 gap-[65px] flex-wrap'
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

      <Learn/>

      <LearnCard number={"1."} title={"FUNDAMENTALS OF BLOCKCHAIN TECHNOLOGY"} text={"Understand how blockchain works, from decentralized ledgers to consensus mechanisms, and explore the core concepts that power secure and transparent digital networks."} hoverImage={previewImg}/>
      <LearnCard number={"2."} title={"SMART CONTRACTS (SOLIDITY, ETHEREUM)"} text={"Learn to write smart contracts using Solidity on the Ethereum network, and build self-executing agreements that enable trustless, automated transactions."} hoverImage={previewImg2}/>
      <LearnCard number={"3."} title={"WEB3 INTEGRATION & D.APP DEVELOPMENT"} text={"Learn to connect with Web3 technologies and build decentralized apps that are secure and easy for users. Practice creating projects that let you explore blockchain features and bring ideas to life."}hoverImage={previewImg3}/>
      <LearnCard number={"4."} title={"BLOCKCHAINN SECURITY PRINCIPLES"} text={"Develop practical expertise by working on real-world blockchain security projects, applying core principles to tackle challenges and demonstrate your knowledge and problem-solving skills."} hoverImage={previewImg4}/>
      <LearnCard number={"5."} title={"REAL-WORLD PROJECT EXPERIENCE"} text={"Gain hands-on experience by building real-world blockchain projects, applying your skills to solve practical challenges and showcase your expertise and creativity."} hoverImage={previewImg5}/>

      <div className='flex bg-[#133C8A]  justify-around py-8 mb-12 items-center'>


          <div>
                <img className='w-[400px]' src={earthImg} alt="" />
             
          </div>


           <div className='text-[#fff] w-[40%]'>
                  <h3 className=' raleway text-[48px]'>Who Should Apply?</h3>
              <p className='sora text-[14px] mb-10'>This program equips aspiring developers, beginners, and career switchers with the skills and support to confidently start building in Web3 and blockchain.</p>


               <div className='sora flex flex-col gap-8'>
                <Application icon={YouIcon} text={"You"}/>
                <Application icon={Swap} text={"Aspiring developers passionate about the future of tech"}/>
                <Application icon={Swap2} text={"Tech enthusiasts ready to dive into Web3"}/>
                <Application icon={Swap3} text={"Beginners in programming (with some basic coding skills)"}/>
                <Application icon={Swap4} text={"Women, career-switchers & curious minds welcomed!"}/>
           
              </div>
              </div>


             
              

      </div>
    </div>
  )
}

export default Blockchain
