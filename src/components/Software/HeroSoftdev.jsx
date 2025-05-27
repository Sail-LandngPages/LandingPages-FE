import React from 'react'
import softlogo from '../../assets/softdev-asset/softlogo.png'
import logo1 from '../../assets/softdev-asset/logo1.png'
import bghero from '../../assets/softdev-asset/bg-hero.png'
import bluehero from '../../assets/softdev-asset/bluehero.png'
import greenhero from '../../assets/softdev-asset/greenhero.png'
import whitehero from '../../assets/softdev-asset/whitehero.png'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';


const HeroSoftdev = () => {
  return (
    <div>
      <main  className="bg-[#12245f] text-white lg:px-[46px] lg:py-[33px] sm:px-[150px] ">
        

          <div className="container flex flex-col lg:flex-row justify-center items-center gap-10 px-[10px] py-[8px] ">
                
              <div className="left">
                      
              <div className='w-[231.33px] h-[29.33px] ml-8 lg:ml-0 mt-8 lg:mt-2 mb-10 py-2 px-4 bg-[rgba(251,180,4,0.2)] border-[0.2px] border-[#FBB404] rounded-full bg-[#FBB404] flex items-center gap-2 mb-4'>
                <img src={logo1} alt=""  />
                <p className='text-[#FBB404]   font-semibold text-[13.13px]'>SAIL Software Development</p>
              </div>


              <div className="text text-[32px] sm:text-[36px] lg:text-[40px] leading-tight font-extrabold">
                  <div className="block lg:hidden ml-8">
                    <h2 className=" p-0">Thinking of </h2>
                    <h2>building the next <span className="text-[#FBB404] m-0 p-0">TikTok?</span></h2>
                  </div>

                  <div className="hidden lg:block ">
                    <h2 className="m-0 p-0">Thinking of</h2>
                    <h2 className="m-0 p-0">building the next</h2>
                    <h2 className="text-[#FBB404] m-0 p-0">TikTok?</h2>
                  </div>
                </div>

            
              <div className="">
              <p className="inline-block ml-8 text-[20px] mt-2">Launch your dream with Us</p>
              <div className="bg-[#f6784c] w-[65px] h-[2px] ml-52 lg:mx-52 mb-2 rounded-full transform -translate-y-[1px]"></div>
            </div>


              <p className='w-[307px] md:w-[447px] lg:w-[447px] mt-4 lg:mt-0 ml-8 lg:ml-0  mb-4 text-[15px] bg-[#0e1e4c] pt-[15.34px] pb-[15.91px] pr-[16px] pl-[16px] border-l-[4px] border-[#26dacb] rounded-[12px] '>The sail sotfaware Development Learning Track equips aspiring 
                developers with the skills, tool, and ,mentorship they need to 
                break into tech industry. wheather you're a beginner or looking 
                to refine your skills, this program will help you build real-world
                projects and become job-ready.</p>


                <div className="buttons flex flex-col gap-4 w-full lg:flex-row lg:gap-6 lg:w-auto">

                    <button className='bg-[#f6784c] rounded-[12px] w-full lg:w-[184px] h-[68.99px] pt-[20.33px] pb-[20.66px] pr-[32px] pl-[32px] text-white flex items-center justify-center gap-2'>
                      Start Here <HiArrowDown />
                    </button>

                    <button className='text-white rounded-[12px] border border-white w-full lg:w-[184px] h-[68.99px] pt-[20.33px] pb-[20.66px] pr-[32px] pl-[32px] flex items-center justify-center gap-2'>
                      Learn More <HiArrowRight />
                    </button>

                </div>


          </div>

          <div className="right mt-8">
            <img src={bghero} className='w-[450px] h-auto ' alt="" />
          </div>
             
          </div>

          <img src={greenhero} className="absolute top-[799px] left-[190px] md:top-[710px] md:left-[470px] w-[160px] lg:top-[200px] lg:left-[920px] lg:w-[160px]" alt="" />
            <img 
              src={bluehero} 
              className="absolute top-[869px] left-[0px] md:top-[810px] md:left-[180px] w-[160px] lg:top-[302px] lg:left-[660px] lg:w-[160px]" 
              alt="" 
            />

          <img 
            src={whitehero} 
            className="absolute top-[980px] left-[220px] md:top-[940px] md:left-[500px] w-[160px] lg:top-[440px] lg:left-[965px] lg:w-[160px]" 
            alt="" 
          />
     
      </main>
    </div>
  )
}

export default HeroSoftdev