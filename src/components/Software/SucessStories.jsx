import React from 'react'
import SucessCards from './SucessCards'
import { RxPerson } from "react-icons/rx";

const SucessStories = () => {
  return (
    <div className='bg-[#2e59ca]'>

        <div className="top flex-col  text-center mb-10 pt-15">
            <h3 className='font-bold text-[30px] text-white'>Meet Our <span className='text-[#fbb404]'> Success Stories </span></h3>
            <p className=' text-[15px] text-[#d1def7]'>Hear from our alumni who transformed 
                their careers through the SAIL software <br/> Development Program.
                </p>
        </div>

        <div className="cards flex lg:flex-row flex-col items-center justify-center gap-5 lg:gap-30">
            <SucessCards
            rating={5}
            bgColor="#0068b3"
            testimony="Sail's Software Development program gave me the 
            confidence and skills to land my first tech job. The mentorship and project- based
            learning were game-changers!"
            
            DescIcon={RxPerson}
            DescTitle="Future Alumni"
            DescText="Software Engineer"

            
            />
            <SucessCards
            rating={4}
            bgColor="#5cbcb4"
            testimony="Sail's Software Development program gave me the 
            confidence and skills to land my first tech job. The mentorship and project- based
            learning were game-changers!"
            
            DescIcon={RxPerson}
            DescTitle="Future Alumni"
            DescText="Software Engineer"

            
            />
            <SucessCards
            rating={3}
            bgColor="#fbb404"
            testimony="Sail's Software Development program gave me the 
            confidence and skills to land my first tech job. The mentorship and project- based
            learning were game-changers!"
            
            DescIcon={RxPerson}
            DescTitle="Future Alumni"
            DescText="Software Engineer"

            
            />
        </div>


        <div className=' text-center'>
            <p className='font-bold text-[20px] text-white mb-4'>Ready to create your own success story?</p>
            <button className=' bg-[#fbb404] rounded-full mb-5 text-white w-[200px] h-[40px]'>Join Our Next Cohort</button>
        
        </div>
       

    </div>
  )
}

export default SucessStories