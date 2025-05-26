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
            <h3>why Choose SAIL Program?</h3>
            <p>The SAIL Software Development Learning Track is designed to equip aspiring developers 
                with the skills, tools, and mentorship they need to break into the tech industry, weather
                you're a complete beginner or looking to refine your skills, this program will help you
                build real-world projects and become jon-ready.
            </p>

            <OptionBox
                Icon={CiLaptop}
                iconColor="#f6784c"
                rotatedBgColor="#f6784c1A"
                title="Hands-on Learning"
                desc="Build projects that showcase your skills and solve real-world problems.
                our curriculum focuses on practical applications"
                borderTopColor="#f6784c"
                />
       
        </div>

        

        <OptionBox
        image
        
        />
    </div>
  )
}

export default Sectiontwo