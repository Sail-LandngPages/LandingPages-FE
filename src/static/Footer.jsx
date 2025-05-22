import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";



const Footer = () => {
  return (
    <footer className="bg-[#133C8A] text-white py-6 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        
       
        <div className="text-[16px] font-semibold mb-4 sm:mb-0">
          ©2025 Sail Innovation Lab. All rights reserved
        </div>

      
        <div className="flex gap-4 text-white text-xl">
        
          <a href="https://x.com/sailnigeria?lang=en" className="hover:text-blue-200 transition">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/sailnigeria?igsh=MWlzcnRrcTI4Z25hOA==" className="hover:text-blue-200 transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/sail-innovation-lab/" className="hover:text-blue-200 transition">
            <FaLinkedinIn />
          </a>

          <a href="https://www.https://youtube.com/@sailnigeria8135?si=CnMixWryoGAdom-b.com/company/sail-innovation-lab/" target='_blank' className="hover:text-blue-200 transition">
            <CiYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
