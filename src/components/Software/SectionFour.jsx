import React from 'react'
import OptionBox from './optionBox'
import { GoPerson } from "react-icons/go";
import { CiLaptop } from "react-icons/ci";
import { PiGraduationCapThin } from "react-icons/pi";
import { LuLightbulb } from "react-icons/lu";
import ApplyCard from './ApplyCard';
import girl from '../../assets/softdev-asset/girl.png'
import Card from './Card';


const SectionFour = () => {
  return (
    <div className='ml-4 mt-8  '>

        <div className="text  text-center pt-8 ">
            <h4 className='text-[#12245f] text-lg font-bold text-center mb-2'>Who Can <span className=' text-[#fbb404]'>Apply</span> ?</h4>
            <p className='text-gray-600 mb-6 w-[300px] mx-auto mt-2 lg:w-[570px]'>We welcome participants from diverse backgrounds who are passionate about
                technology and eager to embark on a software development career journey.
            </p>
        </div>

        <div className="flex justify-center flex-col lg:ml-10 lg:gap-16 lg:flex-row md:flex-row">

                    
            <div className="boxes flex flex-col gap-2 w-[350px]">
                
                <ApplyCard
                    Icon={GoPerson}
                    iconColor="#fbb404"
                    bgcolor="#f6784c1A"
                    title="Women in Tech"
                    desc="Women and young frmale professionals looking
                    to start or advance their career in the tech industry."
                />
                <ApplyCard
                    Icon={CiLaptop}
                    iconColor="#274bb4"
                    bgcolor="rgba(39, 75, 180, 0.1)"
                    title="Women in Tech"
                    desc="Women and young frmale professionals looking
                    to start or advance their career in the tech industry."
                />
                <ApplyCard
                    Icon={PiGraduationCapThin}
                    iconColor="#20d5b9"
                    bgcolor="rgba(32, 213, 185, 0.1)"
                    title="Women in Tech"
                    desc="Women and young frmale professionals looking
                    to start or advance their career in the tech industry."
                />
                <ApplyCard
                    Icon={LuLightbulb}
                    iconColor="#274bb4"
                    bgcolor="rgba(39, 75, 180, 0.1)"
                    title="Women in Tech"
                    desc="Women and young frmale professionals looking
                    to start or advance their career in the tech industry."
                />
            </div>

            <div className="images lg:mt-22 ">
            
                <img src={girl} alt="" className='mt-10'  />

                <div className="cards flex  lg:flex-row  gap-2  mb-4 ml-5 lg:ml-20  ">
                
                    <Card
                    
                        title='1000+'
                        desc='Program participants'
                    />
                    <Card
                    
                        text='85%'
                        desc='Job placement'
                    />
                </div>
            </div>
        
        </div>

       
    </div>
  )
}

export default SectionFour