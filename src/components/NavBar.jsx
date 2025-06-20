import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import  {Link}  from 'react-router-dom';
import sail_Logo from "../assets/images/svg/sail_Logo.svg";
import Sidebar from './SideBar';


const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCoursesOpen(false);

  };

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 bg-white/50 backdrop-blur-md h-20 sm:px-6 md:px-10 w-full fixed top-0 left-0 z-40">
        <div className="logo-container flex-shrink-0">
          <img src={sail_Logo} alt="Company Logo" className="h-8 sm:h-10" />
        </div>

        <div
          className="sm:hidden text-2xl text-[#627A95] cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <RxHamburgerMenu />
        </div>

        <div className="hidden sm:flex gap-6 text-[#627A95] text-sm">

          <p className="sora hover:text-[#343639] cursor-pointer"><Link to={"/"}>Home</Link> </p>

         
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}


          >
            <p className="sora hover:text-[#133C8A] cursor-pointer flex items-center">
              Courses
              <span className="text-[18px]">
                <RiArrowDropDownLine />
              </span>
            </p>

            {isCoursesOpen && (

              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md text-sm z-50">

                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
                    <Link to={"/productDesign"}>
                    Product Design
                    </Link>
                    </li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
                    <Link to={"/gameDev"}> Game Development 
                    </Link>
                  </li> 
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">FrontEnd</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">BackEnd</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
                    <Link to={"/generativeAI"}>
                    Generative AI </Link> </li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
                    <Link to={"/blockchain"}>BlockChain Development </Link>
                    </li> 
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
                    <Link to={'/data-science'}>Data Science</Link>
                  </li>
                 <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">
                 <Link to={'/softwareDev'}>Software Development</Link>

                 </li>
                 
               
                </ul>
              </div>
            )}
          </div>

          <p className="sora hover:text-[#133C8A] cursor-pointer">Testimonials</p>
          <p className="sora hover:text-[#133C8A] cursor-pointer">FAQs</p>
        </div>

        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="w-40 h-9 pl-3 text-sm border border-[#627A95] rounded-md"
          />
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="mt-20"></div>
    </>
  );
};

export default NavBar;
