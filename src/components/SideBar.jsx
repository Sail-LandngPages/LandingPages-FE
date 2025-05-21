import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
    
      <div
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-2xl transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

    
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-300/30 backdrop-blur-xl border-l border-white/30 shadow-xl z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-[50px] text-[#627A95] hover:text-[#133C8A] transition"
          >
            &times;
          </button>
        </div>

        
        <nav className="flex flex-col gap-6 px-6 mt-8 text-[#133C8A] text-lg font-medium">
          <a href="#" className="hover:text-[#343639] transition-colors">Home</a>
          <a href="#" className="hover:text-[#343639] transition-colors">Courses</a>
          <a href="#" className="hover:text-[#343639] transition-colors">Testimonials</a>
          <a href="#" className="hover:text-[#343639] transition-colors">FAQs</a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
