import React, { useState, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

import sail_Logo from "../assets/images/svg/sail_Logo.svg";
import Sidebar from './SideBar'; 

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false); // Manage dropdown visibility

  // Refs to track the hover area for "Courses" and dropdown list
  const coursesRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsCoursesOpen(true); // Show dropdown
  };

  const handleMouseLeave = (e) => {
    // Check if the mouse leaves both "Courses" and dropdown area
    if (!coursesRef.current.contains(e.relatedTarget) && !dropdownRef.current.contains(e.relatedTarget)) {
      setIsCoursesOpen(false); // Hide dropdown
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 bg-white/50 backdrop-blur-md h-20 sm:px-6 md:px-10 w-full fixed top-0 left-0 z-40">
        {/* Logo */}
        <div className="logo-container flex-shrink-0">
          <img src={sail_Logo} alt="Company Logo" className="h-8 sm:h-10" />
        </div>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-2xl text-[#627A95] cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <RxHamburgerMenu />
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-6 text-[#627A95] text-sm">
          <p className="sora hover:text-[#343639] cursor-pointer">Home</p>

          {/* Courses Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            ref={coursesRef} 
          >
            <p className="sora hover:text-[#133C8A] cursor-pointer flex items-center">
              Courses 
              <span className='text-[18px]'><RiArrowDropDownLine/></span> 
            </p>
            
            {isCoursesOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md text-sm"
                ref={dropdownRef}
              >
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">Product Design</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">Game Development</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">FrontEnd</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">BackEnd</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">Generative AI</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">BlockChain Development</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">Data Science</li>
                  <li className="px-4 py-2 hover:bg-[#f0f0f0] cursor-pointer">Software Development</li>
                </ul>
              </div>
            )}
          </div>

          <p className="sora hover:text-[#133C8A] cursor-pointer">Testimonials</p>
          <p className="sora hover:text-[#133C8A] cursor-pointer">FAQs</p>
        </div>

        {/* Search Input */}
        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="w-40 h-9 pl-3 text-sm border border-[#627A95] rounded-md"
          />
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Add a margin-top to the body or content area to avoid overlapping */}
      <div className="mt-20"> {/* Adjust mt-20 to avoid content being hidden under the navbar */}
        {/* Rest of your content */}
      </div>
    </>
  );
};

export default NavBar;
