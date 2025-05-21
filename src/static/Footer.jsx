import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#133C8A] text-white py-6 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        
        {/* Company Name */}
        <div className="text-[16px] font-semibold mb-4 sm:mb-0">
          ©2025 Sail Innovation Lab. All rights reserved
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a href="#" className="hover:text-blue-200 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
