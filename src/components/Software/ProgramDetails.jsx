import React from 'react'
import Programcard from './Programcard'
import { LuCalendarClock } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { PiNoteBlankThin } from "react-icons/pi";
import { PiNote } from "react-icons/pi";
import TimelineCard from './TimelineCard';

const ProgramDetails = () => {
  return (
    <div>

        <div className="mt-15 lg:mt-25 text-center">
            <h5 className='text-[#1d3793] font-bold text-2xl'>Program <span className='text-[#fbb404]'> Details </span></h5>
            <p className='text-gray-600 '>Everything you need to know about our software development program structure,
              <br/>  timeline, and delivery format
            </p>
        </div>

        <div className="flex-col flex lg:flex-row place-content-center p-2 mt-10 lg:gap-12">
            <Programcard
                Icon={LuCalendarClock}
                IconColor="#477ee0"
                title="Start Date"
                text="Will be communicated"
                borderTop="#477ee0"
            />
            <Programcard
                Icon={TbClockHour4}
                IconColor="#fbb404"
                title="Duration"
                text="6 months"
                borderTop="#fbb404"
            />
            <Programcard
                Icon={CiLocationOn}
                IconColor="#20d5b9"
                title="Location"
                text="Hybrid Learning"
                borderTop="#20d5b9"
            />
            <Programcard
                Icon={LuWallet}
                IconColor="#1d3793"
                title="Cost"
                text="Fully Funded (Limited slots)"
                borderTop="#1d3793"
            />
        </div>


        <div className="timeline text-center lg:mt-20 mt-5 mb-2 lg:mb-10 font-bold text-[#1d3793] text-[20px]">
            <h5>Program Timeline</h5>

        </div>

        <div className='flex flex-col lg:flex-row justify-center gap-5 lg:gap-42 p-2 '>

                <div className="one">

                                        
                        <TimelineCard
                            duration="Months 0"
                            title="Submit application"
                            text="Interview process"
                            TitleIcon={PiNote}
                            TextIcon={PiNoteBlankThin}
                        />

                        <div className='mb-10'>
                            <h3 className='text-[#1d3793] text-[20px] font-bold' >Fundamentals & Basic Skills</h3>
                            <p className='text-gray-700 lg:w-[250px] w-[300px]'>Master programming fundamentals and get familiar with
                                development tools and environments.
                            </p>
                        </div>

                        <TimelineCard
                            duration="Months 3-4"
                            title="Backend & database"
                            text="Mid-term projects"
                            TitleIcon={PiNote}
                            TextIcon={PiNoteBlankThin}
                        />

                        <div className='lg:mb-10'>
                            <h3 className='text-[#1d3793] text-[20px] font-bold' >Capstone Project & Job <br/> <span className='flex lg:justify-end lg:mr-15'> Readiness </span></h3>
                            <p className='text-gray-700 lg:w-[250px] w-[300px]'> Build a comprehensive capstone project and prepare for your 
                                tech career with interview prep and portfolio refinement.
                            </p>
                        </div>

                </div>



                <div className="two">

                    <p className='bg-[#64f2e4] w-0.5 h-full'></p>

                </div>

                <div className="three">

                                    

                        <div className='lg:mb-5 mb-5 lg:mt-5'>
                            <h3 className='text-[#1d3793] text-[20px] font-bold' >Application & Selection</h3>
                            <p className='text-gray-700 lg:w-[250px] w-[300px] '>Apply online and go through the selection
                                 process to secure your spot in the program. </p>
                        </div>

                        <TimelineCard
                            duration="Months 1-2"
                            title=" Core fundamentals"
                            text="First mini-projects"
                            TitleIcon={PiNote}
                            TextIcon={PiNoteBlankThin}
                        />


                        <div className='lg:mb-10 lg:mt-20 mb-5'>
                            <h3 className='text-[#1d3793] text-[20px] font-bold' >Advanced Concepts </h3>
                            <p className='text-gray-700 lg:w-[250px] w-[300px]'> Dive deeper into specialized areas of software development
                                on more complex problems.
                            </p>
                        </div>

                        <TimelineCard
                            duration="Months 5-6"
                            title="Capstone project"
                            text="Career preparation"
                            TitleIcon={PiNote}
                            TextIcon={PiNoteBlankThin}
                        />

                </div>

        </div>

        
    </div>
  )
}

export default ProgramDetails