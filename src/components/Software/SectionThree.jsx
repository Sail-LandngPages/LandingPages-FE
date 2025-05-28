import React from 'react'
import { TbBracketsAngle } from "react-icons/tb";
import { CiLaptop } from "react-icons/ci";
import { BsCreditCard2Back } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { BiShieldPlus } from "react-icons/bi";
import { GrDeploy } from "react-icons/gr";
import { FiGitBranch } from "react-icons/fi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { PiClock } from "react-icons/pi";
import OptionBox from './optionBox';
import laptop from '../../assets/softdev-asset/laptop.png'

const SectionThree = () => {
  return (
    <div className=' bg-[#2c54c3]'>

        <div className="text text-center pt-8">
            <h3 className='text-[#fff]'>What You'll <span className='text-[#fbb404]'>Learn</span></h3>
            <p className='text-[#fff] text-[10px] w-[300px] mx-auto mt-2 lg:w-[400px]'>Master the essential skills needed to become 
                a proficient software developer. Our curriculum
                is designed to cover both fundamentals and advanced concepts.
            </p>
        </div>

          <div className="boxes px-7 lg:px-0 md:px-0  justify-center  flex flex-col md:flex-row lg:flex-row gap-6 md:gap-15 lg:gap-15 mt-10 ">
                <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px] w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={TbBracketsAngle}
                iconColor="#fff"
                title2="Programming Fundamentals"
                text="Python, Javascript, and core Programming concepts to build a solid foundation."
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#f6784c'

                
            />
                <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={CiLaptop}
                iconColor="#fff"
                rotatedBgColor=""
                title2="Web Development"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#20d5b9'
                text="Html, Css, React and modern frontend technologies for creating engaging Uls."
            />
                <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={BsCreditCard2Back}
                iconColor="#fff"
                rotatedBgColor="#f6784c1A"
                title2="Backend Development"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#0068b3'
                text="Nodejs, Django, Apis, and server-side concepts to build robust applications."
            />
                <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={HiOutlineDatabase}
                iconColor="#fff"
                rotatedBgColor="#f6784c1A"
                title2="Database Management"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#1d3793'
                text="SQL & NoSQL database design. Management, and optimization techniques."
            />
        </div>

          <div className="boxes px-7 lg:px-0 md:px-0 justify-center  flex flex-col md:flex-row lg:flex-row gap-6 md:gap-15 lg:gap-15 mt-10 ">
             <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={BiShieldPlus}
                iconColor="#fff"
                rotatedBgColor="#f6784c1A"
                title2="Version Control"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#f6784c'
                text="Git & Github workflows for effective collaboration in development teams."
            />
                
            
                <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={GrDeploy}
                iconColor="#fff"
                rotatedBgColor=""
                title2="Deployment"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#20d5b9'
                text="Building and deploying real-world aplicaions to production enviroments."
            />
                <OptionBox
                backgroundColor= '#477ee0'
               className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={FiGitBranch}
                iconColor="#fff"
                rotatedBgColor="#f6784c1A"
                title2="Problem Solving"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#0068b3'
                text="Algorithmic thinking and software engineering approaches to solve complex problems."
            />
                <OptionBox
                backgroundColor= '#477ee0'
                className="h-[200px] md:h-[250px] lg:h-[250px]  w-[320px] md:w-[200px] lg:w-[200px]" 
                Icon={LiaProjectDiagramSolid}
                iconColor="#fff"
                rotatedBgColor="#f6784c1A"
                title2="Project Mangement"
                showRotatedBg={false}
                border='#73a2f2'
                bgcolor='#1d3793'
                text="Agile methodologies and project management tools used in the industry."
            />
        </div>


        <div className='flex flex-col lg:gap-30 justify-center  lg:flex-row md:flex-row mt-6'>
                <div>
                    <img src={laptop} alt="" className=' mt-6' />
                </div>

                <div className='ml-4 mt-4 lg:mt-4 '>
                    <h4 className=' font-bold text-[#fff] text-[20px] mb-4 lg:mb-4 '>From Beginner to <span className='text-[#fbb404]'> Job-Ready </span></h4>
                    <p className='text-[#e0e0e0] mb-8 lg:mb-6 w-[300px] lg:w-[400px]'>Our program is designed to take you from zero to 
                        professional developer with structured learning paths and real-world projects.
                    </p>

                    <p className='text-[#e0e0e0] w-[300px] lg:w-[400px] flex gap-2 mb-2 lg:mb-4' > <span className=' bg-[#fbb404] mt-1 pt-2 rounded-full'><PiClock/></span> Structured curriculum developed by industry professionals</p>
                    <p className='text-[#e0e0e0] w-[300px] lg:w-[400px] flex  gap-2 mb-2 lg:mb-4'><span className=' bg-[#fbb404] mt-1 pt-2 rounded-full'><PiClock/></span> Build a portfolio of projects that demonstarte your abilities</p>
                    <p className='text-[#e0e0e0] w-[300px] lg:w-[400px] flex  gap-2 mb-2 lg:mb-4'> <span className=' bg-[#fbb404] mt-1 pt-2 rounded-full'><PiClock/></span> Weekly mentorship sessions with experienced developers</p>
                    <p className='text-[#e0e0e0] w-[300px] lg:w-[400px] flex  gap-2 mb-2 '><span className=' bg-[#fbb404] mt-1 pt-2 rounded-full'><PiClock/></span> Interactive workshops and netorking oppourtunities</p>
                </div>
        </div>
    </div>
  )
}

export default SectionThree