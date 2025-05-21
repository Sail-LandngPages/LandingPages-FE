import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import sail_Logo from "../assets/images/svg/sail_Logo.svg";
import Sidebar from './SideBar'; 
const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 bg-white/50 backdrop-blur-md h-20 sm:px-6 md:px-10 w-full fixed top-0 z-40">
        
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
          <p className="sora hover:text-[#133C8A] cursor-pointer">Courses</p>
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
    </>
  );
};

export default NavBar;
