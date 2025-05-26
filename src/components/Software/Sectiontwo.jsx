import React from 'react'
import OptionBox from './optionBox'
import { CiLaptop } from "react-icons/ci";
import { GoDeviceDesktop } from "react-icons/go";
import { AiOutlineGift } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { LiaLightbulbSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";

const Sectiontwo = () => {
  return (
    <div>
        
        <div className="container">

          <div className='grid place-items-center'>
            <p className=' bg-[#e4ebf9] text-center w-[240px] text-[#8d75fe] p-2 mt-5 rounded-full'>Why Choose Our Program</p>
              <h3 className='text-[#1d3793] font-bold text-[40px]'>why Choose <span className='text-[#f6994c]'>SAIL</span> Program?</h3>
              <p className='w-[600px] text-center text-[15px]'>The SAIL Software Development Learning Track is designed to equip aspiring developers 
                  with the skills, tools, and mentorship they need to break into the tech industry, weather
                  you're a complete beginner or looking to refine your skills, this program will help you
                  build real-world projects and become jon-ready.
              </p>
          </div>
          


          <div className="boxes justify-center flex gap-15 mt-10">
            <OptionBox
                  Icon={CiLaptop}
                  iconColor="#f6784c"
                  rotatedBgColor="#f6784c1A"
                  title="Hands-on Learning"
                  desc="Build projects that showcase your skills and solve real-world problems.
                  our curriculum focuses on practical applications"
                  borderTopColor="#f6784c"
                  />
            <OptionBox
                  Icon={GoDeviceDesktop}
                  iconColor="#274bb4"
                  rotatedBgColor="#f6784c1A"
                  title="Expert-Led Training"
                  desc="Learn from top software engineers & industry experts who
                  bring real industry knowledge to your learning journey."
                  borderTopColor="#274bb4"
                  />
            <OptionBox
                  Icon={AiOutlineGift}
                  iconColor="#20d5b9"
                  rotatedBgColor="#f6784c1A"
                  title="Career Support"
                  desc="Get resume reviews, mock interviews, and job placement guidance 
                  to ensure you're prepared for the job market."
                  borderTopColor="#20d5b9"
                  />
          </div>

          <div className="boxes justify-center flex gap-15 mt-10">
            <OptionBox
                  Icon={CiCalendar}
                  iconColor="#6747ce"
                  rotatedBgColor="#f6784c1A"
                  title="Flexible Learning"
                  desc="BChoose between online, hybrid, or in-person learning formats that fit your schedule
                  and learning style"
                  borderTopColor="#6747ce"
                  />
            <OptionBox
                  Icon={LiaLightbulbSolid}
                  iconColor="#274bb4"
                  rotatedBgColor="#f6784c1A"
                  title="100% Scholarship"
                  desc="Limited slots available for fully-funded training!
                  Don't miss this oppourtunity to learn without financial burden."
                  borderTopColor="#f6784c"
                  />
            <OptionBox
                  Icon={BsPerson}
                  iconColor="#274bb4"
                  rotatedBgColor="#f6784c1A"
                  title="Community Support"
                  desc="Join a vibrant commuinty of learners, mentors,
                  and industry professionals who support your growth journey."
                  borderTopColor="#274bb4"
                  />
          </div>
          
       
        </div>

        
    </div>
  )
}

export default Sectiontwo