import React from 'react'

const Community = () => {
  return (
    <div>
         <div className="bg-[#133C8A] text-white p-15 max-w-8xl">
      <div className="mb-2">
        <span className="bg-[#FBB404] text-xs font-semibold px-2 py-1  text-white rounded-2xl hover:bg-white hover:text-[#133C8A]">How to apply</span>
      </div>
      <h2 className="text-2xl font-bold mb-3">Ready to Join <br /> Our Community?</h2>
      <p className="text-sm mb-6 text-blue-100">
      Take the first step towards an exciting career in Product Design & UI/UX!. <br />Click the Apply Now button below and fill out the application form. <br /> Our team will review your application and reach out if you qualify.
      </p>
      <button className="bg-white text-blue-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FBB404] transition-colors">
        APPLY NOW
      </button>
    </div>
    </div>
  )
}

export default Community