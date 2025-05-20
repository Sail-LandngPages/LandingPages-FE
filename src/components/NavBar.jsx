import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import sail_Logo from "../assets/images/svg/sail_Logo.svg"

const NavBar = () => {
  return (
    <div className=' flex justify-around items-center bg-white pt-2.5 pb-2.5'>
        <div className="logo-container ">
            <img src={sail_Logo} alt="Company Logo" />

        </div>

        <div className='non'>
            <RxHamburgerMenu/>
        </div>


        <div className="links flex gap-8 text-[#627A95]">
           <p className='sora text-sm hover:text-[#343639] hover:'>Home</p>
           <p className='sora text-sm hover:text-[#133C8A]'>Courses</p>
           <p className='sora text-sm hover:text-[#133C8A]'>Testimonials</p>
           <p className='sora text-sm hover:text-[#133C8A]'>FAQs</p>
        </div>


        <div className=''>
            <input type="" placeholder='Search' className='w-42 h-10 pl-4 text-sm border-[1px] mr-2 border-[#627A95] rounded-[8px]' />
        </div>
    </div>
  )
}

export default NavBar